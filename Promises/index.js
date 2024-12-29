// const api = 'https://api.github.com/users/Ayu85'

// const user = fetch(api)
// user.then((data) => {
//     console.log(data);
// })

// ---------------------------------------------------------------------
// creating a promise
// ---------------------------------------------------------------------

// creating a promise for orders of ecommerce
const cart = ['pen', 'shoes', 'box']
const validUser = false
const promise = new Promise((resolve, reject) => {
    if (validUser)
        resolve("promise resolved")
    reject(new Error("invalid user"))
})
console.log(promise);
promise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);

})
