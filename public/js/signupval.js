function vf()
{
    var pwd1=document.getElementById('pwd1');
    var pwd2=document.getElementById('pwd2');
    var mail=document.getElementById('email');
    var ph=document.getElementById('phone');
    var email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("enter")
    if(!email_re.test(mail.value))
   {
    alert("enter email id correctly in the form of username@example.com");
    console.log("enter")
    mail.focus;
    return false
   }
   else if(pwd1.value.length<8){
    console.log("enter in pwd field")
    alert("enter atleast 8 letter password");   
    return false;
   }
   else if(pwd2.value!=pwd1.value){
    console.log("enter in pwd verification field field");
    alert("enter the same password in two fields");   
    return false;
   }
   else if(ph.value.length<10){
    console.log("enter in pwd field")
    alert("enter atleast 10 digit of mobile nomber");   
    return false;
   }
   else{
    return true;
   }

}