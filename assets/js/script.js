const cpf = document.querySelector('#cpf')
const verify = document.querySelector('#verify')
const container = document.querySelector('.myContainer')
const result = document.querySelector('#result')

verify.addEventListener('click', function() {
    let array = viraArray()

    if(array[9] == achaPirmeiroDigito() && array[10] == achaSegundoDigito()) {
        setResult()
    } else {
        setError()
    } 

    if(checaSequencia() == cpfLimpo(cpf)) {
        setError()
    }
})

const mascaraCPF = () => {
    let cpfFormatado = cpf.value

    if (cpfFormatado > 9) {
        cpfFormatado = cpfFormatado.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (cpfFormatado > 6) {
        cpfFormatado = cpfFormatado.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (cpfFormatado > 3) {
        cpfFormatado = cpfFormatado.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }

    cpf.value = cpfFormatado
}

const setResult = () => {
    result.textContent = 'CPF válido'
    result.setAttribute('class', 'alert alert-success')
}

const setError = () => {
    result.textContent = 'CPF inválido'
    result.setAttribute('class', 'alert alert-danger')
}

const checaSequencia = () => {
    const cpf = viraArray()
    return cpf[0].repeat(cpf.length)
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
    let cont = 11
    const arrayMult = array.map(valor => valor * (cont-= 1))
    const arrayTot = arrayMult.reduce((ac, valor) => ac += Number(valor), 0)
    let valorPrimeiro = 11- (arrayTot % 11)

    if(valorPrimeiro > 9) valorPrimeiro = 0

    return valorPrimeiro
}

const achaSegundoDigito = () => {
    let array = viraArray()
    array.splice(-1, 1)
    let cont = 12
    const arrayMult = array.map(valor => valor * (cont-= 1))
    const arrayTot = arrayMult.reduce((ac, valor) => ac += Number(valor), 0)
    let valorSegundo = 11 - (arrayTot % 11)

    if(valorSegundo > 9) valorSegundo = 0

    return valorSegundo
}
