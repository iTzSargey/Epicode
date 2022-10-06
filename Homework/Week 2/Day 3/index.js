/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const arrayofnumbers = ["1","2","3","4","5"]
console.log(arrayofnumbers);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const me = {
    firstname: "Jordon",
    secondname: "Sargerson",
    email: "jordonsargerson@btinternet.com",
    age: "28"
};

console.log("Me --->", me);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
me.hasdrivinglicence = true;


/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete me.hasdrivinglicence;

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const me2 = {
    firstname: "Jordon",
    secondname: "Sargerson",
    email: "jordonsargerson@btinternet.com",
    age: "28"
};

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
let cartPrice = 20
let shipping = 10
let totalShoppingCart

totalShoppingCart = cartPrice >= 50 ? cartPrice : cartPrice + shipping

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let cartPrice = 20
let shipping = 10
let totalShoppingCart

totalShoppingCart = sum (cartPrice * 20%)

totalShoppingCart>= 50 ? cartPrice : cartPrice + shipping


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const car = {
    Brand: "Ford",
    Model: "Transit",
    Plate: "WL60 CNY"
}

const car2 = Object.assign({}, car)
car2.Plate; "KG06 YWE";

const car3 = Object.assign({}, car)
car3.Plate; "LY03 FNX";

const car4 = Object.assign({}, car)
car4.Plate; "KE99 PRL";

const car5 = Object.assign({}, car)
car5.Plate; "RT14 IJY";

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const carsForRent = Object.assign (car, car2, car3, car4, car5);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

delete carsForRent; car;car5;

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log ("Info", Brand,Plate);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

const carsForSale = object.assign ({}, car3,)

let totalCars = 

for (let totalcars = 0; totalCars < car.length; totalCars++){
    console.log (totalcars);
    console.log (car[totalCars]);
}

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
console.log ("Car Information:", carsForSale, )