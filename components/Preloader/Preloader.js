class Preloader {

    preloaderHide() {
        ROOT_PRELOADER.innerHTML = '';
    }

    render() {
        const preloaderPage = `
        <div class="preloader__container">
            <img src="components/Preloader/img/preloader.svg" alt="preloader" class="preloader__img">
        </div>
        `;

        ROOT_PRELOADER.innerHTML = preloaderPage;
    }
}

const preloader = new Preloader();