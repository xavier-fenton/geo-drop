import React, { useState, useEffect } from 'react'

import { addMessage } from '../api'
import Error from './Error'
import { useAuth0 } from '@auth0/auth0-react'

// ADD SLICE...

function Form(props) {
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0()
  const [form, setForm] = useState({
    auth0Id: '',
    lat: '',
    long: '',
    msg: '',
  })

  const [error, setError] = useState('')
  const hideError = () => {
    //   error msg config
    setError('')
  }

  useEffect(() => {
    if (!isAuthenticated) {
      setError('Please sign up to post')
    }
  }, [isAuthenticated])

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    await navigator.geolocation.getCurrentPosition((position) => {
      const crd = position.coords
      console.log(`Recorded Form latitude: ${crd.latitude}`)
      console.log(`Recorded Form longitude: ${crd.longitude}`)
      console.log(`More or less: ${crd.accuracy} meters`)

      setForm({
        auth0Id: user.sub,
        lat: crd.latitude,
        long: crd.longitude,
        msg: form.msg,
      })
      console.log(form)
      getAccessTokenSilently()
        .then((token) => {
          return addMessage(
            {
              auth0Id: user.sub,
              msg: form.msg,
              lat: crd.latitude,
              long: crd.longitude,
            },

            token
          )
        })
        .then(() => {
          setForm(
            {
              auth0Id: '',
              lat: '',
              long: '',
              msg: '',
            },

            props.loadMessages(crd)
          )
        })
        .catch((err) => setError(err.message))
      // put all this info to the database upon submission
      // clear the form
    })
    console.log(`this is forminput: ${form}`)
  }

  return (
    <div className="p-6">
      <div className="">
        <div className="text-red" onClick={hideError}>
          {error && <Error />}
        </div>
        <form className="">
          <textarea
            className="w-full p-3 rounded-md border-2 border-blue  placeholder-gray resize-none"
            id="message"
            type="text"
            name="msg"
            rows="4"
            placeholder="Your message..."
            onChange={handleChange}
            value={form.msg}
          ></textarea>

          <div className="flex justify-center px-4 py-2  w-full p-3 my-3 rounded-full border-2 drop-shadow-xl border-blue   text-center btn btn-outline btn-success ">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isAuthenticated}
              className={!isAuthenticated ? 'text-gray-400' : 'text-green'}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Form
