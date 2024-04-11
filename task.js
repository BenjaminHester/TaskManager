// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER;

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// 
const tasks = [
    `Charge MacBook`,
    `Master Javascript`,
    `Blow up and act like you don't know nobody`
];

// For displaying tasks to the user
let showTasks = ``;
// For storing the value of a new task
let newTask;
// For storing the number of the task to be removed
let num;
// For storing the value of the removed task
let removed;
// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu);
// Loops and continues to display the menu until the user ends the task manager
while (userInput !== "CLOSE") {
    // code to complete task manager should be written here
    if (userInput == "TASKS") {
        for(let i = 0; i < tasks.length; i++){
            showTasks += (tasks[i]+'\n') ;
        }
        alert(showTasks)
    }else{
       newTask = prompt(`Please enter the new task:`);
       tasks.push(newTask)
       alert(`Task has been added!!`)
    }
    userInput = prompt(menu);
    // this break can be commented out after the close feature is complete
    break;
};
// alerts the user that they have closed the program
alert(`Thank you for using Task Manager`)