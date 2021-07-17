/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navbarId, bodyId)=>{
  const toggle = document.getElementById(toggleId),
  navbar = document.getElementById(navbarId),
  bodypadding = document.getElementById(bodyId)

  if(toggle && navbar){
    toggle.addEventListener('click', ()=>{
      navbar.classList.toggle('expander')

      bodypadding.classList.toggle('body-pd')
    })
  }
}
showMenu('nav-toggle','navbar','body-pd')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')
function colorLink(){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))


/*===== COLLAPSE MENU  =====*/ 
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for(i=0;i<linkCollapse.length;i++){
  linkCollapse[i].addEventListener('click', function(){
    const collapseMenu = this.nextElementSibling
    collapseMenu.classList.toggle('showCollapse')

    const rotate = collapseMenu.previousElementSibling
    rotate.classList.toggle('rotate')
  })
}



function IndexFunction(){
  location.replace("Index.html")
}
function SimpleFunction() {
  location.replace("Simplegame.html")
}
function SportFunction() {
  location.replace("Sportgame.html")
}
function FightingFunction() {
  location.replace("Fightinggame.html")
}
function StrategyFunction() {
  location.replace("Strategygame.html")
}
function TwoPlayerFunction() {
  location.replace("Twoplayergame.html")
}
function ArcadeFunction() {
  location.replace("Arcadegame.html")
}
function feedbackfunction()  {
  location.replace("feedback.html")
}

function DashFunction() {
  location.replace("Dash.html")
}
function SPFunction() {
  location.replace("SF.html")
}
function TankFunction() {
  location.replace("Tank.html")
}
function KrunkerFunction() {
  location.replace("Krunker.html")
}
function TetrisFunction() {
  location.replace("Tetris.html")
}
function TetrisFunction() {
  location.replace("Tetris.html")
}
function LoginFunction() {
  location.replace("login.html")
}
function DiscordFunction() {
  location.replace("https://discord.com/")
  target="_blank"
}
function LogoutFunction() {
  location.replace("index.html")
  target="_blank"
}





// Set the date we're counting down to
var countDownDate = new Date("July 4, 2021").getTime();

// Update the count down every 1 minute
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');
function register() {
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';
}
function login() {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
}
var modal = document.getElementById('login-form');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function myFunction() {
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    if (un == "abc.lol@gmail.com" && pw == "ilovejohncena") 
    {
      window.open('new.html');
      alert("Login succesful")
    }
    else {
        alert("Invalid Password or Email")
    }
    return true;
}




window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


function openPage() {
var x = document.getElementById("search").value;

if (x === "Geometrydash") {
    window.open("Dash.html");
}

if (x === "Superfighter") {
    window.open("SF.html");
}
if (x === "Tanki") {
  window.open("Tank.html");
}
if (x === "Krunker") {
  window.open("Krunker.html");
}
if (x === "Tetris") {
  window.open("Tetris.html");
}
if (x === "ArcadeGame") {
  window.open("Arcadegame.html");
}
if (x === "Geometrydash") {
  window.open("Dash.html");
}

if (x === "Superfighter") {
  window.open("SF.html");
}
if (x === "Tanki") {
window.open("Tank.html");
}
if (x === "Krunker") {
window.open("Krunker.html");
}
if (x === "Tetris") {
window.open("Tetris.html");
}
if (x === "ArcadeGame") {
window.open("Arcadegame.html");
}
if (x === "Geometrydash") {
  window.open("Dash.html");
}

if (x === "Superfighter") {
  window.open("SF.html");
}
if (x === "Tanki") {
window.open("Tank.html");
}
if (x === "Krunker") {
window.open("Krunker.html");
}
if (x === "Tetris") {
window.open("Tetris.html");
}
if (x === "ArcadeGame") {
window.open("Arcadegame.html");
}
if (x === "Geometrydash") {
  window.open("Dash.html");
}

if (x === "Superfighter") {
  window.open("SF.html");
}
if (x === "Tanki") {
window.open("Tank.html");
}
if (x === "Krunker") {
window.open("Krunker.html");
}
if (x === "Tetris") {
window.open("Tetris.html");
}
if (x === "ArcadeGame") {
window.open("Arcadegame.html");
}
if (x === "Geometrydash") {
  window.open("Dash.html");
}

if (x === "Superfighter") {
  window.open("SF.html");
}
if (x === "Tanki") {
window.open("Tank.html");
}
if (x === "Krunker") {
window.open("Krunker.html");
}
if (x === "Tetris") {
window.open("Tetris.html");
}
if (x === "ArcadeGame") {
window.open("Arcadegame.html");
}
if (x === "Geometrydash") {
  window.open("Dash.html");
}

if (x === "Superfighter") {
  window.open("SF.html");
}
if (x === "Tanki") {
window.open("Tank.html");
}
if (x === "Krunker") {
window.open("Krunker.html");
}
if (x === "Tetris") {
window.open("Tetris.html");
}
if (x === "ArcadeGame") {
window.open("Arcadegame.html");
}
}

