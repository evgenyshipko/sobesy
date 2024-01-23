class Graph {

    data = {}

    // Добавляет вершину.
    // Если вершина уже существует, ничего не делает.
    addVertex(vertex) {
        if (this.data[vertex]){
            return
        }
        this.data[vertex] = []
    }

    // Удаляет вершину.
    removeVertex(vertex) {
        for (const item of this.data[vertex]){
            this.data[item] = this.data[item].filter(v => v !== vertex)
        }
        delete this.data[vertex]
    }

    // Добавляет грань между двумя вершинами.
    addEdge(vertex1, vertex2) {
        if (vertex1 !== vertex2 && vertex1 && vertex2 && this.data[vertex2] && this.data[vertex1] &&
            !this.data[vertex1].includes(vertex2) && !this.data[vertex2].includes(vertex1)
        ){
            this.data[vertex1].push(vertex2)
            this.data[vertex2].push(vertex1)
        }
    }

    // Удаляет грань между двумя вершинами.
    removeEdge(vertex1, vertex2) {
        if (vertex1 !== vertex2 && vertex1 && vertex2 && this.data[vertex2] && this.data[vertex1]) {
            this.data[vertex1] = this.data[vertex1].filter(v => v !== vertex2)
            this.data[vertex2] = this.data[vertex2].filter(v => v !== vertex1)
        }
    }
}

// Пример использованиия
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');

graph.removeEdge('A', 'B');
graph.removeVertex('C')


console.log(graph.data);
/*
{
  A: ['B', 'C'],
  B: ['A'],
  C: ['A'],
  D: []
}
 */