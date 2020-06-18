// document
//   .querySelector("select[name=uf]")
//   .addEventListener("chage", () => {

//   });

function populateUFs() {
  const ufSetect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/distritos")
    .then((response) => {
      return response.json();
    })
    .then((states) => {
      for (state of states) {
        ufSetect.innerHTML += `
          <option value="${state.id}" >${state.nome}</option>
        `;
      }
    });
}

populateUFs();
