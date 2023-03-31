let username = document.getElementById("username")
        let pass = document.getElementById("pass")
        let msg = document.getElementById("msg")
        let valid = document.getElementById("valid")
        let box1 = document.getElementById("box1")

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
                alert("entered the details successfully")
            }
            reset();
            
           
        })

        let display = document.getElementById("display")

        function opendisplay(){
            display.classList.add("open-display")
        }
        function closedisplay(){
            display.classList.remove("open-display")
            box1.innerHTML=`<h1><span>welcome!</span><br> To <span>CareerX</span> Platform</h1>`
            box1.style.background="transparent"
        }
         

           
        function reset(){
            let username = document.getElementById("username").value=""
        let pass = document.getElementById("pass").value=""
        }

