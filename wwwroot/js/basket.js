async function API_get() {
    try {
        var data = await fetch("https://0e2b-185-145-125-201.ngrok-free.app/products")
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
    card.style.marginBottom = '20px'; 
    card.style.marginLeft = '25px';
    card.style.marginRight = '25px';
    card.style.textAlign = 'center';
    card.style.width = 'auto'; // Задаем фиксированную ширину для карточки
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
    link.href = `/products/${productId}`; // Исправлена ошибка в строке
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

    // Создаем кнопку "Удалить из корзины"
    const button = document.createElement('button');
    button.classList.add('obj_button');
    button.dataset.id = productId;
    button.style.marginLeft = '70px'; 

    // Создаем изображение для кнопки
    const buttonImage = document.createElement('img'); 
    buttonImage.src = '/images/bin.png'; 
    buttonImage.style.width = '100%'; 
    buttonImage.dataset.id = productId; 
    buttonImage.classList.add('obj_bin'); 
    button.appendChild(buttonImage); 

    contentContainer.appendChild(button); 

    return card;
}

function createOrderButton() {
    const link = document.createElement('a');
    link.classList.add('a_order'); // Добавление класса
    link.href = '/Making-an-order';

    const button = document.createElement('button');
    button.classList.add('order');
    button.id = 'theid';
    
    button.textContent = 'Offerm order';
    link.appendChild(button);
    return link;
}

function emptyBasket() {
    // Создаем контейнер для карточки товара
    const card = document.createElement('div');
    card.style.margin = '0 auto';
    card.style.marginBottom = '150px';
    card.style.textAlign = 'center';
    card.style.width = '300px'; // Задаем фиксированную ширину для карточки
    
    requestAnimationFrame(() => { 
        card.classList.add('obj_card');
    });

    const contentContainer = document.createElement('div');
    contentContainer.style.display = 'flex'; 
    contentContainer.style.alignItems = 'center'; 
    card.appendChild(contentContainer);

    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.marginLeft = '20px';

    const nameElement = document.createElement('h3'); 
    nameElement.textContent = 'Your basket is empty. Fill it to make an orderr';
    descriptionContainer.appendChild(nameElement);

    contentContainer.appendChild(descriptionContainer); 

    return card;
}

async function main() {
    var data = await API_get();
    const binContainer = document.querySelector('.basket');

    const localStorageIds = localStorage.getItem("products"); // Получаем ID из localStorage
    const ids = localStorageIds ? localStorageIds.split(',').filter(id => id !== "" && id !== "undefined") : []; 

    data = data.filter(product => ids.includes(product.id));
    console.log(data);
    if ((Object.keys(data).length === 0)){
        var basket = emptyBasket();
        binContainer.appendChild(basket);
    } else{
        data.forEach(element => {
            var objects = createProductCard(element["id"], element["name"], element["price"], element["images"][0]["url"]);
            binContainer.appendChild(objects);
            
        });


        var btn = createOrderButton();
        binContainer.appendChild(btn);  
    }
}

window.onload = function() {
    main();
}