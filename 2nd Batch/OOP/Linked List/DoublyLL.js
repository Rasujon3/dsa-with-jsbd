
class Node {
    constructor(value, next = null, prev = null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLL {
    constructor(value){
        // head, tail, length
        let newNode = new Node(value);
        console.log(newNode);
        this.head = this.tail = newNode;
        this.length = 1;
    }

    append(value) {
        // 1. create a node
        // 2. update next -> tail.next = newNode
        // 3. update prev -> newNode.prev = tail
        // 4. update tail -> newNode

        // step-1. create a node
        let newNode = new Node(value);
        // step-2. update next -> tail.next = newNode
        this.tail.next = newNode;
        // step-3. update prev -> newNode.prev = tail
        newNode.prev = this.tail;
        // step-4. update tail -> newNode
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        // 1. create a node
        // 2. update next -> newNode.next = head
        // 3. update prev -> head.prev = newNode
        // 4. update head -> head = newNode

        // step-1. create a node
        let newNode = new Node(value);
        // step-2. update next -> newNode.next = head
        newNode.next = this.head;
        // step-3. update prev -> head.prev = newNode
        this.head.prev = newNode;
        // step-4. update head -> head = newNode
        this.head = newNode;
        this.length++;
    }
    // h.w: insertAnyPosition & delete
    printFromStart() {
        let data = this.head;
        while(data) {
            console.log(data.value);
            data = data.next;
        }
    }
    printFromLast() {
        let data = this.tail;
        while(data) {
            console.log(data.value);
            data = data.prev;
        }
    }
}

const list = new DoublyLL(10);
list.append(20);
list.prepend(5);
list.printFromStart();
list.printFromLast();
list
