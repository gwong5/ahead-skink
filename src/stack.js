export default class Stack {
  constructor() {
    this.elements = []
    this.size = 0
  }

  push(element) {
    return this.elements[this.size++] = element
  }
  pop() {
    if (this.size === 0) {
      return null
    } else {
      const removedElement = this.elements[this.size - 1]
      this.size--
      this.elements.splice(this.size, 1)
      return removedElement
    }
  }

  peek() {
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
