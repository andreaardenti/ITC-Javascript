let toConvert = 0;

function money(value) {
    let size = {
        "500":0,
        "200":0,
        "100":0,
        "50":0,
        "20":0,
        "10":0,
        "5":0,
        "2":0,
        "1":0
    }, counter = '', i;
    for (i in size) {
        while (value >= size[i]) {
            counter += size[i];
            value -= size[i];
        }
    }
    return JSON.stringify({counter});
}

console.log(money(410));
