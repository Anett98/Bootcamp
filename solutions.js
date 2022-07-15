// 1)
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

// 2)

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


// 3)
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


// 4)
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

// 5
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


// 6
const mappedFunc = arrayOfObjectNames.map( (item) => {
    return logArrayObjectNames.bind(item)
} );
console.log(mappedFunc)

mappedFunc.forEach(i => i());




//7
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



// 8)
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

//   mkdir Workshop_4  =>  cd Workshop_4  =>  git init  => git commit --allow-empty -m "Empty-Commit" => 
//   git branch x_branch 




// 10)
// mkdir Workshop_4  =>  cd Workshop_4  =>  git init  => git commit --allow-empty -m "Empty-Commit" => 
// git branch rename_me => git branch delete_me => git checkout rename_me => git branch -m renamed_branch => git checkout master =>
//  git branch -D delete_me




// 11)


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













