document.onclick = event => {
    if (event.target.dataset && (event.target.classList.contains('obj_button'))||(event.target.classList.contains('obj_bin'))) { 
        const indexToRemove = event.target.dataset.id;

        let basket = localStorage.getItem("products");

        if (basket) { // Проверяем, есть ли данные в localStorage
            basket = basket.split(',')
                .filter(el => el !== "")
                .filter(el => el !== "null")
                .filter(el => el !== "undefined")
                .filter(element => element !== indexToRemove);

            localStorage.setItem("products", basket.join(','));
            location.reload();
        } else {
            // Обработайте случай, если basket == null
            console.error("Basket is empty in localStorage"); 
        }
    }
};



document.getElementById('theid').addEventListener('click', function(event) {

    migrateLocalStorageToCookie();
    // Отправляем форму 
    document.querySelector('form').submit();
});
