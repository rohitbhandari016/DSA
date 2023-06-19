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

    removeDuplicate(){
        let current = this.head;
        let next = current.next;

        while(next){
          if(current.data === next.data){
            current.next = next.next;
            next=next.next;
          }  else{
            current = current.next;
          }
        }
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
  obj.add(1);
  obj.add(2); 
  obj.add(3); 
  obj.add(3); 


  obj.removeDuplicate();
  //print
  obj.print();
  