var person = [{
    firstName: "Son",
    age : 13
},{
    firstName: "Lan",
    age : 14
},{
    firstName: "Minh Đăng",
    age : 16
},{
    firstName: "Hoàng Phùng",
    age : 17
},{
    firstName: "Lương Ngọc Nam",
    age : 16
},{
    firstName: "Trongkhoi Le",
    age : 13
},{
    firstName: "Lê Nam Anh",
    age : 16
},{
    firstName: "Đỗ Xuân Huy",
    age : 16
},{
    firstName: "Trần Đức Trung",
    age : 16
},{
    firstName: "Nguyễn Dũng",
    age : 16
},{
    firstName: "Nguyễn Việt Khoa",
    age : 16
},{
    firstName: "Vinh Le",
    age : 16
}]
console.log(person)

let total=0 
for (let i=0; i <JSB15.length;i++) 
{total+=JSB15[i].age}
console.log(total)

for (let i=1000; i >=0;i-=1) 
if ( i % 3 == 0 )
{console.log(i)}
