import request from 'superagent'

const rootUrl = '/api/v1'

export function getUsers(token) {
  return request
    .get(rootUrl + '/users')
    .set('authorization', `Bearer ${token}`)
    .then((res) => {
      return res.body.users
    })
}

export function addUser(user) {
  return request.post(rootUrl + '/users').send(user)
}
