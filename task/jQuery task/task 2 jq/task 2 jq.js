function isEmail(email) { 
    return /^((([a-z]|\d)+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~])+)*))@((([a-z]|\d)|(([a-z]|\d)([a-z]|\d|-|\.|_|~)*([a-z]|\d)))\.)+(([a-z])|(([a-z])([a-z]|\d|-|\.|_|~)*([a-z])))$/i.test(email);
}

var specials = /[)(@#$%^&+=]/g;
var upperCaseLetters = /[A-Z]/g;
var lowerCaseLetters = /[a-z]/g;
var n = /[0-9]/g;

$("#usrname" ).focus(function() {
  $("#letter1").css("display", "none");
  $("#messageEmail").css("display", "block");
  $("#usrname").css("border", "1px solid red"); 
  if($("#usrname").val().length > 0 && isEmail($("#usrname").val())) {
     $("#usrname").css("border", "1px solid blue"); 
     $("#messageEmail").css("display", "none");
  } else {
    $("#usrname").css("border", "1px solid red"); 
     }
  if($("#psw").val().length >=8 && $("#psw").val().match(specials) && $("#psw").val().match(upperCaseLetters)&& $("#psw").val().match(n) && $("#psw").val().match(lowerCaseLetters)){
     $("#psw").css("border", "1px solid blue");
     $("#messagePsw").css("display", "none");
  }});

$("#usrname").blur(function(){
 $("#messageEmail").css("display", "none");
});

$("#usrname" ).keyup(function() {
  if($("#usrname").val().length > 0) {
     $("#letter").removeClass("invalid");
     $("#letter").css("display", "none");
     if(isEmail($("#usrname").val())){    
       $("#usrname").css("border", "1px solid blue");
       $("#letter1").css("display", "none");
       $("#usrname").css(" outline-color", "blue");
      }
     if(!isEmail($("#usrname").val())){
       $("#letter").addClass("invalid");
       $("#usrname").css("border", "1px solid red");
       $("#letter").css("display", "none");
       $("#letter1").css("display", "block");
      }
  } else {
    $("#letter").addClass("invalid");    
    $("#letter").css("display", "block");
    $("#letter1").css("display", "none");
    $("#messageEmail").css("display", "block");
    } 
});

$("#psw" ).focus(function() {
  $("#letter1").css("display", "none");
  $("#messagePsw").css("display", "block");
  $("#lengthp").css("display", "none");
  $("#number").css("display", "none");
  $("#capital").css("display", "none");
  $("#lowercase").css("display", "none");
  $("#special").css("display", "none");

  if($("#psw").val().length >= 8 && $("#psw").val().match(specials) && $("#psw").val().match(upperCaseLetters) && $("#psw").val().match(n) && $("#psw").val().match(lowerCaseLetters)){
     $("#psw").css("border", "1px solid blue");
     $("#messagePsw").css("display", "none");
  } else {
    $("#psw").css("border", "1px solid red");
    $("#messagePsw").css("display", "block");
    }
  if($("#usrname").val().length >0 &&isEmail($("#usrname").val())) {
     $("#usrname").css("border", "1px solid blue");
     $("#messageEmail").css("display", "none");
  } else { 
    $("#messageEmail").css("display", "block");
    $("#usrname").css("border", "1px solid red");
    }     
});

$("#psw").blur(function(){
  $("#messagePsw").css("display", "none");
});

$("#psw").keyup(function() {
 if($("#psw").val().length > 0 ) {    
    $("#lowercase").removeClass("invalid");
    $("#EnterPassword").css("display", "none");
    if($("#psw").val().length >= 8) {
       if($("#psw").val().match(specials) && $("#psw").val().match(upperCaseLetters)&& $("#psw").val().match(n) && $("#psw").val().match(lowerCaseLetters)){
          $("#psw").css("border", "1px solid blue");
          $("#messagePsw").css("display", "none");
        }
       $("#lengthp").css("display", "none");
       $("#lengthp").removeClass("invalid"); 
       if($("#psw").val().match(upperCaseLetters)) {      
          $("#capital").removeClass("invalid");
          $("#capital").css("display", "none");
        } else {
          $("#messagePsw").css("display", "block");
          $("#capital").css("display", "block");
          $("#number").css("display", "none");
          $("#lowercase").css("display", "none");  
          $("#special").css("display", "none");
          $("#psw").css("border", "1px solid red");
          $("#capital").addClass("invalid");
          }   
      if($("#psw").val().match(lowerCaseLetters)) {      
         $("#lowercase").removeClass("invalid");
         $("#lowercase").css("display", "none"); 
      } else {
        $("#messagePsw").css("display", "block");
        $("#lowercase").addClass("invalid");
        $("#psw").css("border", "1px solid red");
        $("#capital").css("display", "none");
        $("#number").css("display", "none");
        $("#lowercase").css("display", "block");  
        $("#special").css("display", "none");
        }    
      if($("#psw").val().match(n)) { 
         $("#number").removeClass("invalid");
         $("#number").css("display", "none");
      } else {
        $("#messagePsw").css("display", "block");   
        $("#number").addClass("invalid");
        $("#psw").css("border", "1px solid red");
        $("#capital").css("display", "none");
        $("#number").css("display", "block");
        $("#lowercase").css("display", "none");  
        $("#special").css("display", "none");      
        } 
      if($("#psw").val().match(specials)) { 
         $("#special").removeClass("invalid");
           //$("#special").css("display", "none");
      } else {
        $("#messagePsw").css("display", "block");
        $("#special").addClass("invalid");
        $("#psw").css("border", "1px solid red");   
        $("#capital").css("display", "none");
        $("#number").css("display", "none");
        $("#lowercase").css("display", "none");  
        $("#special").css("display", "block");
        }
    } else {
      $("#messagePsw").css("display", "block");
      $("#lengthp").addClass("invalid");
      $("#capital").css("display", "none");
      $("#lowercase").css("display", "none");
      $("#lengthp").css("display", "block");
      $("#number").css("display", "none");
      $("#special").css("display", "none");
      }
  } else {
    $("#letter").addClass("invalid"); 
    $("#EnterPassword").css("display", "block");
    $("#capital").css("display", "none");
    $("#lowercase").css("display", "none");
    $("#lengthp").css("display", "none");
    $("#number").css("display", "none");
    $("#special").css("display", "none");
    }
});

