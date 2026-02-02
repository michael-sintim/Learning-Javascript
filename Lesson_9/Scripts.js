
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

const[firstBook,secondBook] = books;
// Destructure the books array into a variable called thirdBook. You must skip the first two books.

const[,,thirdBook] = books;

// 
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[,rating],[,ratingsCount]] = ratings

//
const ratingStars = [63405, 1808];
const [fiveStarRatings,oneStarRatings,threeStarRatings=0 ] = ratingStars;

