class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.tail = newNode;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return undefined;
    let oldFirst = this.first;
    this.first = oldFirst.next;
    console.log({ oldFirst });
    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }
    return --this.size;
  }
}

const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');
stack.pop();
stack.pop();
stack.pop();
console.log(stack.pop());
