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
    if (ind <= this.length / 2) {
      let count = 0;
      while (ind !== count) {
        head = head.next;
        count++;
      }
      return head;
    } else {
      let count = this.length - 1;
      while (ind !== count) {
        tail = tail.prev;
        count--;
      }
      return tail;
    }
  }

  set(ind, val) {
    let res = this.get(ind);
    if (res === null) return false;
    res.val = val;
    return true;
  }

  insert(ind, val) {
    if (ind < 0 || ind > this.length) return false;
    if (ind === 0) {
      this.unshift(val);
      return this;
    }
    if (ind === this.length) {
      this.push(val);
      return this;
    }
    const newNode = new Node(val);
    const beforeNode = this.get(ind - 1);
    const afterNode = beforeNode.next;
    newNode.prev = beforeNode;
    beforeNode.next = newNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return this;
  }

  remove(ind) {
    if (ind < 0 || ind >= this.length) return false;
    if (ind === 0) {
      this.shift();
      return true;
    }
    if (ind === this.length - 1) {
      this.pop();
      return true;
    }

    const removedNode = this.get(ind);
    const beforeNode = removedNode.prev;
    const nextNode = removedNode.next;
    beforeNode.next = nextNode;
    nextNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return true;
  }
}

const t = new DoublyLinkedList();
t.push(1);
t.push(2);
t.push(4);
t.push(8);
// t.pop();
// t.unshift(1);
// t.get(3)
// t.set(1, 'TWO')
// t.insert(2, 'INSERTED')

console.log(t.remove(3), t);
