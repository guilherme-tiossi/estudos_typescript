import * as readlineInterface from  'readline'

const readline = readlineInterface.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questao: string = "Digite uma palavra que o sistema informará se ela é um palíndromo ou não!\npalavra:";

questionario()

async function questionario() {
    while (true) {
        const respostaInput = await perguntaAsync(questao)
        if (respostaInput === "sair") {
            process.exit()
        }

        if (respostaInput.length < 2) {
            console.log("Digite uma palavra válida!\n")
            questionario()
            break
        } 

        checarPalavra(respostaInput)
        questionario()
        break
    }
}

function checarPalavra(palavra: string) {
    const palavraArray: string[] = palavra.split("")

    let novaPalavra: string = ""
    let tamanhoArray: number = palavra.length

    for (let i = tamanhoArray-1; i >= 0; i--) {
        novaPalavra += palavraArray[i]
    }

    if (novaPalavra === palavra) {
        console.log("É um palíndromo!\n"+palavra+"\n"+novaPalavra+"\n")
    } else {
        console.log("Não é um palíndromo.")
    }
}

function perguntaAsync(questao: string): Promise<string> {
    return new Promise((resolve) => {
        readline.question(questao, resolve)
    })
}