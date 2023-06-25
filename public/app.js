const menu = document.querySelector(".menu");
const menuDropDown = document.querySelector(".menuContainer");
const exit = document.querySelector(".close");

menu.addEventListener("click", function () {
  menuDropDown.classList.add("active");
});

const removeDropDown = function () {
  menuDropDown.classList.remove("active");
};
menuDropDown.addEventListener("click", removeDropDown);
exit.addEventListener("click", removeDropDown);
