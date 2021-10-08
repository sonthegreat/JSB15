let i = 0;
const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length;
    let loginSuccess = false;
    let index;

for (let i = 0; i < users.length; i++){
    if(
    users[i].email.toLowerCase() == email &&
    users[i].pwd.toLowerCase() == pwd
    ) {
        loginSuccess = true;
        index = i;
    }
} 

if(!exist && loginSuccess) {
        alert("Incorrect login credentials");
    }
    else {
        localStorage.setItem("index", JSON.stringify(index));
        location.href = "account.html";
    }
    e.preventDefault();
}

function nameplace() {
    let username = localStorage.getItem('formData');
    username = JSON.parse(username);
    console.log(username);
    document.querySelector(".profile span").textContent = username[i].fname;
    
    
}

