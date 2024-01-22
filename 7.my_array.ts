// учебная реализация массива

class MyArray {

    length = 0

    memory = {}

    size: number

    constructor(initialSize = 1) {
        if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
            throw new Error('Длина массива должна быть целым числом');
        }

        if (!(initialSize > 0)) {
            throw new Error('Размер массива должен быть больше нуля');
        }

        this.size = initialSize;
        this.memory = allocate(initialSize);
        this.length = 0;
    }

    isValidIndex(index){
        return index < this.length && index >= 0
    }

    // Возвращает значение по индексу.
    // Если индекс за пределами — кидает ошибку.
    get(index){
        if(!this.isValidIndex(index)){
            throw new Error('индекс')
        }

        return this.memory[index]
    }

    // Устанавливает значение по индексу.
    // Если индекс за пределами — кидает ошибку.
    set(index, value) {
        if(!this.isValidIndex(index)){
            throw new Error('индекс')
        }

        this.memory[index] = value
    }

    // Добавляет новый элемент в массив.
    // Если index не определён — добавляет в конец массива.
    // В противном случае — добавляет по индексу со сдвигом
    // всех последующих элементов.
    // Если индекс за пределами - кидает ошибку.
    // Увеличивает выделенную память вдвое, если необходимо.
    // Возвращает новую длину массива.
    add(value, index?: number) {

        if((index || index === 0) && !this.isValidIndex(index)){
            throw new Error('индекс')
        }

        if(!index){
            this.memory[this.length] = value
        }else{
            for(let i = this.size - 1; i >= index; i--){
                this.memory[i + 1] = this.memory[i]
            }
            this.memory[index] = value
        }

        this.length++

        if(this.size === this.length){
            this.size = 2 * this.size
            const allocated = allocate(this.size)
            for(const key in this.memory){
                allocated[key] = this.memory[key]
            }
            this.memory = allocated
        }

        return this.length
    }

    // Удаляет элемент по индексу со сдвигом всех последующих элементов.
    // Если индекс за пределами - кидает ошибку.
    // Возвращает новую длину массива.
    delete(index) {
        if(index + 1 > this.length){
            throw new Error('индекс больше размера')
        }

        for(let i = index; i < this.size; i++){
            this.memory[i] = this.memory[i + 1]
        }
        this.memory[this.length - 1] = undefined

        this.length--

        return this.length
    }

    toString(){
        return `length ${this.length}, size: ${this.size} \n` + this.memory
    }
}

function allocate(size) {
    const memory = {};

    for (let i = 0; i < size; i++) {
        memory[i] = undefined;
    }

    return memory;
}


const arr = new MyArray(2)
arr.add(1)
arr.add(2)
arr.add(3)
arr.add(55, 1)
console.log(arr)