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
    it('adds an element to the set.', () => {
      set.add('D')

      expect(set.elements).to.eql(['A', 'B', 'C', 'D'])
    })
  })
})


// set.add('D')             //
// set.isEmpty()            // returns true if the set is empty or false if not.
// set.contains('B')        // returns true the set contains the element or false if not.
// set.remove('C')          // removes an element (if it exists) from the set.
// set.forEach(elem => console.log(elem))  // takes a callback function and passes it each element in sequence.
// set.size()               // returns the number of elements in the set.
// set.union(otherSet)      // unions the set with another set and returns the resulting set.
// set.intersect(otherSet)  // intersects the set with another set and returns the resulting set.
// set.difference(otherSet) // returns a set that contains the elements found in the set but not in otherSet.
// set.isSubset(otherSet)   // returns true if the set is a subset of otherSet or false if not.
// set.clone()              // returns a cloned set.
