// var experience = prompt('сколько лет у вас опыта? (в годах)')
// var developerLevel
//
// if (experience > 0 && experience <= 2) {
//     developerLevel = 'junior'
// }else if(experience >= 3 && experience <= 6){
//     developerLevel = 'middle'
//
// }else if(experience >= 7 && experience <= 40){
//     developerLevel = 'senior'
// }else{
//     developerLevel = 'unrev'
// }
//
// console.log(`ваш уровень в праграммирование ${developerLevel}`)
//

//switch..case
//
// var month = 'сентябрь'
//
// switch (month) {
//     case 'декабрь':
//     case 'январь':
//     case 'февраль':
//         console.log('зима')
//         break
//     case 'март':
//     case 'апрель':
//     case 'май':
//         console.log('весна')
//         break
//     default:
//         console.log(error)
// }

//null
//
// var name = null
// console.log(typeof name)
//
//
// //undefined
//
//
// var surname
// console.log(typeof surname)
//
//
// //object
// var courseGeeks= {
//     name: 'Geeks',
//     foundingDate: 2017,
//     address: {
//         street: 'ibraimova',
//         number: 103,
//         building: null
//     },
//     branches: true
// }
// console.log(courseGeeks)
//
// //методы объекта
// console.log(courseGeeks.address.number)
// courseGeeks.corse = 'Geeks'
// delete courseGeeks.corse
// courseGeeks["branches"]= false
// console.log(courseGeeks)
// console.log(Object.keys(courseGeeks))
// console.log(Object.values(courseGeeks))
// console.log(Object.entries(courseGeeks))
// console.log(courseGeeks.hasOwnProperty('foundingDate'))
//
// //array
// var array = [1,2,3,,4,5,6, 'text',null]
// console.log(typeof array)
// console.log(array.length - 1)
// console.log(array[6][2])
// array[78] = 78
// console.log(array[78])
//
// var matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// console.log(matrix[1][1])


// //цыкл for
// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }

// переменные короткого обновление
// var i=1
// i=i+1
// i+=1
// i++

var numbers = [1,2,3,4,5,6,23,45]

for (var i = 0; i < numbers.length; i++){
    console.log(numbers[i]* 2)
}
console.log(numbers)

for (var i = 10; i>= 1; i--){
    console.log(i)
}

var names = ['anna', 'john', 'jack', 'olivia', 'aidar']
var blacklist = [ 'anna','jack']
for (var i = 0; i < name.length; i++){
    if (blacklist.includes(names[i])){
        console.warn(`${names[i]}in blaklist`)
        continue
    }
    console.log(`welcome, dear gguest ${names[i]}`)
}

//for














var color = prompt('ведите цвет светофора(красный,жолтый,зеленый)')
var deveLoperLevel
if (color ==='красный'){
    deveLoperLevel = 'стой!'
}else if(color === "жолтый"){
    deveLoperLevel = "жди!"
}else if(color === "зеленый"){
    deveLoperLevel = "иди!"
}else{
    deveLoperLevel = 'пишите только "красный,жолтый или зеленый"'
}
console.log(`знак светофора ${deveLoperLevel}`)