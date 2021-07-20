1
for (let i=0; i <=1000;i++) 
if(i%2 == 0) {
    console.log('Even number'+i);
}
else {
    console.log('Odd number'+i);
}

2
run = true
while(run){
    var count = [1,2,3,4,5,6,7,8,9,10]
    count.push(prompt("Add a number"))
    console.log(count)
}
3

let s1 = prompt('Enter first side')
let s2 = prompt('Enter second side')
let s3 = prompt('Enter third side')
let s4 = prompt('Enter fourth side')
if(s1==s2==s3==s4){
console.log('Square')
}
else if(s1==s3, s2==s4, s1!=s2){
    console.log('rectangle')
}
else {
    console.log('quadrilateral')
}
4
let i= prompt('enter birth year')

if(i%4==0 && i%100!=0){console.log ('leap year')}
else{console.log ('not a leap year')}



5
let x = prompt('x')
let y = prompt('y')
if (x == 0 && y == 0) {
    console.log('Origin'+[x,y])
}if(x < 0 && y < 0) {
    console.log('Quadrant III'+[x,y])
}if(x > 0 && y > 0) {
    console.log('Quandrant I'+[x,y])
}if(x > 0 && y < 0) {
    console.log('Quandrant IIII'+{x,y})
}if(x < 0 && y > 0) {
    console.log('Quandrant II'[x,y])
}