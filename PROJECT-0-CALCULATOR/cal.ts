//METHOD 1 IF ELSE IF 

import inquirer from "inquirer";


const answers : {
    numberOne : number
    numberTwo: number
    operator: string

} = await inquirer.prompt([
    {
        type:"number",
        name:"numberOne",
        message:"kindly enter your first number"
    },
    {
        type:"number",
        name:"numberTwo",
        message:"kindly enter your second number"
    },
    {
        type:"list",
        name:"operator",
        choices: ["*","+","-","/"],
        message:"chalk.red(Select Operator)"
    },
]);



const {numberOne, numberTwo, operator}= answers;
if (numberOne && numberTwo && operator) {
    let result: number = 0;
    if (operator === "+") {
       result = numberOne + numberTwo
    } else if (operator === "-") {
        result = numberOne - numberTwo
    } if (operator === "*") {
        result = numberOne * numberTwo
    } if (operator === "/"){
        result = numberOne / numberTwo
    }

    console.log("Your Result Is", result);
    
} else {
    console.log("Kindly Enter Valid Input");
}

const answers =

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//METHOD 2 Avoid Repeated If Statements: Instead of using multiple if statements to check the operator, you can use an else if 
// structure to ensure that only one operation is executed. This prevents unnecessary checks after the correct operator is found.
// Here's the code with the improvements mentioned:

// import inquirer from "inquirer";

// const answers = await inquirer.prompt([
//     {
//         type: "number",
//         name: "numberOne",
//         message: "Kindly enter your first number:"
//     },
//     {
//         type: "number",
//         name: "numberTwo",
//         message: "Kindly enter your second number:"
//     },
//     {
//         type: "list",
//         name: "operator",
//         choices: ["+", "-", "*", "/"],
//         message: "Select Operator:"
//     },
// ]);

// const { numberOne, numberTwo, operator } = answers;

// if (numberOne && numberTwo && operator) {
//     let result = 0;
//     switch (operator) {
//         case "+":
//             result = numberOne + numberTwo;
//             break;
//         case "-":
//             result = numberOne - numberTwo;
//             break;
//         case "*":
//             result = numberOne * numberTwo;
//             break;
//         case "/":
//             result = numberOne / numberTwo;
//             break;
//         default:
//             console.log("Invalid operator");
//             break;
//     }

//     console.log("Your Result Is:", result);
// } else {
//     console.log("Kindly Enter Valid Input");
// }





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// METHOD 3 Function Mapping:
// You can create a map or object that associates each operator with a corresponding function to perform the calculation. 
// This can help make the code more modular and extensible.

// import inquirer from "inquirer";

// const operators = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//     "*": (a, b) => a * b,
//     "/": (a, b) => a / b,
// };

// const answers = await inquirer.prompt([
//     // ... (same as before)
// ]);

// const { numberOne, numberTwo, operator } = answers;

// if (numberOne && numberTwo && operator) {
//     if (operators.hasOwnProperty(operator)) {
//         const operation = operators[operator];
//         const result = operation(numberOne, numberTwo);
//         console.log("Your Result Is:", result);
//     } else {
//         console.log("Invalid operator");
//     }
// } else {
//     console.log("Kindly Enter Valid Input");
// }



