import { openModal } from "../modals/modal";

export function createCard(card, deleteCard, cardTemplate, popupTypeImage, likeCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const cardLikeButton = cardElement.querySelector('.card__like-button');
    const cardDescriptionTitle = cardElement.querySelector('.card__title');

    cardElement.querySelector('.card__title').textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = card.name;  

    deleteButton.addEventListener('click', () => deleteCard(cardElement));
    cardLikeButton.addEventListener('click', () => likeCard(cardLikeButton));

    cardElement.addEventListener('click', (evt) => {
        if(evt.target === deleteButton) {
            deleteCard(cardElement);
        }
        if(evt.target === cardImage) {
            openModal(popupTypeImage, cardImage, cardDescriptionTitle);
        }
    })

    return cardElement;
};

export function deleteCard (card) {
    card.remove();
};

export function likeCard(card) {
    card.classList.toggle('card__like-button_is-active');
}