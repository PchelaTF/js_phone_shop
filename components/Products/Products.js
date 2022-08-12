class Products {

    render() {
        let catalogProducts = '';

        CATALOG.forEach(({ id, name, img, price }) => {
            catalogProducts += `
                <li class="item">
                    <h4 class="item__name">${name}</h4>
                    <div class="item__image">
                        <img src="${img}" alt="phone">
                    </div>
                    <p class="item__price">Price: <span>${price}</span> $</p>
                    <button class="item__button">Add to basket</button>
                </li>
            `;
        });

        const productsItems = document.createElement('ul');
        productsItems.classList.add('products__items');

        ROOT_PRODUCTS.appendChild(productsItems);

        productsItems.innerHTML = catalogProducts;
    }
}

const products = new Products();
products.render();