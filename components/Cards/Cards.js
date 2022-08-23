class Cards {
    constructor() {
        this.btnActiveStyle = "card__btn_active"; 
        this.btnAdd = "Добавить в корзину"; 
        this.btnRemove = "Удалить из корзины"; 
    }

    onBuyClick(currentItem, id) {
        const { addedProduct, products} = localStorageUtility.putProducts(id); 

        if (addedProduct) {
            currentItem.classList.add(this.btnActiveStyle); 
            currentItem.innerHTML = this.btnRemove; 
        } else {
            currentItem.classList.remove(this.btnActiveStyle); 
            currentItem.innerHTML = this.btnAdd; 
        }
        header.render(products.length); 
    }

    render () {
        const store = localStorageUtility.getProducts(); 
        let cards = ""; 

        DATA.forEach(({ id, name, image, price }) => {
            let activeClass = "";
            let activeText = "";

            if(store.indexOf(id) === -1) {
                activeText = this.btnAdd;
            } else {
                activeClass = this.btnActiveStyle;
                activeText = this.btnRemove;
            }

            cards += `
                <li class="card">
                    <h3 class="card__title">${name}</h3>
                    <img src=${image} class="card__img" />
                    <p class="card__price">${price}</p>
                    <button class="card__btn ${activeClass}" onclick="card.onBuyClick(this, '${id}');">${activeText}</button>
                </li>
            `;
        });

        const cardsComponent = `
            <ul class="cards">${cards}</ul>
        `; 

        ROOT_CARDS.innerHTML = cardsComponent;
    }
}

const card = new Cards();
card.render();
