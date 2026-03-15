
const arrs = [1,2,3];

let [x,y,z] = arrs;
console.log(x,y,z); 

[x,y,z] = [z,x,y]
console.log(x,y,z) 


const sra = [24,34,[11,12]]
const [a,,b] = sra
console.log(a,b)

const [k,,[j,w]] = sra
console.log(k,j,w)

// Assignments 
// Destructure the books array into two variables called firstBook and secondBook.

// const[firstBook,secondBook] = books;
// // Destructure the books array into a variable called thirdBook. You must skip the first two books.

// const[,,thirdBook] = books;

// // 
// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[,rating],[,ratingsCount]] = ratings

// //
// const ratingStars = [63405, 1808];
// const [fiveStarRatings,oneStarRatings,threeStarRatings=0 ] = ratingStars;

//const {title,author,isbn} = book 



const restaurant = {
  name: "Skyline Bistro",

  location: "East Legon, Accra, Ghana",

  categories: ["Italian", "Vegetarian", "Seafood"],

  starterMenu: [
    "Garlic Bread",
    "Bruschetta",
    "Caesar Salad"
  ],

  mainMenu: [
    "Margherita Pizza",
    "Grilled Salmon",
    "Creamy Alfredo Pasta"
  ],

  openingHours: {
    mon: {
      open: "08:00",
      close: "22:00"
    },
    wed: {
      open: "09:00",
      close: "23:00"
    },
    fri: {
      open: "10:00",
      close: "01:00"
    }
  },

  order : function(StarterIndex,mainIndex){
    return [this.starterMenu[StarterIndex], this.mainMenu[mainIndex]]
  }


};

const {name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories)

const {name: restaurantName , openingHours: Hours,categories: 
  n_categories} = restaurant

  // SPREAD ON THE RIGHT HAND SIDE 
const arr = [ 1,3]
const newArr = [1,2,...arr]  // the spread operator
const rest = [...restaurant.mainMenu,'chicken']

console.log(rest)
const menu = [...restaurant.mainMenu,...restaurant.starterMenu]
console.log(menu)

// rest operator 
const [a1,b1,...otherss] = [1,2,3,4,5,6]
console.log(a1,b1,otherss)


const add = (...number) => {
  let sum = 0 ;
  for (let i = 0;i < number.length ; i++){
    sum += number[i]
    
  }console.log(sum)
}

add(2,3,1,3,1)

//for off loop
for (const item of menu) console.log(item)

for (const item of menu.entries()){
  console.log(item)
}

console.log(...menu.entries())

// iterables arrays strings maps and sets and not object

const news = 'michael'
const letters = [...news]
console.log(letters)
// used only when using arrays or pass a value into  a function


const ax = [1,3,...[31,32]]
const [ab,ba,...others] = [11,12,13,15
]
console.log(ab,ba,others)

const r1 = {
  name: 'Capri',
  numGUests: 20,
}

const r2 = {
  name: 'Capri',
  owner: 'me Boi',
}

// the or operator prints the first truthy value 
// or assignment operaor

r1.numGUests ||= 10; // same as r1.numGUests =  r1.numGUests || 10
r1.numGUests ||= 10;

r1.numGUests &&= 'treason';
r2.numGUests &&= 'treason';

// nullish assignment operator
r1.numGUests ??= 10;
r2.numGUests ??= 10;


const days = ['mon','tue','wed','thu','fri','sat','sun'];

for(const day of days){
  const open = restaurant.openingHours[day]?.open || 'closed'
  console.log(`on ${day}, we open at ${open}`);
  
}

//objects keys
const properties = Object.keys(openingHours)
let  openstr =`\nwe are open ${properties.length} days:  `

for (const daye of properties){
  openstr += `${daye}, `;
}
console.log(openstr)

//sets
//.size not .length  ,.add ,.delete 
//sets is used to remove duplicate values 
const n_set = new Set(['Pasta','pizaa','Pasta','pizaa'])



// for 0 , null or '' 
guestsss = 0
const xxx = guestsss ?? 10
console.log(xxx)

console.log(`\n\n---QUIZ----\n\n`)


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1,player2] = game.players
const [gk, ...fieldplayers] = player1
const list_a = [...game.players[0]]
const list_b = [...game.players[1]]
const joined_list  = list_a + list_b
const allPlayers = [...player1 ,...player2]
const substitute = [',Thiago','Coutino','Perisic']
const players1Final = [player1,...substitute]
const {
  odds:{team1,x: draw, team2}

} =game
console.log(players1Final)

const Printgoals = (...playerNames) => {
console.log(`${playerNames}.length goals were scored`)
}

switch (game.odds.team1){
  case 1 : game.odds.team2 > game.odds.team1
  console.log(`${game.odds.team1} will win`);break
 
}

const TeamMostLikelyToWin =  function(){
  console.log(`$`)
}

team1 < team2 && console.log("team one would win ")
team1 > team2 && console.log("team two would win ")


for (const [i,player] of game.scored.entries()){
  console.log(`Goal ${i+1}: ${player}`)
}

const odds =   Object.values(game.odds);
let average = 0 ;
for (const odd of odds){
  average += odd;
  average /= odds.length
  console.log(average)
}

// sets use the has methods (to check for items in a set), add, delete, are all methods
const orders =  new Set(['Pasta','pizza'])

for (const order of orders){
  console.log(order)
}


const render = new Map()
render.set('name','run-off')
render.set(1,'acrra','ghana')
render.set(2,'kumasi','ghana')

console.log(render.get('name'))


const times = 21;


const quiz = new Map([['question','what is your name? '],
  [1,'mike'],
  [2,'joe'],
  [3,'draymod'],
  [4,'bob'],
  ['correct',3],
  [true,'correct'],
  [false,'try again'],
])

console.log(quiz)

// // quiz app
// console.log(quiz.get('question'))

// for (const [key, value] of quiz){
//   if (typeof key === 'number'){
//     console.log(`Answer ${key}: ${value}`)
//   }
// }

// const answer =Number( prompt('Your answer: '))
// console.log(answer)
// if (answer === quiz.get('correct')){
//   console.log(`${quiz.get(true)}`)
// }else {
//    console.log(`${quiz.get(false)}`)
// }


console.log([...quiz])
// challenge 3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const event = [...new Set(gameEvents.values())]
gameEvents.delete(64)
console.log(event)
console.log(`An event happened on average every 9 minutes`)

const  airline  = "Tag Air ghana rig"
const plane  = 'A320'
console.log(plane[0])
console.log(airline.indexOf('r')) // first occurence
console.log(airline.lastIndexOf('r ')) // last occurence
console.log(airline.slice(1)) 
console.log(airline.slice(-1)) // starts counting from the end 
console.log(airline.slice(2,7)) //end value isnt included in the string 
console.log(airline.slice(2,7)) //end value isnt included in the string 
console.log(airline.slice(0,airline.indexOf(' '))) //end value isnt included in the string 
console.log(airline.slice(0,airline.lastIndexOf(' '))) //end value isnt included in the string 

const CHecktMiddleSeat = (seat) => {
// b and e are middle sear
const seats = seat.slice(-1)
if (seat.slice(-1) === 'B' || seat.slice(-1)==='E'){
 console.log("Middlse Seat")
}else {
 console.log('Not Middle Seat')
}
}
CHecktMiddleSeat('11R')

// to capitalize 
const passenger = "joNaS"

const jed = passenger.slice(0,1).toUpperCase()+ passenger.slice(1).toLowerCase()
console.log(jed)

//.trim() is used to remove whitespace
// replace and replaceall(methods) replace('door','gate') and it does just that use the replace
// all for if theres mulitple of the stuff you wanna replace or place the word you wanna replace in eg 
// replace(/door/g,'gate') and the g stands for global


// .includes, . startswith give a boolean output 
console.log('plane'.endsWith('g'))
const str = "hello+world+how+are+you"

console.log(str.split('+').join('8'))


// capitalizing the first letter of each name

const capitlizeName = function(name){
 const nameList = []
const namesplit = name.split(' ')
  for (const n of namesplit){

    const v= nameList.push(n.slice(0,1).toUpperCase()+ n.slice(1).toLowerCase())
    
  }
    const bw = nameList.join(' ')
    return bw
    
 
  }





// console.log(capitlizeName('van van vn'))


// const CamelCase = (word) => {
//   const lists = []
//   const wordsplit = word.split(' ')
//   for (const x of wordsplit){
//     const cc_case = word[0].toLowerCase() + word[-1].toUpperCase()
//     if (word.includes("_")){
//       word.replace('_',"")
      
//     }
//   }

//   return wordsplit
// } 
// console.log(CamelCase('van_dikk'))

// when you want to skip a  function parameter, you must set tha

const flight = 'LH234'
const mike = {
  name :'mike sin',
  passprt : 234548383999,
}

const checkIn = function(flightNum,passenger){
  
const flight = 'LH211'
passenger.name = 'Mr. ' + passenger.name
if (passenger.passprt===234548383999){alert ('checkIn')}
else{
  alert("get yo ass outta here look lass boy")
}
}

//how passing argument wok as a value and as a number
// first clss function vs higer order functionn 

const greet = (gretting) => (name) => console.log(`${gretting} ${name}`)

greet('hey')('denver')

const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  bookings: [],
book(fligtNumber,name){
    console.log( `${name} booked a seat on  ${this.airline} flight ${this.iatacode}${fligtNumber}`);
    this.bookings.push({flight: `${this.iatacode} ${fligtNumber} ${name}`})
}
};

lufthansa.book(249,'jonas themann')
console.log(lufthansa)

const eurowings = {
  airline: 'eurowings',
  iatacode: 'EW',
  bookings: [],

};
const book = lufthansa.book


// book(23, 'sara wilson')// doesnt work

book.call(eurowings,23,'sara wiggins');
console.log(eurowings)

book.call(lufthansa,239, 'Mary cooper')

// bind helps use ot manually set the this keyword 
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
bookEW(23,"lara thamspon ")

const bookEW24 = book.bind(eurowings,24)
bookEW24('miek morgan')


const secureBooking =  function(){
  let   passengerCOunt = 0;
  return function(){
    console.log(`${passengerCOunt} passengers`)
  }
}

const booker = secureBooking()