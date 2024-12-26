const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree {
	constructor() {
		this.rootNode = null;
	}

	root() {
		return this.rootNode;
		// remove line with error and write your code here
	}

	add(data) {
		this.rootNode = addWithin(this.rootNode, data);
		function addWithin(node, data) {
			if (!node) {
				return new Node(data);
			}
			if (node.data === data) {
				return node;
			}
			if (data < node.data) {
				node.left = addWithin(node.left, data);
			} else {
				node.right = addWithin(node.right, data);
			}
			return node;
		}
		// remove line with error and write your code here
	}

	has(data) {
    return searchWithin(this.rootNode,data);
    
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data);
    }
		// remove line with error and write your code here
	}

	find(/* data */) {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	remove(/* data */) {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	min() {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	max() {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}
}

module.exports = {
	BinarySearchTree,
};
