'use strict'; // 'use strict' is a directive that enables strict mode in JavaScript, which makes your code safer and catches common mistakes!


// function logger () 
// {
//     console.log('like mike');
// }

// // to call functions 
// logger();

// function agecalc (year){
//     const c_age = 2026-year
//     return  `You are ${c_age} years old `
// }

// console.log(agecalc(2003))

const retire = (birthyear ,firstname)=> {
    const age = 2026-birthyear
    const n_age = 65- age
    return `${firstname} is ${n_age} years from retirement `

}

console.log(retire(2006,'Mike'))
console.log(retire(2010,'Rob'))


// tip calculator

const bill = 275
const tip1 = 0.15
const tip2 = 0.2

const tip = 50 <= bill <= 300 ? bill * tip1 : bill *tip2
const messages = `bill: ${bill}
tip: ${tip}
total: ${tip+bill}`

console.log(messages);

const yearsss = new Array(1993,1229,1993,1995);
const friends = ['mike','jphn','rig']

console.log(`${yearsss} ${friends}`)
// indexing arrays start from 0     

const x = friends.length
console.log(x)
console.log(friends[friends.length-1])// getting last index

const calage =  (x) => {
    return `You are ${2026-x} years old `
}

const age1 = calage(yearsss[yearsss.length-1])
console.log(age1)

const people = ['ama','rob','nas','kd']
people.push('ryker') //add element to end
console.log(people)

/*
push() - Add to End
. unshift() - Add to Beginning
pop() - Remove from End
shift() - Remove from Beginning
indexOf() - Find Position
includes() - Check if Exists
slice() - Get Portion (Doesn't Modify Original)
splice() - Remove/Add Elements (Modifies Original)
 map() - Transform Each Element
filter() - Keep Certain Elements    
reduce() - Reduce to Single Value
forEach() - Loop Through Each
find() - Get First Match
sort() - Sort Elements
 */



const calctip = (bills) => {
    
   return 50 <= bills <= 300 ? bills *.15: bills *.20
}


const bills = new Array(555,44,125)
const tips = [calctip(bills[0]),calctip(bills[1]),calctip(bills[2])]
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]

console.log(bills,tips,total)

//objects
const Mike = {
  firstName: "Mike",
  lastName: "Sintim",
  age: 25,
  country: "Ghana",
  profession: "Software Developer",
  skills: ["JavaScript", "Python", "Django", "React"],
  isStudent: false,
  greet() {
    return `Hi, my name is ${this.firstName} ${this.lastName}`;
  }
};




const Mark = {
    name : 'Mark',
    mass :78, 
    height : 1.69, 
    calcBMI : function (){
        this.BMI = ((this.mass)/this.height**2).toFixed(2)
        return this.BMI
    }
}

const John = {
    name : 'John',
    mass :92, 
    height : 1.95,
    calcBMI :  function () {
    this.BMI = ((this.mass)/(this.height**2)).toFixed(2)
    
    return this.BMI } 
}

Mark.calcBMI()
John.calcBMI()

console.log(Mark['BMI']) 
console.log(John['BMI']) 

const qw = Mark['BMI'] > John['BMI'] ?   `Mark miller's ${Mark['BMI']} is greater than John's ${John['BMI']} BMI` :
`John 's ${John['BMI']} is greater than Mark's ${Mark['BMI']} BMI`

console.log(qw)

// loops 

// for (let rep = 1; rep  <= 10; rep++ ){
//     console.log(`I am counting from ${rep} to ten `)
// }

// for ( let i=0 ; ;i++){
//     console.log(Mike[i])
// }

const calctips = (bills) => {
    
    return   (50 <= bills <= 300 )? bills *.15: bills *.20
}


const  bywe = [22,34,55,45,66,23,12,12,44,46];
const tp = [];
const sl = [];

for (let i = 0;i < bywe.length;i++){
    const tipp = calctips(bywe[i]).toFixed(2);
    tp.push(tipp).toFixed(2);
    sl.push(tipp+bywe[i]).toFixed(2);

}

console.log(bywe,tp,sl)
 

const printForecast = (arr) => {
    
}