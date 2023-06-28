class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(1);

const node1 = new Node(2);

const node2 = new Node(4);

root.left = node1;
root.right = node2;

console.log(root);