function exibirNome(){
    let nome = document.getElementById('nome').value
    let snome = document.getElementById('snome').value

    if(nome != "" && snome != ""){
        alert(nome+" "+snome)
    }
}