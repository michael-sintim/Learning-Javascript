
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



// 

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
    monday: {
      open: "08:00",
      close: "22:00"
    },
    wednesday: {
      open: "09:00",
      close: "23:00"
    },
    friday: {
      open: "10:00",
      close: "01:00"
    }
  },

  order : function(StarterIndex,mainIndex){
    return [this.starterMenu[StarterIndex], this.mainMenu[mainIndex]]
  }


};

const {name,openingHours,categories} = restaurant
console.log(name,openingHours,categories)