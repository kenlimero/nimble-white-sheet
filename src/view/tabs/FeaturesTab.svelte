<script>
	let { actor, editingEnabled } = $props();

	let features = $derived(actor.reactive.items.filter((i) => i.type === 'feature'));
	let boons = $derived(actor.reactive.items.filter((i) => i.type === 'boon'));
	let ancestry = $derived(actor.reactive.items.find((i) => i.type === 'ancestry') ?? null);
	let background = $derived(actor.reactive.items.find((i) => i.type === 'background') ?? null);
	let classItem = $derived(actor.reactive.items.find((i) => i.type === 'class') ?? null);
	let subclass = $derived(actor.reactive.items.find((i) => i.type === 'subclass') ?? null);

	function configureItem(id) {
		const item = actor.items.get(id);
		item?.sheet?.render(true);
	}

	function deleteItem(id) {
		actor.deleteEmbeddedDocuments('Item', [id]);
	}
</script>

{#if ancestry}
	<div class="nos-feature-group">
		<h4 class="nos-feature-group__heading">Ancestry</h4>
		<div class="nos-item" draggable="true">
			<span class="nos-item__name" onclick={() => configureItem(ancestry.id)}>
				{ancestry.name}
			</span>
			{#if editingEnabled}
				<div class="nos-item__controls">
					<button class="nos-icon-btn" type="button" onclick={() => configureItem(ancestry.id)}>
						<i class="fa-solid fa-gear"></i>
					</button>
					<button class="nos-icon-btn" type="button" onclick={() => deleteItem(ancestry.id)}>
						<i class="fa-solid fa-trash"></i>
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}

{#if background}
	<div class="nos-feature-group">
		<h4 class="nos-feature-group__heading">Background</h4>
		<div class="nos-item" draggable="true">
			<span class="nos-item__name" onclick={() => configureItem(background.id)}>
				{background.name}
			</span>
			{#if editingEnabled}
				<div class="nos-item__controls">
					<button class="nos-icon-btn" type="button" onclick={() => configureItem(background.id)}>
						<i class="fa-solid fa-gear"></i>
					</button>
					<button class="nos-icon-btn" type="button" onclick={() => deleteItem(background.id)}>
						<i class="fa-solid fa-trash"></i>
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}

{#if classItem}
	<div class="nos-feature-group">
		<h4 class="nos-feature-group__heading">Class</h4>
		<div class="nos-item" draggable="true">
			<span class="nos-item__name" onclick={() => configureItem(classItem.id)}>
				{classItem.name} (Level {classItem.system.classLevel})
			</span>
			{#if editingEnabled}
				<div class="nos-item__controls">
					<button class="nos-icon-btn" type="button" onclick={() => configureItem(classItem.id)}>
						<i class="fa-solid fa-gear"></i>
					</button>
					<button class="nos-icon-btn" type="button" onclick={() => deleteItem(classItem.id)}>
						<i class="fa-solid fa-trash"></i>
					</button>
				</div>
			{/if}
		</div>
		{#if subclass}
			<div class="nos-item" style="margin-left: 1rem;" draggable="true">
				<span class="nos-item__name" onclick={() => configureItem(subclass.id)}>
					{subclass.name}
				</span>
				{#if editingEnabled}
					<div class="nos-item__controls">
						<button class="nos-icon-btn" type="button" onclick={() => configureItem(subclass.id)}>
							<i class="fa-solid fa-gear"></i>
						</button>
						<button class="nos-icon-btn" type="button" onclick={() => deleteItem(subclass.id)}>
							<i class="fa-solid fa-trash"></i>
						</button>
					</div>
				{/if}
			</div>
		{/if}
	</div>
{/if}

{#if features.length > 0}
	<div class="nos-feature-group">
		<h4 class="nos-feature-group__heading">Features</h4>
		{#each features as feature}
			<div class="nos-item" draggable="true">
				<span class="nos-item__name" onclick={() => configureItem(feature.id)}>
					{feature.name}
				</span>
				{#if editingEnabled}
					<div class="nos-item__controls">
						<button class="nos-icon-btn" type="button" onclick={() => configureItem(feature.id)}>
							<i class="fa-solid fa-gear"></i>
						</button>
						<button class="nos-icon-btn" type="button" onclick={() => deleteItem(feature.id)}>
							<i class="fa-solid fa-trash"></i>
						</button>
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/if}

{#if boons.length > 0}
	<div class="nos-feature-group">
		<h4 class="nos-feature-group__heading">Boons</h4>
		{#each boons as boon}
			<div class="nos-item" draggable="true">
				<span class="nos-item__name" onclick={() => configureItem(boon.id)}>
					{boon.name}
				</span>
				{#if editingEnabled}
					<div class="nos-item__controls">
						<button class="nos-icon-btn" type="button" onclick={() => configureItem(boon.id)}>
							<i class="fa-solid fa-gear"></i>
						</button>
						<button class="nos-icon-btn" type="button" onclick={() => deleteItem(boon.id)}>
							<i class="fa-solid fa-trash"></i>
						</button>
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/if}

{#if !ancestry && !background && !classItem && features.length === 0 && boons.length === 0}
	<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;">
		Drop features, ancestry, background, or class items here.
	</p>
{/if}
