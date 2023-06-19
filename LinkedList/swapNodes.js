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

  swapNodes(head, k) {
    let current = head;
    let current1 = head;

    const stk = [];
    let count = 0;

    while (current) {
      stk.push(current.val);
      current = current.next;
      count++;
    }

    let swap1 = k - 1;
    let swap2 = (count - k);

    let pos = 0;


    while(current1){
        if(pos === swap1){

            current1.val = stk[swap2];
        } else if(pos === swap2){


            current1.val = stk[swap1];
        }
        current1 = current1.next
        pos++
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
//add

obj.add(1);
obj.add(2);
obj.add(3);
obj.add(4);
obj.add(5);

//swap
obj.swapNodes(obj.head, 2);
//print
obj.print();
