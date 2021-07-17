var a= setInterval(clickhere,1000)
function clickhere() {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var Color = "rgb(" + x + "," + y + "," + z + ")";
 console.log(Color);
  
    document.body.style.background = Color;
    }
    function clearColor(){
    clearInterval(a)
}