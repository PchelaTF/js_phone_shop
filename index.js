function render() {
    const productsStore = localStorageUtil.getProducts();
    let counter = productsStore.length;

    pageHeader.render(counter);
    pageProducts.render();
}

preloader.render();

let CATALOG = [];

// 'server/catalog.json'
// 'http://myjson.dit.upm.es/api/bins/fwxc'
fetch('https://raw.githubusercontent.com/PchelaTF/js_phone_shop/resources/server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        preloader.preloaderHide();
        render();
    })
    .catch(error => {
        preloader.preloaderHide();
        errorPage.render();
    });