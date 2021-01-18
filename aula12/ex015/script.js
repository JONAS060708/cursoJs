function verificar() {
    //alert(`Funcionou`)
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length < 1 ||  fano.value > ano ) {
        window.alert('[ERRO] Ano invalido tente novamente!')
    }else{
       // alert('ok')
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var genero = ''
        if(sexo[0].checked){
            genero = 'HOMEM'
            if (idade < 10) {
                img.setAttribute('src','img/menino.png') 
            }else if(idade < 21 ){
                img.setAttribute('src','img/boy.png') 
            }else if( idade < 50){
                img.setAttribute('src','img/homem.png') 
            }else{
                img.setAttribute('src','img/velho.png') 
            }

        }else if (sexo[1].checked) {
            genero = 'MULHER'
            if (idade < 10) {
                img.setAttribute('src','img/menina.png') 
            }else if(idade < 21 ){
                img.setAttribute('src','img/girl.png') 
            }else if( idade < 50){
                img.setAttribute('src','img/mulher.png') 
            }else{
                img.setAttribute('src','img/velha.png') 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade Calculada : ${idade} anos ,  gênero ${genero}`
        res.appendChild(img)
    }

}