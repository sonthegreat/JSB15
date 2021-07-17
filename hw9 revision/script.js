let bmi
function register() {
    let Height = document.getElementById('Height').value
    let Weight = document.getElementById('Weight').value
if(Height === '')
alert('Please enter your Height')
else if(Weight === ''){
    alert('Please enter your Weight')
}
bmi = Weight/(Height*2)
change()
}
console.log(bmi)
function change(){
    document.getElementById('result').innerHTML = bmi
}
    if(bmi < 18.5){
        document.getElementById('condition').innerHTML = 'Eat more'
    }
    else if(bmi<25.1){
        document.getElementById('condition').innerHTML = 'DONT GET MORE FAT'
    }
    else if(18.5 <= bmi < 25){
    document.getElementById('condition').innerHTML ='DONT GET FAT'
}
change()
