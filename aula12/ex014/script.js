function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date();
    //var hr = data.getHours()
    var hr = 15
    msg.innerHTML = `Agora são ${hr} hr`
    
    if (hr>=0 && hr < 12) {
        foto.src = 'imagens/manha.png'
        document.body.style.background = '#e6e1a4'
    }else if (hr >=12 && hr < 18) {
        foto.src = 'imagens/tarde.png'
        document.body.style.background = '#e9760a'
    }else{
        foto.src = 'imagens/noite.png'
        document.body.style.background = '#191133'
    }

}