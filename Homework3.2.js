// 1) Create an object and methods to support the following functionality 
const obj = {
    name : 'Chris',
    getName () {
        return this.name
    },
    setName (val) {
        this.name = val
    }
}; 
obj.setName('John');
console.log(obj.getName());
// obj.setName(‘John’);  
// console.log(obj.getName()); // Should log ‘John’

// 2) Create an object and methods to support the following functionality 
const obj1 = {
    sum: 1,
    setSum (val) {
         this.sum = val
    },
    add(val) {
         this.sum+=val
    },
    getSum() {
        return this.sum
    }
}; 
// obj1.setSum(10);  
// obj1.add(20);  
// console.log(obj1.getSum()); // Should log 30, 10 + 20 = 30
// obj1.setSum(100);
// console.log(obj1.getSum()); // Should log 100,  the sum was set to 100





// 3) Using the constructor function create, an object and methods to support the following functionality 
function Calculator(res) {
    this.result = res 
     this.plus = function (val) {
        this.result =  this.result+val
     };
     this.minus = function (val) {
        this.result =  this.result-val
     };
     this.multiply = function (val) {
        this.result =  this.result*val
     };
     this.multiply = function (val) {
        this.result =  this.result*val
     };
     this.divide = function (val) {
        this.result = this.result/val
     };
     this.getResult = function () {
        return this.result
     };
}
const calculator = new Calculator(0); // Initial result is 0 
// calculator.plus(5); // add 5 to the result 
// calculator.minus(3); // subtract 3 from result 
// calculator.multiply(3); // multiply result by 3
// calculator.divide(2); // divide result on 2
// calculator.getResult() // Returns the result



//4) Using the constructor function, create an object and methods to support the following functionality 
function ProfileInfo() {
      this.setUsername;
      this.setEmail;
      this.setAddress;
      this.setUsername = function (val) {
          this.setUsername = val
      };
      this.getUsername = function () {
          return this.setUsername
      };
      this.setEmail= function (val) {
          this.setEmail = val
      };
      this.getEmail = function () {
         return this.setEmail
     };  
     this.setAddress = function (val) {
        this.setAddress= val 
     };
     this.getAddress = function (val) {
       return this.setAddress
   };
}
// const profileInfo = new ProfileInfo();
// profileInfo.setUsername(‘username’);
// profileInfo.getUsername(‘username’);
// profileInfo.setEmail(‘abc@example.com’);
// profileInfo.getEmail(‘abc@example.com’)
// profileInfo.setAddress(‘The user address’);
// profileInfo.getAddress()




//4.2)
function User() {
   this.name;
   this.age;
   this.ProfileInfo;
   this.setName = function (val) {
       this.name = val
   };
   this.getName = function () {
       return this.name
   };
   this.setAge= function (val) {
       this.age = val
   };
   this.getAge = function () {
      return this.age
  };  
  this.setProfileInfo = function (val) {
     this.ProfileInfo= val 
  };
  this.getProfileInfo = function (val) {
    return this.ProfileInfo
};
}
// const user = new User();
// user.setName(‘John’); 
// user.getName();
// user.setAge(63);
// user.getAge();
// user.setProfileInfo(new ProfileInfo());
// user.getProfileInfo();
