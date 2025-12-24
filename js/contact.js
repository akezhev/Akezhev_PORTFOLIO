// ----------------- EMAIL JS
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_qxt6p23",
      "template_zie71gm",
      "#contact-form",
      "LhLMNadN7ztkPx1qP"
    )
    .then(
      () => {
        // показать отправленное сообщение
        contactMessage.textContent = "Message sent successfully ✅";
        // удалить сообщение через пять секунд
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        //   очистить поля ввода
        contactForm.reset();
      },
      () => {
        // показать сообщение об ошибке
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
