function createProductCard(productId, productName, price, imageUrl) {
    // Создаем контейнер для карточки товара
    const card = document.createElement('div');
    card.style.marginBottom = '100px';
    card.style.marginLeft = '25px';
    card.style.marginRight = '25px';
    card.style.textAlign = 'center';
    card.style.width = '300px';
    setTimeout(() => { // Запускаем функцию с задержкой в 0 мс
        card.classList.add('obj_card');
    }, 0);

    // Создаем ссылку на страницу товара
    const link = document.createElement('a');
    link.href = `products/${productId}`;
    card.appendChild(link);

    // Создаем изображение
    const img = document.createElement('img');
    img.classList.add('obj_img');
    img.src = imageUrl;
    link.appendChild(img);

    // Создаем элемент с ценой
    const priceElement = document.createElement('p');
    priceElement.textContent = price;
    card.appendChild(priceElement);

    // Создаем кнопку "Добавить в корзину"
    const button = document.createElement('button');
    button.classList.add('obj_button');
    button.dataset.id = productId;
    button.textContent = 'Add to basket';
    card.appendChild(button);

    return card;
}

async function API_get() {
    try {
        var data = await fetch("http://localhost:8080/products")
            .then(resp => resp.json());
        return data["products"];
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        return null; // Или другой результат, если нужно
    }
}

async function main() {
    var data = await API_get();
    if (data) {
        console.log(Object.keys(data).length);
        const catalogContainer = document.querySelector('.catalog'); // Получаем элемент
        data.forEach(element => {
            const card = createProductCard(element["id"], element["name"], element["price"], element["images"][0]["url"]);
            catalogContainer.appendChild(card); // Добавляем карточку на страницу
        });
    } else {
        // Обработайте случай, если data == null
    }
}

main(); 
