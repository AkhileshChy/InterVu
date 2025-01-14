import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Lock, Mail } from 'lucide-react'

export default function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isAnimating, setIsAnimating] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsAnimating(true)

    // Wait for animation to complete before navigating
    setTimeout(() => {
      navigate('/')
    }, 1000) // Match this with animation duration
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 to-black flex items-stretch m-0 p-0 overflow-hidden">
      <div className="w-full flex relative">
        {/* Purple diagonal overlay */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-indigo-600 to-purple-700 transform skew-x-12 -translate-x-20"
          animate={isAnimating ? { width: '100%', skewX: 0, translateX: 0 } : {}}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        {/* Left side - Welcome message */}
        <motion.div
          className="w-1/2 flex pr-12 items-center justify-center z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: isAnimating ? 0 : 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-white text-center">
            <motion.h2
              className="text-6xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              JOIN US TODAY!
            </motion.h2>
            <motion.p
              className="text-gray-300 text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Create an account and start your journey with us.
            </motion.p>
          </div>
        </motion.div>

        {/* Right side - Sign Up form */}
        <motion.div
          className="w-1/2 z-10 flex items-center justify-center px-20"
          initial={{ opacity: 1 }}
          animate={{ opacity: isAnimating ? 0 : 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full max-w-md">
            <h2 className="text-5xl font-bold mb-12 text-white">Sign Up</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full bg-gray-800 bg-opacity-40 rounded-lg border border-gray-600 text-white px-4 py-3 pl-10 focus:outline-none focus:border-purple-500 text-lg"
                  placeholder="Username"
                  required
                />
                <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 bg-opacity-40 rounded-lg border border-gray-600 text-white px-4 py-3 pl-10 focus:outline-none focus:border-purple-500 text-lg"
                  placeholder="Email"
                  required
                />
                <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
              </div>

              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-gray-800 bg-opacity-40 rounded-lg border border-gray-600 text-white px-4 py-3 pl-10 focus:outline-none focus:border-purple-500 text-lg"
                  placeholder="Password"
                  required
                />
                <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
              </div>

              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-gray-800 bg-opacity-40 rounded-lg border border-gray-600 text-white px-4 py-3 pl-10 focus:outline-none focus:border-purple-500 text-lg"
                  placeholder="Confirm Password"
                  required
                />
                <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Account
              </motion.button>

              <p className="text-gray-400 text-center text-lg mt-6">
                Already have an account?{' '}
                <Link to='/login' className="text-purple-500 hover:text-purple-400 transition-colors">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

