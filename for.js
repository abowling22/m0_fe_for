// As you complete each challenge, RUN THE CODE to ensure it works. You can do this by
// running `node <filepath>`. If you are in this directory, you'd run `node for.js`.
  
// Challenge 1
// Use a for statement to log to the console all even numbers between 25 and 75.

for (var i = 26; i < 75; i+=2) {
  console.log (i)
}

// Challenge 2
// Use a for statement to log to the console a complete sentence stating the weather using the Array below:

var weather_Options = ["sunny", "snowy", "freezing", "partly cloud", "drizzly"];

 for (var i = 0; i < weather_Options.length; i++) {
   console.log("the weather is " + weather_Options[i]);
 }


// // Challenge 3
// // Use a for statement to log to the console only the words that are exactly 3 characters in length
var words = ["car", "bike", "bus", "van", "scooter", "truck", "rv"]

for (var i = 0; i < words.length; i++) {
  if (words[i].length === 3) {  
  console.log("these are the words with 3 characters " + words[i]);
}
  }

// var i = 0; is telling the for loop to start at the 0 index for the array)
// i < words.length; is saying run the for statement as long as i is less than the number of strings in the array
// i++ is telling the for loop to go up by incriments of 1

// if (words [i].length === 3) is saying if the strings in the array words carried through the for statement is equal to 3
// console.log("these are the words with 3 characters " + words[i] is saying then log the text + words found in the for statement that satisify the above conditions

// // 📹 Record yourself live-coding and talking through any ONE of the challenges. 
//   // The recording doesn't have to be the first time you are solving the problem. 
//   // Use technical vocabulary and explain each part to demonstrate your understanding! 
//   // Share the link to your video in your small group channel.

