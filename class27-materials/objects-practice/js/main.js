// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

// class Contractor {
//     constructor(name, role) {
//         this._name = name
//         this._role = role
//     }
//     get name() {
//         return this._name
//     }
//     get role() {
//         return this._role
//     }
//     sayHello() {
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }

// class Front extends Contractor{
//     constructor(name, role, tech){
//         super(name, role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello() {
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }

// class Back extends Contractor{
//     constructor(name, role, tech) {
//         super(name, role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello() {
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }


// let bob = new Contractor('Bob', 'front end dev')
// let simba = new Front('Simba', "Front-end", 'React')
// let machi = new Back('Machi', "Back-end", "Node")

// let agency = [bob, simba, machi]

// for (person of agency) {
//     person.sayHello()
// }

class RugbyPlayer {
    constructor(name, positionGroup) {
        this._name = name
        this._positionGroup = positionGroup
    }
    tackle() {
        alert(`${this._name} made a tackle!`)
    }
    pass() {
        alert(`${this._name} passed the ball.`)
    }
    get name() {
        return this._name
    }
    get positionGroup() {
        return this._positionGroup
    }
}

let me = new RugbyPlayer("Kody", "Forward")

class Forward extends RugbyPlayer {
    constructor(name, positionGroup, position){
        super(name, positionGroup)
        this._position = position
    }
    get position() {
        return this._position
    }
    scrum() {
        alert(`${this._name} pushes in the scrum`)
    }
}

let kody = new Forward("Kody", "Forward", "Second Row")
let dakota = new Forward("Dakota", "Forward", "Prop")
let jan = new Forward("Jan", "Forward", "Number 8")

let lineup = [kody, dakota, jan]

for (player of lineup) {
    player.scrum()
}