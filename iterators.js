const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});
console.log(onlyNumbers);

//forEach() method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Iterate over fruits below
fruits.forEach(function(fruitItem){
  console.log('I want to eat a ' + fruitItem);
})

// .map() method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(initials => {
  return initials[0];
})
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => {
  return num/100;
})

// .filter() method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const sNumbers = randomNumbers.filter(number => {
   return number < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(element => {
return element.length > 7;
})
