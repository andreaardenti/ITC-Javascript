const alphabet = 'abcdefghijklmnopqrstuvwxyz ';
const alphacode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'];

let crypt = function(stringaDaCriptare) {
    let stringSplitted = stringaDaCriptare.split("");
    //console.log(stringSplitted);
    let result = [];
    for (i in stringSplitted) {
        //console.log(stringSplitted[i]);
        for (j in alphabet) {
            //console.log(alphabet[j]);
            if (alphabet[j] === stringSplitted[i]) {
                result += `${alphabet.indexOf(alphabet[j])}.`; //template string
                //console.log(result);
            }
        }
    }
    //console.log(typeof(result));
    //console.log(result.length);
    return '\nStringa criptata: ' + result;
}

//console.log(crypt('andrea'));


function uncrypt(stringToUncrypt) {
    let temp = new Array();
    temp = stringToUncrypt.split(".");
    for (let i = 0; i < temp.length; i++) {
        //console.log('Questa è la stringa senza il PUNTO: ' + temp[i]);
    }

    //console.log('contenuto di temp: ' + temp);
    let result = [];
    //console.log('contenuto di result: ' + result);

    for (let j in temp) {
        //console.log('siamo dentro let j in temp:' + temp[j]);
        for (let x in alphacode) {
            //console.log('siamo dentro let x in alphacode:' + alphacode);
            for (let z in alphabet) {
                if (temp[j] === alphacode[x]) {
                    alphacode[x] = alphabet[z];
                    //console.log('contenuto di alphabet [z]: ' + alphabet[z]);
                    result += alphabet[parseInt(j)];
                }
            }
        }
    }
    return 'Stringa de-crittata: ' + result;
}
console.log('\n----------CRYPT/UNCRYPT----------')
console.log(crypt('andrea'));
console.log(uncrypt('0.1'));
console.log('\n')
