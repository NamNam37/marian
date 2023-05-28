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
        font-size: 20px;
    }
    h1 {
        font-size: 24px;
    }
    * {
        margin: 5px;
    }
    .container {
        display: flex;
        height: 450px;
    }
    .authorNames {
        width: auto;
        height: 385px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    section {
        width: 45%;
        height: 80vh;
    }
    section .card {
        color: rgb(171,35,40);
        background-color: #f9f3d8;
        border-radius: 5px;
        border: 0px;
        box-shadow: 4px 3px rgb(120,10,15);
        height: 50px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<script lang="ts">
    import { dndzone } from 'svelte-dnd-action';
    import { flip } from 'svelte/animate';
    const flipDur = 100;

    let done = false;

    interface Book {
        id: number,
        title: string
    }

    let items: Book[] = [ 
        { 
            id: 1,
            title: "Máj"
        },
        { 
            id: 2,
            title: "1984" 
        },
        { 
            id: 3,
            title: "Stařec a moře" 
        },
        { 
            id: 4,
            title: "Bylo nás pět" 
        },
        { 
            id: 5,
            title: "Na západní frontě klid" 
        },
        { 
            id: 6,
            title: "Saturnin" 
        },
        { 
            id: 7,
            title: "Krysař" 
        },
    ];
    let correctOrder: string[] = ["1984", "Bylo nás pět", "Krysař", "Máj", "Saturnin", "Stařec a moře", "Na západní frontě klid"]

    const handleConsider = (evt : CustomEvent<DndEvent<Book>>) => {
        items = evt.detail.items;
    }
    
    
    const handleFinalize = (evt : CustomEvent<DndEvent<Book>>) => {
        items = evt.detail.items;

        CheckCorrectness()
    }

    function CheckCorrectness()
    {
        let correctBooks = 0;
        for (var i = 0; i < items.length; i++) {
            let book: Book = items[i];
            if (book.title == correctOrder[i])
            {
                correctBooks++;
            }
        }
        if (correctBooks == 7) {
            done = true;
        } else {
            done = false;
        }
    }
</script>

<main>
<h1>Otázka 2</h1>

<div class="container">
    <div class="authorNames">
        <p>George Orwell</p>
        <p>Karel Poláček</p>
        <p>Viktor Dyk</p>
        <p>Karel Hynek Mácha</p>
        <p>Zdeněk Jirotka</p>
        <p>Ernest Hemingway</p>
        <p>Erich M. Remarque</p>
    </div>
 <section 
    use:dndzone="{{ items: items, flipDurationMs: flipDur, dropTargetStyle: {} }}"
    on:consider="{handleConsider}"
	on:finalize="{handleFinalize}"
    >
    {#each items as item (item.id)}
        <div class="card" animate:flip="{{ duration: flipDur }}">  
            <p>{item.title}</p>
        </div>  
    {/each}
 </section>
</div>

{#if done == true}
    <h1>ANO! to je správně</h1>
    <a href="./cj/3usn00"><button>Pokračovat</button></a> 
{/if}
</main>