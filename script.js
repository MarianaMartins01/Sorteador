function generateNumber() {

    const entre = Math.ceil(document.querySelector(".entre").value)
    const e = Math.floor(document.querySelector(".e").value)
    
    const result = Math.floor(Math.random() * (entre - e + 1)) + e;

    if(e > entre){
        alert(result)
    } else {
        alert("Erro, o valor 'e' tem que ser maior")
    }
    

}
