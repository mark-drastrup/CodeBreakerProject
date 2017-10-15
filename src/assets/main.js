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
    
    if(getResults(input.value)) {
        setMessage("You win! :)");
        showAnswer(true);
        showReplay();
    } else if(!getResults(input.value) && attempt.value >= 10) {
        setMessage("You Lose! :(");  
        showAnswer(false);
        showReplay();
    } else {
        setMessage("Incorrect, try again.");
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
    for(i = 0; i < input.length; i++) {
        if(input.charAt(i) == answer.value.charAt(i)) {
            html += '<span class="glyphicon glyphicon-ok"></span>';
          
        } else if(answer.value.indexOf(input.charAt(i)) > -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';
    document.getElementById('results').innerHTML += html;
    
    
    if(input === answer.value) {
        return true;
    } else {
        return false;
    }
}

function showAnswer(param) {
    document.getElementById("code").innerHTML = answer.value;
    if(param) {
        document.getElementById("code").addClass(" succes");
    } else {
         document.getElementById("code").addClass(" failure");
    }
}

function showReplay() {
    document.getElementById("guessing-div").style.display = "none";
    document.getElementById("replay-div").style.display = "block";
}
