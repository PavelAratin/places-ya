export function createCard(card, deleteCard, likeCard, handleImageClick, cardTemplate) {
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
    handleImageClick(cardImage, cardDescriptionTitle)
  );

  return cardElement;
}

export function deleteCard(card) {
  card.remove();
}

export function likeCard(card) {
  card.classList.toggle("card__like-button_is-active");
}
