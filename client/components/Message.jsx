import React, { useEffect, useState } from 'react'

export default function Message(props) {
  const [loader, setLoader] = useState(true)

  return (
    <>
      <div className="p-6 hover:drop-shadow-xl ">
        {loader ? (
          <div className="overflow-scroll max-h-80 h-96 text-lg p-6 rounded-md border-2 border-blue bg-gradient-to-r from-gray-100 via-gray-50 to-white">
            <ul>
              {props.messages.map((message, index) => (
                <li key={index} className="break-all">
                  <section className="bg-no-repeat break-normal bg-cover bg-center bg-blue-400 my-3 p-2 text-white  drop-shadow-xl rounded-lg">
                    {`${message.msg}`}
                  </section>

                  <section className="text-gray-400 text-sm">
                    {`${message.name}`}
                  </section>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Searching for messages...</p>
        )}
      </div>
    </>
  )
}
