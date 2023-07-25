const NUMBEROF_STUDENT_PRESENT = {
    yesterday : 20,
    today : 23,
    tomorrow : 30
};

const {today } = NUMBEROF_STUDENT_PRESENT;
console.log(today);

//assigment to assign variables from objects : 

const {today : highToday, tomorrow : highTomorrow} = NUMBEROF_STUDENT_PRESENT;

//estructuring Assignment to Assign Variables from Nested Objects:

const NUMBEROF_STUDENTS_PRESENT = {
    yesterday : {girls: 20, boys: 23},
    today : {girls: 23, boys: 24},
    tomorrow : {girls: 30, boys: 23}
};
const {today : { girls: presentGirls, boys: presentBoys}} = NUMBEROF_STUDENTS_PRESENT;