const elements = [
    { tag: 'p', text: 'Phrase 1' },
    { tag: 'div', text: 'Phrase 2' },
    { tag: 'footer', text: 'Phrase 3' },
    { tag: 'section', text: 'Phrase 4' },
];

const container = document.querySelector('.container');
// const div = container.appendChild(document.createElement('div')); // we can also do that
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i];
    let newElement = document.createElement(tag);
    newElement.innerHTML = text;
    div.appendChild(newElement);
}

container.appendChild(div);


