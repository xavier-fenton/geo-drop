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
    <div className="bg-stone-50 relative h-screen">
      <div className="h-screen grid place-items-center">

        <div className="flex flex-col max-w-md drop-shadow-xl px-4 py-8 bg-gray-100 shadow dark:bg-gray-100 sm:px-6 md:px-8 lg:px-10">
          <section className="self-center w-9/12 mb-6">
            <img src="images/12.png" alt="" />
          </section>

          <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-black">
            Complete your registration
          </div>
          <span className="justify-center text-sm text-center text-black-500 flex-items-center dark:text-black-400">
            Already have an account ?
            <a
              href="/"
              className="text-sm text-blue-400 underline hover:text-blue-700"
            >
              Sign in
            </a>
          </span>

          <div className="p-6 mt-8">
            <form action="#">
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="name"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="name"
                    placeholder="Create a Username"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex w-full my-4">
                <button
                  onClick={handleClick}
                  type="register"
                  className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-bluee-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Complete Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
