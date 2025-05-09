import React from 'react'
import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div className='font-bold flex flex-col gap-y-5 items-center '>
        <h1 className='text-5xl'>404 - Page non trouvée</h1>
        <p>Nous sommes désolés, mais la page que vous recherchez n'existe pas.</p>
        <Link to="/" className='bg-black text-white rounded-xl px-40 flex justify-center items-center self-center h-15 w-70'>Retour à la page d'accueil</Link>
    </div>
  )
}

export default NotFoundPage
