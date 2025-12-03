import GradientButton from '@/app/ui/GradientButton'
import { div } from 'framer-motion/client'
import React from 'react'

export default function JobDetails() {
  return (
    <div className=' pt-5 sm:pt-15 px-3 sm:px-20 max-w-[1440px] mx-auto'>
    <div className=' space-y-12'>
      <div className="space-y-5">
        <h3 className="heading-3 font-medium text-white">Job Description</h3>
            <p className="heading-3 font-normal text-[#FFFFFF99]">As a Senior Software Engineer at MIRYA, you will design, build, and maintain core systems that power our automation intelligence. You’ll collaborate closely with product, design, and infrastructure teams to ship features that are stable, scalable, secure, and intuitive for end-users.</p>
      </div>
      <div className="space-y-8">
        <h3 className="heading-3 font-medium text-white text-start">Key Responsibilities</h3>
        <ul className='list-disc space-y-3 pl-6 text-[#FFFFFFCC] heading-4 font-normal'>
            <li>Architect and develop core platform services, modules, and backend systems</li>
            <li>Implement automation logic, workflow execution engines, and integrations</li>
            <li>Build secure, performant APIs and data structures</li>
            <li>Review code, provide technical guidance, and support junior developers</li>
            <li>Ensure best practices in testing, CI/CD, security, and documentations</li>
            <li>Research emerging technologies relevant to automation, AI, and enterprise operations</li>
        </ul>
      </div>
      <div className="space-y-8">
        <h3 className="heading-3 font-medium text-white text-start">Requirements:</h3>
        <ul className='list-disc space-y-3 pl-6 text-[#FFFFFFCC] heading-4 font-normal'>
            <li>4+ years of professional engineering experience.</li>
            <li>Strong proficiency in modern backend languages (Node.js, Python, Go, or similar).</li>
            <li>Experience with cloud-native environments (Azure, AWS, or GCP).</li>
            <li>Understanding of microservices, distributed systems, and API design.</li>
            <li>Experience working with SQL or NoSQL databases.</li>
            <li>Commitment to clean code, testing strategies, and engineering best practices</li>
        </ul>
      </div>
    </div>
    <div className="py-16 flex justify-center">
        <GradientButton label='Apply for this job' href='/application-form' bgColor='#0274FE' textColor='#FFFFFF' />
    </div>  
    </div>
  )
}
