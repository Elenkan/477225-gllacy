var sliderOne = document.querySelector(".slider-item:first-child");
var sliderTwo = document.querySelector(".slider-item:nth-child(2)");
var sliderThree = document.querySelector(".slider-item:last-child");
var btnOne = document.querySelector(".sliderOne-button");
var btnTwo = document.querySelector(".sliderTwo-button");
var btnThree = document.querySelector(".sliderThree-button");
btnOne.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderOne.classList.remove("slider-close");
  sliderTwo.classList.add("slider-close");
  sliderThree.classList.add("slider-close");
  btnThree.classList.remove("active-slider-button");
  btnTwo.classList.remove("active-slider-button");
});
btnTwo.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderOne.classList.add("slider-close");
  btnOne.classList.remove("active-slider-button");
  sliderThree.classList.add("slider-close");
  sliderTwo.classList.remove("slider-close");
  btnTwo.classList.add("active-slider-button");
  btnThree.classList.remove("active-slider-button");
});
btnThree.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderOne.classList.add("slider-close");
  sliderTwo.classList.add("slider-close");
  btnTwo.classList.remove("active-slider-button");
  sliderThree.classList.remove("slider-close");
  btnThree.classList.add("active-slider-button");
});