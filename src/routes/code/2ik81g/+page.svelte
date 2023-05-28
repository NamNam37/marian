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
    let answer = 0;
</script>

<main>
<h1>Otázka 2</h1>
<p>-7 v binární soustavě při<br> použití doplňkového kódu</p>
<input type="number" bind:value={answer}>

{#if answer == 1001}
    <h1>ANO! to je správně</h1>
    <a href="./code/3jt48h"><button>Pokračovat</button></a> 
{/if}
</main>