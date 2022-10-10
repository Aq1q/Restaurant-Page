import { pageLoad } from "./load";
import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { contactLoad } from "./contact"

pageLoad();

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');
const content = document.getElementById('content');

home.addEventListener ('click', () => {
    content.removeChild(content.lastChild);
    homeLoad();
});

menu.addEventListener ('click', () => {
    content.removeChild(content.lastChild);
    menuLoad();
});

contact.addEventListener ('click', () => {
    content.removeChild(content.lastChild);
    contactLoad();
});