function convertTemperature(unit1, degree, unit2) {
    if ((unit1==='C' || unit1==='c') && (unit2==='F' || unit2==='f')) {
        let cToF = ((1.8 * degree) + 32);
        return (cToF);
    } else if ((unit1==='F' || unit1==='f') && (unit2==='C' || unit2==='c')) {
        let fToC = ((degree - 32) / 1.8);
        return (fToC);
    } else if ((unit1==='K' || unit1==='k') && (unit2==='C' || unit2==='c')) {
        let kToC = (degree - 273.15);
        return (kToC);
    } else if ((unit1==='C' || unit1==='c') && (unit2==='K' || unit2==='k')) {
        let cToK = (degree + 273.15);
        return (cToK);
    } else if ((unit1==='K' || unit1==='k') && (unit2==='F' || unit2==='f')) {
        let kToF = ((9/5) * degree - 459.67);
        return (kToF);
    } else if ((unit1==='F' || unit1==='f') && (unit2==='K' || unit2==='k')) {
        let fToK = ((5/9) * degree + 255.37);
        return (fToK);
    }
}
console.log('----------------- Tabella di conversione (-----------------');
console.log('Celsius to Fahrenheit: ' + convertTemperature('C', 50, 'F'));
console.log('Fahrenheit to Celsius: ' + convertTemperature('f', -40, 'c'));
console.log('Kelvin to Celsius:     ' + convertTemperature('K', 200, 'C'));
console.log('Celsius to Kelvin:     ' + convertTemperature('c', 200, 'K'));
console.log('Kelvin to Fahrenheit:  ' + convertTemperature('K', 200, 'F'));
console.log('Fahrenheit to Kelvin:  ' + convertTemperature('f', 40, 'K'));
