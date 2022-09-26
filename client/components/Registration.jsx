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

    <div className="h-screen grid place-items-center">
      <div class="flex flex-col max-w-md px-4 py-8 bg-gray-100 shadow dark:bg-gray-100 sm:px-6 md:px-8 lg:px-10">
        <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-black">
          Complete your registration
        </div>
        <span class="justify-center text-sm text-center text-black-500 flex-items-center dark:text-black-400">
          Already have an account ?
          <a href="#" target="_blank" class="text-sm text-blue-500 underline hover:text-blue-700">
            Sign in
          </a>
        </span>
        <div class="p-6 mt-8">
          <form action="#">
            <div class="flex flex-col mb-2">
              <div class=" relative ">
                <input type="text" id="name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" placeholder="Pick a cool user name" />
              </div>
            </div>


            <div class="flex w-full my-4">
              <button type="register" class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-bluee-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Complete Registration
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>





    // <div className="h-screen grid place-items-center bg-black">



    //   <section
    //     className="flex
    //   flex-col items-center"
    //   >
    //     <h2 className="text-white pb-2">Set your username...</h2>
    //     <form className="registration">
    //       {/* <label className="text-white" htmlFor="auth0Id"></label> */}
    //       <input
    //         name="auth0Id"
    //         value={form.auth0Id}
    //         onChange={handleChange}
    //         disabled={false}
    //       ></input>

    //       {/* <label className="text-white" htmlFor="name">
    //         Name
    //       </label>
    //       <input
    //         name="name"
    //         value={form.name}
    //         onChange={handleChange}
    //         disabled={true}
    //       ></input>

    //       <label className="text-white" htmlFor="email">
    //         Email
    //       </label>
    //       <input
    //         name="email"
    //         value={form.email}
    //         onChange={handleChange}
    //         disabled={true}
    //       ></input>

    //       <label className="text-white" htmlFor="description">
    //         Description
    //       </label>
    //       <textarea
    //         name="description"
    //         value={form.description}
    //         onChange={handleChange}
    //         cols={3}
    //       ></textarea> */}
    //       <button
    //         className="p-3 h-4 text-white text-xl"
    //         type="button"
    //         onClick={handleClick}
    //       >
    //         →
    //       </button>
    //     </form>
    //   </section>
    // </div>
  )
}

export default Registration
