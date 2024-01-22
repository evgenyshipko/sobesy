/* Развернуть односвязный список.

Односвязный список - список, в котором есть ссылка только на следующий элемент.

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

/**
 * function ListNode(value, next) {
 *     this.value = (value===undefined ? 0 : value)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverse(head) {

    let curr = head
    let prev = null
    while(curr){
        const next = curr.next
        curr.next = prev
        prev = curr
        if(!next){
            break
        }
        curr = next
    }
    return curr
}

class ListNode {

    value: number

    next: ListNode

    constructor(value, next?) {
        this.value = (value===undefined ? 0 : value)
        this.next = (next===undefined ? null : next)
    }
}


const fourth = new ListNode(4)
const third = new ListNode(3, fourth)
const second = new ListNode(2, third)
const head = new ListNode(1, second)

console.log(reverse(head))