const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    //  this._queue = {};
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      }
    return this.length++;
  }

  dequeue() {
    if (!this.first) return null;
    let removed = this.first.value;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.length--;
    return removed;
  }
}

module.exports = {
  Queue
};
