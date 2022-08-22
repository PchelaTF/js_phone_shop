function render() {
    const productsStore = localStorageUtil.getProducts();
    let counter = productsStore.length;

    pageHeader.render(counter);
    pageProducts.render();
}

render()