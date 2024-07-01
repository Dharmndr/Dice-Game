// alert("working!");
if (performance.getEntriesByType("navigation")[0].type==="reload") {
    Dicee();
  }
 function Dicee(){
 
   var randomNumber1=Math.floor(Math.random()*6)+1;
    var randomImageSource1="dice"+randomNumber1+".png";
    document.getElementsByClassName("img1")[0].setAttribute("src",randomImageSource1);
    
    var randomNumber2=Math.floor(Math.random()*6)+1; 
    var randomImageSource2="dice"+randomNumber2+".png";
    document.getElementsByClassName("img2")[0].setAttribute("src",randomImageSource2);
    
 
    if(randomNumber1>randomNumber2){
      document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
    }
    else if(randomNumber2>randomNumber1){
       document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
    }
    else {
       document.querySelector("h1").innerHTML="Draw!";
    }
 }
 
 
 