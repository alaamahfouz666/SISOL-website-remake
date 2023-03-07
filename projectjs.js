
function showmenu(){
  var menu=document.getElementsByClassName("menu")[0];
  if(menu.style.display=="none")
  {
  menu.style.display="inline-block";
  return;
  }

  else if(menu.style.display="inline-block")
  {
  menu.style.display="none";
  return;
  }
}

function nameinfun()
{
  var name=document.getElementsByClassName("namein")[0];
  var name2=document.getElementsByClassName("namein")[1];
  var errorr=document.getElementById("spanerror");
  var numbers=["0","1","2","3","4","5","6","7","8","9"];
  name.style.border="";
  name2.style.border="";
  errorr.innerHTML="";

  for(var i=0;i<10;i++){
  if(name.value.indexOf(numbers[i])!=-1)
  {
  name.style.border="solid red";
  errorr.innerHTML="the name must contain no numbers!";
  return false;
  }
  else if(name.value.length>10){
    name.style.border="solid red";
    errorr.innerHTML="name is too long!";
    return false;
  }

}
for(var i=0;i<10;i++){
  if(name2.value.indexOf(numbers[i])!=-1)
  {
    name2.style.border="solid red";
    errorr.innerHTML="the last name must contain no numbers!"
    return false;
  }
  else if(name2.value.length>10){
    name2.style.border="solid red";
    errorr.innerHTML="last name is too long!";
    return false;
  }
}

}


function submit1()
{
  return nameinfun();


}
