//Pass by reference in object with function

let originalObj = {
    name: 'Scaler Academy',
    rating: 4.5,
    topic: 'JavaScript'
}

function change(newObj) {
    newObj.rating = 5
}

console.log(originalObj.rating) // 4.5

change(originalObj) // 5
console.log(originalObj.rating) //5

//Pass by reference in array wih function
let originalArr = ['I', 'am', 'practising']

function pushArray(newArr) {
    newArr.push('coding')
    console.log(newArr)
}

console.log(originalArr)
pushArray(originalArr)
console.log(originalArr)
