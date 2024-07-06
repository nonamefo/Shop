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
async function order() {
    var data = await API_get();

    const localStorageIds = localStorage.getItem("products"); // Получаем ID из localStorage
    const ids = localStorageIds ? localStorageIds.split(',').filter(id => id !== "" && id !== "undefined") : []; 
    var amount = 0;

    data = data.filter(product => ids.includes(product.id));

    // Проверяем, что `data` - массив
    if (Array.isArray(data)) { 
        data.forEach(element => {
            amount += Number(element["price"]);
        });
    } else {
        console.error("Ошибка: `data` не является массивом!");
    }

    return amount;
}




async function main() {
    const totalAmount = await order(); 
    console.log(totalAmount); // Теперь выведет значение amount
}

main();