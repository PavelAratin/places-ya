https://github.com/Alexander-Kozhemyakin/mesto-project-ff.git
1. Навести порядок в индекс
//лишние переменные
// const newName = document.querySelector(".popup__input_type_name");
// const newJob = document.querySelector(".popup__input_type_description");

//при вызове попапа изменении профиля записывает в инпуты значения
editButton.addEventListener("click", () => {
  // nameInput.value = profileTitle.textContent;
  // jobInput.value = profileDescription.textContent;
  openModal(popupTypeEdit);
});