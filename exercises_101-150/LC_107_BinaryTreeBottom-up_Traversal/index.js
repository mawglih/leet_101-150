/**
 * Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    const constructTree = (treeNode, index, arr) => {
        if(!treeNode) return arr;
        if(!arr[index]) arr[index] = [];
        arr[index].push(treeNode.val);
        constructTree(treeNode.left, index + 1, arr);
        constructTree(treeNode.right, index + 1, arr);
    }
    constructTree(root, 0, arr = []);
    return arr.reverse();
};


// runtime 61 ms
// memory 44.2 MB