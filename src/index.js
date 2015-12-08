export default (n, defaultVal) => {
    const theArray = new Array(n)

    for(let i = 0; i < n; i++) theArray[i] = defaultVal

    return theArray
}
