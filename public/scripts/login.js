var email = document.getElementById('email')
var psw = document.getElementById('psw')

document.getElementById('btn').addEventListener('click',async (e)=>{
e.preventDefault()
if (email.value != ""|| email.value != undefined || email.value != null){
  if (psw.value != ""|| psw.value != undefined || psw.value != null){
    const data = {
      email: email.value,
      password: psw.value
    }
    const send_data = {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    fetch("/login", send_data)
    .then(response => response.json())
    .then(function(json){
      console.log(json)
      if (json.status){
  
          window.localStorage.setItem('username', json.username)
        
        const at_position = (email.value).indexOf("@");
        const em = (email.value).slice(0, at_position);
        window.location.href= `http://localhost:3001/${em}/menu.html`
   
      }
    })
  }
}
})