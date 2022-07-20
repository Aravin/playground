import { TreeNode } from "../tree/treeNode";
const TRUE = true;

class BinarySearchTree<T> {
    root?: TreeNode<T>;

    insert(data: T) {
        if (!this.root) {
            this.root = new TreeNode(data);
            return this.root;
        }

        let current = this.root;

        while (TRUE) {
            if (data === current.data) {
                return;
            }
            if (data > current.data) {
                if (current.right) {
                    current = current.right;
                }
                else {
                    current.right = new TreeNode(data);
                    return current.right;
                }
            } else {
                if (current.left) {
                    current = current.left;
                }
                else {
                    current.left = new TreeNode(data);
                    return current.left;
                }
            }
        }
    }

    search(data: T) {
        if (!this.root) {
            return null;
        }

        let current = this.root;

        while(data !== current.data) {
            if (data > current.data) {
                if (!current.right) return;
                current = current.right;
            }
            else {
                if (!current.left) return;
                current = current.left
            }
        }

        return current;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);


console.log(tree.search(5));