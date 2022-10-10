function createHeader () {
    const header = document.createElement('header');
    const ul = document.createElement('ul');
    const homeButton = document.createElement('li');
    const menuButton = document.createElement('li');
    const contactButton = document.createElement('li');
    
    homeButton.id = 'home';
    homeButton.classList.add('menu');
    homeButton.innerText = 'Home';

    menuButton.id = 'menu';
    menuButton.classList.add('menu');
    menuButton.innerText = 'Menu';

    contactButton.id = 'contact';
    contactButton.classList.add('menu');
    contactButton.innerText = 'Contact';

    ul.appendChild(homeButton);
    ul.appendChild(menuButton);
    ul.appendChild(contactButton);
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
    console.log(content);
    content.appendChild(createHeader());
    content.appendChild(createMain());
}

export {pageLoad};