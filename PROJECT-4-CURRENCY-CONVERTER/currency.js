import inquirer from "inquirer";
let Convertion = {
    "PKR": {
        "USD": 0.0034,
        "GBP": 0.0026,
        "PKR": 1
    },
    "USD": {
        "GBP": 0.79,
        "PKR": 297.50,
        "USD": 1,
    },
    "GBP": {
        "USD": 1.27,
        "PKR": 378.46,
        "GBP": 1,
    },
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Convertion Currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Convertion Amount:"
    }
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(`Your Convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid Input");
}
