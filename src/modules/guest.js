export class guest {
  constructor(name, age, coupled, drink) {
    this.name = name
    this.age = age
    this.coupled = coupled
    this.drink = drink
    this.id = Date.now()
  }
}

export default guest