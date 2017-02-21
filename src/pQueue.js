export default class PriorityQueue {
  constructor() {
    this.elements = []
    this.size = 0
  }

  enqueue(data, priority) {
    this.elements[this.size++] = {data, priority}
    this.elements.sort((a, b) => {
      return parseFloat(b.priority) - parseFloat(a.priority)
    })
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

  dequeue() {
    if (this.size === 0) {
      return null
    } else {
      const removedElement = this.elements[0]
      this.size--
      this.elements.splice(0,1)
      return removedElement
    }
  }

  isEmpty() {
    return this.size === 0
  }

  length() {
    return this.size
  }
}
