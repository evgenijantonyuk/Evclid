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


/*
   ТАБЫ
    */

let all_tabs = document.querySelectorAll('.main__tabs_link'); //получаем все табы
let tab_header = document.querySelector('.main__tab_title') //заголовок таба
let tab_text = document.querySelector('.main__tab_text') //текст таба
let tab_img = document.querySelector('.main__how-we-work.img img') //картинка таба



//хранилище данных карточек табов
let tabs_db = {
    "1 шаг": {
        "header": "Проводим консультацию",
        "text": "Влечет за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати,  стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.",
        "img_url": "how-we-work(x1)_.jpg",
    },
    "2 шаг": {
        "header": "Составляем смету",
        "text": "Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.",
        "img_url": "img/смета.jpg",
    },
    "3 шаг": {
        "header": "Привлекаем подрядчиков",
        "text": "Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.",
        "img_url": "img/подряд.jpg",
    },
    "4 шаг": {
        "header": "Инспектируем все этапы работ",
        "text": "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.",
        "img_url": "img/инсп-этапы-работ.jpg",
    }
}

all_tabs.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();

        // переключаем класс таба - меняем цвет шагов
        all_tabs.forEach(function (elem) {
            elem.classList.remove("tab-active");
        });
        el.classList.add("tab-active");

        //меняем данные нашей таб-карточки

        tab_header.innerText = tabs_db[el.innerText]['header'];
        tab_text.innerText = tabs_db[el.innerText]['text'];
        tab_img.src = `url(../img/how-we-work(x1).jpg${tabs_db[el.innerText]['img_url']}) center center no-repeat`;
        // tab_img.src = `url(../img/how-we-work(x1).jpg${tabs_db[el.innerText]['img_url']}) center center no-repeat`;
        tab_img.style.backgroundSize = 'cover';

        tab_header.innerText = tabs_db[el.innerText]['header'];
        tab_text.innerText = tabs_db[el.innerText]['text'];
        tab_img.src = `url(../img/counts.jpg${tabs_db[el.innerText]['img_url']}) center center no-repeat`;
        //tab_img.src = 'url(${tabs_db[el.innerText][' + img_url + ']})';
        tab_img.src.backgroundSize = 'cover';

        tab_header.innerText = tabs_db[el.innerText]['header'];
        tab_text.innerText = tabs_db[el.innerText]['text'];
        tab_img.style.background = `url(../img/подряд.jpg${tabs_db[el.innerText]['img_url']}) center center no-repeat`;
        tab_img.style.backgroundSize = 'cover';

        tab_header.innerText = tabs_db[el.innerText]['header'];
        tab_text.innerText = tabs_db[el.innerText]['text'];
        tab_img.style.background = `url(../img/инсп-этапы-работ.jpg${tabs_db[el.innerText]['img_url']}) center center no-repeat`;
        tab_img.style.backgroundSize = 'cover';
    });
});

