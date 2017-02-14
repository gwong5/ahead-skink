export default class Stack {
  constructor() {
    this.elements = []
    this.size = 0
  }

  push = (element) => this.elements[this.size++] = element

  pop = () => this.size == 0 ? null : this.elements[this.size--]

  peek = () => this.size == 0 ? null : this.elements[this.size - 1]

  isEmpty = () => this.size == 0

  length = () => this.size
}
