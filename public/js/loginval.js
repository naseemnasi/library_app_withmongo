function vf()
{
    var text=document.getElementById('pwd');
    var mail=document.getElementById('email');
    var email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("enter")
    if(!email_re.test(mail.value))
   {
    // console.log("enter");
    alert("enter email id correctly in the form of username@example.com");
    return false
   }
   else if(text.value.length<8){
    // console.log("enter in pwd field")
    alert("enter atleast 8 digits");   
    return false;
   }
   else{
    return true;
    }

}