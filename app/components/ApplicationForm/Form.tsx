"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientButton from "@/app/ui/GradientButton";

const Form = () => {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" px-3 sm:px-20">

      <div className="flex flex-col items-center justify-center  pt-10 px-2 md:px-10  relative">
        <div className="absolute top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/left-line.png" width={73} height={8} alt="line" />
          <Link href='/jobs/engineering' className="flex gap-1 items-center z-10">
            <Image src='/images/left-blue.svg' alt="Go back" height={24} width={24} />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
            Go Back
          </h1>
          </Link>
          <Image
            src="/images/right-line.png"
            width={73}
            height={8}
            alt="line"
          />
        </div>
        <h1 className="heading-1 font-medium tracking-[-1.44px] max-w-[972px] w-full text-center pb-3 sm:pb-6">
         Application Form
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-8 text-center max-w-[580px]">
          We're excited to learn more about you! Please fill out the form below with your details, experience, and motivation for joining our team.
        </p>
       

       
      </div>
       <div className="px-4 sm:px-8 py-6 space-y-10 bg-[#080E34] rounded-lg max-w-[1280px] mx-auto">
      <h1 className="text-[25px] sm:text-[32px] font-medium leading-[36px]">Fill out the details below.</h1>
      
      {/* Basic Information Section */}
      <div className="space-y-4">
        <h2 className="heading-3 font-normal">Basic Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First name"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <input
            type="text"
            placeholder="Last name"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <input
            type="email"
            placeholder="Email address"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <input
            type="text"
            placeholder="LinkedIn Link"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <input
            type="text"
            placeholder="GitHub Link"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
        </div>
      </div>

      {/* Experience Section */}
      <div className="space-y-4">
        <h2 className="heading-3 font-normal">Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Years of Experience"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
          <input
            type="text"
            placeholder="Current Company"
            className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFE0] outline-none focus:border-[#0274FE]"
          />
        </div>
      </div>

      {/* Resume Section */}
      <div className="space-y-4">
        <h2 className="heading-3 font-normal">Resume</h2>
        <div 
          className="bg-transparent border border-[#FFFFFF33] rounded-lg px-4 py-8 outline-none focus:border-[#0274FE] cursor-pointer relative overflow-hidden"
          onClick={handleUploadClick}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          {uploadedFile ? (
            <div className="w-full">
              {uploadedFile.startsWith('data:image') ? (
                <Image height={500} width={500} src={uploadedFile} alt="Uploaded resume" className="w-full max-h-[500px] object-contain rounded" />
              ) : (
                <div className="flex items-center justify-center gap-2 text-[#FFFFFFE0]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>File uploaded successfully</span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4">
             <div className="flex gap-2 p-3 bg-[#FFFFFF1F] rounded-xl border border-[#FFFFFF1F]">
                <Image src='/images/upload.png' alt="Upload image" height={20} width={20} />
                <p className="heading-5 font-normal text-white">Upload Resume</p>
             </div>
                <p className="heading-5 font-normal">or drag & drop here</p>
            </div>
          )}
        </div>
      </div>

      {/* Motivation Section */}
      <div className="space-y-4">
        <h2 className="heading-3 font-normal">Motivation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative">
            <textarea
              placeholder="Type anything here..."
              rows={3}
              className="bg-transparent border pt-[52px] border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFB2] outline-none focus:border-[#0274FE] resize-none w-full"
            />
            <p className="text-[#FFFFFFE0] heading-5 font-normal absolute top-3 left-4">What interests you about MIRYA?</p>
          </div>

          <div className="relative">
            <textarea
              placeholder="Type anything here..."
              rows={3}
              className="bg-transparent border pt-[52px] border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFB2] outline-none focus:border-[#0274FE] resize-none w-full"
            />
            <p className="text-[#FFFFFFE0] heading-5 font-normal absolute top-3 left-4">Share a project or achievement you're most proud of</p>
          </div>

          <div className="relative">
            <textarea
              placeholder="Type anything here..."
              rows={3}
              className="bg-transparent border pt-[52px] border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFB2] outline-none focus:border-[#0274FE] resize-none w-full"
            />
            <p className="text-[#FFFFFFE0] heading-5 font-normal absolute top-3 left-4">What is your expected yearly salary for the role?</p>
          </div>

          <div className="relative">
            <textarea
              placeholder="Type anything here..."
              rows={3}
              className="bg-transparent border pt-[52px] border-[#FFFFFF33] rounded-lg px-4 py-3 text-white placeholder:text-[#FFFFFFB2] outline-none focus:border-[#0274FE] resize-none w-full"
            />
            <p className="text-[#FFFFFFE0] heading-5 font-normal absolute top-3 left-4">Tell us briefly about any experience working on automation or AI</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
     
    </div>
    <div className="py-16 flex justify-center items-center">
        <GradientButton label="Submit Application" bgColor="#0274FE" textColor="#FFFFFF" href="#"/>
    </div>
    </div>
  );
};

export default Form;