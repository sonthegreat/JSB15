function Equation() {
let a = parseInt($('#a').val());
let b = parseInt($('#b').val());
let answer = ((b/a));

document.getElementById("Write").innerHTML = ('The x is equal to ' + (answer));
}

function Triangle() {
let ab = 9;
let bc = 12;

let hypothenus = Math.sqrt((ab*ab)+(bc*bc));

document.getElementById("Triangle").innerHTML = ('The Hypothenus is equal to ' + (hypothenus));
}

function Altitude() {
    let ad = (9**2/15);
    let dc = (12**2/15);

    let Altitude = Math.sqrt((ad * dc));

    document.getElementById("TAltitude").innerHTML = ('The Altitude is equal to ' + (Altitude));

    
}

