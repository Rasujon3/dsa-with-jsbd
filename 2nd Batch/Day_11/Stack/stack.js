class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor(value) {
        let node = new Node(value);
        this.head = node;
        this.tail = node;
        this.tail.next = this.head;
        this.length = 1;
    }
    push(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.tail.next = this.head;
        this.length++;
    }
    print() {
        let data = this.head;
        while (data) {
            console.log(data.value);
            data = data.next;
        }
    }
    pop() {
        let preNode = this.findNode(this.length - 1);
        console.log({ preNode: preNode.value });
        let popableNode = preNode.next;
        preNode.next = null;
        return popableNode.value;
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

let myStack = new Stack("CI-CD Pipeline");
myStack.push("youtube");
myStack.push("Google Drive");

// myStack.print();
// console.log(myStack.print());

// myStack.pop();
console.log(myStack.pop());
myStack.print();

// Push . ---> T.C O(1) , S.C O(1)
// Pop  . ---> T.C O(n) {Using while loop for searching} , S.C O(1)


