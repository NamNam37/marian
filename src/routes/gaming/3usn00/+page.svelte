<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { progress } from '../../stores.js';

	async function Done() {
		let gamingPromise = new Promise(function(resolve) {
			resolve(progress.subscribe((a) => browser && sessionStorage && sessionStorage.setItem('gaming', 'true')))
		});

		await gamingPromise;
		goto("/");
	}

	let answer = '';
</script>

<main>
	<h1>Otázka 3</h1>
	<p>Hra od rockstar games. Nominována na GOTY na Game Awards 2018.<br> Nakonec Vyhrálo God of War.</p>
	<input type="text" bind:value={answer} />

	{#if answer == 'Red Dead Redemption 2' || answer == 'Red dead redemption 2' || answer == 'red dead redemption 2'}
		<h1>ANO! to je správně</h1>
		<button on:click={Done}>Pokračovat</button>
	{/if}
</main>

<style>
	input {
		background-color: #f9f3d8;
		color: rgb(171, 35, 40);
		border-radius: 4px;
		width: 300px;
	}
	button {
		background-color: #f9f3d8;
		border-radius: 5px;
		padding: 5px;
		color: rgb(171, 35, 40);
	}
	main {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 24px;
	}
	* {
		margin: 5px;
	}
</style>
