import { createHome } from './home';

function createListElement (id, text) {
    const element = document.createElement('li')
    element.id = id;
    element.classList.add(`menu`);
    element.innerText = text;

    element.style.fontSize = '1.5rem';
    element.style.listStyle = 'none';
    element.style.border = '1px solid gray';
    element.style.color = '#1C1A29';
    element.style.padding = '0 4px 4px 4px';
    element.style.backgroundColor = 'rebeccapurple';
    element.style.flexGrow = '1';
    element.style.textAlign = 'center';
    element.style.height = '90%';
    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.style.justifyContent = 'center';

    return element;
}

function createHeadT () {
    const headerTop = document.createElement('div');
    headerTop.id = 'headerTop';
    headerTop.style.height = '80px';
    headerTop.style.width = '100%';
    headerTop.style.backgroundColor = '#b2b2b2';
    headerTop.style.display = 'flex';
    headerTop.style.justifyContent = 'center';
    headerTop.style.alignItems = 'center';

    const span = document.createElement('span');
    span.innerText = 'Restaurant';
    span.style.fontSize = '2rem';


    headerTop.appendChild(span);
    return headerTop;
}

function createHeader () {
    const header = document.createElement('header');
    header.style.width = '100%';
    header.style.height = '140px';    

    const headerBot = document.createElement('div');
    headerBot.id = 'headerBot';
    headerBot.style.height = '60px';
    headerBot.style.width = '100%';
    headerBot.style.backgroundColor = 'lightcoral';
    headerBot.style.display = 'flex';
    headerBot.style.justifyContent = 'center';

    const ul = document.createElement('ul');
    ul.style.alignItems = 'center';
    ul.style.display = 'flex';
    ul.style.justifyContent = 'space-evenly';
    ul.style.margin = '0';
    ul.style.padding = '0';
    ul.style.width = '100%';

    ul.appendChild(createListElement('home', 'Home'));
    ul.appendChild(createListElement('menu', 'Menu'));
    ul.appendChild(createListElement('contact','Contact'));
    
    headerBot.appendChild(ul);
    
    header.appendChild(createHeadT());
    header.appendChild(headerBot);

    return header;
}

function pageLoad () {
    const body = document.body;
    body.style.height = '100vh';
    body.style.margin = '0';
    body.style.padding = '0';
    
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createHome());
}

export {pageLoad};