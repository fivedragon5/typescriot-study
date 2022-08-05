//하나의 인터페이스로 어떤 배열인 경우에도 커버 가능
interface Items<T> {
  list: T[],
}

//Items가 string배열
const items: Items<string> = {
  list: ['a', 'b', 'c']
}

//Items가 number배열
const itemsN: Items<number> = {
  list: [1, 2, 3]
}