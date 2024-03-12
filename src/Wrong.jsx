import React from 'react'

function Wrong() {
  return (
    <div className="screen p-10 flex flex-col gap-3 bg-indigo-950 w-96 h-screen mx-auto items-center justify-center">
      <h1 className='text-center text-sm text-red-500'>Sorry! There is something wrong with the key. Ask for a new Key from Telegram.</h1>

      <button className='bg-blue-600 py-1 px-3 rounded'>Telegram</button>
    </div>
  )
}

export default Wrong