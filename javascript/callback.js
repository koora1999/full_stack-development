//callback()

function downloadfile(cb){
    setTimeout(function(){
        console.log("downloading the movie");
        cb();
    })
}
function playmovie(){
    console.log("playing the downloaded movie");
}
downloadfile(playmovie)

//drowback with the callback() is we cannot callback the multiple functions


function orderdress(cashondelivery){
    setTimeout(function() {
        console.log("place the order in the meeshow");
           cashondelivery();
    }, 2000);
}
function delivery(){
    console.log("order has been arraived");
}
orderdress(delivery)