const names = [
];

const results = [];

const namesContainer = document.getElementById('names');
const resultsContainer = document.getElementById("results");
const pickButton = document.getElementById("pick");

function nameToLi(name) {
    return `<li>${name}</li>`;
}

function renderList(element, list) {
    element.innerHTML = list.map(nameToLi).join("");
}

function renderNamesList() {
    renderList(namesContainer, names);
}

function renderResultsList() {
    renderList(resultsContainer, results);
}

function pickRandomName() {
    if (names.length === 0) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const name = names[randomIndex];

    names.splice(randomIndex, 1);
    results.push(name);

    renderNamesList();
    renderResultsList();
}

function init() {
    renderNamesList();

    pickButton.addEventListener("click", pickRandomName);
}

init();
