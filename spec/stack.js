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
      myStack.push('boo')
      myStack.push('foo')
      myStack.push('doo')

      expect(myStack.elements).to.eql(['boo', 'foo', 'doo'])
    })
  })

  context('pop()', () => {
    it('removes element from top of the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('boo')
      myStack.push('blah')
      myStack.pop()
      expect(myStack.elements).to.eql(['foo', 'boo'])
    })

    it('returns element from top of the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('boo')
      myStack.push('blah')

      expect(myStack.pop()).to.equal('blah')
    })

    it('returns null if stack is empty.', () => {
      const myStack = new Stack()

      expect(myStack.pop()).to.be.null
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

    it('returns null if stack is empty.', () => {
      const myStack = new Stack()

      expect(myStack.peek()).to.be.null
    })
  })

  context('isEmpty()', () => {
    it('returns true if stack is empty', () => {
      const myStack = new Stack()

      expect(myStack.isEmpty()).to.be.true
    })

    it('returns false if stack is not empty', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('boo')
      myStack.push('hoo')

      expect(myStack.isEmpty()).to.be.false
    })
  })

  context('length()', () => {
    it('returns number of elements in stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('boo')
      myStack.push('hoo')

      expect(myStack.length()).to.equal(3)
    })

    it('returns length 0 if stack is empty.', () => {
      const myStack = new Stack()

      expect(myStack.length()).to.be.empty
    })
  })
})
