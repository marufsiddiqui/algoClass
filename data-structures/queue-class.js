class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = {};
    this.tail = 0;
    this.head = 0;
  }

  enqueue(value) {
    if (this.count() < this.capacity) {
      this.storage[this.tail++] = value;
      return this.count();
    }
    return new Error("Max capacity reached");
  }

  dequeue() {
    const item = this.storage[this.head];
    delete this.storage[this.head];

    if (this.head < this.tail) {
      this.head++;
    }

    return item;
  }

  peek() {
    return this.storage[this.head];
  }

  count() {
    return Object.keys(this.storage).length;
  }
}

const q = new Queue(5);

console.log(q.enqueue(1));
console.log(q.enqueue(2));
console.log(q.enqueue(3));
console.log(q.enqueue(4));
console.log(q.enqueue(5));
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
