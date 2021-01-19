//VETORES ARRAYS 
let num = [0,1,2,3,4,5]
num[0] = 5659 // troca valores
num[6]=6 // cria novo elemento na array
num.push(35) // coloca um elemento na ultima posição não precisando definir antes
num.sort() // ordena os valores dentro da array da primeira posição
console.log(num.length) // mostra a quantidade de indices da array
console.log(`Nosso vetor é :   ${num}`)
console.log(num)
console.log('buscando o indice conforme o valor : ',num.indexOf(5659)) // busca o indice conforme o valor na array
console.log('buscando o indice conforme o valor : ',num.indexOf(1000)) // Quando ele não encontra o valor retorna -1

for (const i in num) { // for in --- um for simplificado versões mais recentes do JS
   console.log('dentro do for in --->',num[i])
}

for(let i = 0 ; i < num.length ; i++){
    console.log('por vez no for : --->',num[i])
    switch (num[i]) {
        case 0:
            console.log('sou o numero : ', num[i])
            break;
            case 5659:
                console.log('sou o numero : ', num[i])
                break;
                case 35:
                    console.log('sou o numero : ', num[i])
                    break;
                
        default:
            console.log('NÃO ENCONTROU CASOS COMPATIVEIS NO SWITCH!')
            break;
    }
}
