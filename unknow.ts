// unknow is similae to any but can't assign to different type of var

// let name:unknown;
// name=10;
// name="kajal";

// let data:string;

// data=name;
// console.log(data);

let data1:unknown;
data1=10;

let item:string;
if(typeof data1==='string')
{
        
     item=data1;
     console.log(item);
}
else{
    console.log("error");
}
