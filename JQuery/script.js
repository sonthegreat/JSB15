function updateTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();

    var am_or_pm = document.getElementById("am-or-pm");
    if(hours >= 12){
        am_or_pm.innerHTML = 'PM';
    }else{
        am_or_pm.innerHTML = 'AM';
    }

    if(hours > 12){
        hours = hours - 12;
    }

    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
}
setInterval( updateTime, 1000);




document.getElementById("button").addEventListener("click", numberOneTriangle)

function numberOneTriangle() {
    var rows = prompt('enter number of rows');
    for (var i = 1; i <= rows; i++) {
        for (var j = 1; j <= i; j++) {
            document.write(" 1 ");
        }
        document.write("<br/>");
    }
}


document.getElementById("button1").addEventListener("click", findEven)
function findEven (){
    var num = prompt('enter any even number')
    for (var i = 1; i <= num; i++)
        if (i % 2 == 0) { document.write(i + ", ") }
    }
