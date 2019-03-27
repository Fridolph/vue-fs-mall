function Age<T extends {new(...args: any[]): {}}>(Ctor: T): T {
  return class Dec2 extends Ctor {
    public age: number = 22
  }
}

@Age
class Dec {
  constructor(
    public name: string,
  ) {
    this.name = name
  }
}

let test1 = new Dec('fri')
console.log('test1: ', test1)
