import * as readlineInterface from 'readline'

const readline = readlineInterface.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questao: string = "Digite um número positivo até 100 para o sistema imprimir - em escrito - todos os números do 0 até ele!\nps: digite 'sair' para sair.\n\nnúmero:"

questionario()


async function questionario() {
    while (true) {
        const respostaInput = await perguntaAsync(questao)
        if (respostaInput === "sair") {
            process.exit()
        }

        let resposta: number = Number(respostaInput)

        if (isNaN(resposta) || resposta < 0 || resposta > 100) {
            console.log("Digite um número válido!\n")
            questionario()
            break
        }

        imprimirNumeros(resposta)
        questionario()
        break

    }
}

function perguntaAsync(questao: string): Promise<string> {
    return new Promise((resolve) => {
        readline.question(questao, resolve);
    });
}

function imprimirNumeros(limite: number) {

    const unidades = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
    const unidadesDez = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
    let resultado = ''

    for (let i = 0; i < limite+1; i++) {

        if (i <= 9) {
            resultado = unidades[i]
        } else if (i >= 10 && i <= 19){
            resultado = unidadesDez[i-10]
        } else if (i >= 20 && i <= 29) {
            resultado =  (i===20) ? "vinte" : "vinte e " + unidades[i-20]
        } else if (i >= 30 && i <= 39) {
            resultado =  (i===20) ? "trinta" : "trinta e " + unidades[i-30]
        } else if (i >= 40 && i <= 49) {
            resultado =  (i===20) ? "quarenta" : "quarenta e " + unidades[i-40]
        } else if (i >= 50 && i <= 59) {
            resultado =  (i===20) ? "cinquenta" : "cinquenta e " + unidades[i-50]
        } else if (i >= 60 && i <= 69) {
            resultado =  (i===20) ? "sessenta" : "sessenta e " + unidades[i-60]
        } else if (i >= 70 && i <= 79) {
            resultado =  (i===20) ? "setenta" : "setenta e " + unidades[i-70]
        } else if (i >= 80 && i <= 89) {
            resultado =  (i===20) ? "oitenta" : "oitenta e " + unidades[i-80]
        } else if (i >= 90 && i <= 99) {
            resultado =  (i===20) ? "noventa" : "noventa e " + unidades[i-90]
        } else {
            resultado = "cem"
        }

        // if (limite > 9 && limite < 21){
        //     resultado = unidadesDez[i - 10]
        // } else {
        //     resultado = unidades[i]
        // }

        console.log(resultado)
    }
}

// for (let i = 0; i < 10; i++) {
// console.log(i)
// }
