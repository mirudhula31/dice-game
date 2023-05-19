var randomno1=Math.floor(Math.random()*6)+1;
var randomImgSource1="images/"+randomno1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImgSource1);
var randomno2=Math.floor(Math.random()*6)+1;
var randomImgSource2="images/"+randomno2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

if(randomno1>randomno2){
    document.querySelector("h1").innerHTML="Player 1 wins!🚩";
}
else if(randomno1<randomno2){
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}