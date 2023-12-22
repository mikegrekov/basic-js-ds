const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // this._root = new Node(value);
    this._root = null;
    this.count = 0;
  }
  // constructor(value) {
  //   this._root = new Node(value);
  //   this.count = 1;
  // }

  root() {
    return this._root;
  }

  add(value) {
    this.count++;
    
    this._root = addNode(this._root, value);
    function addNode(node, value) {
      if (!node) return new Node(value);
      if (node.data === value) return node;
      if (value < node.data) {
        // go left
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      };
      return node;
    }
  }

  has(value) {
    let currentNote = this._root;
    while (currentNote) {
      if (value === currentNote.data) return true;
      if (value < currentNote.data) {currentNote = currentNote.left; continue}
      if (value > currentNote.data) {currentNote = currentNote.right; continue}
    };
    return false;
  }

  find(value) {
    let currentNote = this._root;
    while (currentNote) {
      if (value === currentNote.data) return currentNote;
      if (value < currentNote.data) currentNote = currentNote.left;
      if (value > currentNote.data) currentNote = currentNote.right;
    };
    return null;
  }

  // deleteNote(node, value) {
  //   if (node === null) return node;
  //   if (value < node.data) {node.left = this.deleteNote(node.left, value);
  //   } else if (value > node.data) {node.right = this.deleteNote(node.right, value);
  //   } else {
  //     this.count--;
  //     if (!node.left && !node.right) return null;
  //     if (!node.left) {
  //       return node.right;
  //     } else if (!node.right) {
  //       return node.left
  //     };
  //     let searchNode = node.right;
  //     while (searchNode.left) {
  //       searchNode = searchNode.left
  //     };
  //     node.data = searchNode.data;
  //     node.right = this.deleteNote(node.right, value);
  //   }
    
  //   return node;
  // }

  // remove(value) {
  //   this._root = this.deleteNote(this._root, value)
  // }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // node with no children
        if (!node.left && !node.right) {
          return null;
        }

        // node with only one child
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }

        // node with two children
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    let currentNote = this._root;

    while (currentNote.left) {
      currentNote = currentNote.left;
    };

    return currentNote.data;
  }

  max() {
    let currentNote = this._root;

    while (currentNote.right) {
      currentNote = currentNote.right;
    };

    return currentNote.data;
  }
}

module.exports = {
  BinarySearchTree
};