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

    return element;
}

function createHeader () {
    const header = document.createElement('header');
    header.style.width = '100%';
    header.style.height = '50px';
    header.style.backgroundColor = 'lightcoral';
    header.style.display = 'flex';
    header.style.justifyContent = 'center';
    header.style.alignItems = 'center';

    const ul = document.createElement('ul');
    ul.style.alignItems = 'center';
    ul.style.display = 'flex';
    ul.style.gap = 'max(100px)';
    ul.style.justifyContent = 'center';
    ul.style.margin = '0';

    ul.appendChild(createListElement('home', 'Home'));
    ul.appendChild(createListElement('menu', 'Menu'));
    ul.appendChild(createListElement('contact','Contact'));
    
    header.appendChild(ul);

    return header;
}

function createMain() {
    const main = document.createElement('main');
    const headline = document.createElement('div');
    const text = document.createElement('div');

    headline.id = 'headline';
    headline.innerText = 'Restaurant';

    text.classList.add('text-box');
    text.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo repellat nisi est esse';

    main.appendChild(headline);
    main.appendChild(text);
    
    return main;
}

function pageLoad () {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
}

export {pageLoad, createMain};