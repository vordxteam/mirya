import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomCheckbox from "../CustomCheckbox";
const DetailsPanel = () => {
  return (
    <div className="px-2 relative sm:px-20">
      <div className="absolute top-24 z-[-1] left-[40%] ">
        <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[71px]"></div>
      </div>
      <div
        className="p-px max-w-[964px] mx-auto rounded-[16px]"
        style={{
          background:
            "linear-gradient(0deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
        }}
      >
        <div className="flex items-start gap-4 px-8 py-6 overflow-hidden bg-[#00031C] rounded-[16px] relative">
          <Image src="/images/reward.png" alt="reward" height={72} width={72} />
          <div className="space-y-3 ">
            <p className="heading-3 font-medium text-[#F4F7FF]">
              Your Rewards for Joining MIRYA User Testing
            </p>
            <p className="heading-6 font-normal max-w-[709px]">
              You’ll receive free access to MIRYA, early access to new features,
              and exclusive discounts on paid plans after completing your user
              test.
            </p>
          </div>
          <div className="absolute top-3 left-50 pointer-events-none z-0">
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[71px]"></div>
          </div>
          <div className="absolute bottom-0 right-0">
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[71px]"></div>
          </div>
        </div>
      </div>
      <div className="py-15">
        <div
          className="max-w-[964px] m-auto  rounded-lg p-px"
          style={{
            background: "linear-gradient(91deg, #4542E0 5.02%, #14122C 95.9%)",
          }}
        >
          <div className="px-4  sm:px-8 py-6 space-y-6 bg-[#080E34] rounded-lg">
            <h1 className="heading-3 font-normal">
              Fill out the details below.
            </h1>
            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
              <input
                type="text"
                placeholder="First name"
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder="Business email"
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder="Company name"
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder="Company website"
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder="Occupation"
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder="Job/Title"
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder="Location"
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <input
                type="text"
                placeholder="Address"
                className="input-box placeholder:text-[#FFFFFFE0]"
              />
              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  How many number of employees do you have?
                </h1>
                <div className="space-y-3">
                  {/* <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id=""  
                      className=" rounded border border-white bg-transparent checked:bg-white checked:border-white focus:outline-none"

                  />
                  <label className="text-[#FFFFFFB2] leading-5 text-[14px]">
                    1-10
                  </label>
                </div> */}
                  <CustomCheckbox label="1-10" />

                  <CustomCheckbox label=" 11-50" />

                  <CustomCheckbox label="  51-200" />

                  <CustomCheckbox label="  200-500" />
                  <CustomCheckbox label="   Above 500" />
                </div>
              </div>

              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  Which tools, software, or systems your team uses?
                </h1>
                <div className="space-y-3">
                  <CustomCheckbox label=" ERP" />

                  <CustomCheckbox label="  CRM" />

                  <CustomCheckbox label="   Internal platforms" />

                  <CustomCheckbox label="  Legacy systems" />

                  <CustomCheckbox label="  Others" />
                </div>
              </div>

              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  What type of processes do you want to automate?
                </h1>
                <div className="space-y-3">
                  <CustomCheckbox label="   Document processing" />

                  <CustomCheckbox label="  Email handling" />

                  <CustomCheckbox label="  ERP tasks" />

                  <CustomCheckbox label="   Finance workflows" />

                  <CustomCheckbox label="  Others" />
                </div>
              </div>

              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  Do you currently use any automation or RPA tools?
                </h1>
                <div className="space-y-3">
                  <CustomCheckbox label=" Yes" />

                  <CustomCheckbox label=" Sometimes" />

                  <CustomCheckbox label="No" />

                  <CustomCheckbox label="Never used any" />
                </div>
              </div>

              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  Which deployment type do you prefer?
                </h1>
                <div className="space-y-3">
                  <CustomCheckbox label="  On premise" />

                  <CustomCheckbox
                    label="                       Cloud
"
                  />

                  <CustomCheckbox label=" Hybrid" />

                  <CustomCheckbox label="   Finance workflows" />

                  <CustomCheckbox label=" Others" />
                </div>
              </div>

              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  Does your organization have IT resources?
                </h1>
                <div className="space-y-3">
                  <CustomCheckbox label=" Yes, full in house team" />

                  <CustomCheckbox label="  Partial support" />

                  <CustomCheckbox label="  No internal IT" />
                </div>
              </div>

              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  Which MIRYA plans are you using?
                </h1>
                <div className="space-y-3">
                  <CustomCheckbox label=" Not using any  " />

                  <CustomCheckbox label=" Professional" />

                  <CustomCheckbox label=" Enterprise" />

                  <CustomCheckbox label="  White labelling" />

                  <CustomCheckbox label="  Start-up plan" />
                </div>
              </div>

              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  What is the main outcome you want to achieve with MIRYA?
                </h1>
                <div className="space-y-3">
                  <CustomCheckbox label=" Efficiency" />

                  <CustomCheckbox label=" Cost reduction" />

                  <CustomCheckbox label=" Accuracy" />

                  <CustomCheckbox label=" Speed" />
                </div>
              </div>

              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  How familiar you are with MIRYA?
                </h1>
                <div className="space-y-3">
                  <CustomCheckbox label="  I am a regular user" />

                  <CustomCheckbox label=" I have used it occasionally" />

                  <CustomCheckbox label=" I have never used it" />
                </div>
              </div>

              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  How familiar are you with artificial intelligence?
                </h1>
                <div className="space-y-3">
                  <CustomCheckbox label=" Actively working with AI" />

                  <CustomCheckbox label="  Have basic understanding" />

                  <CustomCheckbox label="   Not interested in AI" />
                </div>
              </div>

              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  How soon do you plan to implement automation?
                </h1>
                <div className="space-y-3">
                  <CustomCheckbox label="  Immediately" />

                  <CustomCheckbox label="   Within 3 months" />

                  <CustomCheckbox
                    label="  
                   Within 6 months"
                  />

                  <CustomCheckbox label="  Exploring options" />
                </div>
              </div>

              <div className="rounded-lg border-[#FFFFFF33] border p-4 space-y-4 col-span-2 sm:col-span-1">
                <h1 className="text-[#FFFFFFE0] text-[16px] leading-5">
                  How did you hear about MIRYA?
                </h1>
                <div className="space-y-3">
                  <CustomCheckbox label=" Referral" />

                  <CustomCheckbox label="   Social media" />

                  <CustomCheckbox label="   Search" />

                  <CustomCheckbox label="  Other" />
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

              <CustomCheckbox
                className="col-span-2 sm:col-span-1"
                label={
                  <span className="flex flex-wrap gap-1">
                    <span>I agree to the</span>
                    <Link href="#" className="text-[#0274FE] underline">
                      Privacy Policy
                    </Link>
                    <span>.</span>
                  </span>
                }
              />
            </div>
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
              <div
                className="rounded-full p-px w-full"
                style={{
                  background:
                    "linear-gradient(0deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
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
    </div>
  );
};

export default DetailsPanel;
