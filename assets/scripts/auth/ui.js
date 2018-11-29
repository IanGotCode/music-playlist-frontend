'use strict'

const store = require('../store.js')

const onSwitch = function () {
  $('#sign-in').toggle()
  $('#sign-up').toggle()
}

const onSwitch2 = function () {
  $('#change-password2').toggle()
  $('#sign-out').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
}


const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').show()
  $('#sign-up').hide()
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = error => {
  $('#message').text('Please Use A Valid E-mail')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
  $('.resetTwo').show()
  // console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = error => {
  $('#message').text('Wrong E-mail or Password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').show()
  $('#change-password').hide()
  // console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#message').text('Old Password is Not Correct')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#message').text('Signed Out')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#sign-out').hide()
  // console.log('signOut ran. Data is :', data)
}

const signOutFailure = error => {
  $('#message').text('Error on signout')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('singOut ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onSwitch,
  onSwitch2
}
