const enviado = document.getElementById("boton");
const forma = document.getElementById("forma");
const inputPswd = document.getElementById("password");
const campoVerif = document.getElementById("campov");

const validar = () => {
    let pswd = forma["password"].value;
    let verif = forma["verif"].value;
    if (pswd == "") {
        inputPswd.insertAdjacentHTML("afterend", `<p class="inputWarning">Campo requerido.</p>`);
    }
    if (verif == "") {
        alert("Se debe llenar el campo de verificar password.");
    }
    else if (pswd == verif){
        forma.innerHTML = `<h2 id="aceptado" class="containerMarcado">¡Password nueva confirmada con éxito! (La contraseña coincide con su verificación).</h2>`;
    }
    else{
        alert("El password y la verificación del mismo no coinciden. Intenta de nuevo.")
    }
}

enviado.onclick = validar;