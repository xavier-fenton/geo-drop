import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

// eslint-disable-next-line import/no-unresolved
import config from './auth_config.json'

import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain="dev-x1yeo0t0.us.auth0.com"
      clientId="W5OBihWdatKJdb2hjl8suKvMbWDOXhti"
      redirectUri={window.location.origin}
      audience="https://geomessenger/api"
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
