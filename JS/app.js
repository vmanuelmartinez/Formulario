function validacao() {
    let nome = document.getElementById("username");
    let sobrenome = document.getElementById("email");
    let data = document.getElementById("password");
    let senha = document.getElementById("password1");
  
    estilo_input(nome, "#f45656", "#808080");
    estilo_input(sobrenome, "#f45656", "#808080");
    estilo_input(data, "#f45656", "#808080");
    estilo_input(senha, "#f45656", "#808080");
}



function estilo_input(input, cor_1, cor2) {
    var alert = document.getElementById("f_alert");
    var icon = document.getElementsByClassName("material-symbols-outlined");

    if (!input.checkValidity()) {
        alert.style.display = "block";
        return input.style.border = `3px solid ${cor_1}`
    } else{
        return input.style.border = `1px solid ${cor_2}`
    }
}