const emailListGroupEl = document.querySelector(".list-group");

for (let i = 0; i < 10; i++) {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.response);

      emailListGroupEl.innerHTML += `
        <li class="list-group-item">${data.response}</li>
    `;
    });
}
