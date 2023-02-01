function createIterator(...array) {
    let i = 0;
    return {
        next() {
            if (i < array.length) {
                return {
                    value: array[i++],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}
const iterator = createIterator("Fortran", "Lisp", "COBOL");
console.log([...iterator]);
// expect output: TypeError: iterator is not iterable