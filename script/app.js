var sel = document.getElementById("methods");
var selected;
var inputValue;
var conversionName = sel.options[sel.selectedIndex].text;
document.getElementById("conversion-name").innerHTML = conversionName + " : ";

document.getElementById("selected").addEventListener('click', function() {
    selected = sel.options[sel.selectedIndex].value;
    
    if(selected === "hex2dec") { // Hexadecimal to Decimal
        conversionName = sel.options[sel.selectedIndex].text;
        document.getElementById("conversion-name").innerHTML = conversionName + " : ";
        document.getElementById("convert").addEventListener('click', function() {
            inputValue = document.getElementById("input-value").value;
            inputValue = inputValue.toString(); // inputValue converted to string because hex value give error
            document.getElementById("output-value").value = hex2dec(inputValue); // printing output
        });
    } else if(selected === "dec2bin") { // Decimal to Binary
        conversionName = sel.options[sel.selectedIndex].text;
        document.getElementById("conversion-name").innerHTML = conversionName + " : ";
        document.getElementById("convert").addEventListener('click', function() {
            inputValue = document.getElementById("input-value").value;
            document.getElementById("output-value").value = dec2bin(inputValue); // printing output
        });
    }else if(selected === "bin2dec") { // Binary to Decimal
        conversionName = sel.options[sel.selectedIndex].text;
        document.getElementById("conversion-name").innerHTML = conversionName + " : ";
        document.getElementById("convert").addEventListener('click', function() {
            inputValue = document.getElementById("input-value").value;
            document.getElementById("output-value").value = bin2dec(inputValue); // printing output
        });
    }else if(selected === "dec2hex") { // Decimal to Hexadecimal
        conversionName = sel.options[sel.selectedIndex].text;
        document.getElementById("conversion-name").innerHTML = conversionName + " : ";
        document.getElementById("convert").addEventListener('click', function() {
            inputValue = document.getElementById("input-value").value;
            document.getElementById("output-value").value = dec2hex(inputValue); // printing output
        });
    }else if(selected === "hex2bin") { // Hexadecimal to Binary
        conversionName = sel.options[sel.selectedIndex].text;
        document.getElementById("conversion-name").innerHTML = conversionName + " : ";
        document.getElementById("convert").addEventListener('click', function() {
            inputValue = document.getElementById("input-value").value;
            inputValue = inputValue.toString();
            console.log(inputValue);
            document.getElementById("output-value").value = hex2bin(inputValue);
        });
    }else if(selected === "bin2hex") { //Binary to Hexadecimal 
        conversionName = sel.options[sel.selectedIndex].text;
        document.getElementById("conversion-name").innerHTML = conversionName + " : ";
        document.getElementById("convert").addEventListener('click', function() {
            inputValue = document.getElementById("input-value").value;
            document.getElementById("output-value").value = bin2hex(inputValue);
        });
    }
});

document.querySelector("#copy").addEventListener('click', copy); // to copy output value