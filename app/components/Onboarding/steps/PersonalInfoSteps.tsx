"use client";
import Image from "next/image";
import { StepProps } from "../types";

export const StartStep: React.FC<StepProps> = () => (
  <div className="text-white space-y-10">
    <Image src="/images/miryaLogo.png" alt="Logo" height={32} width={54} />
    <p className="heading-3 font-normal text-[#FFFFFF]">
      Here is some questions about you and your company.
    </p>
  </div>
);

export const Step1: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      1. What's your first name?
    </h2>
    <input
      type="text"
      placeholder="First name"
      value={formData.first_name || ""}
      onChange={(e) => updateFormData("first_name", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.first_name ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.first_name && (
      <p className="text-red-500 text-sm mt-2">{errors.first_name}</p>
    )}
  </div>
);

export const Step2: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      2. What's your last name?
    </h2>
    <input
      type="text"
      placeholder="Last name"
      value={formData.last_name || ""}
      onChange={(e) => updateFormData("last_name", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.last_name ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.last_name && (
      <p className="text-red-500 text-sm mt-2">{errors.last_name}</p>
    )}
  </div>
);

export const Step3: React.FC<StepProps> = ({ formData, updateFormData }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      3. What's your phone number?
    </h2>
    <input
      type="tel"
      placeholder="Phone number"
      value={formData.phone_number || ""}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "");
        updateFormData("phone_number", value);
      }}
      className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
  </div>
);

export const Step4: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="text-white">
    <h2 className="text-2xl heading-3 text-[#FFFFFF] font-normal mb-6">
      4. What's your email address?
    </h2>
    <input
      type="email"
      placeholder="Email"
      value={formData.email || ""}
      onChange={(e) => updateFormData("email", e.target.value)}
      className={`w-full px-4 py-3 bg-transparent border ${
        errors?.email ? "border-red-500" : "border-gray-700"
      } rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
    />
    {errors?.email && (
      <p className="text-red-500 text-sm mt-2">{errors.email}</p>
    )}
  </div>
);
