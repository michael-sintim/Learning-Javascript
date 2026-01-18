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