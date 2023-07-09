class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {

    constructor(){
        this.root = null;
    }

    insert(val){
        const newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
        }

        else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(root.data > newNode.data){
            if(root.left === null){
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        }
        else{
            if(root.right === null){
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    inorderTraversal(root){
        if(root === null){
            return;
        }
        this.inorderTraversal(root.left);
        console.log(root.data);
        this.inorderTraversal(root.right);
    }
}



const obj = new Tree();

obj.insert(5);
obj.insert(1);
obj.insert(3);
obj.insert(4);
obj.insert(2);
obj.insert(7);


obj.inorderTraversal(obj.root);







