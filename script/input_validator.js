function binValidator(bin, conversion) {
    bin = bin.toString();
    let regex = /[A-Za-z2-9\s\W\0]/g;
    let n = bin.search(regex);
    if (n === -1) {
        document.getElementById("output-value").value = conversion(bin);
    }
    else {
        document.getElementById("output-value").value = "Invalid Binary Number!!!";
    }
}

function hexValidator(hex, conversion) {
    let regex = /[G-Zg-z\s\W\0]/gi;
    let n = hex.search(regex);
    if (n===-1) {
        document.getElementById("output-value").value = conversion(hex);
    }
    else {
        document.getElementById("output-value").value = "Invalid Hexadecimal Number!!!";
    }
}

function decValidator(dec, conversion) {
    dec = dec.toString();
    let regex = /[\D]/g;
    let n = dec.search(regex);
    if(n===-1) {
        document.getElementById("output-value").value = conversion(dec);
    }
    else {
        document.getElementById("output-value").value = "Invalid Decimal Number!!!";
    }
}