import narr from "./index.js"

const numFactors = 8

narr(numFactors).reduce((n) => {
    console.time(`Create ${n}`)
    narr(n)
    console.timeEnd(`Create ${n}`)

    return n*10
}, 1)

