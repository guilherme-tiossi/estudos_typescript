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
    const dezenas = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
    const dezenasNum = [20, 30, 40, 50, 60, 70, 80, 90]
    let resultado = ''

    for (let i = 0; i < limite+1; i++) {

        if (i <= 9) {
            resultado = unidades[i]
        } else if (i >= 10 && i <= 19){
            resultado = unidadesDez[i-10]
        } else if (i>= 20 && i <= 99) {
            let dezenaPura = Math.floor(i / 10) * 10;
            let indiceAuxiliar = Math.floor(i / 10) - 2;

            resultado = (i===dezenaPura) ? dezenas[indiceAuxiliar] : dezenas[indiceAuxiliar] + " e " + unidades[i-dezenaPura]
        } else {
            resultado = "cem"
        }

        console.log(resultado)
    }
}
