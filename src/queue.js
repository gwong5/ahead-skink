export default class Queue {
  constructor() {
    this.elements = []
    this.size = 0
  }

  enqueue(element) {
    return this.elements[this.size++] = element
  }

  dequeue() {
    if (this.size === 0) {
      return null
    } else {
      const dequeuedElement = this.elements[0]
      this.elements.splice(0,1)
      return dequeuedElement
    }
  }

  front() {
    if (this.size === 0) {
      return null
    } else {
      return this.elements[0]
    }
  }

  back() {
    if (this.size === 0) {
      return null
    } else {
      return this.elements[this.size - 1]
    }
  }

  isEmpty() {
    return this.size === 0
  }

  length() {
    return this.size
  }
}
