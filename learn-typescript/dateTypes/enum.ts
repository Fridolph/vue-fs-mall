enum Gender {Male, Female}
enum httpCode {success = 'success', fail = 'fail'}

class Person {
  _name: string
  _age: number

  constructor(name, age) {
    this._name = name
    this._age = age
  }

  get name(): string {
    return this._name
  }
  set name(name: string) {
    this._name = name
  }

  get age(): number {
    return this._age
  }
  set age(age: number) {
    if (age > 0 && age < 200) {
      this._age = age
    }
  }
}
