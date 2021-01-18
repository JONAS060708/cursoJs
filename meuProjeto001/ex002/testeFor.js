var section_01 = window.document.getElementById('section-01')

function gerar(){
    //window.alert('gerou')
    var cont = 0

    for (let a = 1; a <= 11; a++) {    //1    
        for (let b = 2; b <= 12; b++) {   //2         
            for (let c = 3; c <= 13; c++) {  //3              
                   for (let d = 4; d <= 14; d++) { //4
                       for (let e = 5; e <= 15; e++) { //5
                            for (let f = 6; f <= 16; f++) { //6
                                for (let g = 7; g <= 17; g++) { //7
                                    for (let h = 8; h <= 18; h++) { //8
                                        for (let i = 9; i <= 19; i++) { //9
                                            for (let j = 10; j <= 20; j++) { //10
                                                for (let k = 11; k <= 21; k++) { //11
                                                    for (let l = 12; l <= 22; l++) { //12
                                                        for (let m = 13; m <= 23; m++) { //13
                                                            for (let n = 14; n <= 24; n++) { //14
                                                                for (let o = 15; o <= 25; o++) { //15
var soma = a+b+c+d+e+f+g+h+i+j+k+l+m+n+o


if (cont < 30 ){
    if(a < b && b < c && c < d && d < e < f && f < g && g < h && h < i && i < j && j < k && k < l && l < m && m < n  && n < o) {
    /*
    console.log(`[ ${a} ] [ ${b} ] [ ${c} ] [ ${d} ] [ ${e} ] [ ${f} ] [ ${g} ] [ ${h} ] [ ${i} ] [ ${j} ] [ ${k} ]  [ ${l} ] [ ${m} ] [ ${n} ] [ ${o} ] :: soma : ${soma} -- cont : ${cont} `)*/
    
    document.write(`<section id="section-01" style="background:burlywood;">[ ${a} ] [ ${b} ] [ ${c} ] [ ${d} ] [ ${e} ] [ ${f} ] [ ${g} ] [ ${h} ] [ ${i} ] [ ${j} ] [ ${k} ] [ ${l} ] [ ${m} ] [ ${n} ] [ ${o} ] : soma : ${soma} -- cont : ${cont} </section>`)
    
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