function parinp(n) {
    if (n % 2 == 0) {
        return 'par'
    }else{
        return 'impar'
    }

    
}
function soma(n1=0,n2=0) {// o =0 é usado para não dar NAN quando um parametro não for repassado fazeno a variavel ficar 0
    return n1+n2
    
}


let v = function(x) { // colocando função dentro de uma variavel
     return x*2
}
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat += c 
        
    }
    return fat
    
}

function fatorialInterna(n) { // funcão dentro de outra função chamada como FUNÇÃO RECURCIVA
    if(n == 1){
        return 1
    }else{
        return n * fatorialInterna(n-1) 
    }
    
}


console.log(fatorialInterna(5))
console.log('fatorial --> ', fatorial(10))
console.log(v(5)) // chamando e passando parametro 
console.log(soma(4))
console.log(parinp(200))