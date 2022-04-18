document.getElementById("registrar").onclick = function (){


var username = document.getElementById('user').value;
var clave = document.getElementById('password').value; 
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;


    var urlregister = 'https://ServidorTest.carlos-reneren7.repl.co/register';
    var data = {user: username, password: clave, name: name, email: email };
    
    fetch(urlregister, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }

   }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
                        if(response.error==false){
                          console.log('Success:', response);
                          localStorage.setItem("user", username);
                          localStorage.setItem("name", name);
                          window.location.href="index.html";
                        }else{
                          alert("Los datos son invalidos");
                        }
                      }
         );

}
