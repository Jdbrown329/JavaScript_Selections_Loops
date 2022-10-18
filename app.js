console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let n = 0; n<100;n++)
{
 if (n % 2==0) { continue;}
 else{
    console.log(n);
 }
};



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i =1; i<100;i++)
{
if (i%3 == 0 && i % 5 == 0)
{
console.log("FIZZBUZZ");
}
else {
    if (i % 3 == 0) 
    {
        console.log ("Fizz")
    }
    if (i% 5 == 0) {console.log ("BUZZ")}
}
}
// Excercise 3 section
console.log("EXERCISE 3:\n==========\n");
While (n %2 != 0)
{
console.log(n);
}

While ( i%3 ==0 && i %5==0 )
{
    console.log(n,"FIZZBUZZ");
}
//Excercise 4 section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i= 1; i< n; i++)
{
    if (i ==value) 
    {
      console.log("Found VALUE", value)
      break; 
    }
    if (i == n)
    {
        console.log("Did NOT  find value")
    }
}

