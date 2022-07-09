// 1) Make an array of numbers that are doubles of the first array
function doubledNums(arr) {
    return arr.map((val) => val*2);
}
console.log(doubledNums([2, 5, 100]));

// 2) Take an array of numbers and make them strings

function stringItUp(arr){
    return arr.map((val) => val+'');
}
console.log(stringItUp([2, 5, 100])); 

// 3) Capitalize each of an array of names
function capitalizeNames(arr){
    return arr.map((val) => {
        val = val.toLowerCase();
        let firstChar = val.charAt(0).toUpperCase();
     return firstChar + val.slice(1)
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// 4) Make an array of strings of the names

function onlyNames(arr){
    return arr.map((val) => val.name)
}

console.log(onlyNames([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    return arr.map((val) => {
        if(val.age>=18) {
            return `${val.name} can go to The Matrix`
        } else {
            return `${val.name} is underage!!`
        }
    })
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

/* 6)  If the given input is an array of numbers, return the sum of all the positives ones. 
If the array is empty or there aren't any positive numbers, return 0. */
function sumOfPositives (arr) {
    return arr.filter((val) => val > 0).reduce((target,val) => target+val,0)
}
console.log(sumOfPositives([ 1, -4, 12, 0, -3, 29, -150]))

/* 7) Find the difference in age between the oldest and youngest family members, and return their respective 
ages and the age difference.*/
function ageGap (arr) {
    let result = [];
    let minAge = arr.reduce((target,val) => target>val.age? val.age:target,arr[0].age)
    let maxAge = arr.reduce((target,val) => target<val.age? val.age:target,arr[0].age)
    result.push(minAge,maxAge)
    let gap = result.reduce((target,val) => target > val? target-val:val-target)
    result.push(gap)
    return  result
}
console.log(ageGap([
    {
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
]))


/* 8)Count the occurrences of distinct elements in the given 2D array. The given input is an array,
 the elements of which are arrays of strings. The result is an object whose property names are the
 values from the arrays and their value is the number of their occurrences. */
function count (arr) {
    const merged = arr.flat();
    const result = {};
    merged.forEach((val) => {
        result[val] = (result[val] || 0)+1
    })
   return result
}
console.log(count([
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
]))


/*9)Given an array nums of size n, return the majority element. The majority element is the element that appears 
more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.*/
function maxCount(arr) {
    const majorityEl = arr.length / 2;
    let getTheCount = arr.reduce((target, val) => {
      target[val] = (target[val] || 0) + 1
      return target
    }, {})
     let key = Object.keys(getTheCount).filter(function(key) {
         return getTheCount[key] > majorityEl
     })[0];
    return key 
  }
  console.log(maxCount([1, 2, 1, 2, 2, 2, 1]))

  
// 10) gtnel trvats array i miji 3rd amenashate krknvox tive;
function thirdOne(arr) {
    const LIMIT = 2; //counting from 0
    let getTheCount = arr.reduce((target, val) => {
      target[val] = (target[val] || 0) + 1
      return target
    }, {})
    let getTheVal = Object.values(getTheCount).sort((a, b) => a - b).reverse()
     let key = Object.keys(getTheCount).filter(function(key) {
         return getTheCount[key] === getTheVal[LIMIT]
     })[0];
    return key 
  }
  console.log(thirdOne([1,2,3,2,3,1,3,1,3,1,3,5,2,2,2,2]))

/* 11) Given a string s and an array of strings words, determine whether s is a prefix string of words.
 A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some
 positive k no larger than words.length. Return true if s is a prefix string of words, or false otherwise. */

 function findPrefixStr (s,arr) {
    let arrStr = arr.reduce((target,val) => {
         target+=val
        return target 
    },'');
    let result = arrStr.startsWith(s)
    return result?true:false
}
console.log(findPrefixStr('iloveyou',['i', 'love', 'you', 'jolie']))



/* 12) Given an array of objects where objects have the following structure return an array of objects also containing
 a field country, for example if phone number starts with +374 the field country will be Armenia, you can assume that
first 4characters of phoneNumber represent the country, so you can just query them ,the country codes are given below,
you will need to make the names uppercase, also there may or may not be a field relation which will be a string 
representing the name of one of the objects in the array you will need to replace that string with a reference 
to that actual object*/
const phoneCountryCodes = {
    '+374': 'Armenia',
    '+375': 'Somali',
    '+376': 'Russia',
    '+377': 'Hoktemberyan',
}

const arrOfObjects = [

    {
        name: 'sarah',
        age: 32,
        phoneNumber: '+374000000',
        relation: 'nelly'
    },
    {
        name: 'nelly',
        age: 11,
        phoneNumber: '+3750020000',
        relation: 'sarah'
    }
];

const referancetoSarahObject = arrOfObjects[0];
const referanceToNellyObject =  arrOfObjects[1];
function newObj(arr, obj) {
    for(let key in obj) {
        arr.map((val) => {
            if(val.phoneNumber.startsWith(key)) {
                val['country'] = obj[key];
                val.name === 'sarah'?val.relation = referanceToNellyObject: val.relation =referancetoSarahObject
                val.name = val.name.toUpperCase()
                return val;                                           
            }
        })
    }

    return arr
}
console.log(newObj(arrOfObjects, phoneCountryCodes))



