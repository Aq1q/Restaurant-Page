import { pageLoad } from "./load";
import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { contactLoad } from "./contact"

pageLoad();

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');
const main = document.getElementById('main');

home.addEventListener ('click', () => {
    main.innerHTML = '';
    homeLoad();
});

menu.addEventListener ('click', () => {
    main.innerHTML = '';
    menuLoad();
});

contact.addEventListener ('click', () => {
    main.innerHTML = '';
    contactLoad();
});