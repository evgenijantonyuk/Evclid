//alert("Hi")
let text = document.querySelector(".main__about-us-text");  //для одного элемента
text.style.color = 'red';

document.querySelectorAll(".footer__link").forEach(function (element) {
    element.style.color = "blue";                                         //для всех эл-тов массива
})

let block = document.querySelector(".main__how-we-work-img");
block.classList.add("translate");           //смена классов в js

//burger-menu

let burger = document.querySelector(".burger");

let head__list_items = document.querySelector(".head__list_items");


burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    head__list_items.classList.toggle("active");
})

//всплывающее поле поиска

document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('open-search-form').addEventListener('click', (e) => {
        document.getElementById('head__search-form').classList.add('head__search_form-show')
    })

    document.getElementById('head__search_form-close').addEventListener('click', (e) => {
        document.getElementById('head__search-form').classList.remove('head__search_form-show')
    })

    document.getElementById('head__search-form').addEventListener('submit', (e) => {
        e.preventDefault()
    })
})

//табы

// let tabsBtn = document.querySelectorAll('.tabs__nav_btn');
// let tabItem = document.querySelectorAll('.main__tabs_nav_item');

// tabsBtn.forEach(function (element) {
//     element.addEventListener('click', function (e) {
//         const path = e.currentTarget.dataset.path;

//         tabsBtn.forEach(function (btn) { btn.classList.remove('tabs__nav_btn:active') });
//         e.currentTarget.classList.add('tabs__nav_btn:active');

//         tabItem.forEach((element) => { element.classList.remove('main__tabs_item:active') });
//         document.querySelector('[data-target="${path}"]').classList.add('main__tabs_item:active');
//     });
// });

document.querySelectorAll('.main__tabs_nav_item').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.tabs__nav_btn').forEach(function (btn) {
            btn.classList.remove('tabs__nav_btn:active')
        });
            e.currentTarget.classList.add('tabs__nav_btn:active');

        document.querySelectorAll('.main__tabs_item').forEach(function (tabsBtn) {
            tabsBtn.classList.remove('main__tabs_item:active')
        });
            document.querySelector('[data-target="${path}"]').classList.add('main__tabs_item:active');
        });
    });