document.onclick = event => {
    if (event.target.dataset.id) {
        const indexToRemove = event.target.dataset.id;

        let basket = localStorage.getItem("products");

        if (basket) {
            basket = basket.replace("null,", "").split(',').filter(el => el !== "");

            const updatedBasket = basket.filter(element => element !== indexToRemove);

            localStorage.setItem("products", updatedBasket.join(','));
        }
    }
};