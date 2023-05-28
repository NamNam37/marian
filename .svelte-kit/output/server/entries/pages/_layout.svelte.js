import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { A as AppShell } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-s8e10i{display:flex;justify-content:center;background-color:rgb(171, 35, 40);height:100%}.content.svelte-s8e10i{width:390px}.svelte-s8e10i{font-family:'Roboto', sans-serif;color:#f9f3d8}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  const ssr = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  $$result.css.add(css);
  return `
${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    default: () => {
      return `
	<main class="svelte-s8e10i"><div class="content svelte-s8e10i">${slots.default ? slots.default({}) : ``}</div></main>`;
    }
  })}`;
});
export {
  Layout as default
};
