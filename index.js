// Q8 Write a simple calculator program.
// Addition
// Subtraction
// Multiplication
// Division
import inquirer from "inquirer";
let simple_cal = await inquirer.prompt([
    {
        message: "Enter Your First Number",
        name: "first_num",
        type: "number"
    },
    {
        message: "Enter Your Second Number",
        name: "second_num",
        type: "number"
    },
    {
        message: "Your output is :",
        name: "operators",
        choices: ["addition", "subtraction", "multiplication", "division"],
        type: "list"
    }
]);
if (simple_cal.operators === "addition") {
    console.log(`Your Output is ${simple_cal.first_num + simple_cal.second_num}`);
}
else if (simple_cal.operators === "subtraction") {
    console.log(`Your Output is ${simple_cal.first_num - simple_cal.second_num}`);
}
else if (simple_cal.operators === "multiplication") {
    console.log(`Your Output is ${simple_cal.first_num * simple_cal.second_num}`);
}
else if (simple_cal.operators === "division") {
    console.log(`Your Output is ${simple_cal.first_num / simple_cal.second_num}`);
}
else {
    console.log("Invailed Number");
}
