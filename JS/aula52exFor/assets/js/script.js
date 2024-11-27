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
    let newTag = document.createElement(tag);
    // newTag.innerHTML = text;
    // newTag.innerText = text; // that would be more proper than using innerHTML since inside the text we do not have a HTML

    // Texts can be consider DOM (Document Object Model) elements
    let createdText = document.createTextNode(text);
    newTag.appendChild(createdText);
    div.appendChild(newTag);
}

container.appendChild(div);


