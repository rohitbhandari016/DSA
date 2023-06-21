class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    const node = new Node(val);
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    } else {
      this.head = node;
    }
  }

  deleteNode(node) {
    let current = node;

    while (current?.next) {
      current.val = current.next?.val;
      if (current.next.next === null) {
        current.next = null;
      } else current = current.next;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const obj = new LinkedList();

const node1 = new Node(2);
const node2 = new Node(0);
const node3 = new Node(1);
const node4 = new Node(3);

obj.head = node1;

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

//add

// obj.add(1);
// obj.add(2);
// obj.add(3);
// obj.add(4);
// obj.add(5);

//delete
obj.deleteNode(node1);

//print
obj.print();
