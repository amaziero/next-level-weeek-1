function populateUFs() {
  const ufSetect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((response) => {
      return response.json();
    })
    .then((states) => {
      for (const state of states) {
        ufSetect.innerHTML += `
          <option value="${state.id}">${state.nome}</option>
        `;
      }
    });
}

populateUFs();

function getCities(event) {
  const citySelect = document.querySelector("select[name=city]");
  const url = `
      https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/microrregioes
    `;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((cities) => {
      for (const city of cities) {
        citySelect.innerHTML += `
          <option value="${city.id}" >${city.nome}</option>
        `;
      }

      citySelect.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);
