//function for create an item in the list
const createListElement = (email) =>
  (emailListGroupEl.innerHTML += `
  <li class="list-group-item">${email}</li>
  `);

//function for generate a random email
const generateRandomEmail = () => {
  console.clear();

  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.response);

      createListElement(data.response);
    });
};

const emailListGroupEl = document.querySelector(".list-group");
const newEmailListBtnEl = document.getElementById("generate-new-mail-btn");

for (let i = 0; i < 10; i++) {
  generateRandomEmail();
}

newEmailListBtnEl.addEventListener("click", () => {
  emailListGroupEl.innerHTML = ``;

  for (let i = 0; i < 10; i++) {
    generateRandomEmail();
  }
});
