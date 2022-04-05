'use ctrict';

const basketEl = document.querySelector('.basket');
const basketCounterEl = document.querySelector('.cartIconWrap span');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const basketTotalEl = document.querySelector('.basketTotal');

document.querySelector('.cartIconWrap').addEventListener('click', () => {
    basketEl.classList.toggle('hidden');
});

const basket = {};

document.querySelector('.featuredItems').addEventListener('click', event => {
    if (!event.target.closest('.addToCart')) {
        return;
    }
    const featuredItem = event.target.closest('.featuredItem');
    const id = +featuredItem.dataset.id;
    const name = featuredItem.dataset.name;
    const price = +featuredItem.dataset.price;
    addToCart(id, name, price);
});

function addToCart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = { id, name, price, count: 0 };
    }
    basket[id].count++;
    basketCounterEl.textContent = getTotalBasketCountUnits();
    basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
    renderProductInBasket(id);

}

function getTotalBasketCountUnits() {
    return Object.values(basket).reduce((sum, product) =>
        sum + product.count, 0);
}
function getTotalBasketPrice() {
    return Object.values(basket).reduce((sum, product) =>
        sum + product.count * product.price, 0)
}

function renderProductInBasket(id) {
    const basketRowEl = basketEl
        .querySelector(`.basketRow[data-productID="${id}"]`);
    if (!basketRowEl) {
        renderNewProductInBasket(id);
    }
    basketRowEl.querySelector('.productCount').
        textContent = basket[id].count;
    basketRowEl.querySelector('.productTotalRow').
        textContent = (basket[id].count * basket[id].price).toFixed(2);

}

function renderNewProductInBasket(productId) {
    const productRow = `
            <div class="basketRow" data-productID="${productId}">
        <div>${basket[productId].name}</div>
        <div>
            <span class="productCount">${basket[productId].count}</span> шт.
        </div>
        <div>${basket[productId].price}</div>
        <div>
          $<span class="productTotalRow">${(basket[productId].price *
            basket[productId].count)}
        </div>
    </div >
        `;
    basketTotalEl.insertAdjacentHTML('beforebegin', productRow);
}