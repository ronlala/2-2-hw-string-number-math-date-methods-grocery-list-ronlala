let itemFirst = prompt(" Please enter your first grocery item. ");
let itemFirstanswer = prompt(" How many " + itemFirst "would you like?");
let itemSecond = prompt("Please enter your second grocery item.");
let itemSecondanswer = prompt("How many " + itemSecond + " would you like?");
let itemThird = prompt("Please enter your third grocery item.");
let itemThirdanswer ("How many " + itemThird+ " would you like?");

let totalItems =  (Number(itemFirstanswer) + Number(itemSecondanswer) + Number(itemThirdanswer));
let shoppingList = ("shoppingList " + itemFirstanswer + itemFirst + itemSecondanswer + itemSecond + itemThirdanswer + itemThird);
console.log(shoppingList);

document.getElementById("groceryList").textContent = shoppingList

// part 2///
let tongueTwister = ("How Much would a woodchuck chuck, if the woodchuck could chuck wood").toLocaleLowerCase();
console.log(tongueTwister);
let pangram = ("The quick brown fox jumps over the lazy dog.");
let foxy = panagram.indexOf(16);
console.log(foxy);
let foxesUp = (pangram.charAt(16)).toUpperCase;
console.log(foxesUp);
let anotherPangram = ("The five boxing wizards jump quickly.").charAt(11);
console.log(anotherPangram);
 
