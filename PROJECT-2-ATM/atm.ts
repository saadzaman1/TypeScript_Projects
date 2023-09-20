import inquirer from "inquirer";

interface AccountTransaction {
    userId: string;
    userPin: number;
    accountType: string;
    transactionType: string;
    amount: number;
}

const answer = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter Your ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter Your Pin"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Saving", "Current"],
        message: "Select Your Account Type"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select Your Method",
        when: (answer) => answer.accountType
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000, 20000, 50000],
        message: "Select Your Amount",
        when: (answer) => answer.transactionType === "Fast Cash"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount",
        when: (answer) => answer.transactionType === "Withdraw"
    }
]);

if (answer.userId && answer.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log("Balance:", balance);

    const enteredAmount = answer.amount;

    if (balance >= enteredAmount) {
        const remaining = balance - enteredAmount;
        console.log("Your remaining balance is:", remaining);
    } else {
        console.log("Insufficient Balance");
    }
}
