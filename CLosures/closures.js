function counter() {
    let count = 0;
    function increment() {
        return ++count
    }
    function decrement() {
        return --count;
    }
    return { increment, decrement }
}
const count=counter()
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());

