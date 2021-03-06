'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const uiEvents = require('./auth/ui.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.signout').on('click', authEvents.onSignOut)
  $('.switch').on('click', uiEvents.onSwitch)
  $('.switch2').on('click', uiEvents.onSwitch2)
  $('#one').on('submit', authEvents.createMusic)
  $('#two').on('submit', authEvents.editMusic)
  $('#show').on('click', authEvents.showMusic)
  $('#edit2').on('click', uiEvents.editOpen)
  $('.createTog').on('click', uiEvents.open)
  $('#create-music').on('submit', authEvents.createMusic)
})
