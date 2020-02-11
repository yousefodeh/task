function isEmail(email) { 
    return /^((([a-z]|\d)+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~])+)*))@((([a-z]|\d)|(([a-z]|\d)([a-z]|\d|-|\.|_|~)*([a-z]|\d)))\.)+(([a-z])|(([a-z])([a-z]|\d|-|\.|_|~)*([a-z])))$/i.test(email);
}

var specials = /[)(@#$%^&+=]/g;
var upperCaseLetters = /[A-Z]/g;
var lowerCaseLetters = /[a-z]/g;
var n = /[0-9]/g;

var usrname =   document.getElementById("usrname");
var letter =    document.getElementById("letter");
var letter1 =   document.getElementById("letter1");
var EnterPassword     =   document.getElementById("EnterPassword");
var capital =   document.getElementById("capital");
var lowercase=   document.getElementById("lowercase");
var letterp =   document.getElementById("lengthp");
var number  =   document.getElementById("number");
var special =   document.getElementById("special");
var messageEmail=   document.getElementById("messageEmail");
var messagePsw=   document.getElementById("messagePsw");
var psw     =   document.getElementById("psw");

usrname.onfocus=function() {
  letter1.style.display = "none";
  messageEmail.style.display = "block";
  usrname.style.border= "1px solid red";

  if (usrname.value.length > 0 && isEmail(usrname.value)) {
     usrname.style.border= "1px solid blue";
     messageEmail.style.display = "none";
  } else {
    usrname.style.border= "1px solid red";
    }
  if (psw.value.length >=8 && psw.value.match(specials) && psw.value.match(upperCaseLetters) && psw.value.match(n) && psw.value.match(lowerCaseLetters)){
     psw.style.border= "1px solid blue";
     messagePsw.style.display = "block";
  }
}

usrname.onblur = function() {
  messageEmail.style.display = "none";
}

usrname.onkeyup = function() {
  if (usrname.value.length > 0) {
     letter.classList.remove("invalid");
     letter.style.display = "none";
     
     if (isEmail(usrname.value)){
        usrname.style.border= "1px solid blue";
        letter1.style.display = "none";
        usrname.style.outlineColor= "blue";
     }
    if (!isEmail(usrname.value)){
       letter.classList.add("invalid");
       usrname.style.border= "1px solid red";
       letter.style.display = "none";
       letter1.style.display = "block";
     }
  } else { 
    letter.classList.add("invalid");
    letter.style.display = "block";
    letter1.style.display = "none";
    messageEmail.style.display = "block";
    }
}

psw.onfocus = function() {
  letter1.style.display = "none";
  messagePsw.style.display  = "block";     
  lengthp.style.display  = "none";
  number.style.display   = "none";
  capital.style.display  = "none";
  lowercase.style.display = "none";
  special.style.display  = "none";
  psw.style.border= "1px solid red";   
  if (paw.value.length >= 8 && psw.value.match(specials) && psw.value.match(upperCaseLetters) && psw.value.match(n) && psw.value.match(lowerCaseLetters)){
      psw.style.border= "1px solid blue";
      messagePsw.style.display = "none";
  } else {
    psw.style.border= "1px solid red";
    messagePsw.style.display  = "block"; 
    }
 if (usrname.value.length > 0 && isEmail(usrname.value)) {
     usrname.style.border= "1px solid blue";
     messageEmail.style.display = "none";
  } else {
    messageEmail.style.display = "block";
    usrname.style.border= "1px solid red";
    }
}

psw.onblur = function() {
  messagePsw.style.display = "none";
}

psw.onkeyup = function() {
  if (psw.value.length > 0 ) {
     lowercase.classList.remove("invalid");
     EnterPassword.style.display = "none";
     if (psw.value.length >= 8) {
        lengthp.style.display = "none";
        lengthp.classList.remove("invalid");
        if (psw.value.match(specials) && psw.value.match(upperCaseLetters)&& psw.value.match(n) && psw.value.match(lowerCaseLetters)){
            psw.style.border= "1px solid blue";
            messagePsw.style.display = "none";
        } 
        if (psw.value.match(upperCaseLetters)) {  
            capital.classList.remove("invalid");
            capital.style.display = "none";
        } else {
          messagePsw.style.display = "block";
          capital.style.display = "block";
          psw.style.border= "1px solid red";
          number.style.display = "none";
          lowercase.style.display = "none";
          special.style.display = "none";
          capital.classList.add("invalid");
          }
        if (psw.value.match(lowerCaseLetters)) { 
           lowercase.classList.remove("invalid");
           lowercase.style.display = "none";
        } else {
          messagePsw.style.display = "block";
          lowercase.classList.add("invalid"); 
          psw.style.border= "1px solid red";
          special.style.display = "none";
          number.style.display = "none";
          capital.style.display = "none";
          lowercase.style.display = "block";
          }
        if (psw.value.match(n)) { 
            number.classList.remove("invalid");
            number.style.display = "none";
         } else {
           messagePsw.style.display = "block";
           number.classList.add("invalid"); 
           psw.style.border= "1px solid red";
           special.style.display = "none";
           lowercase.style.display = "none";
           capital.style.display = "none";
           number.style.display = "block";
           }
        if (psw.value.match(specials)) { 
            special.classList.remove("invalid");
            special.style.display = "none";
        } else {
          messagePsw.style.display = "block";
          special.classList.add("invalid"); 
          psw.style.border= "1px solid red";
          lowercase.style.display = "none";
          capital.style.display = "none";
          number.style.display = "none";
          special.style.display = "block";           
          }
      } else {
        messagePsw.style.display = "block";
        capital.style.display = "none";
        lowercase.style.display = "none";
        number.style.display = "none";
        lengthp.style.display = "block";
        special.style.display = "none";
        lengthp.classList.add("invalid");
       } 
  } else {
    letter.classList.add("invalid");
    EnterPassword.style.display = "block";
    capital.style.display = "none";
    lowercase.style.display = "none";
    lengthp.style.display = "none";
    number.style.display = "none";
    special.style.display = "none";
    } 
}
