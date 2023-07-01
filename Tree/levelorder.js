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

    levelorder(root){
        const q = [];
        q.push(root);

        while(q.length){
            const node = q.shift();
            console.log(node.data);
            if(node.left){
                q.push(node.left);
            } 
            if(node.right){
                q.push(node.right)
            }            
        }
    }
}

const preorder = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

const obj = new Tree();
const root = obj.add(preorder);

obj.levelorder(root);