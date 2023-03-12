numbers=["0","1","2","3","4","5","6","7","8","9"];

function myfunc()
{
    if(document.getElementById("s1").value=="op1")
    document.getElementById("ot1").style.display="inline-block";
}

function styly(namy)
{
  namy.style.border="solid red";
}


  function username()
  {
    var inputtv=document.getElementsByName("nameinp")[0].value;
    var inputt=document.getElementsByName("nameinp")[0];

    for(var i=0;i<inputtv.length;i++)
    {
      if(inputtv.indexOf(numbers[i])!=-1)
      {
        styly(inputt);
        inner("username must contais no numbers");
        return false;
      }
    }

  }


  function fun1()
  {
  return username();
  }
