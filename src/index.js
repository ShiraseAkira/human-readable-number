module.exports = function toReadable(number) {
    const hundreds = {
        0: '',
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred'
    };

    const tens = {
        0: '',
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    const ones = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    const specials = {
        0: '',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };



    let o = number % 10;
    let t = Math.floor(number / 10) % 10;
    let h = Math.floor(number / 100) % 10;

    if (h == 0 && t == 0 && o == 0) {
        return 'zero';
    }

    let result = '';

    if (h != 0) {
        result = hundreds[h];
    }

    if (t != 0) {
        if (t == 1 && o != 0) {
            return `${result} ${specials[t * 10 + o]}`.trim();
        }
        result = `${result} ${tens[t]}`;
    }

    if (o != 0) {
        result = `${result} ${ones[o]}`;
    }

    return result.trim();
}
