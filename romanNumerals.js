//Doing the regular roman numeral style is not harder than the "iiii = 4" requirement. Both are demonstrated.

const numeralMap = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
}


const keys = Object.keys(numeralMap);
const vals = Object.values(numeralMap);


const simpleNumerals = num => {
    return recursiveNumerals(keys, vals, num);
}


const dunceNumerals = num => {
    const noPrevInts = keys.filter((elem, i) => (i % 2 === 0));
    const noPrevNumers = vals.filter((elem, i) => (i % 2 === 0));
    return recursiveNumerals(noPrevInts, noPrevNumers, num);
}

const recursiveNumerals = (keyArr, valArr, num) => {
    let answer = '';
    for(let i = keyArr.length - 1; i >= 0; --i) {
        while(num >= keyArr[i]) {
            answer += valArr[i];
            num -= keyArr[i];
        }
    }
    
    return answer;
}


console.log(simpleNumerals(4));
console.log(simpleNumerals(267));
console.log(simpleNumerals(99));
console.log(dunceNumerals(4));
console.log(dunceNumerals(267));
console.log(dunceNumerals(99));