class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Test {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unShift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(ind) {
    if (ind < 0 || ind >= this.length) return null;
    let current = this.head;
    let count = 0;
    while (count !== ind) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(ind, val) {
    let foundNode = this.get(ind);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(ind, val) {
    if (ind < 0 || ind > this.length) return false;
    if (ind === 0) {
      const res = this.unShift(val);
      return !!res;
    }
    if (ind === this.length) {
      const res = this.push(val);
      return !!res;
    }
    let newNode = new Node(val);
    let prevNode = this.get(ind - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(ind) {
    if (ind < 0 || ind >= this.length) return undefined;
    if (ind === 0) {
      return this.shift();
    }
    if (ind === this.length - 1) {
      return this.pop();
    }
    let prevNode = this.get(ind - 1);
    let targetNode = prevNode.next;
    prevNode.next = targetNode.next;
    this.length--;
    return targetNode;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this.print();
  }

  print() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

const t = new Test();
t.push('a');
t.push('b');
t.push('c');
t.push('d');
// t.pop();
// t.shift();
// const check = t.pop()
// console.log(check);
// t.unShift('Geo');
// t.set(3, 'Iftikhar');
// t.insert(2, 'Chachu');
// console.log(t.insert(0, 'Geo'));
// console.log(t.remove(2));
t.reverse();
console.log(t.print());
