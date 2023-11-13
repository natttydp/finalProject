let notA = false;
let andA = false;
let andB = false;

function notGate () {
    
    if (notA == false) {
        document.getElementById("notImage").src = "notOn.JPG"
        notA = true;
    }
    else {
        document.getElementById("notImage").src = "notOff.JPG"
        notA = false;
    }


}

function andGate(input) {


    if(input == "A" ) {
        if(andA == false) {
            andA = true;
        }
        else {
            andA = false;
        }
    }

    if(input == "B") {
        if(andB == false) {
            andB = true;
        }
        else {
            andB = false;
        }

    }

    if(andA == true && andB == true) {
        document.getElementById("andImage").src = "AndOnOn.JPG"
    }
    else if (andA == true && andB == false) {
        document.getElementById("andImage").src = "AndOnOff.JPG"
    }
    else if (andA == false && andB == true) {
        document.getElementById("andImage").src = "AndOffOn.JPG"
    }
    else if (andA == false && andB == false) {
        document.getElementById("andImage").src = "AndOffOff.JPG"
    }
    
}

function binToHex() {
    var x = document.getElementById("inputBin").value;
    var hexOut = parseInt(x , 2).toString(16).toUpperCase();
    document.getElementById("demo").innerHTML = hexOut;
}

function decToASCII() {
    x = document.getElementById("inputdec").value;
    var res = String.fromCharCode(x);
    document.getElementById("demo2").innerHTML = res;
    console.log(res);
}

function myFunction() {
    var x, text;
  
    
    x = document.getElementById("numb").value;

    console.log(x);
  
    
      text = x;
      unicode = ("&#x" + x)
    
    document.getElementById("demo3").innerHTML = unicode;
  }