import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { A as AppShell } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1j0lfzk{margin:10px}button.svelte-1j0lfzk{background-color:#f9f3d8;border-radius:5px;padding:5px;color:rgb(171,35,40)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    default: () => {
      return `
	<main><div class="content"><header class="svelte-1j0lfzk"><a href="./"><button class="svelte-1j0lfzk">Na Hlavní Stránku</button></a></header>
			${slots.default ? slots.default({}) : ``}</div></main>`;
    }
  })}`;
});
export {
  Layout as default
};
