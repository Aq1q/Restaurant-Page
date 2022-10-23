function createHome() {
    const main = document.createElement('main');
    const headline = document.createElement('div');
    const text = document.createElement('div');

    headline.id = 'headline';
    headline.innerText = 'About';

    text.classList.add('text-box');
    text.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo repellat nisi est esse';

    main.appendChild(headline);
    main.appendChild(text);
    
    return main;
}

function homeLoad () {
    const content = document.getElementById('content');
    content.appendChild(createHome());
}

export {homeLoad, createHome}; 