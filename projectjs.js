
 numbers=["0","1","2","3","4","5","6","7","8","9"];

 function myfunc()
 {
    var inp=document.getElementsByClassName("hiddeninput")[0];

     if(document.getElementById("s1").value=="op1")
     {
     document.getElementById("ot1").style.display="inline-block";
     inp.required=true;
   }
   else {
     document.getElementById("ot1").style.display="none";
     inp.required=false;
   }
 }

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
  if(document.getElementsByTagName("table").length>0)
  document.getElementsByTagName("table")[0].style.border="";

  if(document.getElementsByClassName("mainb").length>0)
  document.getElementsByClassName("mainb")[0].style.border="";
  }

  function styly(namy)
  {
    namy.style.border="solid red";
    if(document.getElementsByTagName("table").length>0)
    document.getElementsByTagName("table")[0].style.border="solid red";
    if(document.getElementsByClassName("mainb").length>0)
    document.getElementsByClassName("mainb")[0].style.border="solid red";
  }

  function inner(string)
  {
    errorr.innerHTML=string;
  }

function table1()
{
  var divv=document.getElementsByClassName("mybooks");
  for(var i=1;i<3;i++)
  {
    divv[i].style.display="none";
  }

  divv[0].style.display="block";
}

function table2()
{
  var divv=document.getElementsByClassName("mybooks");
  for(var i=0;i<3;i++)
  {
    if(i!=1)
    divv[i].style.display="none";
  }

  divv[1].style.display="block";
}

function table3()
{
  var divv=document.getElementsByClassName("mybooks");
  for(var i=0;i<2;i++)
  {
    divv[i].style.display="none";
  }

  divv[2].style.display="block";
}




function num()
{
  def();
   co =document.getElementsByClassName("code")[0];


  if(co.value.length>3)
  {
    inner("the number code should be at maximum 3 digits");
    styly(co);
    return false;
  }

return num1();
}

function num1()
{
  def();

   nu = document.getElementsByClassName("number")[0];

   if((nu.value.length<7) && (nu.value.length>0))
   {
     inner("the number should be more than 7 digits");
     styly(nu);
     return false;
   }

return em();
}



function pass()
{
  def();
  var pas=document.getElementsByClassName("passin");

  for(var i=0;i<pas.length;i++)
  {
  if(pas[i].value.length>0)
  {
  if(pas[i].value.length<8)
  {
    styly(pas[i]);
    inner("the password must be more than 8 digits!");
    return false;
  }
  if(pas[i].value.length>15)
  {
    styly(pas[i]);
    inner("the password must at maximum 15 digits");
    return false;
  }
   var c=0;
  for(var j=0;j<10;j++)
  {
    if(pas[i].value.indexOf(numbers[j])!=-1)
    {
      c=1;

    }
}
  }
  if(c==0)
  {
  styly(pas[i]);
  inner("password must contains at least one number!");
  return false;
}

  }
}


function em()
{
  def();

  var email=document.getElementsByClassName("ema")[0];
  var emailv=document.getElementsByClassName("ema")[0].value;

  if(emailv.length>0)
  {
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
}


return pass();
}






 function nameinfun()
{
  def();
  var name=document.getElementsByClassName("namein");


  for(var j=0;j<name.length;j++)
  {
  for(var i=0;i<10;i++)
  {
  if(name[j].value.indexOf(numbers[i])!=-1)
  {
    if(j==0){
  styly(name[j]);
  inner("the name must contain no numbers!");
  return false;
}
  if(j==1)
  {
    styly(name[j]);
    inner("the last name must contain no numbers!");
    return false;
  }
}
  }

   if(name[j].value.length>10){
    if(j==0)
    {
    styly(name[j]);
    inner("name is too long!");
    return false;
  }
  if(j==1)
  {
    styly(name[j]);
    inner("last name is too long!");
    return false;
  }
  }
}

   return num();
}


  function fun1()
  {
    return nameinfun();

  }

function submit1()
{
  return nameinfun();
}
