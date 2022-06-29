// The function should take 2 arugments: exam grade (0 - 100) and number of completed project (0+)
//  There's 4 types of final grades:

// 100, if an exam grade is more than 90 or if completed projects is more than 10 
// 90, if an exam grade is more than 75 and if completed projects is minimum 5
// 75, if an exam grade is more than 50 and if completed projects is minimum 2
// 0 in other cases 

// My Solution - solved first time
function finalGrade(exam ,projects) {
    // return final grade 
    if (exam > 90 || projects > 10){
        return 100
    } else if (exam >= 75 && projects >= 5) {
        return 90
    } else if (exam >= 50 && projects >= 2) {
        return 75
    } else {
        return 0
    }
}

console.log(finalGrade(55, 0));