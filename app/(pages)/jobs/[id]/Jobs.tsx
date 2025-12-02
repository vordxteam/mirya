import CurrentOpening from '@/app/components/Jobs/CurrentOpening'
import HeroSection from '@/app/components/Jobs/HeroSetion'
import JobDetails from '@/app/components/Jobs/JobDetails'
import React from 'react'

export default function Jobs() {
  return (
    <div>
     <HeroSection/>
     <JobDetails/>
     <CurrentOpening/>
    </div>
  )
}
