class Cart {
    closeCart() {
        ROOT_CART.innerHTML = ""; 
    }

    render() {
        const store = localStorageUtility.getProducts(); 
        let cartItems = ""; 
        let total = 0;

        DATA.forEach(({ id, name, price, image }) => {
            //если условие возращает -1, значит совпадений не найдено
            if (store.indexOf(id) !== -1) {
                cartItems += `
                        <div class="cart-item">
                            <div class="cart-item__info">
                                <img src=${image} />
                                <h4>${name}</h4>
                            </div>
                            <p>${parseInt(price).toLocaleString()} р.</p>
                        </div>
                `;
                
                total += Number(price); 
            } 
            
        });

        const cart = `
            <div class="cart">
                <header class="cart__header">
                    <div class="cart__title">
                        <img src="assets/images/cart.png" />
                        <h2>Корзина</h2>
                    </div>
                    <img src="assets/images/close.png" class="cart__close" onclick="cart.closeCart()" />
                </header>
                <div class="cart__body">${cartItems}</div>
                <footer class="cart__footer">
                    <p>ИТОГО:</p>
                    <h4>${total.toLocaleString()} р.</h4>
                </footer>
            </div>
            
        `;

        ROOT_CART.innerHTML = cart;
    }
}

const cart = new Cart; 
