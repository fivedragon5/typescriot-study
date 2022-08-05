interface Person {
  name: string
  age?: number
}

// &는 Interseciotn 으로 두개 이상의 타입을 합침
type Developer5 = Person & {
  skills: string[]
}

const person5: Person = {
  name: 'ojy'
}

const expert5: Developer = {
  name: 'fad',
  skills: ['js', 'vue'],
}

type People = Person[] // Person[]을 People이라는 타입으로 사용 할 수 있음
const people: People = [person5, expert5];

type auth = 'None' | 'Certification' | 'Subscription' //3개의값만 가능
const authMan: auth = 'Certification'
const authArr: auth[] = ['None', 'Subscription']