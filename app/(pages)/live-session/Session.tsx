
import HeroSection from '@/app/components/LiveSession/HeroSection'
import React from 'react'
import CTA from '@/app/Layout/CTA'
import AboutSession from '@/app/components/LiveSession/AboutSession'

export default function Features() {
  return (
    <div>
      <HeroSection/>
     <AboutSession/>
      <div className='pt-[72px]'>
      <CTA />

      </div>
    </div>
  )
}
