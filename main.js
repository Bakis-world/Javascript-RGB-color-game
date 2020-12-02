//all variables connecting HTML code to my JS
var numSquares=6;
var colors = getRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var easyButton= document.querySelector("#easyBtn");
var hardButton= document.querySelector("#hardBtn");

//adding a click function to the easy button
easyButton.addEventListener("click", function(){
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numSquares=3;
    colors = getRandomColor(numSquares);
    pickedColor= pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i= 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background= colors[i];
        } else{
            squares[i].style.display= "none";
        }
    }
})
//adding a click function to the hard button
hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares=6;
    colors = getRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
})






//reset button
resetButton.addEventListener("click", function(){
    //get random numbers again
    colors = getRandomColor(numSquares);
    //update picked color
    pickedColor = pickColor();
    // change display for picked color
    colorDisplay.textContent = pickedColor;
    //change squares color
    for(var i = 0; i<squares.length; i++){
    squares[i].style.background = colors[i];
    h1.style.background = "steelblue";
    }
    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
});

//changing gispay colour to picked color
    colorDisplay.textContent = pickedColor;

//looping through all squares
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    //adding click event to the squares
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.background;
        //compare clickedColor to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent="Correct!!!";
            changeColors(clickedColor)
            h1.style.background=clickedColor;
            resetButton.textContent="Play Again?";
        } else {
            this.style.background="#232323";
            messageDisplay.textContent="Try Again";
        }
    });
};


///all functions

function changeColors(color){
    for(i=0; i<squares.length; i++){
        squares[i].style.background= color;
    }
}

function pickColor(){
   var random= Math.floor(Math.random()*colors.length);
   return colors[random];
}

function getRandomColor(num){
var arr=[];

for(var i=0; i<num; i++){
    arr.push(randomColor());
}
return arr;
}

function randomColor(){
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
return "rgb(" +r +", " + g+", "+b+")";
}