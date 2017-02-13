export default class Stack {
  constructor() {
    this.elements = []
    this.size = 0
  }

  push = (element) => {
    this.elements.push(element)
    this.size ++
  }

  pop = () => {
    this.elements === 0 ? null : this.size --
    this.elements.pop()
  }

  peek = () => this.elements === 0 ? null : this.elements[this.size - 1]

  isEmpty = () => this.size === 0

  length = () => this.size
}
