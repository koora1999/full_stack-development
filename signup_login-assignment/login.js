let username = document.getElementById("username")
        let pass = document.getElementById("pass")
        let msg = document.getElementById("msg")
        let valid = document.getElementById("valid")
        let  = document.getElementsByClassName("divtag")

        function openlogin(){
            if(username.value==""){
                msg.innerHTML=`<i>enter the username</i>`
            }else{
                msg.innerHTML=""
            }
            if(pass.value==""){
                valid.innerHTML=`<i>enter the valid password</i>`
            }else{
                valid.innerHTML=""
            }
        }

        let button1 = document.getElementById("button1")

        button1.addEventListener("click",function(){
            if(username.value==""){
                alert("enter the below details")
            }
            else{
                alert(`login successfully`)
                box1.style.display="none"
               box1.innerHTML=`login successfully`
                
            }
            reset();
            
           
        })
           
        function reset(){
            let username = document.getElementById("username").value=""
        let pass = document.getElementById("pass").value=""
        }

