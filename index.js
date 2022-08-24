//функция которая рендерит первоначальные данные 
const render = () => {
    //получение количества товаров
    const cartIconData = localStorageUtility.getProducts();

    header.render(cartIconData.length);
    cards.render();
}

loader.render(); 

let DATA = [];

//http://myjson.dit.upm.es/api/bins/idns
fetch("./server/data.json")
    .then(res => res.json())
    .then(body => {
        DATA = body;
        loader.hideLoader();
        render(); 
    })
    .catch(err => {
        loader.hideLoader();
        error.render();
    })
