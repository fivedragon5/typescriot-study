interface Person {
  name: string
  age?: number //?: 설정해도 되고 안해되 되는값을 의미
}

interface Developer {
  name: string
  age?: number
  skills: string[]
} //Person과 유사 상속가능

interface DeveloperOfPerson extends Person{
  skills: string[],
}

const person: Person = {
  name: 'fad',
  age: 20
}

const expert: DeveloperOfPerson = {
  name: 'dev',
  skills: ['java','ts'],
}

console.log(expert.name)
console.log(expert.age)
console.log(expert.skills)