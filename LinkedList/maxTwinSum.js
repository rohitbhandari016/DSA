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
  maxTwinSum(head) {
    let current = head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    let mid = count / 2;
    let current1 = this.head;
    const stk = [];
    let max = 0;
    while (mid) {
      stk.push(current1.data);
      current1 = current1.next;
      mid--;
    }
    while(current1){
        const temp = stk.pop();
        const sum = temp + current1.data;
        if(sum > max){
            max = sum;
        }
        current1 = current1.next
    }
    console.log(max);
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
obj.add(5);
obj.add(4);
obj.add(2);
obj.add(1);

//print
// obj.print();

obj.maxTwinSum(obj.head);
