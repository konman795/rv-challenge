const dealers = dealersData.dealers;

let filterOptions = [];
const filterCheckboxes = document.querySelectorAll('.filters__options .custom-checkbox__input');
for (let i = 0; i < filterCheckboxes.length; i++) {
    filterCheckboxes[i].addEventListener('click', function() {
        if (this.checked) {
            filterOptions.push(this.value);
        }
        else {
            for (let j = 0; j < filterOptions.length; j++) {
                if (filterOptions[j] === this.value) {
                    filterOptions.splice(j, 1);
                }
            }
        }
        console.log(filterOptions);
    });
}

let dealerFrag = document.createDocumentFragment();

for (let i = 0; i < dealers.length; i++) {
    let dealerSection = createElement('section', ['dealer'], '');

    let dealerName = createElement('div', ['dealer__name', 'flex', 'align-items-center', 'justify-content-center'], '');
    let dealerText = createElement('span', ['dealer__name-text'], dealers[i].data.name);
    let seperatorGrey = createElement('div', ['dealer__divider'], '');

    let dealerTelephone = createElement('div', ['dealer__telephone', 'flex', 'align-items-center', 'justify-content-center'], '');
    let dealerTelephoneImg = createImgElement(['dealer__telephone-img'], 'images/phone-icon-desktop.png');
    let dealerTelephoneNumber = createElement('span', ['dealer__telephone-number'], dealers[i].data.phone1);

    let dealerEmail = createElement('div', ['dealer__email'], '');
    let dealerEmailem = createElement('em', '', '');
    let dealerEmailText = createElement('span', ['dealer__email-text'], "Can't talk now? Click below to send an email.");
    let dealerEmailBtn = createBtnElement(['dealer__email-btn', 'btn', 'btn--teal'], dealers[i].data.companyID);
    let dealerEmailIcon = createImgElement(['btn__icon'], '/images/email-icon.png');
    let dealerEmailBtnText = createElement('span', ['btn__text'], 'Contact this Pro');

    let dealerHours = createElement('div', ['dealer__hours'], '');
    let dealerHoursStrong = createElement('strong', '', '');
    let dealerHoursBusinessText = createElement('span', '', 'Business Hours');
    let dealerHoursWeekDays = createElement('span', '', 'Weekdays ' + dealers[i].data.weekHours.mon);
    let dealerHoursSat = createElement('span', '', 'Saturdays ' + (dealers[i].data.weekHours.sat.length > 0 ? dealers[i].data.weekHours.sat : ' - CLOSED'));
    let dealerHoursSun = createElement('span', '', 'Sundays - ' + (dealers[i].data.weekHours.sun.length > 0 ? dealers[i].data.weekHours.sun : 'CLOSED'));

    let dealerCerts = createElement('div', ['dealer__certifications', 'flex', 'align-items-center'], '');
    let dealerCertsList = createElement('div', ['dealer__certifications-list', 'flex', 'flex-wrap'], '');
    
    for (let j = 0; j < dealers[i].data.certifications.length; j++) {
        var certIconpath = '';
        switch(dealers[i].data.certifications[j]) {
            case 'Installation Pro':
                certIconpath = '/images/star-installation-pro.png'
                break;
            case 'Commercial Pro':
                certIconpath = '/images/users-commercial-pro.png'
                break;
            case 'Residential Pro':
                certIconpath = '/images/home-residential-pro.png'
                break;
            case 'Service Pro':
                certIconpath = '/images/gear-service-pro.png'
                break;
        }
        let certification = createElement('div', ['dealer__certification'], '');
        let certificationImg = createImgElement(['dealer__certification-icon'], certIconpath);
        let certificationText = createElement('span', ['dealer__certification-text'], dealers[i].data.certifications[j]);

        certification.appendChild(certificationImg);
        certification.appendChild(certificationText);

        dealerCertsList.appendChild(certification);
    }

    dealerName.appendChild(dealerText);

    dealerTelephone.appendChild(dealerTelephoneImg);
    dealerTelephone.appendChild(dealerTelephoneNumber);

    dealerEmailem.appendChild(dealerEmailText);
    dealerEmailBtn.appendChild(dealerEmailIcon);
    dealerEmailBtn.appendChild(dealerEmailBtnText);
    dealerEmail.appendChild(dealerEmailem);
    dealerEmail.appendChild(dealerEmailBtn);

    dealerHoursStrong.appendChild(dealerHoursBusinessText);
    dealerHours.appendChild(dealerHoursStrong);
    dealerHours.appendChild(dealerHoursWeekDays);
    dealerHours.appendChild(dealerHoursSat);
    dealerHours.appendChild(dealerHoursSun);

    dealerCerts.appendChild(dealerCertsList);

    dealerSection.appendChild(dealerName);
    dealerSection.appendChild(seperatorGrey);
    dealerSection.appendChild(dealerTelephone);
    dealerSection.appendChild(dealerEmail);
    dealerSection.appendChild(dealerHours);
    dealerSection.appendChild(dealerCerts);
    
    dealerFrag.appendChild(dealerSection);
}

document.querySelector('#dealers-container').appendChild(dealerFrag);

function createElement(tagName, classNamesArray, text) {
    let el = document.createElement(tagName);
    if (classNamesArray.length > 0) {
        for (let i = 0; i < classNamesArray.length; i++) {
            el.classList.add(classNamesArray[i]);
        }
    }
    if (text.length > 0) {
        el.innerText = text;
    }
    return el;
}

function createImgElement(classNamesArray, imgPath) {
    let el = document.createElement('img');
    if (classNamesArray.length > 0) {
        for (let i = 0; i < classNamesArray.length; i++) {
            el.classList.add(classNamesArray[i]);
        }
    }
    if (imgPath.length > 0) {
        el.src = imgPath;
    }
    return el;
}

function createBtnElement(classNamesArray, dataSetValue) {
    let el = document.createElement('button');
    if (classNamesArray.length > 0) {
        for (let i = 0; i < classNamesArray.length; i++) {
            el.classList.add(classNamesArray[i]);
        }
    }
    if (dataSetValue) {
        el.dataset.companyId = dataSetValue;
    }
    el.type = 'button';
    return el;
}

(function initiateModals() {
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal__close-btn');
    const dealerEmailBtns = document.querySelectorAll('.dealer__email-btn');

    for (let i = 0; i < dealerEmailBtns.length; i++) {
        dealerEmailBtns[i].addEventListener('click', function (et) {
            const companyId = this.dataset.companyId;
            showModal(et, companyId);
        });
    }

    closeModal.addEventListener('click', function() {
        modal.classList.remove('show');
        clearForm();
    });
})()

function showModal(eventTarget, companyId) {
    const modal = document.querySelector('.modal');
    const contactFormEmailRecipient =  document.querySelector('input[name="emailRecipient"]');
    const poolproCompanyNameSpans = document.querySelectorAll('.poolpro-company-name');
    let dealerObj;

    for (let i = 0; i < dealers.length; i++) {
        if (companyId == dealers[i].data.companyID) {
            dealerObj = dealers[i].data;
        }
    }

    for (let i = 0; i < poolproCompanyNameSpans.length; i++) {
        poolproCompanyNameSpans[i].innerText = dealerObj.name;
    }

    contactFormEmailRecipient.value = dealerObj.email;
    modal.classList.add('show');
}

function clearForm() {
    const contactForm = document.querySelector('#pool-pro-contact-form');
    const contactFormEmailRecipient =  document.querySelector('input[name="emailRecipient"]');

    contactFormEmailRecipient.value = "";
    contactForm.reset();
}

function formValidation() {
    
}