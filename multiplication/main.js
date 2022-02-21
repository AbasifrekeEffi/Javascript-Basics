var num1 = document.querySelector('#num1')
var num2 = document.querySelector('#num2')
var result = document.getElementById('result')
var submit = document.getElementById('submit')

submit.addEventListener('click', function (e) {
    e.preventDefault()
    num1 = num1.value
    num2 = num2.value
    var add = Number(num1) * Number(num2)
    result.textContent = add
})