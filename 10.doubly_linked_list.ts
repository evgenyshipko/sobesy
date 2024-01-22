class DoublyLinkedList {

    size = 0

    head = null

    tail = null

    constructor() {
        this.head = null;
        this.tail = null;
    }


    // Добавляет элемент в список.
    // Если указан индекс - добавляет по индексу,
    // в противном случае добавляет в конец.
    // Если индекс за пределами — кидает ошибку.
    add(value, index?) {
        if (index > this.size - 1){
            throw new Error('индекс больше размера списка')
        }

        this.size++

        const node = createNode(value);

        if (!this.head){
            this.head = node
            this.tail = node
            return;
        }

        if (index === 0){
            const oldHead = this.head
            const newHead = node

            oldHead.prev = newHead
            newHead.next = oldHead

            this.head = newHead
            return
        }

         if (!index){
             const oldTail = this.tail
             const newTail = node

             oldTail.next = newTail
             newTail.prev = oldTail

             this.tail = newTail
             return;
        }

         const oldNode = this.searchByIndex(index)
        const newNode = node

        newNode.next = oldNode
        newNode.prev = oldNode.prev

        oldNode.prev = newNode
        oldNode.next.prev = newNode
    }

    // Удаляет элемент из списка по значению.
    // Удаляет только первый найденный элемент.
    // Если элемент не найден, ничего делать не нужно.
    removeByValue(value) {
        const node = this.searchByValue(value)
        if (node){
            this.removeNode(node)
        }
    }

    removeNode(node){
        console.log('NODE', node)

        this.size--

        if (this.size === 0){
            this.head = null
            this.tail = null
            return;
        }

        if (node === this.head){
            const oldHead = this.head
            const newHead = this.head.next

            newHead.prev = null

            oldHead.next = null

            this.head = newHead
            return
        }

        if (node === this.tail){
            const oldTail = this.tail
            const newTail = this.tail.prev

            newTail.next = null

            oldTail.prev = null

            this.tail = newTail
            return;
        }

        const prevNode = node.prev
        const nextNode = node.next

        prevNode.next = node.next
        nextNode.prev = node.prev

        node.next = null
        node.prev = null
    }



    // Удаляет элемент из списка по индексу.
    // Если индекс за пределами — кидает ошибку.
    removeByIndex(index) {
        if (index > this.size - 1){
            throw new Error('индекс больше размера')
        }
        const node = this.searchByIndex(index)
        if (node){
            this.removeNode(node)
        }
    }

    // Ищет элемент в списке по индексу.
    // Если индекс за пределами — кидает ошибку.
    searchByIndex(index) {
        if (index > this.size - 1){
            throw new Error('индекс больше размера')
        }
        const getNext = (node) => {
            return node.next
        }

        let node = this.head
        let count = 0
        while (node && count < index){
            node = getNext(node)
            count++
        }
        return node
    }

    // Ищет элемент в списке по значению.
    // Возвращает первый найденный элемент.
    // Опционально можно указать индекс начала поиска.
    // Если индекс за пределами — кидает ошибку.
    // Если элемент не найден, нужно вернуть null.
    searchByValue(value, startIndex = 0) {
        if (startIndex > this.size - 1){
            throw new Error('индекс больше размера')
        }
        const getNext = (node) => {
            return node.next
        }

        let node = this.head
        let count = 0
        while (node){
            if (node.value === value && count >= startIndex){
                return node
            }

            node = getNext(node)
            count++
        }
        return null
    }
}

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду
function createNode(value) {
    return {
        value,
        next: null,
        prev: null,
    };
}


const list = new DoublyLinkedList()
list.add(1)
list.add(55)
list.add(2)

list.removeByIndex(1)
list.removeByIndex(1)
list.removeByIndex(0)


console.log(list)
