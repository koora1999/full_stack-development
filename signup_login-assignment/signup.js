let username = document.getElementById("username")
        let name = document.getElementById("name")
        let pass = document.getElementById("pass")
        let repass = document.getElementById("repass")
        let msg = document.getElementById("msg")
        let valid = document.getElementById("valid")
        let valid1 = document.getElementById("valid1")
        let check = document.getElementById("check")
        let msg1 = document.getElementById("msg1")
        let box = document.getElementById("box")
        let box1 = document.getElementById("box1")
        box1.style.display="none"

        function opensignup(){
           if(username.value==""){
            msg.innerHTML=`<i>enter valid username</i>`

           }
           else{
            msg.innerHTML=""
           }
           if(name.value==""){
            msg1.innerHTML=`<i>enter valid name</i>`
           }
           else{msg1.innerHTML=""}
           if(pass.value==""){
            valid.innerHTML=`<i>must contain special characters</i>`
           }else{
            valid.innerHTML=""
           }
           
           if(repass.value==""){
            valid1.innerHTML=`<i>should match with your password</i>`
           }else{valid1.innerHTML=""}

               
        }

        let button = document.getElementById("button")
        button.addEventListener("click",function(){
            if(username.value==""){
                alert("FILL THE BELOW DETAILS")
               
            }else{
                  alert(`Signin Successfully`)
                  box.style.display="none"
                  box1.style.display="block"
                  box1.innerHTML=`<div class="box1">
                  <h3>Login</h3>
          
                  <div class="menu1">
          
                      <input id="username" type="text" placeholder="username"><br>
                      <p id="msg"></p>
                      <input id="pass" type="password" placeholder="password" maxlength="8"><br>
                        <p id="valid"></p>
                        <i><a href="#">forgotten password?</a></i>
                      <button type="button1" id="button" onclick="openlogin()">Login</button>
                      <b>Not a Member ? <i><a href="signup.html">REGISTER NOW</a></i></b>
          
                  </div>
              </div> `
                  
                  
            }
            
            reset();
            reset1();
            
        })

        function reset(){
            let username = document.getElementById("username").value=""
        let name = document.getElementById("name").value=""
        let pass = document.getElementById("pass").value=""
        let repass = document.getElementById("repass").value=""
        }

        function reset1(){
            let username = document.getElementById("username").value=""
            let pass = document.getElementById("pass").value=""
        }

        
        

