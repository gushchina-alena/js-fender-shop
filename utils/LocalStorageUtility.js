class LocalStorageUtility {
    constructor() {
        this.key = "cards"; 
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.key);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts(id) {
        console.log(id)
        let products = this.getProducts();
        let addedProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            addedProduct = true;
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.key, JSON.stringify(products));
        return { addedProduct, products };
    }
}

const localStorageUtility = new LocalStorageUtility(); 
