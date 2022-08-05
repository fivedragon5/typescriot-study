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
  let sum = 0
  array.forEach(a => {
    sum += a
  });
  return sum;
}

const total = sumArray([1,2,3,4,5,6,7,8,9,10])
console.log(total)