export function openModal ( popupTypeNewCard, cardImage, cardDescriptionTitle ) {
    if(cardImage && cardDescriptionTitle) {
        const cardImageSrc = cardImage.getAttribute('src');
        const cardImageAlt = cardImage.getAttribute('alt');
        const cardImageTitle = cardDescriptionTitle.textContent;
        popupTypeNewCard.querySelector('img').setAttribute('src', cardImageSrc);
        popupTypeNewCard.querySelector('img').setAttribute('alt', cardImageAlt);
        popupTypeNewCard.querySelector('.popup__caption').textContent = cardImageTitle;
    }

    popupTypeNewCard.classList.add('popup_is-opened', 'popup_is-animated');

    document.addEventListener('keydown', (evt) => {
        if(evt.key === 'Escape') {
            closeModal(popupTypeNewCard);
        }
      })
}

export function closeModal ( popup ) {
    popup.classList.remove('popup_is-opened', 'popup_is-animated');
    document.removeEventListener('keydown', closeModal);
}