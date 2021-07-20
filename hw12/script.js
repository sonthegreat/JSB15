function ColorChange(){
    let color = document.getElementById('Color').value;
    document.body.style.backgroundColor = color;
    if(color === ''){
        alert('Please enter the color')
}
}