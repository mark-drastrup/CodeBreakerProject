let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer === "" && attempt === "") {
        setHiddenFields();
    }
    
    if(!validateInput(input.value)) {
        return false;
    } else {
        attempt.value++;
    }
}

//implement new functions here
function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 9999);
    attempt.value = 0;
    var answerString = answer.value.toString();
    
    while(answerString.length < 4) {
          answer.value = "0" + answer.value;
    }
}

function setMessage(msg) {
    document.getElementById("message").innerHTML = msg;
}

function validateInput(userInput) {
    if(userInput.length === 4) {
       return true;
    } else {
        document.getElementById("message").innerHTML = "Guesses must be exactly 4 characters long.";
        return false;
    }
}
