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

   height(root){
    if(root === null){
        return 0;
    }
    return Math.max(this.height(root.left), this.height(root.right)) + 1;
   }

   diameter(root){
    if(root === null){
        return 0
    }
    const ls = this.diameter(root.left);
    const rs = this.diameter(root.right);
    const d3 = this.height(root.left) + this.height(root.right) + 1;

    return Math.max(d3, Math.max(ls,rs));
   }
}

const preorder = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

const obj = new Tree();
const root = obj.add(preorder);

const diameter = obj.diameter(root);

console.log(diameter);