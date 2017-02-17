import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', (element) => {
    it('adds an element to the back of the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('poo')
      myQueue.enqueue('boo')

      expect(() => myQueue.enqueue('blue'))
        .to.alter(() => myQueue.length(), { from: 3, to: 4 })
    })

    it('adds an element to the back of the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('poo')
      myQueue.enqueue('boo')
      myQueue.enqueue('blue')

      expect(myQueue.elements).to.eql(['foo', 'poo', 'boo', 'blue'])
    })
  })

  context('dequeue()', () => {
    it('removes the front element in the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('blue')
      myQueue.enqueue('bar')
      myQueue.enqueue('blargh')
      
      myQueue.dequeue()

      expect(myQueue.elements).to.eql(['blue', 'bar', 'blargh'])
    })

    it('returns the front element in the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('blue')
      myQueue.enqueue('bar')
      myQueue.enqueue('blargh')

      expect(myQueue.dequeue()).to.equal('foo')
    })

    it('returns null if queue is empty.', () => {
      const myQueue = new Queue()

      expect(myQueue.dequeue()).to.be.null
    })
  })

  context('front()', () => {
    it('returns element at top of the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('apple')
      myQueue.enqueue('cake')
      myQueue.enqueue('foo')

      expect(myQueue.front()).to.equal('apple')
    })

    it('null queue is empty.', () => {
      const myQueue = new Queue()

      expect(myQueue.front()).to.be.null
    })
  })

  context('back()', () => {
    it('returns element at front of the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('apple')
      myQueue.enqueue('cake')
      myQueue.enqueue('foo')

      expect(myQueue.back()).to.eql('foo')
    })

    it('null queue is empty.', () => {
      const myQueue = new Queue()

      expect(myQueue.back()).to.be.null
    })
  })

  context('isEmpty()', () => {
    it('returns true if queue is empty', () => {
      const myQueue = new Queue()

      expect(myQueue.isEmpty()).to.be.true
    })

    it('returns false if queue is not empty', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('boo')
      myQueue.enqueue('hoo')

      expect(myQueue.isEmpty()).to.be.false
    })
  })

  context('length()', () => {
    it('returns number of elements in queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('boo')
      myQueue.enqueue('hoo')

      expect(myQueue.length()).to.equal(3)
    })

    it('returns 0 if queue is empty.', () => {
      const myQueue = new Queue()

      expect(myQueue.length()).to.be.empty
    })
  })
})
