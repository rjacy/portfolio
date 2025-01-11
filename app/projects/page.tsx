"use client"

import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import React from 'react'

const Works = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div>
            <Projects />
        </div>
        <div>
            <Contact />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Works