var randomLoc=Math.floor(Math.random()*5);
var location1 =randomLoc;
var location2 =location1+1;
var location3 =location1+2;

var guess;
var hits =0;
var guesses =0;
var less = 3;

var isSunk =false;

while(!isSunk){
    guess = prompt("Готов к бою? (введите значения 0-6):");
    if(guess<0 || guess>6){
        guess=prompt("Введите правильные значения 0-6");
    }else {
        guesses++;
    }
    if (guess == location1 || guess == location2 || guess == location3) {
        hits++;
        less--;
        alert("Ты попал! Осталось попасть "+less+" раз!");
    }else{
        alert("Ты промазал!" );
    }
    if (hits==3){
        isSunk=true;
        alert("Ты победил! Ты стрелял "+guesses+" раз и твой процент попадания равен "+3/guesses*100+"%!");
    }

}