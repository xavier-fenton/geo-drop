import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addUser } from '../apis/users'

function Registration() {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    auth0Id: '',
    name: '',
    email: '',
    description: '',
  })

  useEffect(() => {
    setForm({
      auth0Id: user.auth0Id,
      name: user.name,
      email: user.email,
      description: user.description,
    })
    console.log(setForm({}))
  }, [user])

  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  async function handleClick(e) {
    e.preventDefault()
    // registerUser(form, authUser, history.push)
    try {
      await addUser(form)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="h-screen grid place-items-center bg-black">
      <section
        className="flex 
      flex-col items-center"
      >
        <h2 className="text-white pb-2">Set your username...</h2>
        <form className="registration">
          {/* <label className="text-white" htmlFor="auth0Id"></label> */}
          <input
            name="auth0Id"
            value={form.auth0Id}
            onChange={handleChange}
            disabled={false}
          ></input>

          {/* <label className="text-white" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={true}
          ></input>

          <label className="text-white" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled={true}
          ></input>

          <label className="text-white" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            cols={3}
          ></textarea> */}
          <button
            className="p-3 h-4 text-white text-xl"
            type="button"
            onClick={handleClick}
          >
            →
          </button>
        </form>
      </section>
    </div>
  )
}

export default Registration
