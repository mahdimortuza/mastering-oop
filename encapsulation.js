class Player {
    #name
    #birthDay
    #monthlySalary
    #noOfMonths
    constructor(name,birthDay, monthlySalary, noOfMonths){
        this.#name = name
        this.#birthDay = birthDay
        this.#monthlySalary = monthlySalary,
        this.#noOfMonths = noOfMonths
    }

    calculateAge() {
        const diff_ms = Date.now() - new Date(this.#birthDay).getTime()
        const age_dt = new Date(diff_ms)

        return Math.abs(age_dt.getUTCFullYear() - 1970)
    }
    getSalary() {
        return ( this.#monthlySalary * this.#noOfMonths).toLocaleString()
    }
}
const sakib =  new Player("sakib", '1987-3-24', 200000, 12)
const tamim = new Player("tamim", '1985-3-5', 351005, 12)

console.log(sakib.birthDay)