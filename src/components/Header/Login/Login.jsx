import React from 'react'
import { Link } from 'react-router'
import { FaRegUser } from "react-icons/fa";

const Login = () => {
  return (
    <Link to="/login" className="btn btn-primary flex items-center justify-center font-bold text-[15px] hover:text-primary"><span className="px-3"><FaRegUser /></span>Se connecter</Link>
  )
}

export default Login
