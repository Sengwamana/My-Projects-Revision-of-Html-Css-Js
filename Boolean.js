function check(){

    let IsGuessNumber = false;
    const actualNumber = Math.floor(Math.random()*100)+1;
    const MyGuess = document.getElementById("demo").value;

    if (actualNumber === +MyGuess) {
        IsGuessNumber = true;
    }


    if (IsGuessNumber === true) {
        document.getElementById("result").innerHTML ="Excellent you guess a correct number";
    }
    else {
        document.getElementById("result").innerHTML=`Incorrect number the real numbeer is ${actualNumber}`;
    }
}