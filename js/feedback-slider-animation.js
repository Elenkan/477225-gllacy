var feedbackButton = document.querySelector(".feedback-form");
var feedback = document.querySelector(".feedback");
var feedbackForm = feedback.querySelector("form");
var modalClose = document.querySelector(".modal-close");
var userName = document.querySelector(".user-name-link");
var userMail = document.querySelector(".user-feedback-email");
var userComment = document.querySelector(".user-feedback-comment");
var isStorageSupport = true;
var storageName = "";
var storageMail = "";
var sliderOne = document.querySelector(".slider-item:first-child");
var sliderTwo = document.querySelector(".slider-item:nth-child(2)");
var sliderThree = document.querySelector(".slider-item:last-child");
var btnOne = document.querySelector(".slider-one-button");
var btnTwo = document.querySelector(".slider-two-button");
var btnThree = document.querySelector(".slider-three-button");
try {
  storageName = localStorage.getItem("userName");
  storageMail = localStorage.getItem("userMail");
} catch (err) {
  isStorageSupport = false;
}
feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("feedback-form-open");
  if (storageName && storageMail) {
    userName.value = storageName;
    userMail.value = storageMail;
    userComment.focus();
  } else {
    userName.focus();
  }
});
feedbackForm.addEventListener("submit", function (evt) {
  if (! userName.value || ! userMail.value || ! userComment.value) {
    evt.preventDefault();
    feedback.classList.remove("modal-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userMail", userMail.value);
    }
  }
});
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("feedback-form-open");
  feedback.classList.remove("modal-error");
});
btnOne.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderOne.classList.remove("slider-close");
  sliderTwo.classList.add("slider-close");
  sliderThree.classList.add("slider-close");
  btnThree.classList.remove("active-slider-button");
  btnTwo.classList.remove("active-slider-button");
  document
    .body
    .style
    .backgroundColor = "#849d8f";
});
btnTwo.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderOne.classList.add("slider-close");
  btnOne.classList.remove("active-slider-button");
  sliderThree.classList.add("slider-close");
  sliderTwo.classList.remove("slider-close");
  btnTwo.classList.add("active-slider-button");
  btnThree.classList.remove("active-slider-button");
  document
    .body
    .style
    .backgroundColor = "#8996a6";
});
btnThree.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderOne.classList.add("slider-close");
  sliderTwo.classList.add("slider-close");
  btnTwo.classList.remove("active-slider-button");
  sliderThree.classList.remove("slider-close");
  btnThree.classList.add("active-slider-button");
  document
    .body
    .style
    .backgroundColor = "#9d8b84";
});