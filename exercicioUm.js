"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var readlineInterface = require("readline");
var readline = readlineInterface.createInterface({
    input: process.stdin,
    output: process.stdout
});
var questao = "Digite um número positivo até 100 para o sistema imprimir - em escrito - todos os números do 0 até ele!\nps: digite 'sair' para sair.\n\nnúmero:";
questionario();
function questionario() {
    return __awaiter(this, void 0, void 0, function () {
        var respostaInput, resposta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 2];
                    return [4 /*yield*/, perguntaAsync(questao)];
                case 1:
                    respostaInput = _a.sent();
                    if (respostaInput === "sair") {
                        process.exit();
                    }
                    resposta = Number(respostaInput);
                    if (isNaN(resposta) || resposta < 0 || resposta > 100) {
                        console.log("Digite um número válido!\n");
                        questionario();
                        return [3 /*break*/, 2];
                    }
                    imprimirNumeros(resposta);
                    questionario();
                    return [3 /*break*/, 2];
                case 2: return [2 /*return*/];
            }
        });
    });
}
function perguntaAsync(questao) {
    return new Promise(function (resolve) {
        readline.question(questao, resolve);
    });
}
function imprimirNumeros(limite) {
    var unidades = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    var unidadesDez = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    var dezenas = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    var dezenasNum = [20, 30, 40, 50, 60, 70, 80, 90];
    var resultado = '';
    for (var i = 0; i < limite + 1; i++) {
        if (i <= 9) {
            resultado = unidades[i];
        }
        else if (i >= 10 && i <= 19) {
            resultado = unidadesDez[i - 10];
        }
        else if (i >= 20 && i <= 99) {
            var dezenaPura = Math.floor(i / 10) * 10;
            var indiceAuxiliar = Math.floor(i / 10) - 2;
            // console.log(indiceAuxiliar)
            resultado = (i === dezenaPura) ? dezenas[indiceAuxiliar] : dezenas[indiceAuxiliar] + " e " + unidades[i - dezenaPura];
            // else if (i >= 20 && i <= 29) {
            //     resultado = (i===20) ? "vinte" : "vinte e " + unidades[i-20]
            // } else if (i >= 30 && i <= 39) {
            //     resultado = (i===20) ? "trinta" : "trinta e " + unidades[i-30]
            // } else if (i >= 40 && i <= 49) {
            //     resultado = (i===20) ? "quarenta" : "quarenta e " + unidades[i-40]
            // } else if (i >= 50 && i <= 59) {
            //     resultado = (i===20) ? "cinquenta" : "cinquenta e " + unidades[i-50]
            // } else if (i >= 60 && i <= 69) {
            //     resultado = (i===20) ? "sessenta" : "sessenta e " + unidades[i-60]
            // } else if (i >= 70 && i <= 79) {
            //     resultado = (i===20) ? "setenta" : "setenta e " + unidades[i-70]
            // } else if (i >= 80 && i <= 89) {
            //     resultado = (i===20) ? "oitenta" : "oitenta e " + unidades[i-80]
            // } else if (i >= 90 && i <= 99) {
            //     resultado = (i===20) ? "noventa" : "noventa e " + unidades[i-90]
        }
        else {
            resultado = "cem";
        }
        console.log(resultado);
    }
}
