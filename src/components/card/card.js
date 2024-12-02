import { addLikeCardApi, deleteCardApi, deleteLikeCardApi } from "../api/api";

export function createCard(card, deleteCard, likeCard, handleImageClick, cardTemplate, cardId) {

  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardDescriptionTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector('.card__like-button');
  const likeCardCounter = cardElement.querySelector('.card__likes-number');

  cardDescriptionTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  if (card.owner._id === cardId) {
    deleteButton.classList.add('card__delete-button_active')
    deleteButton.addEventListener("click", () => deleteCard(card, deleteButton));
  }
  likeCardCounter.textContent = card.likes.length
  //проверка, если есть наш лайк то навешиваем класс
  card.likes.forEach((like) => {
    if (like._id === cardId) {
      likeButton.classList.add('card__like-button_is-active');
    }
  })



  cardLikeButton.addEventListener("click", (evt) => likeCard(cardLikeButton, card, likeCardCounter));

  cardImage.addEventListener("click", () =>
    handleImageClick(cardImage, cardDescriptionTitle)
  );

  return cardElement;
}

export function deleteCard(card, deleteButton) {
  const currentPlaceElement = deleteButton.closest('.places__item');

  deleteCardApi(card._id)
    .then((res) => {
      currentPlaceElement.remove();
    })
    .catch((err) => console.log(err))
}

export function likeCard(cardLikeButton, card, likeCardCounter) {
  //поменять на клосест
  if (cardLikeButton.closest('.card__like-button_is-active')) {
    deleteLikeCardApi(card._id)
      .then((res) => {
        cardLikeButton.classList.toggle('card__like-button_is-active')
        likeCardCounter.textContent = res.likes.length
      })
  } else {
    addLikeCardApi(card._id)
      .then((res) => {
        cardLikeButton.classList.toggle('card__like-button_is-active')
        likeCardCounter.textContent = res.likes.length
      })
      .catch((err) => console.log(err))
  }
}
