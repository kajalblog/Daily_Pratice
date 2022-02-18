class Company{
    name:"";
    email:"";

    getuser(admin)
    {
            return `${admin} is added`;
    }
    removeuser(admin)
    {
        console.log(`${admin} is removed`)
    }

}
let admin=new Company;
admin.removeuser("Tejal");
console.log(admin.getuser("kajal"));