//Exercise 1. University
class University {
    constructor() {
        this.teachers = [];
        this.students = [];
    };
    addMember(member) {
        if(member.role === 'teacher') {
            this.teachers.push(member)
        } else if (member.role === 'student') {
            this.students.push(member)
        }
    };
    removeMember(member) {
        if(member.role === 'teacher') {
           this.teachers = this.teachers.filter(el=>{
                if(el.name !== member.name) {
                    return el
                }
            })
        } else if (member.role === 'student') {
            this.students = this.students.filter(el=>{
                if(el.name !== member.name) {
                    return el
                }
            })
        }
    };
    startLesson() {
        this.students.forEach(item => {
            item.energy -= 2
        })
        this.teachers.forEach(item => {
            item.energy -= 5
        })

    };
}
const university = new University()


class UniversityMember {
    constructor(name,age,role,energy=24) {
        this.name = name;
        this.age = age;
        this.role= role;
        this.energy = energy;
    }
    info() {
        return this
    }
}
class Teacher extends UniversityMember{}
class Student extends UniversityMember{}
const teacher1 = new Teacher('Samantha', 34, 'teacher')
const teacher2 = new Teacher('Lori', 26, 'teacher')
const student1 = new Student('Alex', 17, 'student')
const student2 = new Student('Sarah', 17, 'student')








//Exercise 2. CoffeeShop
class CoffeeShop {
    constructor(name,menu = [],orders=[]) {
        this.name = name;
        this.menu = menu;
        this.orders = orders
    }
    addOrder(order) {
        let newConosle = 'This item is currently unavailable!'
        for(let item of this.menu) {
            if(item.name === order) {
                this.orders.push(item)
                newConosle = 'Order added!'
                return newConosle
            }
        }
        return newConosle
    }
    fulfillOrder() {
        if(Object.keys(this.orders).length === 0 ) {
            return 'All orders have been fulfilled!'
        }
       let item = this.orders.shift()
       return `The ${item.name} is ready`
    }
    listOrders() {
        let result = [];
        for(let item of this.orders) {
            result.push(item.name)
        }
       return result
    }
    dueAmount() {
        let price = this.orders.reduce((acc,item) => {
           return acc+=item.price
        },0)
        return `${price}$`
    }
    cheapestItem() {
        let name
        let cheapest = this.menu[0].price
        for(let item of this.menu) {
            if(cheapest>item.price) {
                cheapest = item.price
                name = item.name
            }
        }
        return name
    }
    drinksOnly() {
        let result = []
        for(let item of this.menu) {
            if(item.type === 'drink') {
                result.push(item.name)
            }
        }
        return result
    }
    foodOnly() {
        let result = []
        for(let item of this.menu) {
            if(item.type === 'food') {
                result.push(item.name)
            }
        }
        return result
    }
}
class MenuItems {
    constructor(name,type,price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}
const tiramisu = new MenuItems('Tiramisu', 'food', 5)
const cheescake = new MenuItems('Cheescake', 'food', 6)
const latte = new MenuItems('Latte', 'drink', 2.5)
const raf = new MenuItems('Raf', 'drink', 3)
const capuccino = new MenuItems('Capuccino', 'drink', 2)
const tart = new MenuItems('Straeberry Tart', 'food', 4.5)


let menu = [tiramisu,cheescake,latte,raf,capuccino,tart]
const coffeShop = new CoffeeShop('Maccoli',menu)









//Exercise 3 Abstract class
class Example { 
    constructor(name) {
        if(new.target === Example) {
            throw new Error('You can\'t create an instance with this class!')
        }
        this.name = name
    }
    saySmth() {
        console.log(this.name)
    }
}

class Example2 extends Example {
    constructor (name,age) {
        super(name)
        this.age = age
    }
    sayHi() {
        console.log('Hi')
    }
}






 

//Exercise 4 Class hierarchy
class Character {
    constructor(name,type,health=100,level=1,) {
        if(name.length >= 2 && name.length<=10) {
            this.name = name;
        } else {
            throw new Error ('You name\'s characters should be more 2 and less than 10 ')
        }
        if(type === 'Bowman'||type === 'Swordsman'||type === 'Magician'|| type === 'Undead'||type === 'Zombie'||type === 'Daemon') {
            this.type=type;
         } else {
      throw new Error ('There is no such character')
         }
        this.health=health;
        this.level=level;
        this.attack
        this.defense
    }
    levelUp () {
        if(this.health>0) {
        this.level+=1
        this.attack = this.attack+(this.attack*20)/100
        this.defense = this.defense+(this.defense*20)/100
        this.health = 100
        } else {
            throw new Error ('You cannot increase the level of the deceased')
        }
    }
    damage (points=0) {
        if(this.health>=0) {
            this.health -= points * (1 - this.defense / 100)
        }
    }
}
class Bowerman extends Character {
    constructor(name,type,health=100,level=1){
        super(name,type,health=100,level=1)
        this.attack = 25
        this.defense = 25
    }
}
class Swordsman extends Character {
    constructor(name,type){
        super(name,type)
        this.attack = 40
        this.defense = 10
    }
}
class Magician extends Character {
    constructor(name,type){
        super(name,type)
        this.attack = 10
        this.defense = 40
    }
}
class Undead extends Character {
    constructor(name,type){
        super(name,type)
        this.attack = 25
        this.defense = 25
    }
}
class Zombie extends Character {
    constructor(name,type){
        super(name,type)
        this.attack = 40
        this.defense = 10
    }
}
class Daemon extends Character {
    constructor(name,type){
        super(name,type)
        this.attack = 10
        this.defense = 40
    }
}

const bowman = new Bowerman('Marta','Bowman',)







//Exercise 5. OOP Structure

// City
// Building
// Hospital
// PoliceDepartment
// Car
// PoliceCar
// AmbulanceCar
class City {
    constructor(buildings = [],cars=[]) {
        this.buildings = buildings
        this.cars = cars
    }
    addBuilding(building) {
        this.buildings.push(building)
    }

    addCars(car) {
        this.cars.push(car)
    }
}
class Car {}
class Building extends City{}
class Hospital extends Building{}
class PoliceDepartment extends Building{}
class AmbulanceCar extends Car{}
class PoliceCar extends Car{}







//Exercise 6. TV Class
class TV {
    constructor(brand,channel =1,volume=50) {
        this.brand = brand;
        this.channel=channel;
        this.volume=volume;
    }
    increaseVolume () {
        if(this.volume < 100) {
            this.volume +=1
        } else {
            return 'Already on max volume'
        }
    }
    decreaseVolume () {
        if(this.volume < 100) {
            this.volume -= 1
        } else {
            return 'Already on min volume'
        }
    }
    setChannel(channel) {
        if(channel<50 && channel>0) {
            this.channel = channel
        } 
    }
    reset() {
        this.volume = 50;
        this.channel = 1;
    }
    status() {
        console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`)
    }
}



//Exercise 7. Shopping Cart
class Product {
    constructor(name,type,price) {
        this.name=name;
        this.type=type;
        this.price=price;
    }
}
 class ShoppingCart {
    constructor () {
        this.cart = []
        this.total = 0
    }
    addProduct (product) {
        this.cart.push(product)
    }
    removeProduct(product) {
        this.cart = this.cart.filter(el=>{
            if(el.name !== product.name) {
                return el
            }
        })
    }
    checkForSale () {
       let getCounts = {}
       this.cart.forEach(el=>{
        if(getCounts[el] === undefined) {
            getCounts[el] = 1
        } else {
            getCounts[el]=getCounts[el] += 1
            if(getCounts[el]%4 === 0) {
                this.total -= el.price
            }
        }
       })
       console.log(`${this.total}$`)
    }
    totalPrice () {
        let price = this.cart.reduce((acc,item) => {
            return acc+=item.price
         },0)
         if(this.cart.length >= 5) {
            this.total = price - ((price*10)/100)
            console.log(`${this.total}$`)
         } else {
            this.total = price
            console.log(`${this.total}$`)
         }
    }
    replace(productName,replacementProduct) {
        this.cart.forEach(el=>{
            if(el.name === productName) {
                let target = this.cart.indexOf(el)
                this.cart.splice(target,1,replacementProduct)
            }
        })
    }
 }
 const myCart = new ShoppingCart()

 const bread = new Product('Bread','food',2)
 const water = new Product('Water','drink',3)
 const butter = new Product('Butter','food',6)
 const cola = new Product('Coca Cola','drink',5)
 const cake = new Product('Cheescake','food', 10)