import { handleEscape } from "../handleEscape/handleEscape.js";

export function openModal(modal) {
  modal.classList.add("popup_is-animated");
  setTimeout(() => {
    modal.classList.add("popup_is-opened");
  }, 1);
  document.addEventListener("keydown", handleEscape);
}

export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscape);
}