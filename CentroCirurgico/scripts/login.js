document.querySelector("button").addEventListener("click", validarLogin);
function validarLogin() {
    let login = document.querySelector("#login").value;
    console.log(login);
    let senha = document.querySelector("#senha").value;
    console.log(senha);
    let msg = document.querySelector("span");

    if (login == "senai" && senha == "HRT2024") {
        msg.innerHTML = "Acesso Permitido! <a href 'index.html'>Click aqui!";
        msg.style = "background-color: blue";
        window.location.href = "index.html";
    } else {
        msg.innerText = "Login ou senha incorretos!";
        msg.style = "background-color: red";
    }
    return false;
}