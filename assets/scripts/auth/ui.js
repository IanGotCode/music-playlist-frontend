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
  $('#music').hide()
}


const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#signout').show()
  // $('#signout').show()
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
  $('.signout').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
  $('#change-password2').show()
  $('#create-music').show()
  $('#show').show()
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
  $('.signout').hide()
  $('#create-music').hide()
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
  $('#change-password2').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').hide()
  $('.signout').hide()
  $('#create-music').hide()
  // console.log('signOut ran. Data is :', data)
}

const signOutFailure = error => {
  $('#message').text('Error on signout')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('singOut ran. Error is :', error)
}

const onCreateMusicsSuccess = data => {
  console.log('created successfully')
  $('#message').text('Music Created Successfully.')
}

const onCreateMusicsFailure = error => {
  console.log('created bad', error)
}

const onShowMusicsSuccess = data => {
  data.musics.forEach(music => {
    $('.musicOutput').append(`
      <div class=${music.id}>
      <h4 id=${music.id}>${music.id}</h4>
      </div>`)
    $(`#${music.id}`).css('color', '#01499E')
    for (const key in music) {
      if (key !== 'id' && key !== 'user') {
        $(`.${music.id}`).append(`<h6>${key}: ${music[key]}</h6>`)
        $(`.${music.id}`).css('border', '3px solid black')
        $(`.${music.id}`).css('background', 'rgba(35, 10, 165, 0.8)')
        $(`.${music.id}`).css('box-shadow', '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)')
        $(`.${music.id}`).css('margin', '4px')
      }
    }
  })
}

const onShowMusicsFailure = error => {
  console.log('created bad', error)
}

const editOpen = data => {
  $('.two').show()
  $('.one').hide()
}

const open = data => {
  $('.two').hide()
  $('.one').show()
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
  onSwitch2,
  onCreateMusicsSuccess,
  onCreateMusicsFailure,
  onShowMusicsSuccess,
  onShowMusicsFailure,
  editOpen,
  open
}
