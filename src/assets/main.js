let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 9999);
    var answerString = answer.value.toString();
    
    while(answerString.length < 4) {
          answer.value.prepend(0);
    }
}
