/*
    PRÓXIMOS PASSOS PARA CONTINUAR ESTUDOS
    FUNÇÕES
    OBJETOS POO
    MODULAÇÃO
    REGEX
    JSON
    AJAX
    NOD.JS
*/
//UM POUCO SOBRE OBJETOS
//declarando um objeto
let amigo = {
    nome:'josé',
    sexo:'M',
    peso: 85.4,
    engordar( p = 0){ // função dentro do objeto
        console.log('engordou')
        this.peso += p // this declara o valor do objeto dentro da função
    } // função
}
amigo.engordar(10) // chama a função dentro do objeto
console.log(amigo.peso) // mostrando dados
console.log(typeof amigo)//tipo da variavel
console.log(`${amigo.nome} pesa ${amigo.peso}Kg` )