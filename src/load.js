import { createHome } from './home';
import { createContact } from './contact';

function createListElement (id, text) {
    const element = document.createElement('li')
    element.id = id;
    element.classList.add(`menu`);
    element.innerText = text;

    element.style.fontSize = '1.5rem';
    element.style.fontFamily = 'Helvetica';
    element.style.listStyle = 'none';
    element.style.border = '1px solid gray';
    element.style.color = '#1C1A29';
    element.style.backgroundColor = 'rebeccapurple';
    element.style.flexGrow = '1';
    element.style.textAlign = 'center';
    element.style.height = '90%';
    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.style.justifyContent = 'center';

    element.addEventListener('mouseenter', (e) => {
        e.target.style.cursor = 'pointer';
        e.target.style.transform = 'scale(1.1)';
        
    });
    element.addEventListener('mouseleave', (e) => {
        e.target.style.transform = null;
    })

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
    span.style.fontFamily = 'Helvetica';
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
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';
    content.style.margin = '0';
    content.style.height = '100vh';
    content.style.width = '100%';
    content.style.backgroundColor = 'blue';

    const main = document.createElement('main');
    main.id = 'main';

    main.style.width = '100%';
    main.style.height = '90%';
    main.style.marginTop = 'auto';
    main.style.backgroundColor = 'pink';
    main.style.display = 'flex';
    main.style.alignItems = 'center';
    main.style.flexDirection = 'column';
    main.style.rowGap = '100px';

    content.appendChild(createHeader());
    content.appendChild(main);
    content.appendChild(createContact());
}

export {pageLoad};