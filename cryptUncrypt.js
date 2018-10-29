const alphabet = 'abcdefghijklmnopqrstuvwxyz ';
const alphacode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'];

let crypt = function(stringaDaCriptare) {
    let stringSplitted = stringaDaCriptare.split("");
    //console.log(stringSplitted);
    let result = [];
    for (let i in stringSplitted) {
        //console.log(stringSplitted[i]);
        for (let j in alphabet) {
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
    let response = '';
    let array = stringToUncrypt.split(".");
    for (let index of array) {
        if (index === '_') {
            response += ' ';
        } else if (alphabet[index]) {
            response += alphabet[index];
        }
    } return response;
}
console.log('\n----------CRYPT/UNCRYPT----------')
console.log(crypt('andrea'));
console.log(uncrypt('0.13.3.17.4.0.'));
console.log('\n')
