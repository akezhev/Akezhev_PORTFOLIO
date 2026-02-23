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

// Переключение языков (русский/английский/китайский)
const languageButton = document.getElementById("language-button");
const htmlElement = document.documentElement;

// Доступные языки
const languages = [
  {
    code: "ru",
    name: "Русский",
    icon: "ri-translate-2",
    flag: "ru",
  },
  {
    code: "en",
    name: "English",
    icon: "ri-english-input",
    flag: "gb",
  },
  {
    code: "zh",
    name: "中文",
    icon: "ri-chinese-fill",
    flag: "cn",
  },
];

let currentLangIndex = 0;

// Функция смены языка
function changeLanguage(index) {
  const lang = languages[index];

  // Меняем иконку
  languageButton.className = `ri-${
    lang.icon === "ri-translate-2" ? "translate-2" : lang.icon
  } language-icon`;

  // Устанавливаем data-атрибут для CSS индикатора
  languageButton.setAttribute("data-lang", lang.code);

  // Меняем язык в html теге
  htmlElement.lang = lang.code;

  // Сохраняем выбор в localStorage
  localStorage.setItem("selectedLanguage", lang.code);

  // Здесь твоя логика смены контента на сайте
  updateContent(lang.code);

  console.log(`Language switched to: ${lang.name} (${lang.code})`);
}

// Функция обновления контента (пример)
function updateContent(langCode) {
  // Пример для навигации - замени на свои селекторы
  const menuItems = {
    ru: ["Главная", "О нас", "Услуги", "Контакты"],
    en: ["Home", "About", "Services", "Contact"],
    zh: ["首页", "关于", "服务", "联系"],
  };

  // Обновляем текст в навигации (пример - адаптируй под свою структуру)
  const navLinks = document.querySelectorAll(".nav__link");
  if (navLinks.length > 0) {
    navLinks.forEach((link, index) => {
      if (menuItems[langCode] && menuItems[langCode][index]) {
        link.textContent = menuItems[langCode][index];
      }
    });
  }

  // Можно добавить обновление других элементов по data-атрибутам
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    // Здесь должна быть логика подстановки текста из словаря
    // element.textContent = translations[langCode][key];
  });
}

// Загрузка сохраненного языка
function loadSavedLanguage() {
  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang) {
    const index = languages.findIndex((lang) => lang.code === savedLang);
    if (index !== -1) {
      currentLangIndex = index;
    }
  }
  changeLanguage(currentLangIndex);
}

// Обработчик клика по кнопке языка
languageButton.addEventListener("click", () => {
  currentLangIndex = (currentLangIndex + 1) % languages.length;
  changeLanguage(currentLangIndex);
});

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", loadSavedLanguage);

// Пример словаря для переводов (можно расширить)
const translations = {
  ru: {
    home: "Главная",
    about: "О нас",
    services: "Услуги",
    contact: "Контакты",
    welcome: "Добро пожаловать",
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    welcome: "Welcome",
  },
  zh: {
    home: "首页",
    about: "关于",
    services: "服务",
    contact: "联系",
    welcome: "欢迎",
  },
};
