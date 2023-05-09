function isPalyndrom(str) {
    let aux = str.replaceAll(' ', '')
    let reversed = aux.split('').reverse().join('')
    console.log(aux, reversed)
    return aux === reversed
}