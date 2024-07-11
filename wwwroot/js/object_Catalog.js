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


function createProductCard(productId, productName, price, imageUrl) {
    // Создаем контейнер для карточки товара
    const card = document.createElement('div');
    card.classList.add('obj_card');

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
    button.dataset.product = "{&quot;id&quot;:&quot;8&quot;,&quot;name&quot;:&quot;кофта&quot;,&quot;title&quot;:&quot;кофта&quot;,&quot;description&quot;:&quot;&quot;,&quot;fullDescription&quot;:&quot;&quot;,&quot;price&quot;:&quot;10&quot;,&quot;oldPrice&quot;:&quot;&quot;,&quot;quantity&quot;:1,&quot;currency&quot;:&quot;EGP&quot;,&quot;sku&quot;:&quot;&quot;,&quot;outOfStock&quot;:false,&quot;isFeatured&quot;:false,&quot;categories&quot;:[],&quot;images&quot;:[{&quot;url&quot;:&quot;images/photo_2024-06-10_15-55-352.jpg&quot;}],&quot;created&quot;:1718034265943,&quot;updated&quot;:1718048910032,&quot;isDefault&quot;:false,&quot;categoriesData&quot;:[{&quot;link&quot;:&quot;./products/products.html#/1///&quot;,&quot;title&quot;:&quot;Uncategorized&quot;}]}"
    button.textContent = 'Add to basket';
    card.appendChild(button);

    return card;
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
window.onload = function() {
    main();
}