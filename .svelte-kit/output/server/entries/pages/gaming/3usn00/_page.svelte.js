import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-1i0xgg6{background-color:#f9f3d8;color:rgb(171, 35, 40);border-radius:4px;width:300px}button.svelte-1i0xgg6{background-color:#f9f3d8;border-radius:5px;padding:5px;color:rgb(171, 35, 40)}main.svelte-1i0xgg6{margin-top:50px;display:flex;flex-direction:column;align-items:center;font-size:24px}.svelte-1i0xgg6{margin:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let answer = "";
  $$result.css.add(css);
  return `<main class="svelte-1i0xgg6"><h1 class="svelte-1i0xgg6">Otázka 3</h1>
	<p class="svelte-1i0xgg6">Hra od rockstar games. Nominována na GOTY na Game Awards 2018.<br class="svelte-1i0xgg6"> Nakonec Vyhrálo God of War.</p>
	<input type="text" class="svelte-1i0xgg6"${add_attribute("value", answer, 0)}>

	${``}
</main>`;
});
export {
  Page as default
};
