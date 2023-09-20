// import inquirer from "inquirer";


// const answers = await inquirer.prompt([
//     {
//         type: "input",
//         name: "Sentence",
//         message: "Enter Your Sentence To Count The Words"
//     }
// ]);

// const words = answers.Sentence.trim().split("");
// console.log(`Your Sentence Word Count Is ${words.length}`);


import inquirer from "inquirer";

async function wordCounter() {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "paragraph",
            message: "Enter your English paragraph:"
        }
    ]);

    const paragraph = answer.paragraph;
    const characterCount = paragraph.length;

    // Counting words by splitting the paragraph using spaces and filtering out empty strings
    const words = paragraph.split(" ").filter((word: string) => word !== "");
    const wordCount = words.length;

    console.log(`Character Count: ${characterCount}`);
    console.log(`Word Count: ${wordCount}`);
}

wordCounter();
