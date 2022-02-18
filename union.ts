// Union Type
let data3:string|number|boolean="Kajal";
// data=30;
// data=true;
console.log(data3);

function add1(a1:number|string,b1:number|string)
{
        if(typeof a1==="number"&& typeof b1==='number')
        {
            return a1+b1;
        }
        else{
            return a1.toString()+b1.toString();
        }
}
console.log(add1(15,16));
console.log(add1("kajal","Parchande"));