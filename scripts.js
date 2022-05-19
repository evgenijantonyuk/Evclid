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

let all_tabs = document.querySelectorAll('.main__tabs_link'); //получаем все табы

let tab_header = document.querySelector('.main__tab_title') //заголовок таба

let tab_text = document.querySelector('.main__tab_text') //текст таба

let tab_img = document.querySelector('.img__adaptive') //картинка таба

//хранилище данных карточек табов

let tabs_db = {

    "1 шаг": {

        "header": "Проводим консультацию",

        "text": "Влечет за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати,  стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.",

        "img_url": "img/tab1.jpg",

    },

    "2 шаг": {

        "header": "Составляем смету",

        "text": "Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.",

        "img_url": "img/tab2.jpg",

    },

    "3 шаг": {

        "header": "Привлекаем подрядчиков",

        "text": "Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.",

        "img_url": "img/tab3.jpg",

    },

    "4 шаг": {

        "header": "Инспектируем все этапы работ",

        "text": "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.",

        "img_url": "img/tab4.jpg",

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

        tab_img.src = tabs_db[el.innerText]['img_url']

        // tab_img.style.backgroundSize = 'cover';

    });

});

let swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    slidesPerGroupe: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

// Accordion

let accordion = document.getElementById('accordion');
accordion.addEventListener('click', change);
function change(event) {
    let targ = event.target;
    if (targ.tagName !== 'H3') return;
    if (targ.classList.contains('select')) {
        hideAll();
    } else {
        hideAll();
        targ.classList.add('select');
        showText(targ.nextElementSibling);
    }
}
function hideAll() {
    let h3El = accordion.querySelectorAll('h3');
    let divEl = accordion.querySelectorAll('div');
    for (let i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('select');
    }
    for (let i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
    }
}
function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px';
}
