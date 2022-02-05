const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for(let i = 0; i < expr.length / 10; i++){
        arr.push(expr.substring(i * 10, (i + 1) * 10));
    }
    let arr2 = [];
    arr.forEach((elem)=>{
       let arrEl = '';
       if(elem == '**********'){
        arrEl = arrEl + ' ';
        } 
        for(let m = 0; m < elem.length / 2; m++){
            
            let arrElLit = elem.substring(m * 2, (m + 1) * 2);
            if(arrElLit == '00') continue;
            if(arrElLit == '10'){
                arrEl = arrEl + '.';
            }else if(arrElLit == '11'){
                arrEl = arrEl + '-';
            }
        }
        arr2.push(arrEl);
    })
    let str = ''
    arr2.forEach((elem)=>{
        if(elem == ' '){
            str = str + ' ';
        }else{
         let strPart = MORSE_TABLE[elem];
         str = str + strPart;
        }
    })
   return str;
}

module.exports = {
    decode
}