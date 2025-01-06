const a=[1,2,3,4,];
console.log(a);

a.push(5)
console.log(a);
for(let i=1; i<a.length-1; i++){

console.log(a[i-1])
}

const students= [
    {
        name:"shruti",
        roll:20,
        enroll:"hdchgdsch",
        contact:1234567890
    };

    {
        name:"aman",
        roll:21,
        enroll:"cfvvgjhh"
        contact:38744778388
    }
]

const rollTwenty = students.find((value,index)=> value.roll ===30)

console.log(rollTwenty?.contact)

const studentNames = students.map((value,index)=>value.name);

console.log(studentNames);


