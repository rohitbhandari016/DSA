class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const node = new Node(data);
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

  binaryToInteger(head) {
    let sum = 0;
    let current = head;
    let iteration = 0;

    while (current) {
      if (current.data) {
        sum = sum + Math.pow(2, iteration);
      }
      current = current.next;
      iteration++;
    }
    console.log(sum);
  }

  reverse() {
    let previous = null;
    let next = null;
    let current = this.head;

    while(current){
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const obj = new LinkedList();
//add
obj.add(1);
obj.add(2);
obj.add(3);

//print
obj.reverse();
obj.print();
//   obj.binaryToInteger(obj.head);
