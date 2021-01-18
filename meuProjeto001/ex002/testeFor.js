var section_01 = window.document.getElementById('section-01')

function gerar(){
    //window.alert('gerou')
   
    for (let a = 1; a <= 3; a++) {    //1    
        for (let b = 2; b <= 4; b++) {   //2         
            for (let c = 3; c <= 5; c++) {  //3              
                   for (let d = 4; d <= 6; d++) { //4
                       for (let e = 5; e <= 7; e++) { //5
                            for (let f = 6; f <= 8; f++) { //6
                                for (let g = 7; g <= 9; g++) { //7
                                    for (let h = 8; h <= 10; h++) { //8
                                        for (let i = 9; i <= 11; i++) { //9
                                            for (let j = 10; j <= 20; j++) { //10
                                                for (let k = 21; k <= 21; k++) { //11
                                                    for (let l = 22; l <= 22; l++) { //12
                                                        for (let m = 23; m <= 23; m++) { //13
                                                            for (let n = 14; n <= 24; n++) { //14
                                                                for (let o = 15; o <= 25; o++) { //15
var soma = a+b+c+d+e+f+g+h+i+j+k+l+m+n+o
var cont = 0

if (cont < 100) {
    cont ++
    document.write(soma)
    document.write(`<section id="section-01" style="background:burlywood;">[ ${a} ] [ ${b} ] [ ${c} ] [ ${d} ] [ ${e} ] [ ${f} ] [ ${g} ] [ ${h} ] [ ${i} ] [ ${j} ] [ ${k} ] [ ${i} ] [ ${j} ] [ ${k} ] [ ${l} ] [ ${m} ] [ ${n} ] [ ${o} ] </section>`)
    
}


                           
                                                                }                            
                                                            }                            
                                                        }                            
                                                    }                            
                                                }                            
                                            }                            
                                        }                            
                                    }                            
                                }                            
                            }                           
                       }                       
                   }                                  
            }           
        }        
    }
}
var inp_a_01 = window.document.querySelector("input#inp_a_01")
var inp_a_02 = window.document.querySelector("input#inp_a_02")

var inp_b_01 = window.document.querySelector("input#inp_b_01")
var inp_b_02 = window.document.querySelector("input#inp_b_02")





//window.document.write(`${puchara1()}`)

inp_a_01.addEventListener('click',puchara1)
inp_a_02.addEventListener('click',puchara2)
inp_b_01.addEventListener('click',puchara3)
inp_b_02.addEventListener('click',puchara4)


window.document.write(`jonas`)
function puchara1() {
    var valor_a_01 = Number(inp_a_01.value) 
    //window.document.write(valor_a_01)
    inp_a_01.style.background = 'black'
    inp_a_01.style.color = 'white'
    
    return valor_a_01    
}

function puchara2() {
    var valor_a_02 = Number(inp_a_01.value) 
    //window.document.write(valor_a_01)
    inp_a_02.style.background = 'black'
    inp_a_02.style.color = 'white'    
}

function pintar() {

obj.style.background = 'black'
obj.style.color = 'white'
    
}