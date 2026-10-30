
// Student Marks Analyzer

let name = "Rahul Kumar";
let rollNo = 101;
let department = "CSE";

let marks = [78, 85, 62, 91, 34];

// Function to calculate total marks
function calculateTotal(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    return total;
}

// Function to calculate percentage
function calculatePercentage(marks) {
    let total = calculateTotal(marks);
    return total / marks.length;
}

// Function to find highest marks
function findHighest(marks) {
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    return highest;
}

// Function to find lowest marks
function findLowest(marks) {
    let lowest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] < lowest) {
            lowest = marks[i];
        }
    }

    return lowest;
}

// Count subjects passed
let passed = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) {
        passed++;
    }
}

// Convert name to uppercase
let upperName = name.toUpperCase();

// Count characters in the name
let nameLength = name.length;

// Function to calculate the grade
function getGrade(marks) {
    let percentage = calculatePercentage(marks);

    if (percentage >= 80) {
        return "Excellent";
    } else if (percentage >= 60) {
        return "Good";
    } else if (percentage >= 40) {
        return "Average";
    } else {
        return "Needs Improvement";
    }
}

// Display the final report
console.log("Student: " + upperName);
console.log("Roll Number: " + rollNo);
console.log("Department: " + department);
console.log("Total Marks: " + calculateTotal(marks));
console.log("Percentage: " + calculatePercentage(marks) + "%");
console.log("Highest Marks: " + findHighest(marks));
console.log("Lowest Marks: " + findLowest(marks));
console.log("Subjects Passed: " + passed);
console.log("Name Characters: " + nameLength);
console.log("Performance: " + getGrade(marks));
