// 10 -> 20 -> 30 -> x

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(data) {
        let node = new Node(data);
        // console.log(node);
        this.head = this.tail = node;
        this.length = 1
    }

    insert (value) {
        // 1. create a node
        let node = new Node(value);
        // 2. update tail
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
}

const list = new LinkedList(10);
list.insert(20)
list.insert(30)
list.insert(40)
list.insert(50)
list