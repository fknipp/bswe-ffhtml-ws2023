const katze = document.querySelector(".katze");
const herz = document.querySelector(".herz");

let anzahl = 0;

function aktualisiereAnzahl() {
    document.querySelector(".zaehler").textContent = anzahl;
}
aktualisiereAnzahl();

function miau() {
    new Audio("meow.mp3").play();
}

function zeigeHerz() {
    miau();
    console.log("zeigeHerz");
    herz.style.display = "block";
    anzahl++;
    aktualisiereAnzahl();
}

function verschwindeHerz(e) {
    console.log("verschwindeHerz");
    e.stopPropagation();
    herz.style.display = "none";
}

katze.addEventListener("click", zeigeHerz);
herz.addEventListener("click", verschwindeHerz);

const besen = document.querySelector(".besen");

let delta = 10;

function bewegeBesen() {
    const rect = besen.getBoundingClientRect();
    console.log(rect);
    besen.style.left = `${rect.left + delta}px`;
    delta = -delta;
}

besen.addEventListener("click", bewegeBesen);