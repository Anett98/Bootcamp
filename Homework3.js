/* 1) As you can see toyota2 does not have a logModel function borrow that function from toyota1 and call it, 
so it console.logs "Toyota Rav4" */
const toyota1 = {
    model: 'Toyota',
    type: 'Camry',
    logModel(){
        console.log(this.model, this.type);
    }
}

const toyota2 = {
    model: 'Toyota',
    type: 'Rav4',
}
toyota1.logModel.call(toyota2)

// 2)  The following code does not work turn it into working code

const flights = {

    flights: [],

    priorityFlights: [],

    scheduleFlight(flight){
        this.flights.push(flight);
    },

    removeFlight(flight){
        this.flights = this.flights.filter(flightFilter.bind(this));
        function flightFilter(f){
            if (flight === f){
                return this.priorityFlights.includes(flight);
            }
            return true
        }
    },

    makePriorityFlight(flight){
        this.priorityFlights.push(flight);
    }

}


flights.scheduleFlight('1');

flights.makePriorityFlight('1');

flights.removeFlight('1')

console.log(flights.flights);


// 3) CarConstructor creates cars but what if someone decides to call it without new keyword,
// write a logic inside the CarConstructor function so it checks if the CarConstructor is called without
// new keyword it logs "please call me with new keyword" if not it creates a car
function CarConstructor(model, year) {
    if (new.target === undefined) {
      return 'Please, call me with new keyword'
    }
    this.mode = model;
    this.year = year;
  }
  let tryIt = CarConstructor('honda', 2015);
  console.log(tryIt)
  tryIt = new CarConstructor('honda', 2015);
  console.log(tryIt)


// 4) Make a new array out of objArr so that every object has the same logName function that is declared below
// use logName function do not create your own
const objArr = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

function logName(){
     console.log(this.name);
}
function add(objArr) {
    return objArr.map(val => {
        val.func = logName
        return val
    })
}
let newObjArr = add(objArr)
console.log(newObjArr[0].func())

// 5)  Use foreach method and use arrayOfObjectNames function to log the fallowing objects names from the array;
const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]

function logArrayObjectNames(){
    console.log(this.name);
}
function logNames (arr) {
    return arr.forEach(val => {
        logArrayObjectNames.call(val)
        return val
    })
}
logNames(arrayOfObjectNames)


// 6) For above mentioned arrayOfObjectNames Return an array of functions that when called would log each objects name
// use Array.map and logArrayObjectNames function
const mappedFunc = arrayOfObjectNames.map( (item) => {
    return logArrayObjectNames.bind(item)
} );
console.log(mappedFunc)

mappedFunc.forEach(i => i());




//7) Please take a look at the following
// please take a look at the the inventory object and implement the missing methods
function CreateCar(id, model, year, color, driveTrain){
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.driveTrain = driveTrain;
}

const inventory = {

    cars: [],

    addCar(car) {
        this.cars.push(car)
    },

    removeCar(id) {
        return this.cars.forEach(val => {
            if(val.id === id) {
                let index = this.cars.indexOf(val)
                this.cars.splice(index,1)
            }
        })
},

listCars(){
    return this.cars
},

listCarsByConditionCallback(conditionCallback){
     for(let el of this.cars) {
         if(conditionCallback(el)) {
             console.log( el)
         }
     }
    
}

}


inventory.addCar(new CreateCar(1, 'Toyota', '1996', 'red', '4x4')); 
inventory.addCar(new CreateCar(2, 'Mercedes', '2000', 'white', 'rear wheel drive'));
inventory.addCar(new CreateCar(3, 'BMW', '2020', 'black', 'rear wheel drive'));
inventory.removeCar(2);
inventory.listCars()
inventory.listCarsByConditionCallback( (car) => car.model === 'BMW' && car.year === '2020' );



// 8) Create a constructor function called Song. Song should take in two arguments, title and artist, which should both be
// added as properties when the Song constructor function is used. The Song function should also have a method called
// play When called, the play function should console.log the name of that specific song preceded by the
// word 'Playing:'.
// NOTE that play function should be the same for all instances of the Song constructor
function Song(artist, title) {
    this.artist = artist;
    this.title = title;
    this.func = function playWhenCalled() {
      console.log(`Playing ${this.title}`)
    }
  
  }
  let songObjs = new Song('Charlie Puth', 'Light Switch')
  console.log(songObjs.func())


// 9) 
// 1. Create a folder called Workshop_4 make a git repository inside.
// 2. without navigating to a different branch create a branch named x_branch


//   SOLUTION!!!!!
//   mkdir Workshop_4  =>  cd Workshop_4  =>  git init  => git commit --allow-empty -m "Empty-Commit" => 
//   git branch x_branch 




// 10)
// 1. Make a new folder called 'Workshop_4'
// 2. make that folder into git repo
// 2. create a branch called rename_me
// 3. create a branch called delete_me
// 4. rename the branch rename_me to renamed_branch
// 5. delete the branch delete_me


// SOLUTION!!!!!
// mkdir Workshop_4  =>  cd Workshop_4  =>  git init  => git commit --allow-empty -m "Empty-Commit" => 
// git branch rename_me => git branch delete_me => git checkout rename_me => git branch -m renamed_branch => git checkout master =>
// git branch -D delete_me




// 11) With a few words explain why this is happening Armenian or English.


const checkKnow = {
    surname: 'surname',
    name: 'checkKnow',
    foo: {
        name: 'foo',
        logName(){
            console.log(this.surname);
        }
    },
    boo(){
        const obj = {
            name: 'boo method',
            check: () => {
                console.log(this.name);
            }
        }
        obj.check();
    }
}


checkKnow.foo.logName();

checkKnow.boo();


/*
If we call checkKnow.foo.logName() it will show undefined. This is because the object where it was called does not 
have a "surname" key. And [this] works in the object before '.'
if we call checkKnow.boo(), the logged name will be 'checkKnow', even if there is a key 'name' with a value of 
'boo method' in the object, where the function is called. That's because the check method is an arrow function(so if it 
was just a simple function declaration it would show 'boo method'). */
