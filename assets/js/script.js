let cpf = document.querySelector('#cpf')
const verify = document.querySelector('#verify')

verify.addEventListener('click', function() {
    console.log(cpfLimpo(cpf))
})

const mascaraCPF = () => {
    let cpfFormated = cpf.value

    if (cpfFormated > 9) {
        cpfFormated = cpfFormated.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (cpfFormated > 6) {
        cpfFormated  = cpfFormated.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (cpfFormated > 3) {
        cpfFormated  = cpfFormated.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }

    cpf.value = cpfFormated
}

const cpfLimpo = (cpf) => {
    return cpf.value.replace(/\D+/g, '')
}

const viraArray = () => {
    return Array.from(cpfLimpo(cpf))
}

const achaPirmeiroDigito = () => {
    const array = viraArray()


}