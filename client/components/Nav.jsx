import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'

function Nav() {
  const user = useSelector((state) => state.user)
  const { loginWithRedirect, logout } = useAuth0()

  function handleLogin(event) {
    event.preventDefault()
    loginWithRedirect()
  }

  function handleLogoff(event) {
    event.preventDefault()
    logout()
  }

  function handleRegister(event) {
    event.preventDefault()
    loginWithRedirect()
  }

  return (
    <nav>

      <section className="text-lg p-3 drop-shadow-xl">

        <IfAuthenticated>
          <section className="flex flex-row justify-evenly">
            <a href="/userprofile" className="nav-link">
              Profile {user.name}
            </a>

            <a href="/" onClick={handleLogoff} className="nav-link">
              Log out
            </a>
          </section>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <section className="flex flex-row justify-evenly">
            <a href="/" onClick={handleLogin} className=" nav-link">
              Sign in
            </a>
            <a href="/" onClick={handleRegister} className=" nav-link">
              Register
            </a>
          </section>
        </IfNotAuthenticated>
      </section>
    </nav>
  )
}

export default Nav
