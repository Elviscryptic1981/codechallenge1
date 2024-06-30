function generateGrade() {
    let marks = prompt("Enter student marks (between 0 and 100):");
    
    if (marks >= 80) {
        return "Grade: A";
        
    } else if (marks >= 60) {
        return "Grade: B";
    } else if ( marks >= 50) {
        return "Grade: C";
    } else if (marks >= 40) {
        return "Grade: D";
    } else {
        return "Grade: E";
    }
}

// calling it
let grade = generateGrade();
console.log(grade)