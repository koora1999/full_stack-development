
//using the promise code usig then()

//promise function , if the promise get successfull

function publishbook(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log("The officials are go through the book");
            resolve("They are accepted to publish the book");
        }, 2000);
    })
}
function market(){
    console.log("The book has been published ,__THE PRINCE");
}

publishbook().then(function(result){
    console.log(result);
    market();
})

//if the promise get rejected

function publishthebook(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log("The officials are go through the book");
            reject("They are rejected to publish the book");
        }, 2000);
    })
}
function market(){
    console.log("The book has been published ,__THE PRINCE");//this will not print
}
//if it is rejected it will not visit the then() function it will directly visit the catch()
publishthebook().then(function(result){
    console.log(result);
    market();
}).catch(function(error){
    console.log(error);
})
