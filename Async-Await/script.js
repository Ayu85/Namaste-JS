// const dataPromise = new Promise(resolve =>
//   setTimeout(() => {
//     resolve('promise resolved')
//   }, 1000)
// )

// async function getData () {
//   // using traditional way to handle using then and catch
//   //   dataPromise.then(data => console.log(data))
//   //   console.log("below then");
//   //    -------------------------------------------------------
//   //   using async await new way
//   const data = await dataPromise
//   console.log('below then')
//   console.log('inside async function ', data)
// }
// getData()
// console.log("outside function");
// -----------------------------------------------------
// const p1 = new Promise(resolve =>
//   setTimeout(() => {
//     resolve('promise 1 time 20 sec')
//   }, 20000)
// )

// const p2 = new Promise(resolve =>
//   setTimeout(() => {
//     resolve('promise 1 time 10 sec')
//   }, 10000)
// )
// async function getData () {
//   console.log('inside getdata')

//   const r1 = await p1
//   console.log(r1)

//   const r2 = await p2
//   console.log(r2)
// }

// getData()
// -----------------------------------------------------
const api = 'https://jsonplaceholder.typicode.com/todos?10'

async function getData () {
  //   const data = await fetch(api)
  //   const json = await data.json()
  //   console.log(json)
  fetch(api)
    .then(data => {
      return data.json()
    })
    .then(json => {
      console.log(json)
    })
}
getData()
