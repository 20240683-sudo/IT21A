class person{
    
    constructor(name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    get name(){
        console.log(this.name)
    }

    displayInfo(){
        console.log("name: " + this.name);
        console.log("name: " + this.age);
        console.log("name: " + this.occupation);
        console.log("-----------");
    }
}

const person1 = new person("Coco Martin",24,"Masahista");

person1.getName();
person1.displayInfo();