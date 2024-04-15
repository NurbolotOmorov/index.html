// пораметры функции
function addNumber(num1, num2){
    return num1 + num2
}

function subtractNumber(num1, num2){
    return num1 - num2
}
function divideNumber(num1, num2){
    if(num2 !==0){
        return num1 / num2
    }else{
        return 'error'
    }
}

console.log(`сумма - ${addNumber(2, 5)}`)
console.log(`разность - ${subtractNumber(5, 5)}`)
console.log(`часность - ${divideNumber(5, 5)}`)

function  findMaxNum(array){
    var max = array[0]
    for (var num of array){
        if(max < num){
            max = num
        }
    }
    return max
}

console.log(findMaxNum([2,3,4,567,3234]))

// // arrow-function
// var addNum = (n1, n2) => n1 + n2


var sumArray = (array) => {
    var sum = 0
    for (var i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}
console.log(sumArray([1,1,1]))

var object = {
    john: 3000,
    jane:1200,
    tim:5000,
    alice:3500,
}

function calculateTotalSalart(object){
    var totalSalary = 0
    for(var key in object){
        totalSalary += object[key]
    }
    return totalSalary
}

console.log(`total salary - ${calculateTotalSalart(object)}`)

