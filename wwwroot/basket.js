const lst = {
    "products": [
        {
            "id": "8",
            "name": "кофта",
            "title": "кофта",
            "description": "",
            "fullDescription": "",
            "price": "10",
            "oldPrice": "",
            "quantity": 1,
            "currency": "EGP",
            "sku": "",
            "outOfStock": false,
            "isFeatured": false,
            "categories": [],
            "images": [
                {
                    "url": "/images/photo_2024-06-10_15-55-352.jpg?rand=94f2"
                }
            ],
            "created": 1718034265943,
            "updated": 1718048910032,
            "isDefault": false
        },
        {
            "id": "6",
            "name": "платье",
            "title": "платье",
            "description": "",
            "fullDescription": "",
            "price": "10",
            "oldPrice": "",
            "quantity": 1,
            "currency": "EGP",
            "sku": "",
            "outOfStock": false,
            "isFeatured": false,
            "categories": [
                "1",
                "6"
            ],
            "images": [
                {
                    "url": "/images/photo_2024-06-10_15-55-35.jpg?rand=0963"
                }
            ],
            "created": 1718033339973,
            "updated": 1718048870103,
            "isDefault": false
        },
        {
            "id": "5",
            "name": "костюм-1",
            "title": "костюм-1",
            "description": "",
            "fullDescription": "",
            "price": "10",
            "oldPrice": "",
            "quantity": 1,
            "currency": "EGP",
            "sku": "",
            "outOfStock": false,
            "isFeatured": false,
            "categories": [
                "1",
                "4"
            ],
            "images": [
                {
                    "url": "/images/photo_2024-06-10_15-55-342.jpg?rand=3a5d"
                }
            ],
            "created": 1718033185618,
            "updated": 1718048855078,
            "isDefault": false
        },
        {
            "id": "4",
            "name": "футболка-3",
            "title": "футболка-3",
            "description": "",
            "fullDescription": "",
            "price": "10",
            "oldPrice": "",
            "quantity": 1,
            "currency": "EGP",
            "sku": "",
            "outOfStock": false,
            "isFeatured": false,
            "categories": [
                "1",
                "5"
            ],
            "images": [
                {
                    "url": "/images/photo_2024-06-10_15-55-362.jpg?rand=5069"
                }
            ],
            "created": 1718033168208,
            "updated": 1718048839961,
            "isDefault": false
        },
        {
            "id": "3",
            "name": "футболка-2",
            "title": "футболка-2",
            "description": "",
            "fullDescription": "",
            "price": "10",
            "oldPrice": "",
            "quantity": 1,
            "currency": "EGP",
            "sku": "",
            "outOfStock": false,
            "isFeatured": false,
            "categories": [],
            "images": [
                {
                    "url": "/images/photo_2024-06-10_15-55-372.jpg?rand=cdc0"
                }
            ],
            "created": 1718033060079,
            "updated": 1718048827674,
            "isDefault": false
        },
        {
            "id": "2",
            "name": "футболка-1",
            "title": "футболка-1",
            "description": "",
            "fullDescription": "",
            "price": "10",
            "oldPrice": "",
            "quantity": 1,
            "currency": "EGP",
            "sku": "",
            "outOfStock": false,
            "isFeatured": false,
            "categories": [
                "1",
                "5"
            ],
            "images": [
                {
                    "url": "/images/photo_2024-06-10_15-55-39.jpg?rand=7cb8"
                }
            ],
            "created": 1718032903913,
            "updated": 1718048792848,
            "isDefault": false
        },
        {
            "id": "1",
            "name": "футболка",
            "title": "Футболка",
            "description": "",
            "fullDescription": "",
            "price": "10",
            "oldPrice": "",
            "quantity": 1,
            "currency": "EGP",
            "sku": "",
            "outOfStock": false,
            "isFeatured": false,
            "categories": [
                "1",
                "5"
            ],
            "images": [
                {
                    "url": "/images/photo_2024-06-10_15-55-37.jpg?rand=220b"
                }
            ],
            "created": 1718032880788,
            "updated": 1718048779790,
            "isDefault": false
        },
        {
            "id": "7",
            "name": "костюм1",
            "title": "костюм1",
            "description": "",
            "fullDescription": "",
            "price": "10",
            "oldPrice": "",
            "quantity": 1,
            "currency": "EGP",
            "sku": "",
            "outOfStock": false,
            "isFeatured": false,
            "categories": [
                "1",
                "4"
            ],
            "images": [
                {
                    "url": "/images/photo_2024-06-10_12-52-582.jpg?rand=1667"
                }
            ],
            "created": 1718022939337,
            "updated": 1718032820288,
            "isDefault": false
        }
    ],
    "categories": [
        {
            "id": "1",
            "title": "Clothes",
            "categoryId": null,
            "created": 1718016059746,
            "updated": 1718016059746
        },
        {
            "id": "3",
            "title": "Accessories",
            "categoryId": null,
            "created": 1718016059746,
            "updated": 1718016059746
        },
        {
            "id": "4",
            "title": "suit",
            "categoryId": "1",
            "created": 1718031026557,
            "updated": 1718031026557
        },
        {
            "id": "5",
            "title": "shirts",
            "categoryId": "1",
            "created": 1718032873634,
            "updated": 1718032873634
        },
        {
            "id": "6",
            "title": "Dress",
            "categoryId": "1",
            "created": 1718033338412,
            "updated": 1718033338412
        }
    ]
};

var div = document.createElement("div");
try {
    const num_lst = localStorage.getItem("products").replace("undefined,", "").split(',');
    const num = num_lst.filter(element => element !== "");

    num.forEach(id => {
        const i = lst.products.find(p => p.id === id);
        div.classList.add("product-item"); // Добавляем класс "product-item"

        if (i) {
            div.style.padding = "40px"; // Дополнительный стиль для отступа внутри элемента
            div.innerHTML = `
            <img src="${i.images[0].url}" alt="${i.name}" width="100">
            <h3>${i.name}</h3>
            <p>Цена: ${i.price} ${i.currency}</p>
            <button class="nb_4_6 ag05-a0 ag05-a2" style="background:rgba(0, 48, 120, 0.039);color:rgba(0, 26, 52, 1);">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="ag05-b1">
                <path fill="currentColor" d="m4.888 3.035.275-.826A2.5 2.5 0 0 1 7.535.5h.93a2.5 2.5 0 0 1 2.372 1.71l.275.825c2.267.09 3.555.406 3.555 1.527 0 .938-.417.938-1.25.938H2.583c-.833 0-1.25 0-1.25-.937 0-1.122 1.288-1.438 3.555-1.528m1.856-.299-.088.266Q7.295 3 8 3t1.345.002l-.089-.266a.83.83 0 0 0-.79-.57h-.931a.83.83 0 0 0-.79.57M2.167 7.167c0-.6.416-.834.833-.834h10c.417 0 .833.235.833.834 0 6.666-.416 8.333-5.833 8.333s-5.833-1.667-5.833-8.333m4.166 1.666a.833.833 0 0 0-.833.834v1.666a.833.833 0 1 0 1.667 0V9.667a.833.833 0 0 0-.834-.834m4.167.834a.833.833 0 1 0-1.667 0v1.666a.833.833 0 1 0 1.667 0z">
                </path>
                </svg>
                <div class="ag05-a" style="background-color:rgba(0, 26, 52, 1);">
                </div>
            </button>
        `;

            document.getElementById("basket").appendChild(div);
        }
    });

} catch {
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.textAlign = "center";
    div.innerHTML = "Your basket is empty";
    document.body.appendChild(div);
}

