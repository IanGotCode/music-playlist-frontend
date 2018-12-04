'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to our server
  // using a HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was successful
    .catch(ui.signUpFailure) // if your request failed
  $(event.target).trigger('reset')
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $(event.target).trigger('reset')
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $(event.target).trigger('reset')
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $(event.target).trigger('reset')
}

const createMusic = function (event) {
  event.preventDefault()
  console.log('This does not work')
  const form = event.target
  const musicData = getFormFields(form)
  api.onCreateMusics(musicData)
    .then(ui.onCreateMusicsSuccess)
    .catch(ui.onCreateMusicsFailure)
  $(event.target).trigger('reset')
}

const editMusic = function (event) {
  event.preventDefault()
  const form = event.target
  const musicData = getFormFields(form)
  api.onEditMusics(musicData)
    .then(ui.onEditMusicsSuccess)
    .catch(ui.onEditMusicsFailure)
  $(event.target).trigger('reset')
}

const showMusic = function (event) {
  event.preventDefault()
  const form = event.target
  const musicData = getFormFields(form)
  api.onShowMusics(musicData)
    .then(ui.onShowMusicsSuccess)
    .catch(ui.onShowMusicsFailure)
  $(event.target).trigger('reset')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  createMusic,
  editMusic,
  showMusic
}
