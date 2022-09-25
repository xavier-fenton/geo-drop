import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'

function Nav() {
  const user = useSelector((state) => state.user)
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  function handleLogin(event) {
    event.preventDefault()
    login()
  }

  function handleLogoff(event) {
    event.preventDefault()
    logout()
  }

  function handleRegister(event) {
    event.preventDefault()
    register()
  }

  return (
    <nav>
      <section className="text-lg p-3 bg-black">
        <IfAuthenticated>
          <p>Hello, {user.name}</p>
          <section className="sign">
            <a href="/" onClick={handleLogoff} className="nav-link">
              Log out
            </a>
          </section>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <section className="flex flex-row justify-evenly">
            <a href="/" onClick={handleLogin} className=" nav-link text-white ">
              Sign in
            </a>
            <a
              href="/"
              onClick={handleRegister}
              className=" nav-link text-white "
            >
              Register
            </a>
          </section>
        </IfNotAuthenticated>
      </section>
    </nav>
  )
}

export default Nav
