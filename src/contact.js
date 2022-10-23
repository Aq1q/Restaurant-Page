import Mike from './mike.jpg';

function contactDiv (...info) {
    const div = document.createElement('div');
    div.classList.add('contact');

    div.style.backgroundColor = 'purple';
    div.style.width = '45vw';
    div.style.maxWidth = '462px';
    div.style.height = '150px';
    div.style.borderRadius = '10px 0 10px 0';
    div.style.paddingLeft = '20px';
    div.style.position = 'relative';

    const header = document.createElement('h3');
    header.innerText = info[0];
    div.appendChild(header);

    const head = document.createElement('h3');
    head.style.margin = '0';

    div.appendChild(head);

    for(let i = 1; i < info.length; i++) {
        const paragraph = document.createElement('p');
        paragraph.style.margin = '0';
        paragraph.style.paddingLeft = '10px';
        paragraph.innerText = info[i];
        div.appendChild(paragraph);
    }

    const mike = new Image();
    mike.src = Mike;
    mike.style.height = '50%';
    mike.style.minWidth = '120px';
    mike.style.Width = 'auto';
    mike.style.position = 'absolute';
    mike.style.top = '10px';
    mike.style.right = '10px';
    div.appendChild(mike);

    return div;
}

function createContact () {
    const main = document.getElementById('main');
    const headline = document.createElement('div');
    
    headline.id = 'headline';
    headline.innerText = 'Contact Us';
    headline.style.fontFamily = 'helvetica';
    headline.style.fontSize = '2rem';
    headline.style.border = 'none';
    headline.style.borderRadius = '10px 0 10px 0';
    headline.style.width = '60%';

    main.appendChild(headline);
    main.appendChild(contactDiv('Mike','Chef','555-555-555', 'Email@email.com'));
    return main;
}

function contactLoad () {
    const content = document.getElementById('content');
    content.appendChild(createContact());
}

export {contactLoad, createContact};