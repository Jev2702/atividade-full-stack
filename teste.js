/****Atividade 1****/
function buscarVezesLetra(letra, frase) {
    //calcula usando regex o numero de ocorrencias do carracter escolhido
    try {
        return (frase.match(new RegExp(letra, "g") || []).length)
    }
    catch (error) {
        return error.message;
    }
}

console.log(buscarVezesLetra('n', 'Quantas vezes essa letra ocorre nesta frase?')) // Esperado 2
console.log(buscarVezesLetra('e', 'Quantas vezes essa letra ocorre nesta frase?')) // Esperado 7
console.log(buscarVezesLetra([123, "as"], "[1,2,3]"))

/****Atividade 2****/
function mesclarArrays(arr1, arr2) {
    //Concatena array e filtra os itens repetidos
    try {
        const arr = arr1.concat(arr2)
        return arr.filter((value, index) => arr.indexOf(value) === index);
    } catch (error) {
        return error.message;
    }

}

console.log(mesclarArrays([1, 2, 3], [3, 4, 5])) // [ 1, 2, 3, 4, 5 ]
console.log(mesclarArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) // [ -11, -10, 5, 22, 41,  42, 333]

/****Atividade 3****/
function organizar(str1, str2) {
    try {
        
        str1 = str1.replace(/%/g, '') //remove o '%' com regex
        str1 = str1[0].toUpperCase() + str1.substr(1) // aplica uppercase na primeira letra e concatena com o retante da string
        str2 = str2.replace(/%/g, '').split("").reverse().join("") //remove o '%' com regex e invert a string
        return (`${str1}${str2}`)
    } catch (error) {
        return error.message;
    }
}

console.log(organizar('java', 'tpi%rcs')) // Javascript
console.log(organizar('c%ountry', 'edis')) // Countryside
console.log(organizar('down', 'nw%ot')) // Downtown

/****Atividade 3****/
function calcularDiferenca(dataInicio, dataFinal) {
    try {
        //converte o formato da data ex: '2020-12-31'
        const dtI = dataInicio.split('/') 
        dataInicio = `${dtI[2]}-${dtI[1]}-${dtI[0]}`
        const dtF = dataFinal.split('/')
        dataFinal = `${dtF[2]}-${dtF[1]}-${dtF[0]}`

        //converte para data completa ex: '2020-12-31T00:00:00.000Z'
        const inicio = new Date(dataInicio);
        const final = new Date(dataFinal);

        //convert sa datas em milesegundos e realiza a diferença
        const ml = Math.abs(final.getTime() - inicio.getTime())

        //converte o resultado de milesegundos em dias arredondando para o valor proximo int 
        return Math.ceil(ml / (1000 * 60 * 60 * 24))

    } catch (error) {
        return error.message;
    }
}

console.log(calcularDiferenca("31/12/2020", "31/12/2021")) // Esperado 5