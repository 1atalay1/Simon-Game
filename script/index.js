var userInputPattern=[];
var gamePattern=[];
var gameColor=["red","blue","green","yellow"];
var level=0;
var temp=0;

function playSound(id){
var audio=new Audio("./sounds/"+id+".mp3");
audio.play();   
}
function pressedButton(id){
        $("#"+id).addClass("pressed");
        setTimeout(function(){
            $("#"+id).removeClass("pressed");
        },100);
}
function randomNumGenerator(){
    var randIndex=Math.floor(Math.random()*4);
    return randIndex;
}
function randomColorGenerator(){
    return gameColor[randomNumGenerator()];
}
function nextSequence(){
    userInputPattern=[];
    level++;
    temp=0;
    $("h1").text("Level "+level);
    var color=randomColorGenerator();
    gamePattern.push(color);
    $("#"+color).fadeOut(100).fadeIn(100);
    playSound(color);
}
function checkPattern(temp_level){
    if(userInputPattern[temp_level]===gamePattern[temp_level]){
        if(userInputPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },500);
        }
        else{
            temp++
        }
    }
    else{
        $("body").addClass("background-red");
        setTimeout(function(){
            $("body").removeClass("background-red");
        },100);
        var audio=new Audio("./sounds/wrong.mp3");
        audio.play();
        $("h1").text("Game is over. Press Any key to start Again!!!");
        gamePattern=[];
        level=0;
       
    }
    }

$(document).keypress(function(){
   if(level===0){   nextSequence();}   
     

    
});
$(".btn").click(function(){
    switch(this.id){
        case "red":
            playSound("red");
            pressedButton("red");
            break;
        case "blue":
            playSound("blue");
            pressedButton("blue");
            break;
        case "yellow":
            playSound("yellow");
            pressedButton("yellow");
            break;
        case "green":
            playSound("green");
            pressedButton("green");
            break;
    }
    userInputPattern.push(this.id);
    checkPattern(temp);

});

