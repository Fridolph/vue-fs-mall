const EventEmitter = require('events')

class Person extends EventEmitter {
  constructor(name, age) {
    super()
    this.name = name
    this.age = age
    this.growup()
  }

  growup() {
    setInterval(() => {
      this.age++
      this.emit('growup')
    }, 10000)
  }
}

const p1 = new Person('fri', 24)

p1.addListener('growup', function() {
  console.log('growup trigger', p1.age)
})
