// define onject type

type objType={fname:string,lname:string,age:number,city:string,company:string}

let person:Object={
    name:"kajal",
    age:25,

}
console.log(person);

let users:{name:string,age:number}={
    name:"Tejal",
    age:32
}
console.log(users.name);

let data:objType={
    fname:"kajal",
    lname:"Parchande",
    age:25,
    city:"Pandharpur",
    company:"Green Tiger"
}
console.log(data);
console.log(data.fname+data.lname);