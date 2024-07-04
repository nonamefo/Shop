function createProductCard(productId, productName, price, imageUrl) {
    // Создаем контейнер для карточки товара
    const card = document.createElement('div');
    card.style.marginBottom = '20px'; 
    card.style.marginLeft = '25px';
    card.style.marginRight = '25px';
    card.style.textAlign = 'center';
    card.style.width = 'auto'; // Добавлен стиль ширины для карточки


    requestAnimationFrame(() => { 
        card.classList.add('obj_card');
    });

    // Создаем контейнер для горизонтального размещения элементов
    const contentContainer = document.createElement('div');
    contentContainer.style.display = 'flex'; 
    contentContainer.style.alignItems = 'center'; 
    card.appendChild(contentContainer);

    // Создаем ссылку на страницу товара
    const link = document.createElement('a');
    link.href = `/products/${productId}`; 
    contentContainer.appendChild(link); 

    // Создаем изображение
    const img = document.createElement('img');
    img.classList.add('obj_img');
    img.src = imageUrl;
    img.style.marginRight = '20px'; // Отступ справа от изображения
    link.appendChild(img);

    // Создаем элемент с описанием
    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.marginLeft = '20px'; // Отступ слева от описания

    const nameElement = document.createElement('h3'); 
    nameElement.textContent = productName;
    descriptionContainer.appendChild(nameElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = price;
    descriptionContainer.appendChild(priceElement);

    contentContainer.appendChild(descriptionContainer);

    // Создаем кнопку "Добавить в корзину"
    const button = document.createElement('button');
    button.classList.add('obj_button');
    button.dataset.id = productId;
    button.style.marginLeft = '70px'; 


    // Создаем изображение для кнопки
    const buttonImage = document.createElement('img'); 
    buttonImage.src = '/images/bin.png'; // Замените на ваш путь к изображению
    buttonImage.style.width = '100%'; // Занимает всю ширину кнопки 
    button.appendChild(buttonImage); // Добавляем изображение в кнопку

    contentContainer.appendChild(button); 

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
        const catalogContainer = document.querySelector('.basket'); // Получаем элемент
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