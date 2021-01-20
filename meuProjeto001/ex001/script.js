/* outra forma de declarar objetos 
var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

var meuCarro = {fabricacao:'ford',modelo:"golf",ano: 1987}

function mostrarProps(obj, nomeDoObj) {
    var resultado = "";
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
      }
    }
    return resultado;
  }

  console.log(mostrarProps(meuCarro, "meuCarro"))
  */
 var bola15 = {n1:19,n2:20,n3:21,n4:22,n5:23,n6:24,n7:25}

 function mostraPos(obj , nomeDoObj) {
     var resultado = ''
     for(var i in  obj){
         console.log(`este é o valor de  ${i} `)
         if (obj.hasOwnProperty(i)) {
             resultado += `${nomeDoObj}.${i} = ${obj[i]} \n`
         }
     }
     return resultado
 }
console.log(mostraPos(bola15, 'bola'))