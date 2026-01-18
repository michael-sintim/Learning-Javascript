console.log('hello world ')
// alert('hey')


let $function = 'clock it '

const country = 'Ghana';
const continent = 'Africa';
const population = (8000000000 / 2)+1
const isIsland = false ; 
let language;
const description =  country + 'is in ' + continent  `${country}+ 'is in' + "Continent"`
language = 'english'


console.log(country);
console.log(continent);
console.log(population);


console.log(typeof country);
console.log(typeof continent);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof language);

if (population > 6000000)console.log('Ghana has a greater population')
   
console.log(description)

const john_mass = 92 ;
const john_height = 1.95;

const johnBMI = john_mass/ john_height**2


const mark_mass = 78 ;
const mark_height = 1.69;

const markBMI = (mark_mass)/ mark_height**2

const markHigherBMI  = johnBMI > markBMI

console.log(markBMI,johnBMI,markHigherBMI)


console.log(markBMI,johnBMI,markHigherBMI)

if (markBMI>johnBMI){
console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's BMI (${johnBMI.toFixed(2)})`)
}else {
    
console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Markx's BMI (${markBMI.toFixed(1)})`)

}

const firstname = 'Mike '
const x = `I love you ${firstname}, and my self and my ${mark_height}`;
console.log(`i love you `)  // template literals 
console.log('I love you ')

console.log('1. Egge \n\
    2.potato \n\
    3.rice ') // \n\ next line 

// == the same below 

console.log(`1. meat
2.sausage
3 rice `)

age = 11

if (age >= 18){
    console.log('You can drive ')
} else {
    const driving_age = 18 - age
    console.log(`You have ${driving_age} more years  to drive`)
}

const year = 1900

if (year % 4 ==0 &&( year % 400 == 0  || year % 100 !==0)){
    console.log(`${year } is a leap year`)
} else {
    console.log(`${year} is not a leap year`)
}

//type conversions 

const years = "2002" 
console.log(Number(years), years)
console.log(String(233))
// falsy values = 0,'',undefined ,NaN,null
console.log(Boolean(null))

const day =  'monday'

switch (day) {
    case 'monday':
        console.log(`plan course  structure `) 
        break;
    case 'tuesday':
        console.log('work')

} 

console.log(`i am ${90-43} years old `)

