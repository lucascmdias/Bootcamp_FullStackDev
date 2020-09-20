let red = document.getElementById("red")
let green= document.getElementById("green")
let blue = document.getElementById("blue")
let textRed = document.getElementById("textRed")
let textGreen = document.getElementById("textGreen")
let textBlue = document.getElementById("textBlue")
let squareCSS = document.getElementById("squareCSS")

function mudar(element){

    if (element =="red"){      
        textRed.value = red.value 
    }

    if (element =="green"){      
        textGreen.value = green.value      
    }

    if (element =="blue"){
        textBlue.value = blue.value    
    }

    squareCSS.style.backgroundColor = `rgb(${textRed.value},${textGreen.value},${textBlue.value})`
}

