import type { AnyObject, DeepPartial } from 'fvtt-types/utils';
import * as svelte from 'svelte';

interface SvelteApplicationRenderContext {
	/** State data tracked by the root component: objects herein must be plain object. */
	state: object;
	/** This application instance */
	foundryApp: SvelteApplication;
}

interface FoundryCustomElement {
	tagName?: string;
}

interface DocumentHolder {
	document?: { update(data: Record<string, unknown>): void };
}

interface FormTarget extends HTMLElement {
	name: string;
	_getValue(): unknown;
}

/**
 * Augment an Application class with Svelte template rendering behavior.
 * Note: TypeScript requires mixin classes to have constructors with `...args: any[]`
 * per TS2545. This follows the same pattern used by fvtt-types' HandlebarsApplicationMixin.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SvelteApplicationMixin<
	T extends abstract new (
		...args: any[]
	) => foundry.applications.api.ApplicationV2,
>(Base: T) {
	abstract class SvelteApplication extends Base {
		#customHTMLTags: string[] = Object.values(foundry.applications.elements).reduce(
			(acc: string[], E: unknown) => {
				const tagName = (E as FoundryCustomElement).tagName;
				if (tagName) acc.push(tagName.toUpperCase());
				return acc;
			},
			[],
		);

		static DEFAULT_OPTIONS = {
			classes: ['nimble-white-sheet'],
		};

		protected abstract root: svelte.Component<Record<string, never>>;

		protected $state = $state({});

		#mount: object = {};

		protected override async _renderHTML(context: AnyObject) {
			return context;
		}

		protected override _replaceHTML(
			result: SvelteApplicationRenderContext,
			content: HTMLElement,
			options: DeepPartial<foundry.applications.api.ApplicationV2.RenderOptions>,
		) {
			Object.assign(this.$state, result.state);
			if (options.isFirstRender) {
				this.#mount = svelte.mount(this.root, {
					target: content,
					props: { ...result, state: this.$state } as object as Record<string, never>,
				});
			}
		}

		protected override _onClose(
			options: DeepPartial<foundry.applications.api.ApplicationV2.RenderOptions>,
		) {
			super._onClose(options);
			svelte.unmount(this.#mount, { outro: true });
		}

		protected override _onChangeForm(
			formConfig: foundry.applications.api.ApplicationV2.FormConfiguration,
			event: Event | SubmitEvent,
		) {
			super._onChangeForm(formConfig, event);

			if (event.type !== 'change') return;

			const holder = this as unknown as DocumentHolder;
			if (!holder.document) return;

			const target = event.target as FormTarget | null;
			if (!target) return;
			if (!this.#customHTMLTags.includes(target.tagName)) return;

			const value = target._getValue();
			holder.document.update({ [target.name]: value });
		}

		override close(
			options?: DeepPartial<foundry.applications.api.ApplicationV2.ClosingOptions>,
		): Promise<this> {
			return super.close(options);
		}
	}

	return SvelteApplication;
}

export { SvelteApplicationMixin, type SvelteApplicationRenderContext };
