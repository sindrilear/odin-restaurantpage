import { resetPage } from "./resetpage";

export function showIndex() {
    resetPage();
    const content = document.querySelector("#content")
    const contenttext = document.createElement("p")

    contenttext.setAttribute("class", "content");
    contenttext.innerHTML = "THIS IS SNOWY SUMMIT STEAKHOUSE <br><br> Cozy steakhouse with lake views, mountain charm and winter warmth";

    content.appendChild(contenttext);
}