// ex1

// const func1 = (num) => {
//     if (num < 0) return num

//     console.log(num)
//     func1(num - 1)
// }

// func1(6)



// ex2

// const func2 = (str) => {
    
//     const countVowels = (str.match(/[aeiou]/gi) || []).length;
    
//     return countVowels;
// }

// console.log(func2('hello world'));


// ex3

// const func3 = (str) => {

//     return str.reduce((longest, current) => current.length > longest.length ? current : longest);
// }

// const strList = ['transfagarasan', 'brasov', 'bucuresti']
// console.log(func3(strList));


// ex4

const container = document.getElementById('id-test')
console.log(container)
container.textContent = 'something'
container.classList.add('test')
const func = () => console.log('clicked')
container.addEventListener('click', func)
console.log(container)



const container1 = document.getElementsByClassName('class-test')
console.log(container1)
container1[0].textContent = 'written'
container1[0].classList.add('test')
const func1 = () => console.log('clicked')
container1[0].addEventListener('click', func1)
console.log(container1)



const container2 = document.querySelector('#id-test')
console.log(container2)
container2.textContent = 'here'
container2.classList.add('test2')
const func2 = () => console.log('clicked')
container2.addEventListener('click', func2)
console.log(container2)



const container3 = document.querySelectorAll('.class-test')[0]
console.log(container3)
container3.textContent = 'now'
container3.classList.add('test3')
const func3 = () => console.log('clicked')
container2.addEventListener('click', func3)
console.log(container3)