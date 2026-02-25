// ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ С ПРАВИЛЬНЫМИ ИКОНКАМИ REMIXICON
const languageButton = document.getElementById("language-button");
const htmlElement = document.documentElement;

// Использование Emoji вместо иконок
const languages = [
  {
    code: "ru",
    iconClass: "language-icon",
    emoji: "RU",
  },
  {
    code: "en",
    iconClass: "language-icon",
    emoji: "EN",
  },
  {
    code: "zh",
    iconClass: "language-icon",
    emoji: "CN",
  },
];

let currentLangIndex = 0;

// Словарь переводов
const translations = {
  ru: {
    home: "Главная",
    about: "Обо мне",
    services: "Услуги",
    contact: "Контакты",
    welcome: "Добро пожаловать на наш сайт!",
    title: "Мой сайт",
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    welcome: "Welcome to our website!",
    title: "My Website",
  },
  zh: {
    home: "首页",
    about: "关于我们",
    services: "服务",
    contact: "联系方式",
    welcome: "欢迎访问我们的网站！",
    title: "我的网站",
  },
};

// Функция смены языка
function changeLanguage(index) {
  const lang = languages[index];
  languageButton.className = "language-icon";
  languageButton.textContent = lang.emoji; // Устанавливаем emoji как текст

  // Меняем иконку - правильно устанавливаем класс
  // Убираем все старые классы и добавляем новые
  languageButton.className = `${lang.iconClass} language-icon`;

  // Меняем язык в html теге
  htmlElement.lang = lang.code;

  // Сохраняем выбор в localStorage
  localStorage.setItem("selectedLanguage", lang.code);

  // Обновляем контент
  updateContent(lang.code);

  console.log(`Language switched to: ${lang.name} (${lang.code})`);
}

// Функция обновления контента
function updateContent(langCode) {
  // Обновляем элементы с data-i18n атрибутом
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[langCode] && translations[langCode][key]) {
      element.textContent = translations[langCode][key];
    }
  });

  // Дополнительно: обновляем навигацию если есть nav__link без data-i18n
  const navLinks = document.querySelectorAll(".nav__link");
  const navItems = ["home", "about", "services", "contact"];

  navLinks.forEach((link, index) => {
    if (index < navItems.length) {
      const key = navItems[index];
      if (translations[langCode] && translations[langCode][key]) {
        link.textContent = translations[langCode][key];
      }
    }
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
