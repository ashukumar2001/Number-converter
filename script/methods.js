// Binary to Decimal
function bin2dec(bin) {
    return Number(parseInt(bin,2).toString(10));
}

// Hexadecimal to Decimal
function hex2dec(hex) {
    return parseInt(hex,16).toString(10);
}

// Decimal to Binary
function dec2bin(dec) {
    return (dec>>>0).toString(2);
}

// Decimal to Hexadecimal
function dec2hex (dec) {
    return parseInt(dec, 10).toString(16);
}

// Binary to Hexadecimal 
function bin2hex (bin) {
    return parseInt(bin, 2).toString(16);
}

// Hexadecimal to Binary
function hex2bin (hex) {
    return parseInt(hex, 16).toString(2);
}

// function to make copy button
function copy() {
    var copyText = document.querySelector("input#output-value");
    copyText.select();
    document.execCommand("copy");
}






