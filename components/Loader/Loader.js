class Loader {
    hideLoader() {
        ROOT_LOADER.innerHTML =""; 
    }

    render() {
        const loader = `
            <div class="loader">
                <img src="../../assets/images/loader.svg" class="loader__img" />
            </div>
        `;

        ROOT_LOADER.innerHTML = loader;
    }
}

const loader = new Loader;

