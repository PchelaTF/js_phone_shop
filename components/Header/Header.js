class Header {

    render(counter) {
        const headerHTML = `
            <div class="header__container">
                <h1 class="header__logo">iPhone <span>shope</span></h1>
                <p class="header__text">Select your style</p>
                <div class="header__basket">
                    <img src="img/order-processed.png" alt="basket">
                    <span class="header__counter">${counter}</span>
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = headerHTML;
    }

}

const pageHeader = new Header();
const productsStore = localStorageUtil.getProducts();
let counter = productsStore.length;
pageHeader.render(counter);