var sel = document.getElementById("methods");
var selected;
var inputValue;
var conversionName = sel.options[sel.selectedIndex].text;
document.getElementById("conversion-name").innerHTML = conversionName + " : ";

document.getElementById("selected").addEventListener('click', function() {
    selected = sel.options[sel.selectedIndex].value;
    if(selected === "hex2dec") { // Hexadecimal to Decimal
    document.getElementById("enter-number").innerHTML = "Enter Hexdecimal Number : ";
        conversionName = sel.options[sel.selectedIndex].text;
        document.getElementById("conversion-name").innerHTML = conversionName + " : ";
        document.getElementById("convert").addEventListener('click', function() {
            inputValue = document.getElementById("input-value").value;
            inputValue = inputValue.toString(); // inputValue converted to string because hex value give error
            hexValidator(inputValue, hex2dec);
        });
    } else if(selected === "dec2bin") { // Decimal to Binary
        document.getElementById("enter-number").innerHTML = "Enter Decimal Number : ";
        conversionName = sel.options[sel.selectedIndex].text;
        document.getElementById("conversion-name").innerHTML = conversionName + " : ";
        document.getElementById("convert").addEventListener('click', function() {
            inputValue = document.getElementById("input-value").value;
            decValidator(inputValue, dec2bin);
        });
    }else if(selected === "bin2dec") { // Binary to Decimal
        document.getElementById("enter-number").innerHTML = "Enter Binary Number : ";
        conversionName = sel.options[sel.selectedIndex].text;
        document.getElementById("conversion-name").innerHTML = conversionName + " : ";
        document.getElementById("convert").addEventListener('click', function() {
            inputValue = document.getElementById("input-value").value;
            binValidator(inputValue, bin2dec);
        });
    }else if(selected === "dec2hex") { // Decimal to Hexadecimal
        document.getElementById("enter-number").innerHTML = "Enter Decimal Number : ";
        conversionName = sel.options[sel.selectedIndex].text;
        document.getElementById("conversion-name").innerHTML = conversionName + " : ";
        document.getElementById("convert").addEventListener('click', function() {
            inputValue = document.getElementById("input-value").value;
            decValidator(inputValue, dec2hex);
        });
    }else if(selected === "hex2bin") { // Hexadecimal to Binary
    document.getElementById("enter-number").innerHTML = "Enter Hexdecimal Number : ";

        conversionName = sel.options[sel.selectedIndex].text;
        document.getElementById("conversion-name").innerHTML = conversionName + " : ";
        document.getElementById("convert").addEventListener('click', function() {
            inputValue = document.getElementById("input-value").value;
            inputValue = inputValue.toString();
            hexValidator(inputValue, hex2bin);
        });
    }else if(selected === "bin2hex") { //Binary to Hexadecimal 
        document.getElementById("enter-number").innerHTML = "Enter Binary Number : ";
        conversionName = sel.options[sel.selectedIndex].text;
        document.getElementById("conversion-name").innerHTML = conversionName + " : ";
        document.getElementById("convert").addEventListener('click', function() {
            inputValue = document.getElementById("input-value").value;
            binValidator(inputValue, bin2hex);
        });
    }
});

document.querySelector("input#copy").addEventListener('click', copy); // to copy output value
document.getElementById("reset").addEventListener('click', resetHandler); // top reset the previous data