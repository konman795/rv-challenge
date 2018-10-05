const dealers = dealersData.dealers;
let dealerFrag = document.createDocumentFragment();

for (let dealer of dealers) {
    let dealerSection = createElement('section', 'dealer', '');
    let dealerName = createElement('div', 'dealer__name', '');
    let dealerText = createElement('span', 'dealer__text', dealer.data.name);

    let seperatorGrey = createElement('div', 'seperator-grey', '');

    dealerName.appendChild(dealerText);

    dealerSection.appendChild(dealerName);
    dealerSection.appendChild(seperatorGrey);
    
    dealerFrag.appendChild(dealerSection);
}
document.querySelector('body').appendChild(dealerFrag);

function createElement(tagName, className, text) {
    let el = document.createElement(tagName);
    if (className.length > 0) {
        el.classList.add(className);
    }
    if (text.length > 0) {
        el.innerText = text;
    }
    return el;
}

window.addEventListener('load', () => {
    console.log('loaded all assets');
    document.querySelector('body').style.animation = 'fadeIn 0.8s 1';
});