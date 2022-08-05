//es5
function sum5(x: number, y: number): number {
  return x + y;
}

//es6
const sum6 = (x: number, y: number): number => {
  return x + y;
}

sum6(1,2);

const sumArray = (array: number[]): number => {
  let s = array.reduce((acc, current) => acc + current, 0)
  return s
}

const total = sumArray([1,2,3,4,5,6,7,8,9,10])
console.log(total)

function returnNotging2(): void {
  console.log('asdf?')
}

const returnNothing = () => {
  console.log('I am just saying hello world')
}

console.log('a')
returnNothing()
console.log('b')
returnNotging2()
console.log('b')