class Node {
  constructor(data) {
    this.data = data === undefined ? 0 :data;
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

  deleteFromLast(){
    let current = this.head;
    while(current.next.next){
        current = current.next;
    }
    current.next=null
  }

  middle(){
    let count = 0;
    let current = this.head;;
    while(current){
        count++;
        current = current.next;
    }
    let middle = Math.floor(count/2);
    let current1 = this.head;
    while(middle){
        current1 = current1.next;
        middle--;
    }
    console.log(current1);
  }

  mergeNodesBetweenZeros(){
    let current  = this.head.next;
    let count = 0;
    let node = new Node(0)
    let lastnode = node;
    this.head = node;
    
    while(current){
      if(current.data === 0){

        const node = new Node(count);
        lastnode.next = node;
        lastnode = node;
        count = 0;
      } else {

        count = count + current.data;
      }
      current = current.next;
    }
    console.log(this.head.next);

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
// obj.add(0);
// obj.add(3);
// obj.add(1);
// obj.add(0);
// obj.add(4);
// obj.add(5);
// obj.add(2);
// obj.add(0);

obj.add(0)
obj.add(1)
obj.add(0)
obj.add(3)
obj.add(0)
obj.add(2)
obj.add(2)
obj.add(0)




//add at begining
// obj.addAtBegining(0);

//ad at position
// obj.addAtposition(45,30)

//delete
// obj.deleteFromBegining()

//deleteFromLast
// obj.deleteFromLast()

console.log(obj.mergeNodesBetweenZeros());

//print
// obj.print();

// obj.middle();
