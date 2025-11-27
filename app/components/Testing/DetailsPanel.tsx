import Link from "next/link";
import React from "react";

const DetailsPanel = () => {
  return (
    <div className="py-[60px] px-2 sm:px-20">
      <div
        className="max-w-[1440px] m-auto rounded-lg p-px"
        style={{
          background: "linear-gradient(91deg, #4542E0 5.02%, #14122C 95.9%)",
        }}
      >
        <div className="px-4 sm:px-8 py-6 space-y-6 bg-[#080E34] rounded-lg">
          <h1 className="heading-3 font-normal">Fill out the details below.</h1>
          <div className="grid grid-cols-2 gap-x-3 gap-y-4">
            <input type="text" placeholder="First name" className="input-box" />
            <input type="text" placeholder="Last name" className="input-box" />
            <input
              type="text"
              placeholder="Phone number"
              className="input-box"
            />
            <input
              type="text"
              placeholder="Business email"
              className="input-box"
            />
            <input
              type="text"
              placeholder="Company name"
              className="input-box"
            />
            <input
              type="text"
              placeholder="Company website"
              className="input-box"
            />
            <input type="text" placeholder="Occupation" className="input-box" />
            <input type="text" placeholder="Job/Title" className="input-box" />
            <input type="text" placeholder="Location" className="input-box" />
            <input type="text" placeholder="Address" className="input-box" />
            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                How many number of employees do you have?
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    1-10
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    11-50
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    51-200
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    200-500
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Above 500
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                Which tools, software, or systems your team uses?
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    ERP
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    CRM
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Internal platforms
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Legacy systems
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Others
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                What type of processes do you want to automate?
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Document processing
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Email handling
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    ERP tasks
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Finance workflows
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Others
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                Do you currently use any automation or RPA tools?
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Sometimes
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    No
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Never used any
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                Which deployment type do you prefer?
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    On premise
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Cloud
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Hybrid
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Finance workflows
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Others
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                Does your organization have IT resources?
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Yes, full in house team
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Partial support
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    No internal IT
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                Which MIRYA plans are you using?
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Not using any
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Professional
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Enterprise
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    White labelling
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Start-up plan
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                What is the main outcome you want to achieve with MIRYA?
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Efficiency
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Cost reduction
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Accuracy
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Speed
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                How familiar you are with MIRYA?
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    I am a regular user
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    I have used it occasionally
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    I have never used it
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                How familiar are you with artificial intelligence?
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Actively working with AI
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Have basic understanding
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Not interested in AI
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                How soon do you plan to implement automation?
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Immediately
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Within 3 months
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Within 6 months
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Exploring options
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                How did you hear about MIRYA?
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Referral
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Social media
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Search
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    Other
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2">
              <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                Tell us more about your current challenges or expectations.
              </h1>
              <div>
                <textarea
                  className="border-none outline-none text-[#FFFFFFB2] body-4 w-full"
                  placeholder="Type anything here..."
                ></textarea>
              </div>
            </div>

            <div className="flex items-center gap-1 col-span-2 sm:col-span-1">
              <input type="checkbox" />
              <label className="">
                I agree to the
                <Link
                  href="#"
                  className="text-[#0274FE] text-[16px] leading-5 underline "
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
            <div
              className="rounded-full p-px w-full"
              style={{
                background:
                  "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
              }}
            >
              <Link
                href="#"
                className="font-normal py-2 px-5 rounded-full w-full flex items-center justify-center"
                style={{
                  background: "#00031C",
                  color: "white",
                }}
              >
                Cancel
              </Link>
            </div>
            <div
              className="rounded-full p-px w-full"
              style={{
                background:
                  "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
              }}
            >
              <Link
                href="#"
                className="flex items-center justify-center font-normal py-2 px-5 rounded-full w-full"
                style={{
                  background: "#0274FE",
                  color: "white",
                }}
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPanel;
