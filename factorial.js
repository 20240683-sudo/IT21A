const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function mainMenu(){
    console.log("Factorial Application");

}

console.log("factorial of a number");

console.log("1. say hello");
console.log("2. find factorial");
console.log("3. exit");

rl.question("Enter your choice (1-3)"), choice =>{
    if(choice==="1"){
        console.log("hello There");
    }else if (choice==="2"){
        console.log("factorial");  

        rl.question("Enter a Number for Factorial:", (numStr) =>{
            let num = parseInt(numStr);
           
            if(isNaN(num) || num<0){
                console.log("Please Enter a Non-Negative Integer");
            }else {

                let fact = 1;

                for (Let i = 1; i <= num ; i++){
                    fact *= i;

                }

                console.log("Factorial of " + num + " is " + fact);
            }


        });


     
    }else if (choice==="3"){
        console.log("exit");
    }else{
        console.log("invalid choice. Please Try Again");

    }
}