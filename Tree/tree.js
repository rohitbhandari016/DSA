class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.i = -1;
    }
  
    addNode(list) {
      this.i++;
      if (list[this.i] === -1) {
        return null;
      }
      const node = new Node(list[this.i]);
      node.left = this.addNode(list);
      node.right = this.addNode(list);
      return node;
    }
  }
  
  const preorder = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
  
  const t = new BinaryTree();
  const root = t.addNode(preorder);
  console.log(root);
  