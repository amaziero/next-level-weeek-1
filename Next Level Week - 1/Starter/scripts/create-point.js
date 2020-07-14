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
  const stateInput = document.querySelector("input[name=state]");
  const cityInput = document.querySelector("input[name=cities]");

  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text;

  const indexOfSelectedCity = event.target.selectedIndex;
  cityInput.value =
    event.target.options[{ indexOfSelectedState, indexOfSelectedCity }];

  const url = `
      https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/microrregioes
    `;

  citySelect.innerHTML = "<option value>Selecione a cidade</option>";
  citySelect.disabled = true;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((cities) => {
      for (const city of cities) {
        citySelect.innerHTML += `
          <option value="${city.nome}" >${city.nome}</option>
        `;
      }

      citySelect.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);

const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem);
}

const colletedItems = document.querySelector("input[name=items]");

let selectedItems = [];

function handleSelectedItem(event) {
  const itemLi = event.target;
  const itemId = itemLi.dataset.id;

  itemLi.classList.toggle("selected");

  const alreadySelected = selectedItems.findIndex((item) => {
    return item == itemId;
  });

  if (alreadySelected >= 0) {
    const filteredItems = selectedItems.filter((item) => {
      const itemsIsDifferent = item != itemId;
      return itemsIsDifferent;
    });

    selectedItems = filteredItems;
  } else {
    selectedItems.push(itemId);
  }

  colletedItems.value = selectedItems;
}
