const btn = document.querySelector('.btn');

btn.addEventListener('mousedown', () => {
    setTimeout(() => {
        btn.style.backgroundColor = 'black';
      }, 100);
  
});

btn.addEventListener('mouseup', () => {
  btn.style.backgroundColor = 'white'; // Вернуть исходный цвет
});
