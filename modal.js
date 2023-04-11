let openButtonClass = ".open-modal";
let closeButtonClass = ".close-modal-icon";
let modalWindowClass = ".modal-window";
let openButton = document.querySelector(openButtonClass);
let closeButton = document.querySelector(closeButtonClass);
let modalWindow = document.querySelector(modalWindowClass);

openButton.addEventListener("click", (e) => {
  modalWindow.classList.toggle("show");
});

closeButton.addEventListener("click", (e) => {
  modalWindow.classList.toggle("show");
});
