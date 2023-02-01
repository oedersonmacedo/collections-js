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
console.log(iterator.next());
// expect output: { value: 'Fortran', done: false }

console.log(iterator.next());
// expect output: { value: 'Lisp', done: false }

console.log(iterator.next());
// expect output: { value: 'COBOL', done: false }

console.log(iterator.next());
// expect output: { value: undefined, done: true }
