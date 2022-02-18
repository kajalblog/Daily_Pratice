class Admin
{
    // name:"";
    // email:"";
    // role:"";

    constructor(public name,public email,public role)
    {
        // this.name=name;
        // this.email=email;
        // this.role=role;

    }
    getAdmin()
    {
        console.log(this.name,this.email,this.role);
    }
}
let a1=new Admin("kajal","kajal@gmail.com","Admin");
a1.getAdmin()
