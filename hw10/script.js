function register() {
    let Height = document.getElementById('Height').value
    let Weight = document.getElementById('Weight').value
    let Age = document.getElementById('Age').value

    document.getElementById('result').innerHTML = bmr

    if (document.getElementById("Male").poll === true){
    var bmr_Male= 66 + [13.7 * Weight] + [5 * height] - [6.76 * age] 
    document.getElementById('bmr').innerHTML='Your BMR is'+ result
    }
    else if(document.getElementById ('Female').poll === true){
    var bmr_Female = 665 + (9.6 * Weight) + (1.8 * Height) - (4.7 * Age)
    document.getElementById('bmr').innerHTML='Your BMR is'+ result
    }
}