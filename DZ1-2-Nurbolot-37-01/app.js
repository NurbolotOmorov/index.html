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