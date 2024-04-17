// console.log('hello world')

const formEl = document.getElementById('form')
console.dir(formEl)

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
})