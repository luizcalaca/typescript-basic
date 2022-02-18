let arrNumber: number[] = [];
arrNumber.push(1, 2, 3);

let arrNumber2: (number|string)[] = [];
arrNumber2.push(1, 2);
arrNumber2.push('três', 'quatro');

arrNumber2.forEach((element) => {
    console.log(element)
})