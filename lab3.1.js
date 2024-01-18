/*
Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
Remember to commit your solution once it is working.
 
let num = 100;
for(let i = 1; i < num; i++) {
    if(i % 3 === 0) {
        console.log("Fizz");
    }
    else if(i % 5 === 0) {
        console.log("Buzz");
    }
    else if(i % 3 ===0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    }
    else{
        console.log(num  + "\n");
    }
}


Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, 
if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
Be careful! If you set n to a number too large, your loop could take a long time to process.
*/


let number = 5;

while(true){
   let isPrime= true;
    number++;
    for(let i = 2; i<=Math.sqrt(number); i++){
        if(number % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(number);
        break;
    }

    
}

/*
Your task is to write a script that accomplishes the following:
Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
You can make the following assumptions:
There will only be 4 cells per row.
There will be no escaped characters other than “\n”.
Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232
*/ 

// Example CSV string
const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n"
+ "1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n"
+"4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n"
+"6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n"
+"9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Split the CSV string into rows
const rows = csvString.split("\n");

// Loop through each row
for (let i = 0; i < rows.length; i++) {
  // Skip empty rows
  if (rows[i].trim() === "") continue;

  // Split the row into cells using comma as a delimiter
  const cells = rows[i].split(",");

  // Log each row of data
  console.log(cells[0], cells[1], cells[2], cells[3]);
}
