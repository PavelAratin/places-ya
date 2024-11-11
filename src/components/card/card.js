import { openModal } from "../modals/modal";

export function createCard(
  card,
  deleteCard,
  cardTemplate,
  likeCard,
  popupTypeImage,
  handleImageClick
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardDescriptionTitle = cardElement.querySelector(".card__title");

  cardElement.querySelector(".card__title").textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  deleteButton.addEventListener("click", () => deleteCard(cardElement));

  cardLikeButton.addEventListener("click", () => likeCard(cardLikeButton));

  cardImage.addEventListener("click", () =>
    handleImageClick(cardImage, popupTypeImage, cardDescriptionTitle)
  );

  return cardElement;
}

export function deleteCard(card) {
  card.remove();
}

export function likeCard(card) {
  card.classList.toggle("card__like-button_is-active");
}

export function handleImageClick(
  cardImage,
  popupTypeImage,
  cardDescriptionTitle
) {
  const cardImageSrc = cardImage.src;
  const cardImageAlt = cardImage.alt;
  const cardDescriptionTitleText = cardDescriptionTitle.textContent;

  popupTypeImage.querySelector(".popup__image").src = cardImageSrc;
  popupTypeImage.querySelector(".popup__image").alt = cardImageAlt;
  popupTypeImage.querySelector(".popup__caption").textContent =
    cardDescriptionTitleText;

  openModal(popupTypeImage);
}