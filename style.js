function Love() {

var namel=document.getElementById("name1").value;

var name2= document.getElementById("name2").value;

var Love=Math.random()*100;

document.getElementById("result").innerHTML=name1+" and "+name2+" have a"+ love.toFixed(2)+" %chance of love";

var par=document.getElementById("result");

if (Love>=80)

par.innerHTML="Your love is strong!";

else if (result=60){

par.innerHTML="Good match!!";

}else if (result>=48){

par.innerHTML="Average match.";

}else if (result>=20){

par.innerHTML="Not a good match.";

}else{

par.innerHTML="Better luck next time!";
}
}