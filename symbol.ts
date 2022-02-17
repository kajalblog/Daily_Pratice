// gives unique id
let s1=Symbol()
console.log(s1);

let s2=Symbol("d1");
console.log(s2.toString());

let data={
    [s1]:"my data"
}
console.log(data[s1]);

let p1=Symbol();

class user{
    [p1]()
    {
            return "kajal"
    }
}
let k1=new user();
console.log(k1[p1]())