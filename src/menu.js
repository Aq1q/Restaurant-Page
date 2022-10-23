function createDivs () {
    const main = document.getElementById('main');
    const headline = document.createElement('div');
    
    headline.id = 'headline';
    headline.innerText = 'Menu';

    main.appendChild(headline);
    
    return main;
}

function menuLoad () {
    const content = document.getElementById('content');
    content.appendChild(createDivs());
}

export {menuLoad};