"use client";
import Image from "next/image";
import GradientButton from "@/app/ui/GradientButton";

export default function Services() {
  const reasons = [
    {
      id: 1,
      title: "Process Guardian",
      discription:
        "Process guardian is a hands-on support service where MIRYA experts guide you through designing, building, and optimizing automation workflows tailored to your operations.",
      link: "#",
    },
    {
      id: 2,
      title: "2-Day MIRYA Starter Training",
      discription:
        "A focused, instructor-led training experience designed to help your team master MIRYA in just two days. Ideal for new users, technical teams, and businesses committed to scaling automation across departments.",
      link: "",
    },
    {
      id: 3,
      title: "Compliance & Governance Setup",
      discription:
        "We configure everything the customer needs to run automation safely: user roles, governance model, security & encryption rules, audit logs, versioning, backup & failover design, perfect for public institutions.",
    },
    {
      id: 4,
      title: "2-day MIRYA Expert Training",
      discription:
        "Deep-dive training for power users complex process building, multi-step workflows, decision logic & integrations, scaling automation across departments.Perfect for teams aiming to become fully self-sufficient.",
      link: "#",
    },
    {
      id: 5,
      title: "AI Consulting",
      discription:
        "Your dedicated AI experts provide personal, individualized consulting on how MIRYA and other AI solutions can transform your business. We help you identify automation potential, design AI-driven workflows.",
      link: "",
    },
  ];
  return (
    <div className=" px-3 sm:px-20 max-w-[1440px] mx-auto relative z-10 bg-[#00031C] overflow-hidden">
      <div className="flex justify-center relative">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </div>
      <div className="flex z-100 bg-[#00031C] flex-col items-center justify-center  pt-15 px-2 md:px-10  relative">
        <div className="absolute top-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/label2.svg" width={78} height={16} alt="line" />
          <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-[20px] text-center">
            Services
          </h1>
          <Image
            src="/images/label.svg"
            width={78}
            height={16}
            alt="line"
          />
        </div>
        <h1 className="heading-1 font-medium w-full text-center pb-3 sm:pb-6 max-w-[750px]">
          Professional Services For High Impact Automation
        </h1>
        <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 text-center max-w-[676px]">
          Whether you're launching your first workflow or scaling automation
          across your organization, MIRYA’s specialists provide the expertise
          and support to guide you every step of the way.{" "}
        </p>
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
              <div className="absolute top-6 left-30">
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
              <div className="pt-8 w-[147px]">
                <GradientButton
                  bgColor="#00031C"
                  textColor="#FFFFFF"
                  label="Book Session"
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
