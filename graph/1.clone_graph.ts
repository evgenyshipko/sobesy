/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

* */

import { strict as assert } from 'node:assert';

const GraphNode = (val, neighbors) => ({
    val, neighbors
})

// обходим в ширину или в глубину
const cloneGraph = function(node) {

    if(!node){
        return node
    }

    const queue = [node]

    const copies = {}

    while (queue.length > 0){
        const currentNode = queue.pop()
        if (!copies[currentNode.val]){
            copies[currentNode.val] = {
                val: currentNode.val,
                neighbors: currentNode.neighbors.map(item => item.val)
            }
            queue.unshift(...currentNode.neighbors)
        }
    }

    const restoreNeighbors = (node) => {
        node.neighbors = node.neighbors.map(val => copies[val])
    }

    Object.values(copies).forEach(restoreNeighbors)

    return copies[node.val]
};


const first = GraphNode(1, [])
const second = GraphNode(2, [first])
first.neighbors = [second]

const clonedFirst = cloneGraph(first)
const clonedSecond = clonedFirst.neighbors[0]

// равны по значению
assert.deepEqual(first, clonedFirst)
assert.deepEqual(second, clonedSecond)

// не равны по ссылке
assert.notEqual(first, clonedFirst)
assert.notEqual(second, clonedSecond)