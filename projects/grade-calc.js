//Method 1
// let studentScore = function(studentName ='Anonymous',studentScore = 0, possibleScore= 100){
//     let percent = (studentScore/possibleScore) * 100;
//     if(percent >= 90){
//         console.log(`Hi ${studentName}, you got an A (${percent}%)`)
//     }else if( percent >= 80){
//         console.log(`Hi ${studentName}, you got a B (${percent}%)`)
//     }else if(percent >= 70){
//         console.log(`Hi ${studentName}, you got a C (${percent}%)`)
//     }else if(percent >= 60){
//         console.log(`Hi ${studentName}, you got a D (${percent}%)`)
//     }else if(percent === 59 || percent <= 50){
//         console.log(`Sorry, ${studentName}, you failed this course (${percent}%)`)
//     }
// }

// studentScore(undefined, 59);


//Method 2
// let getStudentScore = function(studentName ='Anonymous',studentScore = 0, possibleScore= 100){
//     let percent = (studentScore/possibleScore) * 100;
//     let letterGrade = '';
//     if(percent >= 90){
//         letterGrade = 'A'
//     }else if( percent >= 80){
//         letterGrade = 'B'
//     }else if(percent >= 70){
//         letterGrade = 'C'
//     }else if(percent >= 60){
//         letterGrade = 'D'
//     }else {
//         return `Sorry, ${studentName}, you failed this course (${percent}%)`
//     }
//     return `Hi ${studentName}, you got a ${letterGrade} (${percent}%)`
// }

// let score = getStudentScore('Phil', 59)

// console.log(score)

// const getStudentScore = function(studentName = 'Anonymous',studentScore = 0, possibleScore){
//     let percent = (studentScore/possibleScore) * 100;
//     let letterGrade = '';
//         if( typeof studentName === 'string' && typeof studentScore === 'number' && typeof possibleScore !== 'number'){       
//         if(percent >= 90){
//             letterGrade = 'A'
//         }else if( percent >= 80){
//             letterGrade = 'B'
//         }else if(percent >= 70){
//             letterGrade = 'C'
//         }else if(percent >= 60){
//             letterGrade = 'D'
//         }else {
//             return `Sorry, ${studentName}, you failed this course (${percent}%)`
//         }
//         return `Hi ${studentName}, you got a ${letterGrade} (${percent}%)`      
//     }else{
//         throw ('Invalid Student name or number')
//     }
// }

// const score = getStudentScore('Phil', true, 30)
// console.log(score)

// try{
//     let score = getStudentScore('Phil', 30,undefined)
//     console.log(score)
// } catch (e){
//     console.log('Invalid inputs')
// }

//OR
const getStudentScore = function(studentName = 'Anonymous',studentScore = 0, possibleScore){
    let percent = (studentScore/possibleScore) * 100;
    let letterGrade = '';
    if( typeof studentName !== 'string' || typeof studentScore !== 'number' || typeof possibleScore !== 'number'){
        throw Error('Invalid Student name or number')
    }else{
        if(percent >= 90){
            letterGrade = 'A'
        }else if( percent >= 80){
            letterGrade = 'B'
        }else if(percent >= 70){
            letterGrade = 'C'
        }else if(percent >= 60){
            letterGrade = 'D'
        }else {
            return `Sorry, ${studentName}, you failed this course (${percent}%)`
        }
        return `Hi ${studentName}, you got a ${letterGrade} (${percent}%)`      
        }
    }  


try{
    const score = getStudentScore('Phil', 7, 30)
       console.log(score)
} catch (e){
    console.log(e.message) //logs whatever message we have on the throw block
}