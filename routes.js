const express = require('express')
const router = express.Router()

router.get('/', function(req,res){
    res.render('home')
})

router.get('/blog', function(req,res){
    res.render('blog')
})



// let someArray = [{age: 22},{age: 'hello'},{age: 30},{age: [20]}];



// let result = someArray.filter(function(val){
//     return typeof val.age === 'number';
// })



// let anotherArray = [1,2,3,4,5,6,7]

// let sum = anotherArray.reduce((initial, number) => {
//     return initial + number
// },0);

// let newArray = sum


// console.log(sum)

module.exports = router





