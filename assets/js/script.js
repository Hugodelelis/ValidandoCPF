let cpf = document.querySelector('#cpf')
const verify = document.querySelector('#verify')

verify.addEventListener('click', function() {
    
})

cpf.addEventListener('keypress', function () {
    let inputLength = cpf.value.length

    if(inputLength === 3 || inputLength === 7) {
        cpf.value += '.'
    } else if (inputLength === 11) {
        cpf.value += '-'
    }
})

const cpfLimpo = (cpf) => {
    return cpf.value.replace(/\D+/g, '')
}

const viraArray = () => {
    return Array.from(cpfLimpo(cpf))
}

const achaPirmeiroDigito = () => {
    const array = viraArray()


}