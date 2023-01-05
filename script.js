// Easy Board JS

// Variable declarations
let easySolution = ["5","6","2","8","3","1","9","4","7","4","8","7","9","6","2","3","1","5","9","1","3","4","5","7","6","8","2","1","7","8","2","9","6","4","5","3","3","2","9","5","4","8","7","6","1","6","4","5","7","1","3","2","9","8","8","9","4","3","7","5","1","2","6","7","5","6","1","2","4","8","3","9","2","3","1","6","8","9","5","7","4"]
let mediumSolution = ["9","1","5","3","6","4","2","7","8","8","2","7","1","9","5","6","3","4","3","4","6","7","2","8","5","9","1","4","7","3","6","1","2","9","8","5","6","5","9","8","3","7","1","4","2","1","8","2","4","5","9","7","6","3","2","3","1","9","4","6","8","5","7","7","6","4","5","8","1","3","2","9","5","9","8","2","7","3","4","1","6"]
let hardSolution = ["6","9","7","5","3","1","2","8","4","4","8","5","6","7","2","1","3","9","2","1","3","9","4","8","6","7","5","7","6","2","3","5","9","4","1","8","1","5","4","8","2","7","3","9","6","9","3","8","4","1","6","7","5","2","8","7","6","1","9","4","5","2","3","5","2","9","7","6","3","8","4","1","3","4","1","2","8","5","9","6","7"]
let easyInputArray = []
let mediumInputArray = []
let hardInputArray = []
let inputArray = []
let submitButton = document.getElementById("submit-button");
let clearButton = document.getElementById("clear-board");
let modal = document.getElementById("modal");
let closeButton = document.getElementsByClassName("close-button")[0];
let easyButton = document.getElementById("easy-button")
let mediumButton = document.getElementById("medium-button")
let hardButton = document.getElementById("hard-button")
let easyTable = document.getElementById("easy-table")
let mediumTable = document.getElementById("medium-table")
let hardTable = document.getElementById("hard-table")

// functions
function getValueEasy(){
    easyInputArray = []
    for (let i = 1; i <= 81; i++){
        let easyInputValue = document.getElementById(`easy-input-${i}`).value
        easyInputArray.push(easyInputValue)
        console.log(easyInputValue) 
    }
    console.log(easyInputArray)
    return easyInputArray
}

function getValueMedium(){
    mediumInputArray = []
    for (let i = 1; i <= 81; i++){
        let mediumInputValue = document.getElementById(`medium-input-${i}`).value
        mediumInputArray.push(mediumInputValue)
        console.log(mediumInputValue) 
    }
    console.log(mediumInputArray)
    return mediumInputArray
}

function getValueHard(){
    hardInputArray = []
    for (let i = 1; i <= 81; i++){
        let hardInputValue = document.getElementById(`hard-input-${i}`).value
        hardInputArray.push(hardInputValue)
        console.log(hardInputValue) 
    }
    console.log(hardInputArray)
    return hardInputArray
}


function getValue(){
    inputArray = []
    for (let i = 1; i <= 81; i++){
        let inputValue = document.getElementById(`input-${i}`).value
        inputArray.push(inputValue)
        console.log(inputValue) 
    }
    console.log(inputArray)
    return inputArray
}

// Geeks for Geeks: https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/
// this code allowed me to convert the array into strings so that they could be compared using an equalizer

// function checkSolution(){
//     let message = document.getElementById("message");
//     // let dataArray = getValue()
    
//     if (JSON.stringify(solution) == JSON.stringify(inputArray)){
//         console.log("you won!")
//         message.innerHTML = "You Won!"
//         return true
//     }else {
//         console.log("try again!")
//         message.innerHTML = "So Close... Try Again!"
//         return false 
        
//     }
// }


function checkSolution(){
    let message = document.getElementById("message");
    // let dataArray = getValue()
    
    if (JSON.stringify(easySolution) == JSON.stringify(easyInputArray)){
        console.log("you won!")
        message.innerHTML = "You Won!"
        return true
    } else if (JSON.stringify(mediumSolution) == JSON.stringify(mediumInputArray)){
        console.log("you won!")
        message.innerHTML = "You Won!"
        return true
    } else if (JSON.stringify(hardSolution) == JSON.stringify(hardInputArray)){
        console.log("you won!")
        message.innerHTML = "You Won!"
        return true
    } else {
        console.log("try again!")
        message.innerHTML = "So Close... Try Again!"
        return false 
    }
}


function clearBoard(){
    let userInput = document.getElementsByClassName("userinput")

    for (let i = 0; i < userInput.length; i++){
        if (userInput[i].type == "text"){
            userInput[i].value = ""
        }
    }
}

// buttons functionality

submitButton.addEventListener("click", checkSolution);

clearButton.addEventListener("click", clearBoard);


// modal functionality
// W3 Schools: https://www.w3schools.com/howto/howto_css_modals.asp
// Used this code to help me get the modal to deploy

submitButton.onclick = function() {
  modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

easyButton.onclick = function(){
    easyTable.style.display ="block"
    mediumTable.style.display="none"
    hardTable.style.display="none"
    easyButton.style.backgroundColor="#F2D4D7"
    mediumButton.style.backgroundColor="#f5f5f5"
    hardButton.style.backgroundColor = "#f5f5f5"
}

mediumButton.onclick = function(){
    easyTable.style.display ="none"
    mediumTable.style.display="block"
    hardTable.style.display="none"
    easyButton.style.backgroundColor="#f5f5f5"
    mediumButton.style.backgroundColor="#F2D4D7"
    hardButton.style.backgroundColor = "#f5f5f5"
}

hardButton.onclick = function(){
    easyTable.style.display ="none"
    mediumTable.style.display="none"
    hardTable.style.display="block"
    easyButton.style.backgroundColor="#f5f5f5"
    mediumButton.style.backgroundColor="#f5f5f5"
    hardButton.style.backgroundColor = "#F2D4D7"
}
