let cpf = document.querySelector('#cpf')
const verify = document.querySelector('#verify')

verify.addEventListener('click', function() {
    console.log(achaPirmeiroDigito())
})

const mascaraCPF = () => {
    let cpfFormatado = cpf.value

    if (cpfFormatado > 9) {
        cpfFormatado = cpfFormatado.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (cpfFormatado > 6) {
        cpfFormatado  = cpfFormatado.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (cpfFormatado > 3) {
        cpfFormatado  = cpfFormatado.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }

    cpf.value = cpfFormatado
}

const cpfLimpo = (cpf) => {
    return cpf.value.replace(/\D+/g, '')
}

const viraArray = () => {
    return Array.from(cpfLimpo(cpf))
}

const achaPirmeiroDigito = () => {
    let array = viraArray()
    array.splice(-2, 2)

}

const achaSegundoDigito = () => {
    let array = viraArray()
    array.splice(-1, 1)

}