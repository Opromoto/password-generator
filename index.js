const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const pass1El = document.getElementById("pass1-el")
const pass2El = document.getElementById("pass2-el")

const nums = document.querySelector("input")

const btnEl = document.getElementById("btn") 

function random() {
    let i = Math.floor(Math.random() * characters.length)
    return characters[i]
}

function generate() {
    pass1El.textContent = ""
    pass2El.textContent = ""
    
    let num = Number(nums.value)
    
    for (let i = 0; i < num; i++) {
        pass1El.textContent += random()
        pass2El.textContent += random()
    }
    
}


btnEl.addEventListener("click", generate)