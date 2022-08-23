class Error {

    render() {
        const errorPage = `
            <h3>Oppps.... we have some problems</h3>
            <p>Try again later</p>
        `;

        ROOT_ERROR.innerHTML = errorPage;
    }
}

const errorPage = new Error();