import assert from "assert"
import narr from "./../dist/index.js"

const testSizes = [1, 100, 5000, 10234]

describe("Narr", () => {
    describe("For Ns of various size", () => {
        it("Should produce arrays of length N", () => {
            testSizes.forEach((n) => {
                const testArr = narr(n)

                assert.equal(testArr.length, n)
            })
        })

        it("Should produce arrays filled with N undefined elements", () => {
            testSizes.forEach((n) => {
                const testArr = narr(n)

                const totalFound = testArr.reduce((carry, x) => {
                    assert.equal(x, undefined)
                    return carry+1
                }, 0)

                assert.equal(totalFound, n)
            })
        })
    })

    describe("For N of zero", () => {
        it("Should produce an array of length zero", () => {
            const testArr = narr(0)

            assert.equal(testArr.length, 0)
        })

        it("Should not have any elements", () => {
            const testArr = narr(0)

            const totalFound = testArr.reduce((carry, x) => {
                return carry+1
            }, 0)

            assert.equal(totalFound, 0)
        })
    })
})

// adding these just to illustrate the difference between narr and sparse arrays
describe("Sparse Arrays", () => {
    describe("For Ns of various size", () => {
        it("Should produce arrays of length N", () => {
            testSizes.forEach((n) => {
                const testArr = new Array(n)

                assert.equal(testArr.length, n)
            })
        })

        // this is the big difference; you can't map/reduce/etc over the arrays created
        // in this way
        it("Should produce arrays without any elements", () => {
            testSizes.forEach((n) => {
                const testArr = new Array(n)

                const totalFound = testArr.reduce((carry, x) => {
                    return carry+1
                }, 0)

                assert.equal(totalFound, 0)
            })
        })
    })
})
