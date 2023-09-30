const katze = document.querySelector(".katze");
const herz = document.querySelector(".herz");

function zeigeHerz() {
    herz.style.display = "block";
}

function verschwindeHerz(e) {
    e.stopPropagation();
    herz.style.display = "none";
}

katze.addEventListener("click", zeigeHerz);
herz.addEventListener("click", verschwindeHerz);