function clicar() {

    if (document.getElementById("meu-elemento").value.length < 3) {
        alert('Preencha o campo Email');
    } if (document.getElementById("meu-pass").value.length < 3) {
        alert('Preencha o campo Senha');
    } if (document.getElementById("meu-elemento").value == 'email@exemplo' && document.getElementById("meu-pass").value == '123456'){
        alert('Logado');
        
    } if (document.getElementById("meu-elemento").value == '' && document.getElementById("meu-pass").value == '') {
        alert('Preencha os campos Email e Senha');
    } else {
        var a = window.document.getElementById("meu-elemento").style.borderColor = "red"
        let email = window.document.getElementById("meu-elemento")
        email.value="email@exemplo"
        document.getElementById("Arroba").style.color= "red"
        var res = window.document.getElementById("res")
        res.innerHTML = 'Por favor, insira um email válido'
    }
   
}