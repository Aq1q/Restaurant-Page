function createDivs () {
    const main = document.createElement('main');
    const headline = document.createElement('div');
    
    headline.id = 'headline';
    headline.innerText = 'Contact';

    main.appendChild(headline);
    
    return main;
}

function contactLoad () {
    const content = document.getElementById('content');
    content.appendChild(createDivs());
}

export {contactLoad};