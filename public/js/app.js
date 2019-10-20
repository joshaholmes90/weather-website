const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const successMessage = document.querySelector('#successMessage')
const errorMessage = document.querySelector('#errorMessage')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    successMessage.textContent = 'Loading...'
    errorMessage.textContent = ''

    const location = search.value

    fetch('http://192.168.0.48:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            errorMessage.textContent = data.error
            successMessage.textContent = ''
        } else {
            errorMessage.textContent = ''
            successMessage.textContent = data.location + ', ' + data.forecast
        }
    })
})

})