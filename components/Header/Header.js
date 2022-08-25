class Header {
    openCart() {
        cart.render();
    }

    render(count) {
        const header = `
            <header class="header">
                <img src="assets/images/brand.png" class="header__logo" />
                <div class="header__counter" onclick="header.openCart();">
                    <p>${count}</p>
                    <img src="assets/images/cart.png" class="header__cart-img" />
                </div>
            </header>
        `;
        ROOT_HEADER.innerHTML = header; 
    }
}

const header = new Header();
