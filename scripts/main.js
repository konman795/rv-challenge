const dealers = dealersData.dealers;
let dealerFrag = document.createDocumentFragment();

// for (let dealer of dealers) {
//     let dealerSection = createElement('section', 'dealer', '');
//     let dealerName = createElement('div', 'dealer__name', '');
//     let dealerText = createElement('span', 'dealer__text', dealer.data.name);

//     let seperatorGrey = createElement('div', 'seperator-grey', '');

//     dealerName.appendChild(dealerText);

//     dealerSection.appendChild(dealerName);
//     dealerSection.appendChild(seperatorGrey);
    
//     dealerFrag.appendChild(dealerSection);
// }
// document.querySelector('body').appendChild(dealerFrag);

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

(function initiateModals() {
    const dealerEmailBtns = document.querySelectorAll('.dealer__email-btn');
    // for (let btn of dealerEmailBtns) {
    //     btn.addEventListener('click', () => {
    //         console.log('clicked');
    //     });
    // }
    dealerEmailBtns.forEach((elem) => {
        elem.addEventListener('click', () => {
            console.log('clicked');
        })
    });
})()