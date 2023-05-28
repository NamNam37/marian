import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { A as AppShell } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-ssf7bq{display:flex;justify-content:center;background-color:rgb(171,35,40);height:100%}.content.svelte-ssf7bq{width:390px}.svelte-ssf7bq{font-family:'Roboto', sans-serif;color:#f9f3d8}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `
${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    default: () => {
      return `
	<main class="svelte-ssf7bq"><div class="content svelte-ssf7bq">${slots.default ? slots.default({}) : ``}</div></main>`;
    }
  })}`;
});
export {
  Layout as default
};
