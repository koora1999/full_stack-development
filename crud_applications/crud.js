let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts =document. getElementById("posts")

form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log("button clicked");
    formValidation();
});

let formValidation = function(){
    if(input.value ===""){
        console.log("failure")
        msg.innerHTML="Please Provide Valid Details";
    }
    else{
     console.log("success")
        msg.innerHTML=" ";
        acceptdata();
    }
};

let data = {}

let acceptdata = function(){
    data["text"] = input.value ;
    console.log(data);
    createpost();

};

let createpost = function(){
  posts.innerHTML += `
  <div>
             <p>${data.text}</p> 
             <span class="options">
                <i onClick="editpost(this) " class="fas fa-edit"></i>
                <i  onClick="deletform(this) " class="fas fa-trash-alt"></i>
             </span>
        </div>
  `;
  input.value = ""
};

let deletform = function(e){
    e.parentElement.parentElement.remove();

}

let editpost = function(e){
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

}