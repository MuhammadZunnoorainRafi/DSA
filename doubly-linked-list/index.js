class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let poppedNode = this.tail;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = poppedNode.prev;
      this.tail = newTail;
      this.tail.next = null;
    }

    this.length--;

    return poppedNode;
  }
}

const t = new DoublyLinkedList();
// t.push(2);
t.push(4);
t.push(8);
// t.pop();

console.log(t.pop());
console.log(t);
