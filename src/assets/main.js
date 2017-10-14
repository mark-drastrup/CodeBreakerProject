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

function getResults(input) {
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    let rightGuess = 0;
    for(i = 0; i < input.length; i++) {
        if(input.charAt(i) == answer.value.charAt(i)) {
            html += '<span class="glyphicon glyphicon-ok"></span>';
            rightGuess++;
        } else if(answer.value.indexOf(input.charAt(i)) < -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';
    document.getElementById('result').innerHTML += html;
    
    if(rightGuess === 4) {
        return true;
    } else {
        return false;
    }
}
//test
//test2