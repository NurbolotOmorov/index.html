const fileInput = document.querySelector('#file')
const slides = document.querySelector('.slides')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let imgFiles = []
let currentSlide = 0

fileInput.onchange = (e) =>{
    const files = Array.from(e.target.files)
    if (files.length === 0) return alert('файл не выброн')

    imgFiles = imgFiles.concat(files)
    console.log(files, 'fff')
    slides.innerHTML = ''

    imgFiles.forEach((file, index) =>{
        const imgURL = URL.createObjectURL(file)
        const slide = document.createElement('div')
        slide.className = 'slide'
        slide.innerHTML = `<img src="${imgURL}" alt="Slide ${index + 1}">`
        slides.appendChild(slide)
    })
    showSlide(currentSlide)
}

function showSlide(index){
    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide, i) => slide.style.display = i === index ? 'block': 'none')
}


prevButton.addEventListener('click', () =>{
    if (currentSlide > 0){
        currentSlide--
        showSlide(currentSlide)
    }
})

nextButton.addEventListener('click', () =>{
    if (currentSlide<imgFiles.length - 1){
        currentSlide++
        showSlide(currentSlide)
    }
})



//232
//Madam, i'm adam

const isLetter = (letter) => {
    return letter.toUpperCase() !== letter.toLowerCase()
}

const isEqual = (l1, l2) => {
    return l1.toLowerCase() === l2.toLowerCase()
}

const isPalindrom = (str) => {
    let start = 0
    let end = str.length - 1

    while (start < end){
        if (!isLetter(str[start])){
            start++
        }
        if (!isLetter(str[end])){
            end--
            continue
        }
        if (!isEqual(str[start], str[end]))return false
        start++
        end--
    }
    return true
}


console.log(isPalindrom("Madam, i'm adam"))


function generateFibonacci(n) {
    const fibonacci = [0,1,]
    for (let i =2 ; i < n; i++){
        fibonacci[i] = fibonacci[i -1] + fibonacci[i - 2]
    }
    return console.log(fibonacci)
}
generateFibonacci(14)