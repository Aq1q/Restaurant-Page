import { createMain } from "./load";

function homeLoad () {
    const content = document.getElementById('content');
    content.appendChild(createMain());
}

export {homeLoad}; 