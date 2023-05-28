<script lang="ts">
	import gemini from '$lib/gemini.png';
	import { browser } from '$app/environment';
	import { progress } from './stores';
	import { goto } from '$app/navigation';


async function SetItems() {
let mathPromise = new Promise(function(resolve) {
	resolve(progress.subscribe((a) => browser && sessionStorage && sessionStorage.setItem('math', a.math)))
})
let codePromise = new Promise(function(resolve) {
	resolve(progress.subscribe((a) => browser && sessionStorage && sessionStorage.setItem('code', a.code)))
})
let cjPromise = new Promise(function(resolve) {
	resolve(progress.subscribe((a) => browser && sessionStorage && sessionStorage.setItem('cj', a.cj)))
})
let gamingPromise = new Promise(function(resolve) {
	resolve(progress.subscribe((a) => browser && sessionStorage && sessionStorage.setItem('gaming', a.gaming)))
})
await mathPromise;
await codePromise;
await cjPromise;
await gamingPromise;
}

function GetItems()
{
	console.log(typeof sessionStorage);
	if (typeof sessionStorage === 'undefined') {
    return false; 
  	}

	  let yoink = progress.subscribe((a) => {
		mathDone = sessionStorage.getItem('math');
		codeDone = sessionStorage.getItem('code');
		cjDone = sessionStorage.getItem('cj');
		gamingDone = sessionStorage.getItem('gaming');
	});
	return true;
}

let mathDone: string | null = '';
let codeDone: string | null = '';
let cjDone: string | null = '';
let gamingDone: string | null = '';



if	(!GetItems()){
	SetItems();
}

let counter: number = 0;
let dones: string[] = [mathDone, codeDone, cjDone, gamingDone];
dones.forEach(element => {
	if(element == 'true')
	{
		counter++;
	}
});

function Reset()
{
	SetItems();
	mathDone = 'false';
	codeDone = 'false';
	cjDone = 'false';
	gamingDone = 'false';
	counter = 0;
}

	/*console.log(mathDone);
	console.log(codeDone);
	console.log(cjDone);
	console.log(gamingDone);*/
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Narozeniny</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="title">
	<h1>HAPPY</h1>
	<h2>B-DAY</h2>
	<img src={gemini} alt="gemini" />
</div>

<div class="desc">
	<p>
		Ahoj, <br />všechno nejlepší!<br /> Získání dárku nebude tak jednoduché. První budeš muset splnit
		pár úkolů. GLHF
	</p>
</div>

<div class="counter">
	<p>SPLNĚNO</p>
	<p>{counter}/4</p>
</div>
<div class="challenges">
	{#if mathDone == 'false'}
		<a href="/math"
			><div class="math chal">
				<svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80"
					><path
						d="M314-228h50v-88h88v-50h-88v-88h-50v88h-88v50h88v88Zm215-35h201v-49H529v49Zm0-107h201v-50H529v50Zm37-163 61-61 61 61 36-36-61-61 61-61-36-36-61 61-61-61-36 36 61 61-61 61 36 36Zm-325-72h196v-50H241v50Zm-61 485q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"
					/></svg
				>
			</div></a
		>
	{/if}
	{#if mathDone == 'true'}
		<div class="math done chal">
			<svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80"
				><path
					d="M314-228h50v-88h88v-50h-88v-88h-50v88h-88v50h88v88Zm215-35h201v-49H529v49Zm0-107h201v-50H529v50Zm37-163 61-61 61 61 36-36-61-61 61-61-36-36-61 61-61-61-36 36 61 61-61 61 36 36Zm-325-72h196v-50H241v50Zm-61 485q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"
				/></svg
			>
		</div>
	{/if}
	{#if codeDone == 'false'}
	<a href="/code"
		><div class="code chal">
			<svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80"
				><path
					d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"
				/></svg
			>
		</div></a
	>
	{/if}
	{#if codeDone == 'true'}
		<div class="code done chal">
			<svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80"
				><path
					d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"
				/></svg
			>
		</div>
	{/if}
	{#if cjDone == 'false'}
	<a href="/cj"
		><div class="cj chal">
			<svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80"
				><path
					d="M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"
				/></svg
			>
		</div></a
	>
	{/if}
	{#if cjDone == 'true'}
		<div class="cj done chal">
			<svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80"
				><path
					d="M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"
				/></svg
			>
		</div>
	{/if}
	{#if gamingDone == 'false'}
	<a href="/gaming"
		><div class="gaming chal">
			<svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80"
				><path
					d="M147-200q-38 0-59.5-25.5T72-296l48-335q8-53 49.5-91t94.5-38h433q53 0 94.5 38t49.5 91l47 335q6 45-15.5 70.5T813-200q-23 0-39-7.5T747-226L643-330H317L213-226q-11 11-27 18.5t-39 7.5Zm18-64 126-126h378l126 126q5 5 18 9 9 0 13.5-9t2.5-18l-48-339q-5-35-29.5-57T697-700H263q-30 0-54.5 22T179-621l-48 339q-2 9 2.5 18t13.5 9q7 0 18-9Zm535-176q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12Zm-85-130q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12ZM300-445h50v-75h75v-50h-75v-75h-50v75h-75v50h75v75Zm180-33Z"
				/></svg
			>
		</div></a
	>
	{/if}
	{#if gamingDone == 'true'}
		<div class="gaming done chal">
			<svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80"
				><path
					d="M147-200q-38 0-59.5-25.5T72-296l48-335q8-53 49.5-91t94.5-38h433q53 0 94.5 38t49.5 91l47 335q6 45-15.5 70.5T813-200q-23 0-39-7.5T747-226L643-330H317L213-226q-11 11-27 18.5t-39 7.5Zm18-64 126-126h378l126 126q5 5 18 9 9 0 13.5-9t2.5-18l-48-339q-5-35-29.5-57T697-700H263q-30 0-54.5 22T179-621l-48 339q-2 9 2.5 18t13.5 9q7 0 18-9Zm535-176q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12Zm-85-130q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12ZM300-445h50v-75h75v-50h-75v-75h-50v75h-75v50h75v75Zm180-33Z"
				/></svg
			>
		</div>
	{/if}
</div>

{#if (counter == 4)}
<div class="finish">
 	<a href="/congrats"><button>Pokračovat</button></a>	
</div>

{/if}

<div class="reset">
	<button on:click={Reset}>resetovat postup</button>
</div>

<style>
	.title {
		padding-top: 50px;
		font-size: 40px;
		text-align: center;
		height: 360px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.title h1 {
		font-size: 40px;
	}
	.title h2 {
		font-size: 30px;
		margin: 10px;
	}
	.title img {
		margin-top: 50px;
		width: 120px;
		height: 120px;
	}
	.desc {
		font-size: 24px;
		padding: 10px;
		height: 150px;
	}
	.counter {
		text-align: center;
		padding: 30px;
		font-size: 50px;
		height: 150px;
	}
	.counter p {
		margin-block-end: 0.5em;
	}
	.challenges {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-top: 30px;
		width: 90%;
		margin-left: 5%;
		gap: 10px;
	}
	.chal {
		height: 150px;
		width: 100%;
		border-radius: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f9f3d8;
	}

	svg {
		fill: rgb(171, 35, 40);
	}
	.reset {
		margin-top: 100px;
		margin-left: 60%;
		margin-bottom: 10px;
	}
	.reset button {
		background-color: rgb(255, 255, 100);
		border-radius: 5px;
		padding: 5px;
		color: rgb(171, 35, 40);
	}
	.done {
		background-color: darkred;
	}
	.done svg {
		fill: #f9f3d8;
	}
	.finish {
		display: flex;
		height: 80px;
		justify-content: center;
		align-items: flex-end;
	}
	.finish button {
		width: 150px;
		height: 50px;
		background-color: #f9f3d8;
		color: rgb(171, 35, 40);
		border-radius: 5px;
	}
</style>
