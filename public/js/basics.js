
/************** 
    VARIABLES 
 **************/

//* what is variable :{ A variable is a container to store data in JavaScript }

//^ Example 1 : let ( changeable variable )

let country  = "Morocco";   // country name 

//* to display or  to show the value of the variable in the console we can use [ console.log()]
//console.log() is a JavaScript function used to print information to the console .
console.log("-------------Example 1 : let ---------------");

console.log(country); // output : Morocco 

country  = "Spain"  // change  the value of the  variable 
console.log(country); // Output : Spain 

//^ Example 2 : const ( constant variable )
console.log("-------------Example 2 : const ---------------");
const schoolName = "LionsGeek School" // the school name is fixed we can't change it 
console.log(schoolName);  // Output : LionsGeek School

//^ Example 3 : var ( old style variable )
console.log("-------------Example 3 : var ---------------");
var age = 21 ; 
console.log(age); // Output : 21

// The console is a special area in your browser or code editor where you can see the output of your code.
/*Why we use it : 
* . To check values of variables 
* . To debug your code 
* . To see results of calculations or messages 
**/
// Try changing values and  logging multiple times to see updates in the console 
console.log("New country :", country); 
console.log("I'm ", age);
age = 20
console.log("New age :" , age ); // the age changed successfully 
console.log("I study at",schoolName);


console.log("--------------Finale example for variables ---------------");
console.log(` I study at ${schoolName} and I am ${age} years old and I'm from ${country}`);


// Summary : 
// - let: changeable variable 
// -const: constant variable 
// - var : old style variable




















