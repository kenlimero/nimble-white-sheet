<script lang="ts">
	import type { Snippet } from 'svelte';
	import confirmDeleteItem from '../../utils/deleteItem.js';

	interface Props {
		actor: any;
		item: any;
		editingEnabled: boolean;
		/** Click on the name; opens the item sheet when omitted. */
		onactivate?: () => void;
		tooltip?: string;
		castable?: boolean;
		indent?: boolean;
		/** Replaces the plain item name inside the clickable name. */
		label?: Snippet;
		/** Rendered between the name and the edit controls (meta, quantity…). */
		extra?: Snippet;
	}

	let { actor, item, editingEnabled, onactivate, tooltip, castable = false, indent = false, label, extra }: Props = $props();

	function configure(): void {
		actor.items.get(item.id)?.sheet?.render(true);
	}

	function onDragStart(event: DragEvent): void {
		event.dataTransfer?.setData('text/plain', JSON.stringify({ type: 'Item', uuid: item.uuid }));
	}
</script>

<div
	class="nos-item"
	class:nos-item--castable={castable}
	class:nos-item--indent={indent}
	draggable="true"
	ondragstart={onDragStart}
	data-tooltip={tooltip || undefined}
>
	<img class="nos-item__img" src={item.img} alt={item.name} />
	<span class="nos-item__name" onclick={onactivate ?? configure}>
		{#if label}{@render label()}{:else}{item.name}{/if}
	</span>
	{@render extra?.()}
	{#if editingEnabled}
		<div class="nos-item__controls">
			<button class="nos-icon-btn" type="button" onclick={configure}>
				<i class="fa-solid fa-gear"></i>
			</button>
			<button class="nos-icon-btn" type="button" onclick={() => confirmDeleteItem(actor, item.id)}>
				<i class="fa-solid fa-trash"></i>
			</button>
		</div>
	{/if}
</div>
