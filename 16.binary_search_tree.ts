class BST {

    root
    constructor() {
        this.root = null;
    }

    toString(){
        return this.root
    }

    // Создаёт ноду со значением value и помещает в дерево
    add(value) {
        const newNode = { value, left: null, right: null };

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.addNode(this.root, newNode);
        }
    }

    // Вспомогательный метод для добавления newNode как потомка к node
    addNode(node, newNode) {
        // нода с таким значением уже есть
        if (newNode.value === node.value) {
            return;
        }

        if (newNode.value < node.value) { // добавляем ноду слева
            if (node.left === null) {
                node.left = newNode
            } else {
                this.addNode(node.left, newNode);
            }
        } else { // добавляем ноду справа
            if (node.right === null) {
                node.right = newNode
            } else {
                this.addNode(node.right, newNode);
            }
        }
    }

    // Удаляет ноду со значением value из дерева
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    // Вспомогательный метод для удаления вершины со значением value
    // из дерева от вершины node. Возвращает новую вершину на замену node.
    removeNode(node, value) {
        // если вершина null
        if (node === null) {
            return null;
        }

        // если значение вершины равно удаляемому значению
        if (value === node.value) {
            if (node.left === null && node.right === null) {
                return null;
            } else if (node.left === null) {
                // если слева нет детей, заменяем вершину на правого ребёнка
                return node.right;
            } else if (node.right === null) {
                // если справа нет детей, заменяем вершину на левого ребёнка
                return node.left;
            } else {
                // если оба ребёнка есть, ищем максимальный элемент слева
                const max = this.findMax(node.left);

                node.value = max.value;
                // запускаем удаление значения в левой части
                node.left = this.removeNode(node.left, node.left.value);

                return node;
            }
        }

        if (value < node.value) {
            // если значение меньше, рекурсивно удаляем значение из левой части
            node.left = this.removeNode(node.left, value);
        } else {
            // если значение больше, рекурсивно удаляем значение из правой части
            node.right = this.removeNode(node.right, value);
        }

        return node;
    }

    // Ищет максимальный элемент, начиная с вершины node.
    findMax(node) {
        let currentNode = node
        while (true){
            if (currentNode.right){
                currentNode = currentNode.right
                continue
            }
            if (currentNode.left){
                currentNode = currentNode.left
                continue
            }
            break
        }
        return currentNode
    }

    // Возвращает элемент, значение которого равно value.
    // Если элемент не найден, возвращает null.
    find(value) {
        let currentNode = this.root
        while (currentNode){
            if (currentNode.value === value){
                return currentNode
            }
            if (currentNode.value < value){
                currentNode = currentNode.right ?? currentNode.left
                continue
            }
            if (currentNode.value > value){
                currentNode = currentNode.left ?? currentNode.right
            }
        }
        return currentNode
    }
}

const bst = new BST()
bst.add(10)
bst.add(2)
bst.add(11)
bst.add(5)
bst.add(1)

console.log(bst)

console.log(bst.findMax(bst.root))

console.log(bst.find(2))