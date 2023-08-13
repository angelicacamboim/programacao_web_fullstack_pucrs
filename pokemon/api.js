const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const pokemonList = document.getElementById("pokemonList");
const pokemonDetails = document.getElementById("pokemonDetails");

function renderList(data) {
  const col = document.createElement("div");
  col.className = "col-md-3 mb-4";

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = data.sprites.other.dream_world.front_default;
  img.className = "card-img-top";
  img.style.maxWidth = "200px";
  img.style.maxHeight = "200px";
  img.style.margin = "0 auto";
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body text-center";

  const number = document.createElement("p");
  number.className = "card-text";
  number.textContent = `#${data.id}`;
  cardBody.appendChild(number);

  const name = document.createElement("h5");
  name.textContent = data.name;
  cardBody.appendChild(name);

  const type = document.createElement("p");
  type.className = "card-text";
  type.textContent = `Type: ${data.types.map((t) => t.type.name).join(", ")}`;
  cardBody.appendChild(type);

  const button = document.createElement("button");
  button.textContent = "Ver Detalhes";
  button.className = "btn btn-primary";
  button.addEventListener("click", () => openPokemonDetails(data));
  cardBody.appendChild(button);

  card.appendChild(cardBody);
  col.appendChild(card);
  pokemonList.appendChild(col);
}

// Função para exibir os detalhes do Pokémon
function openPokemonDetails(pokemon) {
  const modalTitle = document.getElementById("pokemonModalLabel");
  modalTitle.textContent = `Detalhes do Pokémon: ${pokemon.name}`;

  const modalBody = document.getElementById("pokemonDetails");
  modalBody.innerHTML = `
  <div class="card">
  <img src="${
    pokemon.sprites.other.dream_world.front_default
  }" class="card-img-top" alt="${pokemon.name}" height="200px" width="200px">
  <div class="card-body">
    <h5 class="card-title">${pokemon.name}</h5>
    <p class="card-text badge text-bg-light">Type: ${pokemon.types
      .map((type) => type.type.name)
      .join(", ")}</p>
      <p class="card-text">Abilities: ${pokemon.abilities
        .map((ability) => ability.ability.name)
        .join(", ")}</p>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pokemonModal" data-pokemon-url="${
      pokemon.url
    }">Close</button>
  </div>
</div>
      <!-- Adicione mais detalhes do Pokémon aqui -->
    `;

  const pokemonModal = new bootstrap.Modal(
    document.getElementById("pokemonModal")
  );
  pokemonModal.show();
}

function clearList() {
  while (pokemonList.firstChild) {
    pokemonList.removeChild(pokemonList.firstChild);
  }
}

// Função para renderizar a lista de Pokémons
function renderPokemonList() {
  pokemonList.innerHTML = "";

  for (let i = 1; i < 15; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => response.json())
      .then((data) => {
        renderList(data);
      });
  }
}

renderPokemonList();
// Adicionar evento de alteração no campo de pesquisa
searchInput.addEventListener("change", () => {
  const searchTerm = searchInput.value.toLowerCase();
  // Verificar se houve uma alteração no campo de pesquisa
  fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      clearList(); // Limpa a lista de pokémons antes de renderizar os resultados da pesquisa
      renderList(data);
    });

  if (searchTerm === "") {
    renderPokemonList();
  }
});
