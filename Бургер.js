let iconMenu = document.querySelectorAll('.menu__icon');// Поиск иконки бургера
let menuBody = document.querySelector('.menu__body');// Поиск списка для изменения flex direction
let headerLogo = document.querySelector('.header__logo'); // Поиск логотипа для его изменения


if (iconMenu) {
    let bodyKey = document.querySelector('body'); // поиск тега boy для запрета пркрутки страницы
    iconMenu.forEach(iconMenu => {
        iconMenu.addEventListener("click", function (e) {
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
            headerLogo.classList.toggle('_active');
            bodyKey.classList.toggle('_key')
        });
    });
}
