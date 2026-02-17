<script>
	import localize from '../../utils/localize.js';

	let { actor, editingEnabled } = $props();

	let features = $derived(actor.reactive.items.filter((i) => i.type === 'feature'));
	let boons = $derived(actor.reactive.items.filter((i) => i.type === 'boon'));
	let ancestry = $derived(actor.reactive.items.find((i) => i.type === 'ancestry') ?? null);
	let background = $derived(actor.reactive.items.find((i) => i.type === 'background') ?? null);
	let classItem = $derived(actor.reactive.items.find((i) => i.type === 'class') ?? null);
	let subclass = $derived(actor.reactive.items.find((i) => i.type === 'subclass') ?? null);

	function useItem(id) {
		actor.activateItem(id);
	}

	function configureItem(id) {
		const item = actor.items.get(id);
		item?.sheet?.render(true);
	}

	function deleteItem(id) {
		actor.deleteEmbeddedDocuments('Item', [id]);
	}

	function onDragStart(event, item) {
		const dragData = { type: 'Item', uuid: item.uuid };
		event.dataTransfer.setData('text/plain', JSON.stringify(dragData));
	}
</script>

{#if ancestry || background}
	<div class="nos-feature-row">
		{#if ancestry}
			<div class="nos-feature-group">
				<h4 class="nos-feature-group__heading">{localize('NWS.Ancestry')}</h4>
				<div class="nos-item" draggable="true" ondragstart={(e) => onDragStart(e, ancestry)}>
					<img class="nos-item__img" src={ancestry.img} alt={ancestry.name} />
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
				<h4 class="nos-feature-group__heading">{localize('NWS.Background')}</h4>
				<div class="nos-item" draggable="true" ondragstart={(e) => onDragStart(e, background)}>
					<img class="nos-item__img" src={background.img} alt={background.name} />
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
	</div>
{/if}

{#if classItem}
	<div class="nos-feature-group">
		<h4 class="nos-feature-group__heading">{localize('NWS.Class')}</h4>
		<div class="nos-item" draggable="true" ondragstart={(e) => onDragStart(e, classItem)}>
			<img class="nos-item__img" src={classItem.img} alt={classItem.name} />
			<span class="nos-item__name" onclick={() => configureItem(classItem.id)}>
				{classItem.name} ({localize('NWS.Level')} {classItem.system.classLevel})
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
			<div class="nos-item" style="margin-left: 1rem;" draggable="true" ondragstart={(e) => onDragStart(e, subclass)}>
				<img class="nos-item__img" src={subclass.img} alt={subclass.name} />
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
		<h4 class="nos-feature-group__heading">{localize('NWS.Features')}</h4>
		<div class="nos-item-grid">
			{#each features as feature}
				<div class="nos-item" draggable="true" ondragstart={(e) => onDragStart(e, feature)}>
					<img class="nos-item__img" src={feature.img} alt={feature.name} />
					<span class="nos-item__name" onclick={() => useItem(feature.id)}>
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
	</div>
{/if}

{#if boons.length > 0}
	<div class="nos-feature-group">
		<h4 class="nos-feature-group__heading">{localize('NWS.Boons')}</h4>
		<div class="nos-item-grid">
			{#each boons as boon}
				<div class="nos-item" draggable="true" ondragstart={(e) => onDragStart(e, boon)}>
					<img class="nos-item__img" src={boon.img} alt={boon.name} />
					<span class="nos-item__name" onclick={() => useItem(boon.id)}>
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
	</div>
{/if}

{#if !ancestry && !background && !classItem && features.length === 0 && boons.length === 0}
	<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;">
		{localize('NWS.DropFeaturesHere')}
	</p>
{/if}
