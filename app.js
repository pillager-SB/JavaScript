'use strict';
// Генератор параметров для контента,
// создан в целях демонстраци разных товаров на странице.
// к названию добавляю решетку и индекс элемента.
// цена генерируется из псевдослучайного цисла диапазона (150 - 25),
// не включая 150.
// для кнопок добавления в корзину добавляем класс addToCart.
// Для удобства создаю data-атрибуты для каждого элемента .featuredItem.
const featuredItemElems = document.querySelectorAll('.featuredItem');
featuredItemElems.forEach((elem, index) => {
    elem.querySelector('button').classList.add('addToCart');
    let featuredName = elem.querySelector('.featuredName');
    featuredName.innerHTML = featuredName.innerHTML.trim() + ' #0' + (1 + index);
    let featuredPrice = elem.querySelector('.featuredPrice');
    let elemPrice = (Math.random() * (150.00 - 25.00) + 25.00).toFixed(2);
    featuredPrice.innerHTML = '$' + elemPrice;
    elem.dataset.id = 1 + index;
    elem.dataset.name = featuredName.innerHTML;
    elem.dataset.price = elemPrice;
});


let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});