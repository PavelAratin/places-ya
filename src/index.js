import "./pages/index.css"; // добавьте импорт главного файла стилей
import { initialCards } from "./scripts/cards";
import { createCard, deleteCard } from "./components/card/card";
import { openModal } from "./components/modals/modal";
import { closeModal } from "./components/modals/modal";
import { likeCard } from "./components/card/card";
import { handleFormSubmit } from "./components/handleFormSubmit/hadleFormSubmit";

const cardTemplate = document.getElementById("card-template").content;
// @todo: DOM узлы
const cardList = document.querySelector(".places__list");
const profileAddButton = document.querySelector(".profile__add-button");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popups = document.querySelectorAll(".popup");
const popupTypeImage = document.querySelector(".popup_type_image");
const formElementEdit = document.forms["edit-profile"];
const nameInput = formElementEdit.elements["name"];
const jobInput = formElementEdit.elements["description"];
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const add_icon = new URL("./images/add-icon.svg", import.meta.url);
const avatar = new URL("./images/avatar.jpg", import.meta.url);
const card_1 = new URL("./images/card_1.jpg", import.meta.url);
const card_2 = new URL("./images/card_2.jpg", import.meta.url);
const card_3 = new URL("./images/card_3.jpg", import.meta.url);
const close_svg = new URL("./images/close.svg", import.meta.url);
const delete_icon = new URL("./images/delete-icon.svg", import.meta.url);
const edit_icon = new URL("./images/edit-icon.svg", import.meta.url);
const like_active = new URL("./images/like-active.svg", import.meta.url);
const like_inactive = new URL("./images/like-inactive.svg", import.meta.url);
const logo = new URL("./images/logo.svg", import.meta.url);
const images = [
  { name: "add_icon", link: add_icon },
  { name: "avatar", link: avatar },
  { name: "card_1", link: card_1 },
  { name: "card_2", link: card_2 },
  { name: "card_3", link: card_3 },
  { name: "close_svg", link: close_svg },
  { name: "delete_icon", link: delete_icon },
  { name: "edit_icon", link: edit_icon },
  { name: "like_active", link: like_active },
  { name: "like_inactive", link: like_inactive },
  { name: "logo", link: logo },
];

initialCards.forEach(function (card) {
  cardList.append(
    createCard(card, deleteCard, cardTemplate, popupTypeImage, likeCard)
  );
});

profileAddButton.addEventListener("click", () => {
  openModal(popupTypeNewCard);
});

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupTypeEdit);
});

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (
      evt.target === popup ||
      evt.target === popup.querySelector(".popup__close")) {
      closeModal(popup);
    }
    if (evt.target === popup.querySelector(".popup__button")) {
      handleFormSubmit(evt, popup, cardList, cardTemplate, popupTypeImage);
    }
});
    // document.addEventListener('keydown', (evt) => {
    //   if(evt.key === 'Escape') {
    //       closeModal(popup);
    //   }
    // })
});
