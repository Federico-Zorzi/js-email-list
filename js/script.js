/**
 * Funzione per creare un item da aggiungere ad una lista con all'interno un'email
 * @param {string} email inserire email per stampare un elemento della lista di mail
 * @returns tag HTML 'li' per aggiungerlo alla lista
 */
const createListElement = (email) =>
  (emailListGroupEl.innerHTML += `
  <li class="list-group-item">${email}</li>
  `);

/**
 * Funzione per generare random email
 */
const generateRandomEmail = () => {
  console.clear();

  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.response);

      createListElement(data.response);
    });
};

const emailNumber = 10;
const emailListGroupEl = document.querySelector(".list-group");
const newEmailListBtnEl = document.getElementById("generate-new-mail-btn");

for (let i = 0; i < emailNumber; i++) {
  generateRandomEmail();
}

newEmailListBtnEl.addEventListener("click", () => {
  emailListGroupEl.innerHTML = ``;

  for (let i = 0; i < emailNumber; i++) {
    generateRandomEmail();
  }
});
