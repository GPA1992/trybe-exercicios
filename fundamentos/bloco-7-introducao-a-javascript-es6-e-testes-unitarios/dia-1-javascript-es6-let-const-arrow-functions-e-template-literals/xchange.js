const changeX = (nome) => {
    const string = 'Tryber x aqui!';
    const arrString = string.split(' ');
    const i = arrString.indexOf('x');
    if (i !== -1) {
        arrString[i] = nome
    }
    return arrString.join(' ');

}

console.log(changeX('gabriel'));


//


