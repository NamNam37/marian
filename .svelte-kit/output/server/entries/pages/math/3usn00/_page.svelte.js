import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-1y5mbk5{background-color:#f9f3d8;color:rgb(171, 35, 40);border-radius:4px;width:200px}button.svelte-1y5mbk5{background-color:#f9f3d8;border-radius:5px;padding:5px;color:rgb(171, 35, 40)}main.svelte-1y5mbk5{margin-top:50px;display:flex;flex-direction:column;align-items:center;font-size:24px}.svelte-1y5mbk5{margin:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let answer = "0";
  $$result.css.add(css);
  return `<main class="svelte-1y5mbk5"><h1 class="svelte-1y5mbk5">Otázka 3</h1>
	<p class="svelte-1y5mbk5">Kolik je: &quot;i^6 (i na šestou)&quot;</p>
	<input type="text" class="svelte-1y5mbk5"${add_attribute("value", answer, 0)}>

	${``}
</main>`;
});
export {
  Page as default
};
