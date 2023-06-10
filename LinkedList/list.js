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
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
  }

  addAtBegining(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  addAtposition(data, position){
    const node = new Node(data);
    let current = this.head;

    while(position-1 && current.next){
        current = current.next;
        position--
    }

    node.next=current.next;
    current.next = node;
  }

  deleteFromBegining(){
    let current = this.head;
    this.head = current.next;
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
obj.add(4);
obj.add(5);

//add at begining
// obj.addAtBegining(0);

//ad at position
// obj.addAtposition(45,30)

//delete
obj.deleteFromBegining()

//print
obj.print();
