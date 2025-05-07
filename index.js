const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")


function generatePassword() {

    let passwordOne = ""
    let passwordTwo = ""

    let passwordLength = document.getElementById("password-length").value

    let includeSymbol = document.getElementById("include-symbols").checked
    let includeNumber = document.getElementById("include-numbers").checked
    
    let allowedChar = characters

    if (includeSymbol){
        allowedChar = allowedChar.concat(symbols)
    }
    if (includeNumber){
        allowedChar = allowedChar.concat(numbers)
    }

    if (passwordLength > 25 || passwordLength < 5) {
        passwordLength = 25
    }

    let charLen = allowedChar.length

    for (let j = 0; j < passwordLength; j++){
        let randomNumOne = Math.floor(Math.random()*charLen)
        let randomNumTwo = Math.floor(Math.random()*charLen)
        passwordOne += (allowedChar[randomNumOne])
        passwordTwo += (allowedChar[randomNumTwo])
    }

    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    if (!text) {
        return
    }

    navigator.clipboard.writeText(text).then(() => {
        const el = document.getElementById(elementId)
        const originalText = el.textContent
        el.textContent = "Copied!"
        setTimeout(() => {
            el.textContent = originalText
        }, 1000)
    }).catch(err => {
        console.error("Failed to copy: ", err)
    });
}


