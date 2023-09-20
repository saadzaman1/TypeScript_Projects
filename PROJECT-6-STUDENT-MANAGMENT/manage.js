import inquirer from "inquirer";
const courses = [
    { code: "MATH", name: "BUSINESS MATH", tution: 500 },
    { code: "PHYS", name: "ADVANCE PYSICS", tution: 400 },
    { code: "CS", name: "Introduction For Computer Sciences", tution: 600 },
    { code: "URDU", name: "URDU GRAMMAR", tution: 380 }
];
const students = [];
async function main() {
    while (true) {
        const { choice } = await inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "Options",
                choices: [
                    'Add Student',
                    'Enroll Student In Course',
                    'Pay Tution Fees',
                    'Show Student Status',
                    'Exit',
                ]
            }
        ]);
        if (choice === 'Add Student') {
            const { name } = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter Student's Name"
                }
            ]);
            const student = {
                name: name,
                studentId: (students.length + 1).toString().padStart(5, '0'),
                courses: [],
                balance: 0
            };
            students.push(student);
            console.log(`Student ${student.name} Added With ID: ${student.studentId}`);
        }
        else if (choice === 'Enroll Student In Course') {
            const { studentId, courseCode } = await inquirer.prompt([
                {
                    type: "input",
                    name: "studentId",
                    message: "Enter Student ID:"
                },
                {
                    type: "input",
                    name: "courseCode",
                    message: "Enter Course Code:"
                }
            ]);
            const student = students.find(s => s.studentId === studentId);
            const course = courses.find(c => c.code === courseCode);
            if (student && course) {
                student.courses.push(course);
                student.balance += course.tution;
                console.log(`Student ${student.name} Enrolled in ${course.name}`);
            }
            else {
                console.log("Student or Course not found");
            }
        }
        else if (choice === 'Pay Tution Fees') {
            const { studentId, amount } = await inquirer.prompt([
                {
                    type: "input",
                    name: "studentId",
                    message: "Enter Student ID:"
                },
                {
                    type: "input",
                    name: "amount",
                    message: "Enter Payment Amount:",
                    validate: value => parseFloat(value) > 0 || 'Amount Must be Possitive',
                },
            ]);
            const student = students.find(s => s.studentId === studentId);
            if (student) {
                if (student.balance >= parseFloat(amount)) {
                    student.balance -= parseFloat(amount);
                    console.log(`Payment Of $${amount} recived. Remaining balance : $${student.balance}`);
                }
                else {
                    console.log("Insufficent Balance.");
                }
            }
            else {
                console.log("Student not found.");
            }
        }
        else if (choice === 'Show Student Status') {
            const { studentId } = await inquirer.prompt([
                {
                    type: 'input',
                    name: "studentId",
                    message: "Enter Student ID:"
                }
            ]);
            const student = students.find(s => s.studentId === studentId);
            if (student) {
                console.log(`Student ID: ${student.studentId}`);
                console.log(`Name: ${student.name}`);
                console.log(`Course Enrolled:`);
                student.courses.forEach(courses => {
                    console.log(`- ${courses.name} (${courses.code}): ${courses.tution}`);
                });
                console.log(`balance :${student.balance}`);
            }
            else {
                console.log("Student Not Found");
            }
        }
        else if (choice === 'Exit') {
            console.log("Exiting the Program.");
            break;
        }
        else {
            console.log("Invalid Choice. Please Enter a Valid Input");
        }
    }
}
main();
