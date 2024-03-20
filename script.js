// Получаем модальное окно
var modal = document.getElementById('contact-modal');

// Получаем кнопку, которая открывает модальное окно
var btn = document.getElementById('contact-btn');

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName('close')[0];

// При клике на кнопку открываем модальное окно
btn.onclick = function() {
    modal.style.display = 'block';
}

// При клике на <span> (x), закрываем модальное окно
span.onclick = function() {
    modal.style.display = 'none';
}

// При клике в любом месте за пределами модального окна, оно закроется
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
