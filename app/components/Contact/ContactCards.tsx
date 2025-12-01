import Link from "next/link";
import React from "react";

const ContactCards = () => {
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="px-2 sm:px-20 py-[60px] flex flex-col md:flex-row w-full items-center justify-between gap-5 sm:gap-12">
        <div className='bg-[url("/images/bgcard.png")] bg-no-repeat bg-cover bg-center w-full rounded-xl px-8 py-6 space-y-10'>
          <div className="space-y-3">
            <h1 className="heading-2 text-[#F4F7FF]">Community</h1>
            <p className="text-[#CAC9D1] body-4 max-w-[554px]">
              Are you interested in one of our paid offerings? If yes, than
              reach out to our sales team for further queries and suggestions.
            </p>
          </div>
          <div>
            <div
              className="rounded-full p-px w-full"
              style={{
                background:
                  "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
              }}
            >
              <Link
                href="/enquiry-form"
                className="font-normal py-2 px-5 rounded-full w-full flex items-center justify-center"
                style={{
                  background: "#00031C",
                  color: "white",
                }}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        <div className='bg-[url("/images/bgcard.png")] bg-no-repeat bg-cover bg-center w-full rounded-xl px-8 py-6 space-y-10'>
          <div className="space-y-3">
            <h1 className="heading-2 text-[#F4F7FF]">Anything Else</h1>
            <p className="text-[#CAC9D1] body-4 max-w-[554px]">
              For any other queries and questions you can write us an email
              anywhere and from anywhere. Our support team will reach out to you
              quickly.
            </p>
          </div>
          <div>
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
                Write to Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
