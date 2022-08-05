const merge = (a: any, b: any): any => {
  return {
    ...a,
    ...b,
  }
}

const merged = merge({ foo: 1 }, { bar: 1 })
//merged안에 뭐가 있는지 알 수 없음

//Generic

const mergeG = <A, B>(a: A, b: B): A & B => {
  return {
    ...a,
    ...b
  }
}

const mergedG = mergeG({ foo: 1 }, { bar: 1 })

const wrap = <T>(param: T) => {
  return {
    param
  }
}

const wrapped = wrap(10)