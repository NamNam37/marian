import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-hgozrj{background-color:#f9f3d8;color:rgb(171,35,40);border-radius:4px;width:200px}button.svelte-hgozrj{background-color:#f9f3d8;border-radius:5px;padding:5px;color:rgb(171,35,40)}main.svelte-hgozrj{margin-top:50px;display:flex;flex-direction:column;align-items:center;font-size:24px}.svelte-hgozrj{margin:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let answer = "";
  $$result.css.add(css);
  return `<main class="svelte-hgozrj"><h1 class="svelte-hgozrj">Otázka 1</h1>
<p class="svelte-hgozrj">Když ve hře Minecraft vezmeš stack měděných bloků, kolik z nich můžeš vytvořit kovadlin?</p>
<input type="text" class="svelte-hgozrj"${add_attribute("value", answer, 0)}>

${``}</main>`;
});
export {
  Page as default
};
