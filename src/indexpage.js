// greeting.js
export const greeting = "Hello, restaurant page";

export function showIndex() {
    const content = document.querySelector("#content")
    const contenttext = document.createElement("p")

    contenttext.setAttribute("class", "content");
    contenttext.innerHTML = "THIS IS SNOWY SUMMIT STEAKHOUSE <br><br> Cozy steakhouse with lake views, mountain charm and winter warmth";

    content.appendChild(contenttext);
}