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
    // insertAnyPosition
    insertAt(value, position) {
        if(position === 1) {
            this.prepend(value);
        } else if (position === this.length + 1) {
            this.append(value);
        } else {
            // 1. create node
            let newNode = new Node(value);
            // 2. find previous value
            let preNode = this.findNode(position - 1);
            console.log({preNode: preNode.value});
            console.log({preNode: preNode.next});
            // 3. node.next = pre.next
            newNode.next = preNode.next;
            // 4. next update:- pre.next = node
            preNode.next = newNode;
            this.length++;
            
        }
    }

    update(value, position) {
        let currentNode = this.findNode(position);
        currentNode.value = value;
    }

    deleteAt(position) {
        if (position < 1 || position > this.length) {
            console.log("Invalid position");
            return;
        }
    
        // Case 1: Delete the head
        if (position === 1) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null; // For doubly linked list support
            } else {
                this.tail = null; // List is now empty
            }
            this.length--;
            return;
        }
    
        // Case 2: Delete the tail
        if (position === this.length) {
            let prevNode = this.findNode(this.length - 1);
            prevNode.next = null;
            this.tail = prevNode;
            this.length--;
            return;
        }
    
        // Case 3: Delete from the middle
        let prevNode = this.findNode(position - 1);
        let currentNode = prevNode.next;
        prevNode.next = currentNode.next;
    
        if (currentNode.next) {
            currentNode.next.prev = prevNode; // For doubly linked list support
        }
    
        this.length--;
    }
    

    findNode(n) {
        let count = 1;
        let data = this.head;
        while(data) {
            if (count == n) {
                break;
            }
            count++;
            data = data.next;
        }
        return data;
    }
    print() {
        let data = this.head;
        while(data) {
            console.log(data.value);
            data = data.next;
        }
    }
}

const list = new LinkedList(10);
list.insert(20)
list.insert(30)
list.insert(40)
list.insert(50)
list.insert(60)
list.insert(70)
list.insert(80)

list.prepend(-25, 1);
list.insertAt(15, 3);
list.update(18, 3);
list.deleteAt(3);
list.print();
list