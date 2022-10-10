import { pageLoad } from "./home";
pageLoad();

const home = document.getElementById('home');
home.addEventListener('click', pageLoad);
