var y = 0;
var slideIndex = 0;

function start(){
    console.log("we good");
    slideIndex = 0;
    y = 0;
    console.log(y);
}
//carousel(); runs carousel on load.
 
/*function carousel() {
    console.log("started!")
	var i;
  var x = document.getElementsByClassName("coins");
  
  while (y < 100) {
      console.log("while");
  for (i = 0; i < x.length; i++) {
  	x[i].style.display = "none";
  }
  slideIndex++;
  
  if (slideIndex > x.length) {
  	slideIndex = 1
  }
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 500); //Change image every 1/2 sec
  y++
  console.log(y);
}
*/
var heads = 0;
var tails = 0;
function roll(){
    var x = Math.floor(Math.random() * 10) + 1;
    console.log(x);
    document.getElementById("winner").innerHTML = "";
    // resets bo3 button
    heads = 0;
    tails = 0;
    document.getElementById("bo3").disabled = false;
    if (x % 2){
        // its heads
        console.log("number is odd");
        document.getElementById("answer").innerHTML = "It's Heads!";
        // Shows winner coin
        document.getElementById("tails").style.display = "none";  
        document.getElementById("heads").style.display = "block"; 
    } else {
        // its tails
        console.log("number is even");
        document.getElementById("answer").innerHTML = "It's Tails!";
        // Shows winner coin
        document.getElementById("heads").style.display = "none"; 
        document.getElementById("tails").style.display = "block";
    }
}

function winner(){
    var x = Math.round(Math.random());
    console.log(x);
    if (x % 2 ) {
        console.log("number is odd");
        document.getElementById("answer").innerHTML = "It's Heads!";
        heads++;
        // Shows the Score
        document.getElementById("winner").innerHTML = "Heads: " + heads + " Tails: " + tails;
        // Shows winner coin
        document.getElementById("tails").style.display = "none";  
        document.getElementById("heads").style.display = "block";  
    } else {
        console.log("number is even");
        document.getElementById("answer").innerHTML = "It's Tails";
        tails++;   
        // Shows the Score   
        document.getElementById("winner").innerHTML = "Heads: " + heads + " Tails: " + tails;
        // Shows winner coin
        document.getElementById("heads").style.display = "none"; 
        document.getElementById("tails").style.display = "block";
    }
    // Disables bo3 button
    if (heads > 1 || tails > 1){
        document.getElementById("bo3").disabled = true;
    }


}

//   bo1
document.getElementById("bo1").onclick = function() {
    // start();
    // carousel();
    roll();
}
//   bo3
document.getElementById("bo3").onclick = function() {
    winner();
}

