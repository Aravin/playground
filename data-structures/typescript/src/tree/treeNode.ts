export class TreeNode<T> {
    data: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}
