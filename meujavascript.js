
/*function bordaRed() {   
    document.getElementById("meu-elemento").style.borderColor = "red";
    Document.getElementById("spanErro").style.display="inline";
}
*/

function clicar() {
    var a = window.document.getElementById("meu-elemento").style.borderColor = "red"
    let email = window.document.getElementById("meu-elemento")
    email.value="email@exemplo"

    var res = window.document.getElementById("res")
    res.innerHTML = 'Por favor, insira um email válido'
}
