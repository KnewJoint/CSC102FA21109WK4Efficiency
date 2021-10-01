function play_craps() {
    console.log("play_craps() started");
    var die1 = Math.ceil(Math.random() * 6); //selected random number between 0 and 1, multiply by 6 and rounded to the nearest number for 1st die//
    var die2 = Math.ceil(Math.random() * 6); //selected random number between 0 and 1, multiply by 6 and rounded to the nearest number for 2nd die//
    var sum = die1 + die2; //adds both the 1st and 2nd dice numbers//
    document.getElementById("die1Res").innerHTML = die1; //shows the variable of the 1st die on the website//
    document.getElementById("die2Res").innerHTML = die2; //shows the variable of the 2nd die on the website//
    document.getElementById("sum1Res").innerHTML = sum; //shows the sum of the 2 dice on the webiste//
    if (sum == 7 || sum == 11) {
        document.getElementById("final1Res").innerHTML =
            "CRAPS - you lose"; //if the sum of the dice is 7 or 11, there will be a message saying "CRAPS - you lose" underneath the sum//
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("final1Res").innerHTML =
            "Doubles - you win"; //if the 1st and 2nd die 
    }
    else {
        document.getElementById("final1Res").innerHTML =
            "Draw - You did not win or lose, please try again!";

    }
}

function btrBlastOff() { //starting a "better" blastoff function that replaces previous version via looping//
    console.log("btrBlastOff() started");
    var currTime = 50; //setting countdown timer to 50 per UAT Space Program instuctions//
    for (var i = 0; i < 10; i = i + 1) { //this is the looping function, where it starts off at 0, doesn't go more than 10 and each time it goes up by 1. there will be 10 loops in total.//
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = currTime
            currTime = currTime - 5; //this starts the countdown timer at 50 and decreases it by 5 seconds//
        }, 5000 * i); //this represents 5 seconds per loop//
    }
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!" //this represents when it hits 0 seconds, or passes 50 seconds, the message will say "Blastoff"//
    }, 50000);

}