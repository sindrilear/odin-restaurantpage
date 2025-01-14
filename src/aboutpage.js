import { resetPage } from "./resetpage";
import snowysummitImage from "images/snowysummit.webp"

export function showAbout() {
    resetPage();
    const content = document.querySelector("#content")
    const aboutwrapper = document.createElement("div")
    aboutwrapper.setAttribute("class", "aboutwrapper")
    content.appendChild(aboutwrapper);

    const descriptionwrapper = document.createElement("div")
    descriptionwrapper.setAttribute("class", "descriptionwrapper")
    aboutwrapper.appendChild(descriptionwrapper);

    const descriptiontextheader = document.createElement("p")
    descriptiontextheader.innerHTML = "Who are we?";

    const descriptiontextcontent = document.createElement("p")
    descriptiontextcontent.innerHTML = " Snowy Summit Steakhouse is a premier dining destination nestled in the heart of a picturesque mountain landscape. \
    Known for its cozy ambiance and warm hospitality, the restaurant offers a rustic yet refined atmosphere, \
    combining the charm of a classic lodge with modern sophistication. Our carefully curated menu features a \
    variety of expertly crafted dishes, from succulent, hand-cut steaks grilled to perfection to gourmet seafood \
    and indulgent desserts.\
    <br><br>\
    Whether you're enjoying a romantic evening by the fireplace, celebrating with friends and family, or \
    indulging in a well-deserved treat after a day on the slopes, Snowy Summit Steakhouse delivers an unforgettable \
    culinary experience. With breathtaking views, locally sourced ingredients, and impeccable service,\
    it's more than just a meal—it's a moment to savor. \
    <br><br> \
    Opening Hours: \
    <br> \
    Monday to Thursday: 5:00 PM – 10:00 PM \
    <br> \
    Friday and Saturday: 4:00 PM – 11:00 PM \
    <br> \
    Sunday: 4:00 PM – 9:00 PM \
    <br> \
    Contact Us: \
    <br> \
    📞 Phone: (555) 123-4567"
    const img = document.createElement("img");
    img.src = snowysummitImage;

    descriptionwrapper.appendChild(descriptiontextheader);
    descriptionwrapper.appendChild(descriptiontextcontent);
    aboutwrapper.appendChild(img);
}