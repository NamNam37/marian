<style>
    input {
        background-color: #f9f3d8;
		color: rgb(171,35,40);
        border-radius: 4px;
        width: 200px;
    }
    button {
        background-color: #f9f3d8;
        border-radius: 5px;
        padding: 5px;
        color: rgb(171,35,40);
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

<script>
    let answer = '';
</script>

<main>
<h1>Otázka 2</h1>
<p>Jméno hackerské skupiny<br> ze hry Watch Dogs 2</p>
<input type="text" bind:value={answer}>

{#if answer == 'Dedsec' || answer == 'dedsec' || answer == 'Ded sec' || answer == 'ded sec' || answer == 'Ded-sec' || answer == 'ded-sec'}
    <h1>ANO! to je správně</h1>
    <a href="/gaming/3usn00"><button>Pokračovat</button></a> 
{/if}
</main>