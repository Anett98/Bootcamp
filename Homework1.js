//Regular
/* 1) Write a function named makeQuestion, that takes three arguments: two operands and an operator, and returns a string
 with the question "What is [oprd1] [opr] [oprd2]?".*/
 function makeQuestion (operand1, operand2, operator) {
    let result = '';
    result = result + 'What is ' + operand1 + operator + operand2 +' ?' ;
    return result
}
makeQuestion(1,1,'+')

/* 2) Make an object assign 3 different keys to it by 3 different ways that we have learned*/
let ourObject = {};
ourObject.name = 'Sky';
ourObject['age'] = 14;
let newKey = 'hobby';
ourObject[newKey] = 'painting';

/* 3)Find the odd one out in the provided array. All array elements are equal, except one. Your function must return this
 odd one out.*/
 function getTheOdd (arr) {
    let result = [];
    for(let i = 0;i<arr.length;i++) {
        let count = 0;
        for(let j = 0;j<arr.length;j++) {
            if(arr[i] ===arr[j]) {
                count++
            }
        }
        if(count === 1) {
        result.push (arr[i])
    }
    }
    return result.pop()
}
getTheOdd(['a','d','a','a'])

/* 4) Deduce the smallest and the largest number from the supplied numeric array. Return an array containing these 
numbers, smallest number first.*/
function findMaxAndMin  (arr) {
    let result = [];
    let minNum = arr[0];
    let maxNum = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(minNum>arr[i]) {
            minNum = arr[i];
        } 
        if(maxNum< arr[i]) {
            maxNum = arr[i];
        }
    }
    result.push(minNum);
    result.push(maxNum);
    return result
}
findMaxAndMin([2,5,8,31,4,-8])

/* 5)Write a function to separate a single array in to two separate arrays.The supplied array will only contain numeric 
values. Your function should output two arrays:one containing odd numbers, the other containing even numbers.*/
function seperatedArrays (arr) {
    let oddNum = [];
    let evenNum = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]%2) {
            evenNum.push(arr[i]) 
        } else {
            oddNum.push(arr[i])
        }
    }
    console.log(oddNum)
    console.log(evenNum)
}
seperatedArrays([74,55,69,8,3,2,1])

/* 6)In this JavaScript array exercise, the supplied array may contain duplicate values. Write a function to 
return only unique values — values that only occur exactly one time within the provided array.*/
function getUniqueValues (arr) {
    let result = [];
    for(let i = 0;i<arr.length;i++) {
        let count = 0;
        for(let j = 0;j<arr.length;j++) {
            if(arr[i] ===arr[j]) {
                count++
            }
        }
        if(count === 1) {                                     
        result.push (arr[i])
    }
    }
    return result
}
getUniqueValues(['k','l',1,2,3,'k','l',3,2])

/* 7) Your function must accept 2 arrays, then return the common words from each.*/
function commonWords (arr1, arr2) {
    let result = [];
    for(let i = 0; i< arr1.length; i++) {
        for(let j = 0; j<arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                result.push(arr1[i])
            }
        }
    }
    return result
}
commonWords(['Harry','Hermione','Ron','Voldemort'],['Harry','Hermione','Draco','Ron'])

/* 8) Write a function to accept two arrays. Does the first array contain all elements represented in the second array?*/
function doesContain (arr1, arr2) {
    let count = 0;
    for(let i = 0; i< arr2.length; i++) {
        for(let j = 0; j<arr1.length; j++) {
           if(arr2[i] === arr1[j]) {
               count ++
           } else {
               continue;
           }
        }
    }
    if(count === arr2.length) {
        return true
    } else {
        return false
    }
}
doesContain(['cute','beautiful','gorgeous','stunning'],['cute','stunning'])

/* 9)The supplied array will contain both numeric and non-numeric characters. Return a new array where all 
numeric values are positioned at the beginning of the array,*/
function sortingElements (arr) {
    let result = [];
    for(let i = 0;i<arr.length;i++) {
        let random = typeof arr[i];
        if(random === 'number') {
            result.unshift(arr[i])
        } else {
            result.push(arr[i])
        }
    }
    return result;
}
sortingElements(['busy',88,'car',38,49,67,'another random word'])

/* 10)From the first array, construct a new array based on the indexes supplied.*/
function arrayOfElements (arr1,arr2) {
    let sum = 0;
    let result = [];                               
    for(let i = 0; i < arr2.length; i++) {
        for(let j = 0;j<arr1.length; j++) {
            if(arr2[i] === j) {
                result.push(arr1[j])
            }
        }
    }
    return result 
}
arrayOfElements(['Armenia','Germany','France','UK','China','South Korea'],[0,3,4,5])

/* 11)This one is a classic. Simply reverse the string without using reverse().*/
function reversedString (str) {
    let result = '';
    for(let i = str.length-1; i>=0; i--) {
        result += str[i]
    }
    return result
}
reversedString('music')

//Advanced 
/* 1)grel funkciya vore vorpes argument stanum e erku zangvats, zangvatsneric meke kochvum e strings myuse lookups
 vore kveradardzni array vorum nerarvats klnien te lookup arrayi miji andamneric amen meke qani angam
 ka strings array um*/
 function repeatedElements (strings,lookups) {
    let result = [];
    for(let i =0; i<lookups.length;i++) {
        let count = 0;
        for(let j = 0;j<strings.length;j++) {
            if(lookups[i]===strings[j]) {
                count++;
            } else {
                continue;
            }
        }
        result.push(count)
    }
    return result
}
repeatedElements(['tolma',25,25,'tolma',25],['tolma',25,'macun'])

/* 2)grel funkcia vore kstana vorpes argument array kazmvac 4 hat tvic orinak [1,2,3,4] kveradardzni object vore 
kunena erku hat key voronq klinen hamapatasxanabar arrayum gtnvox tveric 4 ic 3 i amenapoqr 
gumare ev nayev amenamec gumare*/
function getMinAndMax (arr) {
    let result = {};
    let minSum = 0, maxSum=0;
    for (let i = 0; i < arr.length; i++) {
        let min = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
             min = j;
            }
        }
        if (arr[min] != arr[i]) {
            let copy = arr[i];
            arr[i] = arr[min];
            arr[min] = copy;
        }
    }
    for(let a = 0, z = arr.length-1;a<arr.length-1;a++, z--) {
        minSum += arr[a];
        maxSum += arr[z];
    }
    result['minimum Sum'] = minSum;
    result['maximum Sum'] = maxSum;
    return result
}
getMinAndMax([4,2,3,1])

/* 3)Grel funkciya vore kndhuni vorpes argument array vortex klini tver voronq bolore kkrknven erku angam baci mi hatic 
Petka gtnel ev veradardznel ayd chkrknvox tive*/
function notRepeated (arr) {
    let result = [];
    for(let i = 0;i<arr.length;i++) {
        let count = 0;
        for(let j = 0;j<arr.length;j++) {
            if(arr[i] ===arr[j]) {
                count++
            }
        }
        if(count === 1) {                           
        result.push (arr[i])
    }
    }
    return result
}
notRepeated([1,2,3,4,5,4,3,2,1])

/* 4)trvats e qarakusi marix vore baxkacac e tveric petk e aj ankyunagcov hamapatasxanabar tvere gumarel irar*/
function myMatrix(arr) {
    let columnCount = Math.sqrt(arr.length), rowCount = columnCount;
    let mtrx = '', count = 0, sum = 0;
    for(let k = 0; k < columnCount; k++) {
        let row = '';
        for(let l = 0; l<rowCount; l++,count++) {
            row+=arr[count];
            if(k===l) {
                sum+=arr[count]
            }
        }
        mtrx += row + '\n'
    }
    alert(mtrx)
    return sum
}
myMatrix([1,2,3,4,5,6,7,8,9])


//Objects
const payments = [
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe", // Name of the student
      payedAmount: 1600, // Amount payed with this transaction
      year: 2020, // The payment year
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1500,
      year: 2021
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1400,
      year: 2022
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1300,
      year: 2023
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1500,
      year: 2020
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1400,
      year: 2021
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1300,
      year: 2023
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1200,
      year: 2023
    }
   ];
   
//1) Find the max payment
function maxPayment(arr) {
    let maxAmount = arr[0].payedAmount;
    for(let i = 0;i<arr.length;i++) {
     if(maxAmount<arr[i].payedAmount) {
         maxAmount = arr[i].payedAmount
     }   
    }
    return maxAmount
}
maxPayment(payments)

//2) Calculate the sum of all payments
function sumOfPayments(arr) {
    let sum = 0;
    for(let i = 0;i<arr.length;i++) {
     sum+=arr[i].payedAmount  
    }
    return sum
}
sumOfPayments(payments)

//3) Find the count of all payments that are more than 1500
function countOfPayment(arr) {
    let count = 0;
    for(let i = 0;i<arr.length;i++) {
     if(arr[i].payedAmount>=1500)  {
         count++
     }
    }
    return count
}
countOfPayment(payments)

//4) Calculate the average of all payments
function averageOfPayments(arr) {
    let sum = 0;
    let count = 0;
    for(let i = 0;i<arr.length;i++) {
        sum+= arr[i].payedAmount;
         count++;
    }
    return sum/count
}
averageOfPayments(payments)


const evaluations = [
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 70
    },
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 60
    },
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 50
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 60
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 50
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 40
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 45
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 35
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 25
    }
   ];

 //6)  Return  the evaluation record with the lowest evaluation score,
 function lowestMark (arr) {
    let lowestMark = arr[0].score;
    for(let a = 0; a<arr.length;a++) {
        if(lowestMark>arr[a].score) {
         lowestMark=arr[a].score 
        }
    }
    return lowestMark
}
lowestMark(evaluations)

// 7)Return the name of the student who has the lowest evaluation score․
function worstStudent (arr) {
    let studentName;
    let lowestMark = arr[0].score;
    for(let i = 0; i<arr.length; i++) {
        if(lowestMark>arr[i].score) {
            studentName=arr[i].studentName
        }
    }
    return studentName
}
worstStudent(evaluations)

// 8)Return array of students that have any evaluation more than 60․
function arrayOfStudents (arr) {
    let result = [];
    for(let i = 0; i<arr.length;i++) {
       if(arr[i].score >= 60 && !result.includes(arr[i].studentName)) {
           result.push(studentName=arr[i].studentName)
       } 
    }
    return result
}
arrayOfStudents(evaluations)

