// const radius = [3, 4]
// const calc = (radius) => {
//     const area = []
//     const perimeter = []
//     function getarea() {
//         radius.forEach((r) => {
//             area.push(2.14 * r * r)
//         })
//         return area
//     }
//     function getPer() {
//         radius.forEach((r) => {
//             perimeter.push(2 * 2.14 * r)
//         })
//         return area

//     }
//     return { getPer, getarea }
// }
// const ar = calc(radius) // this returns getPer , getarea
// console.log(ar.getarea());
// console.log(ar.getPer());


// -----------------------------------------------------------------

// ********************REDUCE***********************
// to sum
const arr = [11, 2, 3]
// const sum = arr.reduce((acc, curr) => {
//     acc += curr;
//     return acc
// }, 0)
// console.log(sum);

//to max

const max = arr.reduce((acc, curr) => {
    if (curr > acc)
        acc = curr

    return acc;
}, arr[0])
console.log(max);
