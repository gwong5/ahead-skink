import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  it('exists', () => {
    expect(Stack).to.be.a('function')
  })


  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.push('foo'))
        .to.alter(myStack.length(), { from: 0, to: 1 })
    })
  })

  context('pop()', () => {
    it('returns and removes element from top of the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('foo')

      expect(() => myStack.pop())
        .to.alter(myStack.length(), { from: 2, to: 1 })
    })
  })

  context('peek()', () => {
    it('returns element at top of the stack.', () => {
      const myStack = new Stack()
      myStack.push('apple')
      myStack.push('cake')
      myStack.push('foo')
      expect(myStack.peek()).to.equal('foo')
    })
  })

  context('isEmpty()', () => {
    it('returns true if stack is empty', () => {
      const myStack = new Stack()

      expect(myStack.isEmpty()).to.equal(true)
    })
  })

  context('length()', () => {
    it('returns number of elements in stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('foo')
      myStack.push('foo')

      expect(myStack.length().to.equal(3))
    })
  })
})
