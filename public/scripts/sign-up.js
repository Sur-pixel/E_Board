var email = document.getElementById('email')
var psw1 = document.getElementById('psw1');
var psw2 = document.getElementById("psw2")
var err = document.getElementById("err");
const psw_regx_special_chars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const button = document.getElementById('btn')
function send(){
  if (email.value != "" || email.value != null || email.value != undefined) {
    err.innerHTML = "";
      if (psw_regx_special_chars.test(psw1.value)){
        err.innerHTML = "";
        if ((psw1.value).length === 8 || (psw1.value).length > 8){
          err.innerHTML = "";
          if(/\d/.test(psw1.value)){
            err.innerHTML = "";
            if (psw1.value === psw2.value){
              err.innerHTML = "";
              alert("Email Sent");
              submit();
              email.value = "";
              psw1.value = "";
              psw2.value = "";
              
            } else {
              err.innerHTML = "Passwords don't match";
            }
          } else {
            err.innerHTML = "Password must at least have 1 number";
          }
        } else {
          err.innerHTML = "Password must be at least 8 characters long";
        }
      } else {
        err.innerHTML = "Password must conatin a special character";
      }
  } else {
    err.innerHTML = "Please enter a email address";
  }
}
button.addEventListener('click',async (e) =>{
    e.preventDefault()
    send();

})

function submit(){
  const data = {
    email: email.value,
    password: psw1.value
  }
  const send_data = {
    method: "POST", // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  fetch("/sign-up", send_data)
  .then(response => response.json())
  .then(function(json){
    if (Object.values(json)){
      //sure, confirmation email sent
      alert("Email Sent");
      email.vaule = "";
      psw1.value = "";
      psw2.value = "";
    } else {
      //nope email address already exists in our db
      console.log(2)
    }
  })
}

