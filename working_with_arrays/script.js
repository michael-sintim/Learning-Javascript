 'use strict';

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30,200],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// const arr = ['a','b','c','e','f']
// const arr2 = ['v','g','h','y','z']
// console.log([...arr]) // slice starting at this position 
// arr.slice(-1)
// console.log(arr)

// arr.splice(-1)
// console.log(arr)

// console.log([...arr,...arr2]) // or arr.concat(arr2)
// console.log(arr.at(0)) // to find the position instead of arr[0]


const arr1 = ['a','b','c']
console.log(arr1.at(1))

//getting the last element 
console.log(arr1.at(arr1.length-1))
console.log(arr1[arr1.length-1] )
console.log(arr1.at(-1))
// negative index starts counting at the right side of the array 


const movements = [200,400,-400,3000,-650,-150,70,1300]


for  (const[i,movement] of movements.entries() ){
  if (movement > 0){
    console.log(`Movement ${i+1}:You have deposited ${movement}`);

  }else {
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`)
  }
}
 
console.log('--------')
movements.forEach(function (movement,x) // order == , first element, index and array 
{
if (movement > 0){
    console.log(`Movement ${x+1}: You have deposited ${movement}`);

  }else {
    console.log(`Movement ${x+1}: You withdrew ${Math.abs(movement)}`)
  }
}
)
// you cannot break out of a for each loop 



// Elements
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displaymovements = (movements) =>  {
  containerMovements.innerHTML = ''
movements.forEach(function (value,index){
  // console.log(`${index}: ${value} `)
  const type = value > 0 ? 'deposit' : "withdrawal"
  const htmlTemplateLiteral = `
      
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index+1} ${type}</div>
          <div class="movements__value">${value}</div>
          </div>
        `

        containerMovements.insertAdjacentHTML('afterbegin',htmlTemplateLiteral)
})
}
displaymovements(account2.movements)

const currencies = new Map([
  ['USD','United State dollar'],
  ['CND','Canadian dollar'],
  ['GHS',' Ghana cedi'],
]);

currencies.forEach(function(value,key,map){
console.log(`${key} : ${value}`)
})

// set  
// has no keys and values  