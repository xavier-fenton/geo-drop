import { useDispatch, useSelector } from 'react-redux'
// TODO: import useAuth0 function

import { setUser } from './actions/user'
import { useAuth0 } from '@auth0/auth0-react'

// eslint-disable-next-line no-unused-vars
export async function useCacheUser() {
  const dispatch = useDispatch()
  const tokenInRedux = useSelector((state) => Boolean(state.user?.token))

  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

  if (isAuthenticated && !tokenInRedux) {
    try {
      // TODO: call getAccessTokenSilently and replace the token string below
      const token = await getAccessTokenSilently()
      const userToSave = {
        auth0Id: user?.sub,
        email: user?.email,
        token: token,
      }

      dispatch(setUser(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}
