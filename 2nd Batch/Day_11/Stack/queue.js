class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor(value) {
        let node = new Node(value);
        this.head = node;
        this.tail = node;
        this.tail.next = this.head;
        this.length = 1;
    }
    enqueue(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.tail.next = this.head;
        this.length++;
    }
    dequeue() {
        let removedNode = this.head;
        this.head = this.head.next;
        return removedNode.value;
    }
    print() {
        let data = this.head;
        while (data) {
            console.log(data.value);
            data = data.next;
        }
    }

    peek() {
        return this.tail.value;
    }
    isEmpty() {
        return this.length === 0;
    }
    findNode(n) {
        let count = 1;
        let data = this.head;
        while (data) {
            if (count == n) {
                break;
            }
            count++;
            data = data.next;
        }
        return data;
    }
}

let queue = new Queue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

// queue.print();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.print();

// console.log(myStack.print());

// myStack.pop();
// console.log(myStack.pop());
// myStack.print();

// Enqueue . ---> T.C O(1) , S.C O(1)
// Dequeue  . ---> T.C O(1) , S.C O(1)


