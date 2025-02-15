// Head --------------------- Tail
// (100,2k) --> (200,3k) --> (300,Null)
// 1k,           2k,         3k

// LinkedList
// Head{
//     value: 100,
//     next:{
//         value: 200,
//         next: {
//             value: 300,
//             next: null
//         }
//     }
// }

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    let node = new Node(value); // {value: 100, next: null}
    this.head = node;
    this.tail = node;
    this.tail.next = this.head;
    this.length = 1;
  }
  append(value) {
    // 1. Node Create
    // 2. tail.next append
    // 3. update tail
    let node = new Node(value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail.next = this.head;
    this.length++;
  }
  prepend(value) {
    /**
     * 1. Node Create
     * 2. newNode.next=head
     * 3. this.head=newNode
     */
    let node = new Node(value, this.head);
    // node.next = this.head;
    this.head = node;
    this.tail.next = this.head;
    this.length++;
  }
  print() {
    let data = this.head;
    // while (data !== null) {
    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }
  appendAt(value, position) {
    if (position === 1) {
      //first
      this.prepend(value);
    } else if (position === this.length + 1) {
      //last
      this.append(value);
    } else {
      // insert at any position
      /**
       * 1. create new node
       * 2. previous value/node find
       * 3. newNode.next = pre.next
       * 4. pre.next = newNode
       */
      let newNode = new Node(value);
      let preNode = this.findNode(position - 1);
      console.log({ preNode: preNode.value });
      newNode.next = preNode.next;
      preNode.next = newNode;

      this.length++;
    }
  }
  delete(position) {
    let preNode = this.findNode(position - 1);
    console.log({ preNode: preNode.value });
    preNode.next = preNode.next.next;

    this.length--;
    console.log(list);
  }
  update(position, value) {
    let preNode = this.findNode(position);
    console.log({ preNode: preNode.value });
    preNode.value = value;

    console.log(list);
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

let list = new LinkedList(100);
list.append(200);
list.prepend(50);
list.appendAt(150, 3);
// list.delete(2);
list.update(2, 120);

console.log(list.head);
