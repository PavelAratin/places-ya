import "./pages/index.css";
import { initialCards } from "./scripts/cards.js";
import { closeModal, openModal } from "./components/modals/modal.js";
import {
  createCard,
  deleteCard,
  handleImageClick,
  likeCard,
} from "./components/card/card.js";
const cardTemplate = document.querySelector("#card-template").content;
const cardList = document.querySelector(".places__list");
const editButton = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const profileAddButton = document.querySelector(".profile__add-button");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popups = document.querySelectorAll(".popup");
const formElementEdit = document.forms["edit-profile"];
const nameInput = formElementEdit.elements["name"];
const jobInput = formElementEdit.elements["description"];
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const newName = document.querySelector(".popup__input_type_name");
const newJob = document.querySelector(".popup__input_type_description");
const popupTypeImage = document.querySelector(".popup_type_image");
const formElementNewPlace = document.forms["new-place"];
const newPlaceName = formElementNewPlace.elements["place-name"];
const newPlaceLink = formElementNewPlace.elements["link"];

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
    createCard(
      card,
      deleteCard,
      cardTemplate,
      likeCard,
      popupTypeImage,
      handleImageClick
    )
  );
});

editButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupTypeEdit);
});

profileAddButton.addEventListener("click", () => {
  openModal(popupTypeNewCard);
});

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (
      evt.target === popup ||
      evt.target === popup.querySelector(".popup__close")
    ) {
      closeModal(popup);
    }
  });
});

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileTitle.textContent = newName.value;
  profileDescription.textContent = newJob.value;
  closeModal(popupTypeEdit);
}

formElementEdit.addEventListener("submit", handleFormSubmitEdit);

function handleFormSubmitNewPlace(evt) {
  evt.preventDefault();
  cardList.prepend(
    createCard(
      { name: newPlaceName.value, link: newPlaceLink.value },
      deleteCard,
      cardTemplate,
      likeCard,
      popupTypeImage,
      handleImageClick
    )
  );
  closeModal(popupTypeNewCard);
  evt.target.reset();
}

formElementNewPlace.addEventListener("submit", handleFormSubmitNewPlace);