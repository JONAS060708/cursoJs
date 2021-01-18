//alert('ola')

function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length < 1 || fim.value.length < 1 || passo.value.length < 1 ) {
        //alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML = "Contando : <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0) {
            res.innerHTML = `Passo inválido! considerando PASSO 1 <br>`
            p = 1
        }
    if (i < f) {
        //contagem crescente
        for (let c = i; c <= f; c+= p) {
            //COLOCANDO EMOGI NO SISTEMA!
            res.innerHTML += ` ${c}  \u{027A1}`
        }
    }else{
        //contagem regressiva
        for (let c = i; c >= f; c-= p) {
            //COLOCANDO EMOGI NO SISTEMA!
            res.innerHTML += ` ${c}  \u{027A1}`
        }

    }
        
        res.innerHTML += `\u{1f3c1}`
    }

}