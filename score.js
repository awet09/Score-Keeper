var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var reset=document.querySelector("#reset");
var numInput=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span")
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var p1Score= 0;
var p2Score= 0;
var gameOver= false;
var winningScore= 5;

p1.addEventListener("click", function(){
    //if not gameover update score//
    if (!gameOver){
        p1Score++;
        //if p1 score = winning score gameover//
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver=true;
        }
    }

    p1Display.textContent = p1Score;

});
p2.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver=true;
            p2Display.classList.add("winner");
        }
    }

    p2Display.textContent = p2Score;
});

reset.addEventListener("click",function(){
    p1Score=0;
    p2Score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver= false;
});

numInput.addEventListener("change",function(){
    winningScoreDisplay.textContent= numInput.value;
    winningScore= Number(numInput.value);
    
});