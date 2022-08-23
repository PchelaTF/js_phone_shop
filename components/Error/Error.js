class Error {

    render() {
        const errorPage = `
            <div class="error__container">
                <h3>Oppps.... we have some problems</h3>
                <p>Try again later</p>
            </div>
        `;

        ROOT_ERROR.innerHTML = errorPage;
    }
}

const errorPage = new Error();