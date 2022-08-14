class Products {
    constructor() {
        this.actveClass = '_active';
        this.labelAdd = 'Add to basket';
        this.labelRemove = 'Remove from basket';
    }

    handelSetLocalStorage(element, id) {
        let { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.actveClass);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.actveClass);
            element.innerHTML = this.labelAdd;
        }
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let catalogProducts = '';

        CATALOG.forEach(({ id, name, img, price }) => {
            let activeClass = '';
            let buttonText = '';

            if (productsStore.indexOf(id) === -1) {
                buttonText = this.labelAdd;
            } else {
                activeClass = ' ' + this.actveClass;
                buttonText = this.labelRemove;
            }

            catalogProducts += `
                <li class="item">
                    <h4 class="item__name">${name}</h4>
                    <div class="item__image">
                        <img src="${img}" alt="phone">
                    </div>
                    <p class="item__price">Price: <span>${price}</span> $</p>
                    <button class="item__button${activeClass}" onclick="pageProducts.handelSetLocalStorage(this, '${id}')">${buttonText}</button>
                </li>
            `;
        });

        const productsItems = document.createElement('ul');
        productsItems.classList.add('products__items');

        ROOT_PRODUCTS.appendChild(productsItems);

        productsItems.innerHTML = catalogProducts;
    }
}

const pageProducts = new Products();
pageProducts.render();


// 1. Добавляем активный класс для кнопки
// 2. Активный текст для кнопки
// 3. Добавляем localStorageUtil.getProducts
// 4. IndexOf id Проверка
// 5. добавляем обработчик события на кнопку onclick c медотодом
// 6. создаем метод для кнопки
// метод вызывается через экземпляр класса
// 7. в метод при клике передаём this
// 8. в метод для кнопки передаем метод который будет помещать значение в локал
