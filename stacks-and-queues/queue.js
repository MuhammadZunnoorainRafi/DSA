class Node {
  next = null;
  constructor(val) {
    this.val = val;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    ++this.size;
    return this;
  }

  dequeue() {
    if (!this.first) return undefined;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      let oldFirst = this.first;
      this.first = oldFirst.next;
    }
    --this.size;
    return this;
  }
}

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.dequeue());
