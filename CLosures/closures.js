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
// console.log(count.increment());
// console.log(count.decrement());

// function counter() {
//     let count = 0;

//     // Defining increment and decrement functions
//     function increment() {
//         count++;
//         console.log(count); // Optional: To see the updated count
//     }

//     function decrement() {
//         count--;
//         console.log(count); // Optional: To see the updated count
//     }

//     // Returning an object containing both increment and decrement methods
//     return { increment, decrement };
// }

// const myCounter = counter(); // Creating a closure
// myCounter.increment(); // Increment the count
// myCounter.increment(); // Increment the count
// myCounter.decrement(); // Decrement the count
// **********************************************************************
// console.log(count--): Logs the value before decrementing, then decrements the value.
// return count--: Returns the value before decrementing, then decrements the value after the return.