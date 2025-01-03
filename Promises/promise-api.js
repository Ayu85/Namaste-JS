// Promise.all()
// ------------------------------------------------------
// Resolve case
// ------------------------------------------------------

// const p1 = new Promise(resolve => setTimeout(() => resolve('P1 done'), 500))
// const p2 = new Promise(resolve => setTimeout(() => resolve('P2 done'), 500))
// const p3 = new Promise(resolve => setTimeout(() => resolve('P3 done'), 500))

// const r = Promise.all([p1, p2, p3])
//   .then(results => {
//     console.log(results) // ['P1 done', 'P2 done', 'P3 done']
//   })
//   .catch(error => {
//     console.error(error)
//   })
// console.log(r)
// ------------------------------------------------------
// Promise.allsetelled
// ------------------------------------------------------
// const p4 = new Promise(resolve => setTimeout(() => resolve('P1 done'), 2000))
// const p5 = new Promise((resolve, reject) =>
//   setTimeout(() => reject('P2 failed'), 1000)
// )
// const p6 = new Promise(resolve => setTimeout(() => resolve('P3 done'), 2000))

// const r1 = Promise.allSettled([p4, p5, p6])
//   .then(results => {
//     console.log(results) // ['P1 done', 'P2 done', 'P3 done']
//   })
//   .catch(error => {
//     console.error(error)
//   })
// console.log(r1)
// ------------------------------------------------------
// Promise.race
// ------------------------------------------------------
// const p4 = new Promise(resolve => setTimeout(() => resolve('P1 done'), 2000))
// const p5 = new Promise((resolve, reject) =>
//   setTimeout(() => reject('P2 failed'), 1000)
// )
// const p6 = new Promise(resolve => setTimeout(() => resolve('P3 done'), 2000))

// const r1 = Promise.race([p4, p5, p6])
//   .then(results => {
//     console.log(results) // ['P1 done', 'P2 done', 'P3 done']
//   })
//   .catch(error => {
//     console.error(error)
//   })
// console.log(r1)
// ------------------------------------------------------
// Promise.any
// ------------------------------------------------------
const p4 = new Promise((resolve, reject) =>
  setTimeout(() => reject('P1 done'), 3000)
)
const p5 = new Promise((resolve, reject) =>
  setTimeout(() => reject('P2 failed'), 1000)
)
const p6 = new Promise((resolve, reject) =>
  setTimeout(() => reject('P3 done'), 2000)
)

const r1 = Promise.any([p4, p5, p6])
  .then(results => {
    console.log(results) // ['P1 done', 'P2 done', 'P3 done']
  })
  .catch(error => {
    console.error(error)
  })
// console.log(r1)
