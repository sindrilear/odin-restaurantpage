import "./styles.css";
import { showIndex } from "./indexpage.js";
import { showMenu } from "./menupage.js";
import { showAbout } from "./aboutpage.js";

showIndex();

const home = document.getElementById("home");
home.onclick = showIndex;

const menu = document.getElementById("menu");
menu.onclick = showMenu;

const about = document.getElementById("about");
about.onclick = showAbout;

