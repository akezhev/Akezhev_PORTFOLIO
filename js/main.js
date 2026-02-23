// ---------------------------- SHOW MENU
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ----------------------- СМЕНА ФОНА HEADER
const bgHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

// ------------------------- ТЕМНАЯ-СВЕТЛАЯ ТЕМА
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//Ранее выбранная тема (если выбрана пользователем)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//Текущую тему оформления интерфейса мы получаем, проверив наличие класса dark-theme.
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "bx bx-sun";

// Мы проверяем, выбирал ли пользователь ранее какую-либо тему.
if (selectedTheme) {
  // Если условие вакидации выполнено, мы спрашиваем, в чем заключалась проблема, чтобы понять, активировали мы или деактивировали тьму.
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Активируйте/деактивируйте тему вручную с помощью кнопки.
themeButton.addEventListener("click", () => {
  // Добавить или удалить темную тему / тему значков
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Мы сохраняем тему оформления и текущий значок, выбранный пользователем.
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Смена языка ------------------------------------------------

// Переключение языков (английский/китайский)
const languageButton = document.getElementById("language-button");
let currentLang = "ru"; // или 'en' по умолчанию

// Вариант 1: Простое переключение иконки
languageButton.addEventListener("click", () => {
  if (currentLang === "ru") {
    languageButton.classList.remove("ri-translate-2");
    languageButton.classList.add("ri-english-input"); // иконка для EN
    currentLang = "en";
    // Здесь код для смены контента на английский
    console.log("Switch to English");
  } else if (currentLang === "en") {
    languageButton.classList.remove("ri-english-input");
    languageButton.classList.add("ri-translate-2"); // иконка для китайского
    currentLang = "cn";
    // Здесь код для смены контента на китайский
    console.log("Switch to Chinese");
  } else {
    languageButton.classList.remove("ri-translate-2");
    languageButton.classList.add("ri-translate-2"); // обратно на перевод
    currentLang = "ru";
    // Здесь код для смены контента на русский
    console.log("Switch to Russian");
  }
});

// Вариант 2: Смена флагов (если используешь flag-icons)
const languageButton = document.getElementById("language-button");
let langIndex = 0;
const languages = [
  { code: "ru", flag: "ru", name: "Russian" },
  { code: "en", flag: "gb", name: "English" },
  { code: "cn", flag: "cn", name: "Chinese" },
];

languageButton.addEventListener("click", () => {
  langIndex = (langIndex + 1) % languages.length;
  const lang = languages[langIndex];

  // Меняем класс флага
  languageButton.className = `fi fi-${lang.flag} language-icon`;

  // Здесь логика смены языка на сайте
  console.log(`Switching to ${lang.name}`);
  // document.documentElement.lang = lang.code;
  // твоя функция смены контента(lang.code);
});
