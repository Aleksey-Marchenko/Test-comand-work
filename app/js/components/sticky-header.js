if (document.querySelector(".header")) {
  // инициализируем top Navigation
  const topNavigation = document.querySelector(".header");
  const heightTopBlock = 76;
  // попап меню - блок
  // const popupMenu = document.getElementById("popup-menu");
  // Функция добавляет класс элементу в зависимости от координат окна
  function checkСoordinatesElem(elem) {
    // запуск функции по движению скролла
    window.addEventListener("scroll", function () {
      // инициализируем координаты окна по Y
      const coordWindow = window.scrollY;
      // если координаты окна больше 80, то добавляем класс, иначе - нет
      coordWindow > heightTopBlock
        ? elem.classList.add("active")
        : elem.classList.remove("active");
      // coordWindow > 0
      //   ? (elem.classList.add("active", "container"),
      //     popupMenu.classList.add("top-scroll"))
      //   : (elem.classList.remove("active", "container"),
      //     popupMenu.classList.remove("top-scroll"));
    });
  }

  checkСoordinatesElem(topNavigation);
}
