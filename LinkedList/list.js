class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
        } else {
            let current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
    }

    print(){
        let current = this.head;

        while(current){
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

//print
obj.print();