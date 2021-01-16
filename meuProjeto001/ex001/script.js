

function gerar(){
    //window.alert('gerou')
    var td01_a = window.document.getElementById('td01-a')
    var td02_a = window.document.getElementById('td02-a')
    var td03_a = window.document.getElementById('td03-a')

    for (let a = 0; a <= 10; a++) {
        
        for (let b = 0; b <= 10; b++) {
            
            for (let c = 0; c <= 10; c++) {
                td01_a.innerText = `${a}`
                td02_a.innerText = `${b}`
                td03_a.innerText = `${c}`
                
            }
            
        }
        
    }


}
