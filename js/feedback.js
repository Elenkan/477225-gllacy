var feedbackButton = document.querySelector(".feedback-form");
var feedback = document.querySelector(".feedback");
var close = document.querySelector(".modal-close");
var userName = document.querySelector(".user-name-link");
feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("feedback-form-open");
  userName.focus();
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("feedback-form-open");
});