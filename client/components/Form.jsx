import React, { useState, useEffect } from 'react'
import { addMessages, getMessages } from '../api'

// import { addMessage } from '../apiClient'

// ADD SLICE...

function Form(props) {
  const [form, setForm] = useState({
    name: '',
    lat: '',
    long: '',
    msg: '',
  })

  // useEffect(() => {
  //   // console.log(form)
  // }, [form.lat, form.long])

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
        name: form.name,
        lat: crd.latitude,
        long: crd.longitude,
        msg: form.msg,
      })
      addMessages({
        name: form.name,
        msg: form.msg,
        lat: crd.latitude,
        long: crd.longitude,
      })
        .then(() => {
          setForm(
            {
              name: '',
              lat: '',
              long: '',
              msg: '',
            },

            props.loadMessages(crd)
          )
        })
        .catch((err) => {
          console.error(err)
        })
      // put all this info to the database upon submission
      // clear the form
    })
  }

  return (
    <div className="content-container">
      <div className="ramform">
        <h1>Leave your message</h1>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={handleChange}
              value={form.name}
            />
          </div>

          <div>
            <label htmlFor="msg">Your Message</label>
            <input
              type="text"
              name="msg"
              placeholder="Enter Your Message"
              onChange={handleChange}
              value={form.msg}
            />
          </div>

          <div>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Form
