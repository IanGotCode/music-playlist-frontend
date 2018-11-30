const config = require('../config.js')
const store = require('../store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

const signOut = data => {
  // console.log(store)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onCreateMusics = data => {
  return $.ajax({
    url: config.apiUrl + '/musics',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'POST',
    data
  })
}

const onEditMusics = (data, id) => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/musics/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data
  })
}

const onShowMusics = () => {
  return $.ajax({
    url: config.apiUrl + '/musics',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  onCreateMusics,
  onEditMusics,
  onShowMusics
}
