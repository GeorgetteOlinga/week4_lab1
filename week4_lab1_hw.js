//Write a function called minusOne that takes a parameter num. Assuming the argument is a number, print the argument -1.
function minusOne(num){ //parameter is num
    console.log(num-1)
};
let num = 3 
minusOne(num) //this is an argument
// let apple = 10
// minusOne(apple)
// minusOne(99)
// minusOne(3)// i donot have to define the variable all the time
//Write a function make Sentence that takes three parameters and concatenates them into a fully formed sentence.
// print 'Oh boy, do I want chimichangas or what?'
function makeSentence(part1, part2, part3){
       console.log("Oh boy, do  " + part1 + ' ' + part2 + ' ' + part3 + ' or what?')
};

makeSentence("I", "want", "chimichangas")
makeSentence("I", "want", "some tacos")

//==================================================================================================================


let colors = ['red', 'blue', 'green', 'yellow', 'purple']
// console.log(colors[colors.length-1])

//Write a function called getLastElement that takes a parameter arr. Hint: arr[arr.length - 1]-->
//The function should print the last element within the array.
function getLastElement(arr ){
       console.log(arr[arr.length-1])
}

// Invoke means call
//Invoke the function with an array as the argument.
getLastElement([1, 2, 3, 4, 5, 6]);  //6
getLastElement(colors);  //purple

  