<script>
	// Decorative action economy display matching the official sheet's diamond layout.
	// The Nimble system currently does not track action economy per-turn, so this is visual-only.
</script>

<div class="nos-actions-diamond" data-tooltip="Actions">
	<div class="nos-actions-diamond__label">Actions</div>
	<svg viewBox="0 0 80 70" width="80" height="70" xmlns="http://www.w3.org/2000/svg">
		<!-- Diamond arrangement of action circles -->
		<!-- Top row: 2 dots -->
		<circle cx="32" cy="12" r="7" fill="none" stroke="#333" stroke-width="1.5" />
		<circle cx="48" cy="12" r="7" fill="none" stroke="#333" stroke-width="1.5" />
		<!-- Middle row: 3 dots -->
		<circle cx="24" cy="30" r="7" fill="none" stroke="#333" stroke-width="1.5" />
		<circle cx="40" cy="30" r="7" fill="none" stroke="#333" stroke-width="1.5" />
		<circle cx="56" cy="30" r="7" fill="none" stroke="#333" stroke-width="1.5" />
		<!-- Bottom row: 2 dots -->
		<circle cx="32" cy="48" r="7" fill="none" stroke="#333" stroke-width="1.5" />
		<circle cx="48" cy="48" r="7" fill="none" stroke="#333" stroke-width="1.5" />
		<!-- Diamond border -->
		<polygon
			points="40,2 74,35 40,68 6,35"
			fill="none"
			stroke="#333"
			stroke-width="1.5"
		/>
	</svg>
</div>

<style>
	.nos-actions-diamond {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.nos-actions-diamond__label {
		font-size: 0.579rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-weight: 700;
		color: #555;
		margin-bottom: 0.125rem;
	}
</style>
