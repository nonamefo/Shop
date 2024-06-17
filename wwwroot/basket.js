async function loadProducts() {
    try {
        var lst;
        lst = await fetch("http://localhost:8080/products")
            .then(resp => resp.json());

        console.log("1");

        // Теперь вы можете использовать lst

        var div = document.createElement("div");

        try {
            const num_lst = localStorage.getItem("products").split(',');
            console.log(num_lst);
            const num = num_lst.filter(element => element !== "" && element !== "undefined");
            console.log(num);
            if (num.length === 1 && (num[0] === "")) {
                div.style.width = "100px";
                div.style.height = "100px";
                div.style.display = "flex";
                div.style.justifyContent = "center";
                div.style.alignItems = "center";
                div.style.textAlign = "center";
                div.style.marginBottom = "100px";
                div.innerHTML = "Your basket is empty";
                document.getElementById('basket').appendChild(div);
            } else if (num.length === 0) {
                div.style.width = "100px";
                div.style.height = "100px";
                div.style.display = "flex";
                div.style.justifyContent = "center";
                div.style.alignItems = "center";
                div.style.textAlign = "center";
                div.style.marginBottom = "100px";
                div.innerHTML = "Your basket is empty";
                document.getElementById('basket').appendChild(div);
            } else {
                num.forEach(id => {
                    var div = document.createElement("div");
                    const i = lst.products.find(p => p.id === id);
                    div.classList.add("product-item");

                    if (i) {
                        div.style.padding = "40px";
                        div.innerHTML = `
                            <img src="${i.images[0].url}" alt="${i.name}" width="150">
                            <h2>${i.name}</h2>
                            <p>${i.description}</p>
                            <p>Price: ${i.price}</p>
                            <button data-id="${i.id}">
                                <img data-id="${i.id}" src="images/bin.png" width="20">
                            </button>
                          `;
                        document.getElementById('basket').appendChild(div);
                    }
                });
            }
        } catch (error) {
            console.error('Ошибка при чтении localStorage:', error);
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

// Вызываем функцию
loadProducts();
