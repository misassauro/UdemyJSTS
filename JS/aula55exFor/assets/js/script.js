const divParagraphs = document.querySelector('.paragraphs');
const pTags = divParagraphs.querySelectorAll('p');

const bodyStyle = getComputedStyle(document.body);
const bodyBackgroundColor = bodyStyle.backgroundColor;

for (let p of pTags) {
    p.style.backgroundColor = bodyBackgroundColor
}



