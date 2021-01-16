//condição aninhada elseif
var idade = 75
console.log(`Você tem ${idade} anos `)
if (idade < 16) {
    console.log('não vota')
    
}else if(idade < 18 || idade > 65){
    console.log('voto opcional!')
}else{
    console.log('vota!')
}
var agora = new Date()
var hr = agora.getHours()
console.log(`Agora são exatamente ${hr} hr`)
if (hr<12 || hr < 6 ) {
    if (hr < 6) {
        console.log('Boa madrugada!')
    }else{
        console.log('Bom dia!')
    }
    
}else if (hr<=18 ) {
    console.log('Boa tarde!')
    
}else{
    console.log('Boa noite!')
}
//Condição multipla
var agora = new Date()
var key = agora.getDay()
switch (key) {
    case 1:
        console.log(`case ${key}`)
        break;
    case 2:
        console.log(`case ${key}`)
        break;
    case 3:
        console.log(`case ${key}`)
        break;    
    default:
        console.log(`Resposta default para numero não indicados ${key}`)
        break;
}