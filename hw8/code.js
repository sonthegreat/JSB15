function myFunction() {
    var at = document.getElementById("email").value.indexOf("JohnCena@gmail.com");
    var Name = document.getElementById("name").value.indexOf("Respect John Cena");
    var password = document.getElementById("password").value.indexOf("Iloveujohncena");
    submitOK = "true";
}
if (at != JohnCena@gmail.com) {
    alert("You have put the wrong password");
    submitOK = "false";
}
if (password != Iloveujohncena) {
        alert("You have put the wrong email");
        submitOK = "false";
}
if (Name != Respect John Cena) {
    alert("You have put the wrong username");
    submitOK = "false";
}
if (submitOK == "false") {
    return false;
}
