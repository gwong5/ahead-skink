import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/pQueue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue', (element, priority) => {
    it('adds an element with priority (number) to the back of the queue.', () => {
      const pQueue = new PriorityQueue

      expect(() => pQueue.enqueue('foo', 1))
        .to.alter(() => pQueue.length(), {from: 0, to: 1})
    })

    it('adds an element with priority (number) to the back of the queue.', () => {
      const pQueue = new PriorityQueue
      pQueue.enqueue('foo', 1)
      pQueue.enqueue('blue', 4)
      pQueue.enqueue('boo', 50)
      pQueue.enqueue('floo', 30)

      expect(pQueue.elements).to.eql([
        {data: 'boo', priority: 50 },
        {data: 'floo', priority: 30},
        {data: 'blue', priority: 4},
        {data: 'foo', priority: 1}
      ])
    })
  })

  context('front', () => {
    it('returns the front element (highest priority) in the queue.', () => {
      const pQueue = new PriorityQueue
      pQueue.enqueue('foo', 1)
      pQueue.enqueue('blue', 4)
      pQueue.enqueue('boo', 50)

      expect(pQueue.front()).to.eql({data: 'boo', priority: 50})
    })

    it('returns null if the queue is empty.', () => {
      const pQueue = new PriorityQueue

      expect(pQueue.front()).to.be.null
    })
  })

  context('back', () => {
    it('returns the back element (lowest priority) in the queue.', () => {
      const pQueue = new PriorityQueue
      pQueue.enqueue('foo', 1)
      pQueue.enqueue('blue', 4)
      pQueue.enqueue('boo', 50)

      expect(pQueue.back()).to.eql({data: 'foo', priority: 1})
    })

    it('returns null if the queue is empty.', () => {
      const pQueue = new PriorityQueue

      expect(pQueue.back()).to.be.null
    })
  })

  context('dequeue', () => {
    it('returns and removes the front element (highest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue
      pQueue.enqueue('foo', 1)
      pQueue.enqueue('blue', 4)
      pQueue.enqueue('boo', 50)

      pQueue.dequeue()

      expect(pQueue.elements).to.eql([
        {data: 'blue', priority: 4},
        {data: 'foo', priority: 1}
      ])
    })
  })

  context('isEmpty', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const pQueue = new PriorityQueue

      expect(pQueue.isEmpty()).to.be.true
    })

    it('returns false if queue is not empty.', () => {
      const pQueue = new PriorityQueue
      pQueue.enqueue('bar', 5)
      pQueue.enqueue('b00', 100)

      expect(pQueue.isEmpty()).to.be.false
    })
  })

  context('length', () => {
    it('returns the number of elements in the queue.', () => {
      const pQueue = new PriorityQueue
      pQueue.enqueue('foo', 2)
      pQueue.enqueue('loo', 50)

      expect(pQueue.length()).to.equal(2)
    })

    it('returns 0 if queue is empty.', () => {
      const pQueue = new PriorityQueue

      expect(pQueue.length()).to.be.empty
    })
  })
})
