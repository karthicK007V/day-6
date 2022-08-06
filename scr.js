
class movie {
    constructor(title,studio,pg){
        this.title=title;
        this.studio=studio;
        this.pg=[13];
    }
}
var m1=new movie("Casino Royale","Eon Productions");
var m2=new movie("titan","raju")
console.log(m1);
console.log(m2);


// 3.person details

class person{
    constructor(firstname,lastname,age,qualification,address,phonenumber){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.qualification=qualification;
        this.address=address;
        this.phonenumber=phonenumber;
 
    }
  
}
 
var person1=new person("karthick","kumar",25,"MBA","coimbatore",9994587495);
console.log(person1);
var person2=new person("kumar","kumar",22,"MBA","coimbatore",995118518418);
console.log(person2);