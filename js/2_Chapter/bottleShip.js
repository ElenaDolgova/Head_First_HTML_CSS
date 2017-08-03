var location1 =3;
var location2 =4;
var location3 =5;

var guess;
var hits =0;
var guesses =0;

var isSunk =false;

while(!isSunk){
    guess = prompt("Готов к бою? (введите значения 0-6):");
    if(guess<0 || guess>6){
        guess=prompt("Введите правильные значения 0-6");
    }else {
        guesses++;
    }
    if(guess==location1){
        hits++;
    }else if(guess==location2){
        hits++;
    }else if(guess==location3){
        hits++;
    }
    if (hits==3){
        isSunk=true;
    }

}