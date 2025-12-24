"use client";
import Image from "next/image";
import GradientButton from "@/app/ui/GradientButton";

export default function Recommended() {
  const reasons = [
    {
      id: 1,
      title: "Automation Discovery Workshop",
      discription:
        "We analyze your business processes, map automation opportunities, and create a clear ROI-driven automation roadmap for your organization.",
      link: "#",
      btnLabel : "Book Session"
    },
    {
      id: 2,
      title: "Automation Center of Excellence (CoE) Setup",
      discription:
        "We help companies establish their own automation team: processes, roles, governance, training, scaling roadmap",
      link: "#",
            btnLabel : "Get Expert Help"

    },
    {
      id: 3,
      title: "Process Recording & Blueprinting",
      discription:
        "We observe and document real user workflows and convert them into automation ready blueprints. A perfect service for companies without in house documentation.",
        btnLabel : "Book Session"
    },
    {
      id: 4,
      title: "Priority Support & Dedicated Success Manager",
      discription:
        "Fastest response times, guaranteed SLAs, and a dedicated success manager who proactively ensures your automations run smoothly and continuously improve. ",
      link: "#",
      btnLabel : "Get Expert Help"
    },
    {
      id: 5,
      title: "MIRYA Proof of Value (4 weeks) ",
      discription:
        "We build a real working automation for your company within 4 weeks. The goal: tangible, measurable results before long-term commitment",
      link: "",
      btnLabel : "Book Session"
    },
  ];
  return (
    <div className=" px-3 sm:px-20 max-w-[1440px] mx-auto relative z-10 bg-[#00031C] overflow-hidden">
      <div className="flex justify-center relative">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </div>
      <div className="flex z-100 bg-[#00031C] flex-col items-center justify-center  pt-15 px-2 md:px-10  relative">
        <div className="absolute top-0 -z-10 pointer-events-none">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/label2.svg" width={78} height={16} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-[20px] text-center">
            Add on Services
          </h1>
          <Image
            src="/images/label.svg"
            width={78}
            height={16}
            alt="line"
          />
        </div>
        <h1 className="heading-1 font-medium w-full text-center max-w-[750px]">
          Additional Recommended Services
        </h1>
      </div>

      <div className=" pt-5 sm:pt-16 pb-10 sm:pb-16 grid sm:grid-cols-2 md:grid-cols-2 gap-6 services-grid">
        {reasons.map((item) => (
          <div
            key={item.id}
            style={{
              background:
                "linear-gradient(280deg, #00031C 16.47%, #686DDD 48.87%, #00031C 78.17%)",
            }}
            className="p-px"
          >
            <div className="p-6 space-y-3 bg-[#0a1560]  h-full overflow-hidden relative rounded-xl">
              <div className="absolute top-6 left-30 -z-10 pointer-events-none">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
              </div>

              <div className="absolute top-0 right-0">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
              </div>

              <div className="space-y-2">
                <h3 className="heading-3 font-semibold  text-[#F4F7FF]">
                  {item.title}
                </h3>
                <p className="heading-6 font-normal text-[#F4F7FF99]">
                  {item.discription}
                </p>
              </div>
              <div className="pt-8 max-w-full w-[169px] inline-flex">
                <GradientButton
                  bgColor="#00031C"
                  textColor="#FFFFFF"
                  label={item.btnLabel}
                  href={(item.link as string) || ""}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
