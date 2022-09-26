import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addMessages } from '../api'
import Error from './Error'

// ADD SLICE...

function Form(props) {
  const token = useSelector((state) => state.user.token)
  const [form, setForm] = useState({
    name: '',
    lat: '',
    long: '',
    msg: '',
  })

  const [error, setError] = useState('')
  const hideError = () => {
    //   error msg config
    setError('')
  }
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
      console.log(token)
      addMessages(
        {
          name: form.name,
          msg: form.msg,
          lat: crd.latitude,
          long: crd.longitude,
        },
        token
      )
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
        .catch((err) => setError(err.message))
      // put all this info to the database upon submission
      // clear the form
    })
  }

  return (

    <div className="p-6">

      <div className="">
        <div className="text-red" onClick={hideError}>
          {error && <Error />}
        </div>
        <form className="">
          <textarea
            className="w-full p-3 rounded-md border-2 border-blue  placeholder-gray resize-none "
            id="message"
            type="text"
            name="msg"
            rows="4"
            placeholder="Your message..."
            onChange={handleChange}
            value={form.msg}
          ></textarea>


          <div className=" p-3 rounded-md content-end  border-2 border-blue">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"

              className="placeholder-gray-300"

              onChange={handleChange}
              value={form.name}
            />

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
