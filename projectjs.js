
 numbers=["0","1","2","3","4","5","6","7","8","9"];


  function eror()
  {
      errorr=document.getElementById("spanerror");
  }

  function def()
  {
    errorr.innerHTML="";
    var inputs=document.querySelectorAll('input');
    inputs.forEach
    (
      input => {input.style.border="";}
  );
  }

  function styly(namy)
  {
    namy.style.border="solid red";
  }

  function inner(string)
  {
    errorr.innerHTML=string;
  }



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




function num()
{
    co =document.getElementsByClassName("code")[0];
   nu = document.getElementsByClassName("number")[0];

  if(co.value.length>3)
  {
    inner("the number code should be at maximum 3 digits");
    styly(co);
    return false;
  }

  else if(nu.value.length<7)
  {
    inner("the number should be more than 7 digits");
    styly(nu);
    return false;
  }
  return em();
}




function pass()
{
  var pas=document.getElementById("passin");
  var pasv=document.getElementById("passin").value;

  if(pasv.length<8)
  {
    styly(pas);
    inner("the password must be more than 8 digits!");
    return false;
  }
  else if(pasv.length>15)
  {
    styly(pas);
    inner("the password must at maximum 15 digits");
    return false;
  }
  else for(var i=0;i<pasv.length;i++)
  {
    if(pasv.indexOf(numbers[i])!=-1)
    {
      return true;
    }

  }
  styly(pas);
  inner("password must contains at least one number!");
  return false;

}






function em()
{
  var email=document.getElementsByClassName("ema")[0];
  var emailv=document.getElementsByClassName("ema")[0].value;

  if(emailv.indexOf("@")==-1){
    styly(email);
    inner("the email must contain @!");
    return false;
  }

  else if(emailv.indexOf(".")==-1)
  {
    styly(email);
    inner("the email must contain a dot!");
    return false;
  }
  else for(var i=0;i<10;i++)
  {
   if(emailv.indexOf(numbers[i])>emailv.indexOf("@"))
  {
    styly(email);
    inner("the email format is incorrect!");
    return false;
  }
}

if((emailv.indexOf("@")>emailv.indexOf(".")) || (emailv.indexOf("@")<5))
{
  styly(email);
  inner("the email format is incorrect!");
  return false;
}

  return pass();
}






function nameinfun()
{
  var name=document.getElementsByClassName("namein")[0];
  var name2=document.getElementsByClassName("namein")[1];

  for(var i=0;i<10;i++){
  if(name.value.indexOf(numbers[i])!=-1)
  {
  styly(name);
  inner("the name must contain no numbers!");
  return false;
  }
  else if(name.value.length>10){
    styly(name);
    inner("name is too long!");
    return false;
  }

}
for(var i=0;i<10;i++)
{
  if(name2.value.indexOf(numbers[i])!=-1)
  {
    styly(name2);
    inner("the last name must contain no numbers!");
    return false;
  }
  else if(name2.value.length>10)
  {
    styly(name2);
    inner("last name is too long!");
    return false;
  }
}
   return num();
}




function submit1()
{
  return nameinfun();


}
