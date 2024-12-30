// const api = 'https://api.github.com/users/Ayu85'

// const user = fetch(api)
// user.then((data) => {
//     console.log(data);
// })

// ---------------------------------------------------------------------
// creating a promise
// ---------------------------------------------------------------------

// creating a promise for orders of ecommerce
// const cart = ['pen', 'shoes', 'box']
// const validUser = false
// const promise = new Promise((resolve, reject) => {
//     if (validUser)
//         resolve("promise resolved")
//     reject(new Error("invalid user"))
// })
// console.log(promise);
// promise.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);

// })
// ----------------------------------------------------------------------
const cart = ['pizza', 'chicken 65', 'burger', 'cold drink']
const isValidUser = true
createOrder(cart)
  .then(orderId => {
    console.log(orderId)
    return orderId
  })
  .catch(err => {
    console.log(err)
  })
  .then(orderId => {
    return proceedToPayment(orderId)
  })
  .then(status => {
    console.log(status)
    return status
  })
  .catch(err => {
    console.log(err)
  })
  .then(status => {
    return showSummary(status)
  })
  .then(summary => {
    console.log(summary)
  })
  .catch(err => {
    console.log(err)
  })

function createOrder (cart) {
  const orderId = new Promise((resolve, reject) => {
    if (!isValidUser) reject(new Error('Unauthorosed!!'))
    else resolve('1234')
  })
  return orderId
}
function proceedToPayment (orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) resolve('payment success')
    else reject(new Error('invalid order id'))
  })
}
function showSummary (status) {
  return new Promise((resolve, reject) => {
    if (status) resolve('Order Success...please find details below')
    else reject(new Error('Invalid payment status'))
  })
}
