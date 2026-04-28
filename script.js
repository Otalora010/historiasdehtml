
alert("Bienvenido a tu portafolio Santiago ");

function cambiarTexto() {
    document.getElementById("texto").innerText =
    "Ahora estoy aprendiendo JavaScript ";
}


function toggleInfo() {
    let info = document.getElementById("extra");

    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}