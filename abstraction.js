class BetterArray{
    #items

    constructor(){
        this.#items = []
    }

    getItems(){
        return [...this.#items]
    }

    addItem(item){
        this.#items.push(item)
    }

    removeItem(itemTODelete){
        this.#items = this.#items.filter((item) => item !== itemTODelete)
    }

    modifyItem(itemToChange, newValue){
        const index = this.#items.indexOf(itemToChange)
        if(index !== -1){
            this.#items[index] = newValue
        }
    }
}

const array = new BetterArray()

array.addItem("i love react") 
array.addItem("i love js") 

console.log(array.getItems())
array.modifyItem("i love js", 'i love ts')
console.log(array.getItems())
