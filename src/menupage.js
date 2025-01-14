import { resetPage } from "./resetpage";

class menuItem {
    constructor(itemName, itemDescription, itemPrice) {
    this.itemName = itemName;
    this.itemDescription = itemDescription;
    this.itemPrice = itemPrice;
}
}

const ribeye = new menuItem("Summit Ribeye", "Tender, juicy ribeye grilled to perfection.", "$39.99")
const mignon = new menuItem("Mountain Filet Mignon", "Melt-in-your-mouth filet with a rich glaze.", "$49.99")
const burger = new menuItem("Alpine Burger", "Gourmet beef patty topped with smoked cheddar.", "$24.99")
const lamb = new menuItem("Rustic Lamb Chops", "Herb-crusted lamb cooked medium rare.", "$59.99")
const mash = new menuItem("Truffle Mashed Potatoes", "Creamy mashed potatoes with truffle oil.", "$19.99")
const cheesecake = new menuItem("Oreo Cheesecake", "Silky cheesecake with an oreocrust.", "$19.99")

const menuItems = [ribeye, mignon, burger, lamb, mash, cheesecake];

export function showMenu() {
    resetPage();
    const content = document.querySelector("#content")
    const menudiv = document.createElement("div")
    const header = document.createElement("p")
    header.setAttribute("class", "content");
    header.innerHTML = "Our Menu";
    menudiv.setAttribute("class", "menu");
    content.appendChild(header);
    content.appendChild(menudiv)

    for (let i = 0;i < menuItems.length; i++) {
        let menuitemdiv = document.createElement("div")
        menuitemdiv.setAttribute("class", `menu-item`);
        let itemheader = document.createElement("h1")
        let itemdesc = document.createElement("p")
        let price = document.createElement("p")

        itemheader.setAttribute("class", "itemheader");
        itemdesc.setAttribute("class", "itemdesc")
        price.setAttribute("class", "price")

        itemheader.innerHTML = menuItems[i].itemName;
        itemdesc.innerHTML = menuItems[i].itemDescription;
        price.innerHTML = menuItems[i].itemPrice;

        menudiv.appendChild(menuitemdiv)
        menuitemdiv.appendChild(itemheader)
        menuitemdiv.appendChild(itemdesc)
        menuitemdiv.appendChild(price)
    }
}