import { c as create_ssr_component, d as add_attribute, e as escape } from "../../chunks/index2.js";
import { B as BROWSER } from "../../chunks/prod-ssr.js";
import { w as writable } from "../../chunks/index.js";
const browser = BROWSER;
const gemini = "/_app/immutable/assets/gemini.67501f09.png";
const progress = writable({
  math: "false",
  code: "false",
  cj: "false",
  gaming: "false"
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".title.svelte-1er50rj.svelte-1er50rj{padding-top:50px;font-size:40px;text-align:center;height:360px;display:flex;align-items:center;flex-direction:column}.title.svelte-1er50rj h1.svelte-1er50rj{font-size:40px}.title.svelte-1er50rj h2.svelte-1er50rj{font-size:30px;margin:10px}.title.svelte-1er50rj img.svelte-1er50rj{margin-top:50px;width:120px;height:120px}.desc.svelte-1er50rj.svelte-1er50rj{font-size:24px;padding:10px;height:150px}.counter.svelte-1er50rj.svelte-1er50rj{text-align:center;padding:30px;font-size:50px;height:150px}.counter.svelte-1er50rj p.svelte-1er50rj{margin-block-end:0.5em}.challenges.svelte-1er50rj.svelte-1er50rj{display:grid;grid-template-columns:1fr 1fr;margin-top:30px;width:90%;margin-left:5%;gap:10px}.chal.svelte-1er50rj.svelte-1er50rj{height:150px;width:100%;border-radius:12px;display:flex;justify-content:center;align-items:center;background-color:#f9f3d8}svg.svelte-1er50rj.svelte-1er50rj{fill:rgb(171, 35, 40)}.reset.svelte-1er50rj.svelte-1er50rj{margin-top:100px;margin-left:60%;margin-bottom:10px}.reset.svelte-1er50rj button.svelte-1er50rj{background-color:rgb(255, 255, 100);border-radius:5px;padding:5px;color:rgb(171, 35, 40)}.done.svelte-1er50rj.svelte-1er50rj{background-color:darkred}.done.svelte-1er50rj svg.svelte-1er50rj{fill:#f9f3d8}.finish.svelte-1er50rj.svelte-1er50rj{display:flex;height:80px;justify-content:center;align-items:flex-end}.finish.svelte-1er50rj button.svelte-1er50rj{width:150px;height:50px;background-color:#f9f3d8;color:rgb(171, 35, 40);border-radius:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  async function SetItems() {
    let mathPromise = new Promise(function(resolve) {
      resolve(progress.subscribe((a) => browser));
    });
    let codePromise = new Promise(function(resolve) {
      resolve(progress.subscribe((a) => browser));
    });
    let cjPromise = new Promise(function(resolve) {
      resolve(progress.subscribe((a) => browser));
    });
    let gamingPromise = new Promise(function(resolve) {
      resolve(progress.subscribe((a) => browser));
    });
    await mathPromise;
    await codePromise;
    await cjPromise;
    await gamingPromise;
  }
  function GetItems() {
    console.log(typeof sessionStorage);
    if (typeof sessionStorage === "undefined") {
      return false;
    }
    progress.subscribe((a) => {
      mathDone = sessionStorage.getItem("math");
      codeDone = sessionStorage.getItem("code");
      cjDone = sessionStorage.getItem("cj");
      gamingDone = sessionStorage.getItem("gaming");
    });
    return true;
  }
  let mathDone = "";
  let codeDone = "";
  let cjDone = "";
  let gamingDone = "";
  if (!GetItems()) {
    SetItems();
  }
  let counter = 0;
  let dones = [mathDone, codeDone, cjDone, gamingDone];
  dones.forEach((element) => {
    if (element == "true") {
      counter++;
    }
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-13i390a_START --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${$$result.title = `<title>Narozeniny</title>`, ""}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@800&display=swap" rel="stylesheet"><!-- HEAD_svelte-13i390a_END -->`, ""}

<div class="title svelte-1er50rj"><h1 class="svelte-1er50rj">HAPPY</h1>
	<h2 class="svelte-1er50rj">B-DAY</h2>
	<img${add_attribute("src", gemini, 0)} alt="gemini" class="svelte-1er50rj"></div>

<div class="desc svelte-1er50rj"><p>Ahoj, <br>všechno nejlepší!<br> Získání dárku nebude tak jednoduché. První budeš muset splnit
		pár úkolů. GLHF
	</p></div>

<div class="counter svelte-1er50rj"><p class="svelte-1er50rj">SPLNĚNO</p>
	<p class="svelte-1er50rj">${escape(counter)}/4</p></div>
<div class="challenges svelte-1er50rj">${mathDone == "false" ? `<a href="/math"><div class="math chal svelte-1er50rj"><svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80" class="svelte-1er50rj"><path d="M314-228h50v-88h88v-50h-88v-88h-50v88h-88v50h88v88Zm215-35h201v-49H529v49Zm0-107h201v-50H529v50Zm37-163 61-61 61 61 36-36-61-61 61-61-36-36-61 61-61-61-36 36 61 61-61 61 36 36Zm-325-72h196v-50H241v50Zm-61 485q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"></path></svg></div></a>` : ``}
	${mathDone == "true" ? `<div class="math done chal svelte-1er50rj"><svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80" class="svelte-1er50rj"><path d="M314-228h50v-88h88v-50h-88v-88h-50v88h-88v50h88v88Zm215-35h201v-49H529v49Zm0-107h201v-50H529v50Zm37-163 61-61 61 61 36-36-61-61 61-61-36-36-61 61-61-61-36 36 61 61-61 61 36 36Zm-325-72h196v-50H241v50Zm-61 485q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"></path></svg></div>` : ``}
	${codeDone == "false" ? `<a href="/code"><div class="code chal svelte-1er50rj"><svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80" class="svelte-1er50rj"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"></path></svg></div></a>` : ``}
	${codeDone == "true" ? `<div class="code done chal svelte-1er50rj"><svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80" class="svelte-1er50rj"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"></path></svg></div>` : ``}
	${cjDone == "false" ? `<a href="/cj"><div class="cj chal svelte-1er50rj"><svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80" class="svelte-1er50rj"><path d="M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"></path></svg></div></a>` : ``}
	${cjDone == "true" ? `<div class="cj done chal svelte-1er50rj"><svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80" class="svelte-1er50rj"><path d="M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"></path></svg></div>` : ``}
	${gamingDone == "false" ? `<a href="/gaming"><div class="gaming chal svelte-1er50rj"><svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80" class="svelte-1er50rj"><path d="M147-200q-38 0-59.5-25.5T72-296l48-335q8-53 49.5-91t94.5-38h433q53 0 94.5 38t49.5 91l47 335q6 45-15.5 70.5T813-200q-23 0-39-7.5T747-226L643-330H317L213-226q-11 11-27 18.5t-39 7.5Zm18-64 126-126h378l126 126q5 5 18 9 9 0 13.5-9t2.5-18l-48-339q-5-35-29.5-57T697-700H263q-30 0-54.5 22T179-621l-48 339q-2 9 2.5 18t13.5 9q7 0 18-9Zm535-176q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12Zm-85-130q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12ZM300-445h50v-75h75v-50h-75v-75h-50v75h-75v50h75v75Zm180-33Z"></path></svg></div></a>` : ``}
	${gamingDone == "true" ? `<div class="gaming done chal svelte-1er50rj"><svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80" class="svelte-1er50rj"><path d="M147-200q-38 0-59.5-25.5T72-296l48-335q8-53 49.5-91t94.5-38h433q53 0 94.5 38t49.5 91l47 335q6 45-15.5 70.5T813-200q-23 0-39-7.5T747-226L643-330H317L213-226q-11 11-27 18.5t-39 7.5Zm18-64 126-126h378l126 126q5 5 18 9 9 0 13.5-9t2.5-18l-48-339q-5-35-29.5-57T697-700H263q-30 0-54.5 22T179-621l-48 339q-2 9 2.5 18t13.5 9q7 0 18-9Zm535-176q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12Zm-85-130q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12ZM300-445h50v-75h75v-50h-75v-75h-50v75h-75v50h75v75Zm180-33Z"></path></svg></div>` : ``}</div>

${counter == 4 ? `<div class="finish svelte-1er50rj"><a href="/congrats"><button class="svelte-1er50rj">Pokračovat</button></a></div>` : ``}

<div class="reset svelte-1er50rj"><button class="svelte-1er50rj">resetovat postup</button>
</div>`;
});
export {
  Page as default
};
