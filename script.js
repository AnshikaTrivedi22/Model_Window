"use strict";
const showModel = document.querySelectorAll(".show-model");
const overlay = document.querySelector(".overlay");
const model = document.querySelector(".model");
const btnClose = document.querySelector(".model-close");
const addtheModel = function () {
  model.classList.remove("hidden");//we do not use a dot operator here
  overlay.classList.remove("hidden");
};
const closetheModel = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < showModel.length; i++)
  showModel[i].addEventListener("click", addtheModel);
btnClose.addEventListener("click", closetheModel); //here we are just passing the function and not calling the function because we do not want it to get executed as soon as page is loaded;
overlay.addEventListener("click", closetheModel);
document.addEventListener("keydown",function(e){
   if(e.key==="Escape" && !model.classList.contains("hidden")){
    closetheModel();
   }
});