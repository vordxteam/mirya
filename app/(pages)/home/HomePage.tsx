'use client'
import Demo from '@/app/components/Home/Demo'
import HeroSection from '@/app/components/Home/HeroSection'
import Features from '@/app/components/Home/Features'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Demo/>
      <Features/>
    </div>
  )
}

export default HomePage