// Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grades){
        super(firstName, lastName, age)
        this.grades = grades
    }

    updateGrade(amount){
        return this.grades += amount 
    } 
    getBio(){
        const status = this.grades <= 69 ? 'failing' : 'passing'
        return `${this.firstName} ${this.lastName} is ${status} the class`
    }

}

const newStudent = new Student('Eugenia', 'Ikwuegbu', 25, 7)
console.log(newStudent.updateGrade(50))
console.log(newStudent.getBio())
console.log(newStudent.updateGrade(-30))
console.log(newStudent.updateGrade(-4))


