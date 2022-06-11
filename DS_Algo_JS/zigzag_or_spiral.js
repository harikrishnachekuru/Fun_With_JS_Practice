// Algrithm that printing of traversal parameters into zigzag format
// As a note that odd level parameters will get reversed and Even level parameters will be same as normal.

/**
 
Given a binary tree, return the zigzag level order traversal of its nodes' values. 
(ie, from left to right, then right to left for the next level and alternate between).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
   
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]

*/

/**
 * Explanation 
 * 
 * Given should be traversed and return as seperated with blocks based on the levl order.
 *  
 */

var zigzag = function (root) {
    let result = [];
    const levelOfTraversing = (root, level) => {
        if (!root) return;

        if (result[level]) result[level].push(root.val);
        else result[level] = root.val;

        levelOfTraversing(root.left, level + 1);
        levelOfTraversing(root.right, level + 1);
    }
    levelOfTraversing(root, 0);
    return result.map((b, i) => (i % 2) ? b.reverse : b);
};