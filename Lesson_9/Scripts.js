
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