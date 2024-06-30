class Player{
    #name
    #age

    constructor(name, age){
        this.#name = name
        this.#age = age
    }

    getName(){
       return this.#name
    }
    getAge(){
       return this.#age
    }

    getPlayerDetails() {
        return `${this.#name} is ${this.#age} years old.`
    }
}

class Cricketer  extends Player{
    #centuries

    constructor(name, age,centuries){
        super(name, age)
        this.#centuries = centuries
    } 
    getPlayerDetails(){
        return `${this.getName()} er booyosh ${this.getAge()} bochor.`

    }
}

class Footballer  extends Player{
    #goals

    constructor(name, age,goals){
        super(name, age)
        this.#goals = goals
    } 
}

const sakib = new Cricketer('sakib', 36, 12)
const ronaldo = new Footballer('ronaldo', 40, 200)

console.log(sakib.getPlayerDetails())
console.log(ronaldo.getPlayerDetails())