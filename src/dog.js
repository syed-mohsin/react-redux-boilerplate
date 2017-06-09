// @flow

class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Bark Bark, I am ${this.name}`
  }
}

export default Dog
