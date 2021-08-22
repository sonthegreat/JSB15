var person = (name, age, address) => {
    let person = 
    {name: name, age: age, address: address,}
    console.log(person);
};

person('Son', '12', 'hanoi')








var Phone = [{
    firstName: "Apple",
    Price: 500
}, {
    firstName: "Samsung",
    Price: 400 
}, {
    firstName: "Nokia",
    Price: 1000
}]
for (let i = 0; i < Phone.length; i++) {
  console.log(Phone[i].Price)
}
Price()





var foo=(x,y,z)=> {
	console.log( x, y, z );
}
var foo=()=> {
	alert('Hello')
}
var foo=(a,b)=>{
	let m = a+b*100
	return m
}