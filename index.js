//alert("Hi")
let text = document.querySelector(".main__about-us-text");  //для одного элемента
text.style.color = 'red';

document.querySelectorAll(".footer__link").forEach(function (element) {
    element.style.color = "blue";                                         //для всех эл-тов массива
})

let block = document.querySelector(".main__how-we-work-img");
block.classList.add("translate");           //смена классов в js


let burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
    burger.classList.toggle("active");
})

let head__list-items = document.querySelector(".head__list-items");
head__list-items.addEventListener("click", function () {
    head__list-items.classList.toggle("active");
})