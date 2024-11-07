import { closeModal } from "../modals/modal";
import { createCard, deleteCard, likeCard } from "../card/card";

const newName = document.querySelector(".popup__input_type_name");
const newJob = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const popupInputTypeCardName = document.querySelector(".popup__input_type_card-name");
const popupInputTypeCardLink = document.querySelector(".popup__input_type_url");

export function handleFormSubmit( evt, popup, cardList, cardTemplate, popupTypeImage ) {
    evt.preventDefault();
    if(popup.classList.contains("popup_type_edit")) {
    profileTitle.textContent = newName.value;
    profileDescription.textContent = newJob.value;
    }
    if(popup.classList.contains("popup_type_new-card")) {
    const cardName = popupInputTypeCardName.value;
    const cardLink = popupInputTypeCardLink.value;
    cardList.prepend(createCard({name: cardName, link: cardLink}, deleteCard, cardTemplate, popupTypeImage, likeCard ));
    }

    closeModal(popup);
}