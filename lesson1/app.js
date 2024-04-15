console.log('hello world');
var hellotext = 'welcom HTML,CSS,JavaScript,React/redux'
console.log(hellotext)
// var nameAndSurname
var name = 'nurbolot'
var surname = 'omorov'
console.log(name + ' ' + surname);

var number = 45
console.log(number)
var number2 = 2
console.log(number % number2)
console.log(number ** 5)
var result = number / number2
console.log(result.toFixed())

var studentsAge = (23 +16 +17 +17+16+23+14+12+18+22+14+35)/12
console.log(studentsAge)

console.log(5 !== 7)

var login = 'user@gmail.com'
var password= 'user123'

//
// var userlogin= prompt('Enter login')
// var userPassword= prompt('Enter login')
// if (userlogin === login && userPassword === password){
//     alert('Автаризация прошла успешно')
// }else{
//     alert('повторите попытку,введены неправилные данные')
// }
//
// var num1 =number( prompt('num1'))
// var num2 =number( prompt('num2'))
// console.log(num1 + num2)

var userINN = 10823456700758
var innString = String(userINN)[0]
if ((innString === '0' || innString === '1' || innString === '2') && userINN.toString().length === 14){
    console.log('ИНН найден')
}else{
    console.error('ИНН не найден')
}
