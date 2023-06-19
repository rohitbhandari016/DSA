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

  removeNode(val) {
    let prev = this.head;
    let current = this.head;

    while (current) {
      if (this.head?.val === val) {
        this.head = this.head.next;
        prev = this.head;
      } else if (current?.val === val) {
        prev.next = current.next;
      } else {
        prev = current;
      }
      current = current.next;
    }
    console.log(prev);
    console.log(current);
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
//add

//   obj.add(1);
//   obj.add(1);
//   obj.add(2);
//   obj.add(3);
//   obj.add(4);

obj.add(7);
obj.add(7);
obj.add(7);
obj.add(7);
obj.add(8);
obj.add(8);

obj.removeNode(8);
//print
obj.print();
