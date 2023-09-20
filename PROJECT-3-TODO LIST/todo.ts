import inquirer from "inquirer";

let todos : string[] = [];
let loop = true

while (loop) {
    const answers: {
        TODO: string
        addmore: boolean
    } = await inquirer.prompt([
        {
            type:"input",
            name:"TODO",
            message:"What do you want to add in TODO list ?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you wannt to add more in TODO list ?",
            default: false,
        }
    ])
    const {TODO, addmore} = answers
    loop = addmore
    if (TODO) {
        todos.push(TODO)
    } else {
        console.log("Enter a valid input");
    }
}


if (todos.length > 0) {
    console.log("*Your TODO List*");
    
    todos.forEach(todo => {
        console.log(todo);
    });
} else {
    console.log("No TODOS Found");
    
}
