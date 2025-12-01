import Feedback from '@/app/components/Careers/Feedback'
import HeroSection from '@/app/components/Careers/HeroSection'
import Jobs from '@/app/components/Careers/Jobs'
import LifeAtMirya from '@/app/components/Careers/LifeAtMirya'
import WhyMirya from '@/app/components/Careers/WhyMirya'
import React from 'react'

export default function Careers() {
  return (
    <div>
      <HeroSection/>
      <WhyMirya/>
      <Jobs/>
      <Feedback/>
      <LifeAtMirya/>
    </div>
  )
}
