const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")

function generatePassword() {
    let passwordOne = ""
    let passwordTwo = ""
    let charLen = characters.length

    for (let j = 0; j < 15; j++){
        let randomNumOne = Math.floor(Math.random()*charLen)
        let randomNumTwo = Math.floor(Math.random()*charLen)
        passwordOne += (characters[randomNumOne])
        passwordTwo += (characters[randomNumTwo])
    }
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo


}


