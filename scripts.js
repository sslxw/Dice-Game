var p1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var p2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);


document.getElementById("p1").src = "/images/dice" + p1 + ".png";
document.getElementById("p2").src = "/images/dice" + p2 + ".png";

if (p1 > p2){
    document.getElementById("header").innerHTML = "Player 1 Wins !"
}else if(p2 > p1){
    document.getElementById("header").innerHTML = "Player 2 Wins !"
}else {
    document.getElementById("header").innerHTML = "Its A Draw "
}