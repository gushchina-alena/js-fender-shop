class Error {
    render() {
        const error = `
            <div class="error">
                <h3>Что-то пошло не так :(</h3>
                <img src="../../assets/images/404.gif" />
            </div>
        `;

        ROOT_ERROR.innerHTML = error;
    }
}

const error = new Error();  
