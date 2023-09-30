const katze = document.querySelector(".katze");
const herz = document.querySelector(".herz");

let anzahl = 0;

function aktualisiereAnzahl() {
    document.querySelector(".zaehler").textContent = anzahl;
}
aktualisiereAnzahl();

function zeigeHerz() {
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