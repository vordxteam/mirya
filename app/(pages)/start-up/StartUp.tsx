import AmIEligible from '@/app/components/StartUp/AmIEligible'
import Decisions from '@/app/components/StartUp/Decisions'
import HeroSection from '@/app/components/StartUp/HeroSection'
import React from 'react'

export default function StartUp() {
  return (
    <div>
      <HeroSection/>
      <Decisions/>
      <AmIEligible/>
    </div>
  )
}
