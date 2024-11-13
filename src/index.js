import "./pages/index.css";
import { initialCards } from "./scripts/cards.js";
import { closeModal, openModal } from "./components/modals/modal.js";
import { createCard, deleteCard, likeCard } from "./components/card/card.js";

const cardList = document.querySelector(".places__list");
const editButton = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const profileAddButton = document.querySelector(".profile__add-button");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popups = document.querySelectorAll(".popup");
const formElementEdit = document.forms["edit-profile"];
const nameInput = formElementEdit.elements["name"];
const jobInput = formElementEdit.elements["description"];
const popupTypeImage = document.querySelector(".popup_type_image");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const newName = document.querySelector(".popup__input_type_name");
const newJob = document.querySelector(".popup__input_type_description");
const formElementNewPlace = document.forms["new-place"];
const newPlaceName = formElementNewPlace.elements["place-name"];
const newPlaceLink = formElementNewPlace.elements["link"];
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const cardTemplate = document.querySelector("#card-template").content;

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
  renderCard(card, "append");
});

function renderCard(card, method = "prepend") {
  const cardElement = createCard(card, deleteCard, likeCard, handleImageClick, cardTemplate);
  cardList[method](cardElement);
}

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

function handleImageClick(cardImage, cardDescriptionTitle) {
  const cardImageSrc = cardImage.src;
  const cardImageAlt = cardImage.alt;
  const cardDescriptionTitleText = cardDescriptionTitle.textContent;

  popupImage.src = cardImageSrc;
  popupImage.alt = cardImageAlt;
  popupCaption.textContent = cardDescriptionTitleText;

  openModal(popupTypeImage);
}

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileTitle.textContent = newName.value;
  profileDescription.textContent = newJob.value;
  closeModal(popupTypeEdit);
}

formElementEdit.addEventListener("submit", handleFormSubmitEdit);

function handleFormSubmitNewPlace(evt) {
  evt.preventDefault();
  renderCard({ name: newPlaceName.value, link: newPlaceLink.value });
  closeModal(popupTypeNewCard);
  evt.target.reset();
}

formElementNewPlace.addEventListener("submit", handleFormSubmitNewPlace);
