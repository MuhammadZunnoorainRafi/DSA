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

  push(val) {
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

  pop() {
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
queue.push('a');
queue.push('b');
queue.push('c');
queue.push('d');
queue.pop();
queue.pop();
queue.pop();
console.log(queue.pop());
