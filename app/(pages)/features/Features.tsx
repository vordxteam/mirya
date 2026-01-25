import CoreFeatures from '@/app/components/Features/CoreFeatures'
import OperationalFeatures from '@/app/components/Features/OperationalFeatures'
import FeaturesSection from '@/app/components/Features/FeaturesSection'


import HeroSection from '@/app/components/Features/HeroSection'
import React from 'react'
import CTA from '@/app/Layout/CTA'

export default function Features() {
  return (
    <div>
      <HeroSection/>
      <CoreFeatures/> 
      <OperationalFeatures />
      <FeaturesSection />
      <div className='pt-[72px]'>
      <CTA />

      </div>
    </div>
  )
}
