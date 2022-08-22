class Basket {

    hendleClear() {
        ROOT_BASKET.innerHTML = '';
        document.body.classList.remove('_lock');
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let catalogBasket = '';
        let totalPrice = 0;

        CATALOG.forEach(({ id, name, img, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                catalogBasket += `
                        <div class="basket__item">
                            <img class="basket__item-img" src="${img}" alt="${name}">
                            <div class="basket__item-desc">${name}</div>
                            <div class="basket__item-price">${price} $</div>
                        </div>
                `;

                totalPrice += +price;
            }
        });

        let pageBasket = `
            <div class="basket__wrapper" onclick="pageBasket.hendleClear()">
                <div class="basket__container">
                    <div class="basket__header">
                        <h2 class="basket__title">Basket</h2>
                        <div class="basket__close" onclick="pageBasket.hendleClear()">X</div>
                    </div>
                    <div class="basket__body">${(catalogBasket) ? catalogBasket : 'Select your device'}</div>
                    <div class="basket__footer">
                        <div class="basket__total">Total price: <span>${totalPrice} $</span></div>
                    </div>
                </div>
            </div>  
        `;

        document.body.classList.add('_lock');

        ROOT_BASKET.innerHTML = pageBasket;
    }
}

const pageBasket = new Basket();