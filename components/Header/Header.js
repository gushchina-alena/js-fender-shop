class Header {
    render(count) {
        const header = `
            <header class="header">
                <img src="../../assets/images/brand.png" class="header__logo" />
                <div class="header__counter">
                    <p>${count}</p>
                    <img src="../../assets/images/cart.png" class="header__cart-img" />
                </div>
            </header>
        `;
        ROOT_HEADER.innerHTML = header; 
    }
    
}

const cartIconData = localStorageUtility.getProducts();
const header = new Header();
header.render(cartIconData.length);