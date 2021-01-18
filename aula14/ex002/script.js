//alert('ola')

function gerar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.length < 1 ) {
        alert('Digite um numero!')        
    } else{

        let n = Number(num.value)
        let cont = 0
        tab.innerHTML=''
        while (cont <= 10) {
            let items = document.createElement('option')           
            
            items.text = `${n} X ${cont} = ${ n * cont}`
            items.value = `${cont}`
            tab.appendChild(items)
            
            cont++
        }
    }

}
