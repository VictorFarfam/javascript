function validaArray(arr, num) {
    try{
        if (!arr && !num) 
            throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== 'object')
            throw new TypeError ("Array precisa ser do tipo object")


        if (typeof num !== 'object')
            throw new TypeError ("Array precisa ser do tipo numero")

        if (arr.length !== num)
            throw new RangeError('Tamanho invãlido')

    return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError")
            console.log(e.message)
        } else {
            console.log("Erro não esperado:" + e)
        }
}
}

console.log(validaArray());