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
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }

    this.length--;

    return poppedNode;
  }

  shift() {
    let poppedNode = this.head;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedNode.next;
      this.head.prev = null;
      poppedNode.next = null;
    }
    this.length--;
    return poppedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  get(ind) {
    if (ind < 0 || ind >= this.length) return null;
    let head = this.head;
    let tail = this.tail;
    console.log({ tailP: tail.prev });
    if (ind <= this.length / 2) {
      let count = 0;
      while (ind !== count) {
        head = head.next;
        count++;
      }
      return head.val;
    } else {
      let count = this.length - 1;
      while (ind !== count) {
        tail = tail.prev;
        count--;
      }
      return tail.val;
    }
  }
}

const t = new DoublyLinkedList();
t.push(1);
t.push(2);
t.push(4);
t.push(8);
// t.pop();
// t.unshift(1);

console.log(t.get(3));
