import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

const set      = new Set(['A', 'B', 'C'])
const otherSet = new Set(['B', 'C', 'E'])

describe('Set', () => {
  it('exists', () => {
    expect(Set).to.be.a.('function')
  })

  context('add', (element) => {
    it('adds an element to the set without repeating values.', () => {
      set.add('D')
      set.add('A')

      expect(set.elements).to.eql(['A', 'B', 'C', 'D'])
    })
  })

  context('isEmpty', () => {
    it('returns true if the set is empty or false if not.', () => {

      expect(set.isEmpty()).to.be.false
    })
    it('returns false if set is not empty.', () => {
      const mySet = new Set

      expect(mySet.isEmpty()).to.be.true
    })
  })

  context('contains', (element) => {
    it('returns true the set contains the element or false if not.', () => {

      expect(set.contains('B')).to.be.true
    })

    it('returns true the set contains the element or false if not.', () => {

      expect(set.contains('Z')).to.be.false
    })
  })

  context('remove', (element) => {
    it('removes an element (if it exists) from the set.', () => {
      set.remove('C')

      expect(set.elements).to.eql(['A', 'B', 'D'])
    })
  })

  context('forEach', () => {
    it('takes a callback function and passes it each element in sequence.', () => {

    })
  })

  context('size', () => {
    it('returns the number of elements in the set.', () => {

      expect(set.size()).to.equal(3)
    })
  })

  context('')
})


// set.add('D')             //
// set.isEmpty()            //
// set.contains('B')        //
// set.remove('C')          //
// set.forEach(elem => console.log(elem))  //
// set.size()               //
// set.union(otherSet)      // unions the set with another set and returns the resulting set.
// set.intersect(otherSet)  // intersects the set with another set and returns the resulting set.
// set.difference(otherSet) // returns a set that contains the elements found in the set but not in otherSet.
// set.isSubset(otherSet)   // returns true if the set is a subset of otherSet or false if not.
// set.clone()              // returns a cloned set.
