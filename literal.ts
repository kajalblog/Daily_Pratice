// apply value rather than 
function combine(a1:number|string,b1:number|string,type:"as-string"|"as-number")
{
        if(type==='as-number')
        {
            return (+a1)+(+b1);
        }
        else{
            return a1.toString()+b1.toString();
        }
}
console.log(add1(15,16,"as-number"));;
console.log(add1("kajal","Parchande","as-string"));