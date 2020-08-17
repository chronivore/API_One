const pikachuUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";
const bulbasaurUrl = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
const charmanderUrl = "https://pokeapi.co/api/v2/pokemon/charmander";
const squirtleUrl = "https://pokeapi.co/api/v2/pokemon/squirtle";

const pikaButton = document.querySelector("#pikaButton");
const pikaPics = document.querySelector("#pikaPics");
const charButton = document.querySelector("#charButton");
const charPics = document.querySelector("#charPics");
const bulbaButton = document.querySelector("#bulbaButton");
const bulbaPics = document.querySelector("#bulbaPics");
const squirtButton = document.querySelector("#squirtButton");
const squirtPics = document.querySelector("#squirtPics");

const pikaMoves = document.querySelector("#pikaMoves");

pikaButton.addEventListener("click", fetchPika);
charButton.addEventListener("click", fetchChar);
bulbaButton.addEventListener("click", fetchBulba);
squirtButton.addEventListener("click", fetchSquirt);

async function fetchPika(e) {
  const pikaData = await fetch(pikachuUrl).then((result) => result.json());
  showPokemon(pikaData.sprites, pikaPics);
  showMoves(pikaData.moves, pikaMoves);
}

async function fetchChar(e) {
  const charData = await fetch(charmanderUrl).then((result) => result.json());
  showPokemon(charData.sprites, charPics);
}

async function fetchBulba(e) {
  const bulbaData = await fetch(bulbasaurUrl).then((result) => result.json());
  showPokemon(bulbaData.sprites, bulbaPics);
}

async function fetchSquirt(e) {
  const squirtData = await fetch(squirtleUrl).then((result) => result.json());
  showPokemon(squirtData.sprites, squirtPics);
}

function showPokemon(sprites, picsContainer) {
  const values = Object.values(sprites).filter(
    (value) => typeof value === "string"
  );
  const randomIndex = Math.floor(Math.random() * values.length);
  picsContainer.src = values[randomIndex];
}
