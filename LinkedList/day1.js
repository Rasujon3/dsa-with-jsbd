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
    let node = new Node(value);
    this.head = node;
    this.tail = node;
  }
  append(value) {
    // 1. Node Create
    // 2. tail.next append
    // 3. update tail
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
  }
}

let list = new LinkedList(100);
list.append(500);
console.log(list);
