document.onclick = event => {
    if (event.target.dataset) {
        localStorage.setItem("products", event.target.dataset.id + "," + localStorage.getItem("products"));

        const basket = Array.from(new Set(
                localStorage.getItem("products").replace("null", "").split(',')
            )
        ).toString();

        console.log(basket);

        localStorage.setItem("products", basket);
    }
}
