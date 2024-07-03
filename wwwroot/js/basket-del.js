document.onclick = event => {
    if (event.target.dataset) {
        const indexToRemove = event.target.dataset.id;

        let basket = localStorage.getItem("products");

        basket = basket.split(',')
            .filter(el => el !== "")
            .filter(el => el !== "null")
            .filter(el => el !== "undefined")
            .filter(element => element !== indexToRemove);

        localStorage.setItem("products", basket.join(','));
        location.reload();
    }
};