const logInBtn = document.querySelector('.login')
const registerBtn = document.querySelector('.register')

const logInForm = document.querySelector('.login-form')
const registerForm = document.querySelector('.register-form')

const formBox = document.querySelector('.form-box')
const inline = document.querySelector('.inline')


const register = () => {
    registerBtn.style.background = 'rgb(69, 69, 245)'
    registerBtn.style.borderRadius = '30px'

    logInBtn.style.background = 'transparent'
    inline.style.flexDirection = 'column-reverse'
    formBox.style.height = '480px'
}

const logIn = () => {
    logInBtn.style.background = 'rgb(69, 69, 245)'
    logInBtn.style.borderRadius = '30px'

    registerBtn.style.background = 'transparent'
    inline.style.flexDirection = 'column'
    formBox.style.height = '420px'
}