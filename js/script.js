let precos = []
for (let i = 0; i < 100; i++) {
    precos[i] = window.document.querySelectorAll('#preco')[i].innerHTML
}

function precosMembro() {
    for (let i = 0; i < 100; i++) {
        window.document.querySelectorAll('#preco')[i].innerHTML = `${precos[i].toLocaleString('pt-BR', { minimumFractionDigits: 0})}`
    }
}

function aplicarPromo(porcentagem) {
    for (let i = 0; i < 100; i++) {
        window.document.querySelectorAll('#preco')[i].innerHTML = `${precos[i].toLocaleString('pt-BR', { minimumFractionDigits: 0})}`

        let precoss = window.document.querySelectorAll('#preco')[i].innerHTML.replace('.','')

        window.document.querySelectorAll('#preco')[i].innerHTML = `<s class="preco_anterior">${precos[i]}</s><br>${(precoss - ((porcentagem / 100) * precoss)).toLocaleString('pt-BR', { minimumFractionDigits: 0})}`
    }
}

/*Before Code:
for (let i = 0; i < 100; i++) {
    let precos = window.document.querySelectorAll('#preco')[i].innerHTML.replace('.','')

    window.document.querySelectorAll('#preco')[i].innerHTML = `${(precos - ((porcentagem / 100) * precos)).toLocaleString('pt-BR', { minimumFractionDigits: 0})}`
}
*/