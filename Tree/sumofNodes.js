class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.i = -1;
    }

    add(preorder){
        this.i++;

        if(preorder[this.i] === -1){
            return null
        }
        const node = new Node(preorder[this.i]);
        node.left = this.add(preorder);
        node.right = this.add(preorder);

        return node;
    }

    sumofNodes(root){

        if(root === null){
            return 0
        }

        return this.sumofNodes(root.left) + this.sumofNodes(root.right) + root.data 

    }
}

const preorder = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

const obj = new Tree();
const root = obj.add(preorder);

const sum = obj.sumofNodes(root);

console.log(sum)