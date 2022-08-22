class Header {
    handleropenShoppingPage() {
        pageBasket.render();
    }

    render(counter) {
        const headerHTML = `
            <div class="header__container">
                <h1 class="header__logo">iPhone <span>shope</span></h1>
                <p class="header__text">Select your style</p>
                <div class="header__basket">
                    <div class="header__basket-container" onclick="pageHeader.handleropenShoppingPage()">
                        <img src="img/order-processed.png" alt="basket">
                        <span class="header__counter">${counter}</span>
                    </div>
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = headerHTML;
    }

}

const pageHeader = new Header();
