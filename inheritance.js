class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    
    }
    displayInfo(){
        console.log("Name: " + this.name + "\nAge: " + this.age);
    }
}
class Student extends Person {
    constructor(name,age) {
        super(name,age);
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log("Name: " + this.name + "\nAge: " + this.age);
    
    }
}
var student =new Student("Rosebert", 21,);
student.displayInfo();
