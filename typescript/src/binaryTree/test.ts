import { TreeNode } from "../tree/treeNode";
const TRUE = true;

class BinarySearchTree<T> {
    private root?: TreeNode<T>;

    insert(data: T) {

        if (!this.root) {
            this.root = new TreeNode(data);
            return this;
        }

        let current = this.root;

        while(TRUE) {
            if (data > current.data) {
                if (!current.right) {
                    current.right = new TreeNode(data);
                    return this;
                }
                else
                {
                    current = current.right;
                }
            }
            else
            {
                if (!current.left) {
                    current.left = new TreeNode(data);
                    return this;
                }
                else
                {
                    current = current.left;
                }
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(12);
tree.insert(5);
tree.insert(6);
tree.insert(13)

console.log(tree);