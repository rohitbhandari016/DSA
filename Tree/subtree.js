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

   sub(root, subtree){
    if(root === null){
        return false;
    }
    if(root.data === subtree.data){
        if(root.left.data === subtree.left.data && root.right.data === subtree.right.data){
            return true;
        }
    }

    return this.sub(root.left, subtree) || this.sub(root.right, subtree);
   }
}

const preorder = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

const obj = new Tree();
const root = obj.add(preorder);

const subt = new Node(2);
subt.left = new Node(4);
subt.right = new Node(5);


const sub = obj.sub(root, subt);

console.log(sub);