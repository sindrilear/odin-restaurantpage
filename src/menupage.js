export function showMenu() {
    const content = document.querySelector("#content")
    const menudiv = document.createElement("div")
    const menuitemdiv = document.createElement("div")
    const itemheader = document.createElement("h1")
    const header = document.createElement("p")
    const itemdesc = document.createElement("p")
    const price = document.createElement("p")

    header.setAttribute("class", "content")
    itemheader.setAttribute("class", "itemheader");
    itemdesc.setAttribute("class", "itemdesc")
    price.setAttribute("class", "price")

    itemheader.innerHTML = "Summit Ribeye";
    itemdesc.innerHTML ="Tender, juicy ribeye grilled to perfection."
    price.innerHTML = "$39.99"

    content.appendChild(header);
    content.appendChild(menudiv)
    menudiv.appendChild(menuitemdiv)
    menuitemdiv.appendChild(itemheader)
    menuitemdiv.appendChild(itemdesc)
    menuitemdiv.appendChild(price)
}