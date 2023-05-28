import { c as create_ssr_component, i as each, e as escape } from "../../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-bqmwua.svelte-bqmwua{background-color:#f9f3d8;border-radius:5px;padding:5px;color:rgb(171,35,40)}main.svelte-bqmwua.svelte-bqmwua{margin-top:50px;display:flex;flex-direction:column;align-items:center;font-size:20px}h1.svelte-bqmwua.svelte-bqmwua{font-size:24px}.svelte-bqmwua.svelte-bqmwua{margin:5px}.container.svelte-bqmwua.svelte-bqmwua{display:flex;height:450px}.authorNames.svelte-bqmwua.svelte-bqmwua{width:auto;height:385px;display:flex;flex-direction:column;justify-content:space-around}section.svelte-bqmwua.svelte-bqmwua{width:45%;height:80vh}section.svelte-bqmwua .card.svelte-bqmwua{color:rgb(171,35,40);background-color:#f9f3d8;border-radius:5px;border:0px;box-shadow:4px 3px rgb(120,10,15);height:50px;text-align:center;display:flex;align-items:center;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [
    { id: 1, title: "Máj" },
    { id: 2, title: "1984" },
    { id: 3, title: "Stařec a moře" },
    { id: 4, title: "Bylo nás pět" },
    {
      id: 5,
      title: "Na západní frontě klid"
    },
    { id: 6, title: "Saturnin" },
    { id: 7, title: "Krysař" }
  ];
  $$result.css.add(css);
  return `<main class="svelte-bqmwua"><h1 class="svelte-bqmwua">Otázka 2</h1>

<div class="container svelte-bqmwua"><div class="authorNames svelte-bqmwua"><p class="svelte-bqmwua">George Orwell</p>
        <p class="svelte-bqmwua">Karel Poláček</p>
        <p class="svelte-bqmwua">Viktor Dyk</p>
        <p class="svelte-bqmwua">Karel Hynek Mácha</p>
        <p class="svelte-bqmwua">Zdeněk Jirotka</p>
        <p class="svelte-bqmwua">Ernest Hemingway</p>
        <p class="svelte-bqmwua">Erich M. Remarque</p></div>
 <section class="svelte-bqmwua">${each(items, (item) => {
    return `<div class="card svelte-bqmwua"><p class="svelte-bqmwua">${escape(item.title)}</p>
        </div>`;
  })}</section></div>

${``}</main>`;
});
export {
  Page as default
};
