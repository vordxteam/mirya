// import React, { useState } from 'react';
// import { X, Send } from 'lucide-react';
// import Image from 'next/image';
// import { Inter } from "next/font/google";

// import { Poppins } from "next/font/google";



// const inter = Inter({
//   variable: "--font-inter",
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });

// const poppins = Poppins({
//   variable: "--font-poppins",
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });




// interface Message {
//   type: 'user' | 'bot';
//   text: string;
// }


// export default function Chatbot({onClose} : {onClose : ()=>void}) {
//   const [messages, setMessages] = useState<Message[] | null>(null);
//   const [inputValue, setInputValue] = useState('');

//   const handleSend = () => {
//     if (inputValue.trim()) {
//       // Handle initial state (null)
//       const currentMessages = messages || [];
      
//       setMessages([
//         ...currentMessages,
//         { type: 'user', text: inputValue },
//         { type: 'bot', text: 'Coming soon...' }
//       ]);
//       setInputValue('');
//     }
//   };

//   const handleKeyPress = (e : React.KeyboardEvent) => {
//     if (e.key === 'Enter') {
//       handleSend();
//     }
//   };

//   return (
//     <div className={`z-[9999999999999] ${inter.className}`}>
//       <div className="rounded-[20px] border border-transparent non-rounded p-[1px]">
//         <div className="rounded-[20px] flex flex-col justify-between py-[19px] px-1 sm:px-[23px] gap-2 z-1000 relative bg-[#060B26] md:w-[426px] h-[520px]">
//           {/* Header */}
//           <div className="w-full flex justify-between items-end ">
//             <h4 className="text-xl font-light text-[#FFFFFF]">Chatbot</h4>
//            <Image onClick={onClose} src='/images/close.svg' alt='Close' height={16} width={16} className='cursor-pointer' />
//           </div>

//           {/* Messages Container */}
//           <div className="flex-1 overflow-y-auto hide-scrollbar  flex flex-col gap-3">
//             {messages?.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div
//                   className={` px-4 py-2.5 rounded-xl 
//                      bg-[#FFFFFF1F] border heading-6 font-normal border-[#FFFFFF52] text-white
//                   `}
//                 >
//                  <p className='max-w-[252px] text-wrap wrap-break-word'> {msg.text} </p>
//                 </div>
//               </div>
//             ))}
//             {messages?.length === 3 && (
//               <div className="flex justify-start">
//                 <div className="bg-[#1a1f3a] text-[#B8B8B8] px-4 py-2.5 rounded-2xl">
//                   ...
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Input Container */}
//           <div className="flex w-full gap-1 sm:gap-[15px]">
//             <div className="   sm:w-full ">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="What's on your mind?"
//                 className={` ${poppins.className} flex-1  p-4 bg-[#FFFFFF33] rounded-lg text-white placeholder-[#FFFFFF99] outline-none text-sm w-full`}
//               />
//             </div>
//               <button
//                 onClick={handleSend}
//                 className=""
//               >
//                 <Image height={56} width={56} src='/images/send.png' alt='send' />
//               </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .non-rounded {
//           background: linear-gradient(#4542e0, #4542e0) padding-box,
//             linear-gradient(0deg, #00031c, #8ea0e0, #00031c) border-box;
//         }
//       `}</style>
//     </div>
//   );
// }


import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react'; // Ensure you have lucide-react or remove if not using their icons
import Image from 'next/image';
import { Inter, Poppins } from "next/font/google";

// -- FONTS --
const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// -- TYPES --
interface Message {
  type: 'user' | 'bot';
  text: string;
}

export default function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Ref to scroll to bottom automatically
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue(''); 
    
    // 1. Show user message
    const currentMessages = messages || [];
    const newMessages = [...currentMessages, { type: 'user', text: userText } as Message];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // 2. Fetch from Pollinations AI (Free, No Key, Frontend-Ready)
      // This sends a prompt to their public model (often GPT-4o-mini or Llama)
      const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(userText)}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // 3. Get the raw text response
      const botText = await response.text();

      setMessages([
        ...newMessages,
        { type: 'bot', text: botText }
      ]);

    } catch (error) {
      console.error("AI Error:", error);
      setMessages([
        ...newMessages,
        { type: 'bot', text: "Sorry, connection failed. Please check your internet." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSend();
    }
  };

  return (
    <div className={` ${inter.className}`}>
      <div className="rounded-[20px] border border-transparent non-rounded p-[1px]">
        <div className="rounded-[20px] flex flex-col justify-between py-[19px] px-3 sm:px-[23px] gap-2 z-1000 relative bg-[#060B26]  md:w-[426px] h-[520px]">
          {/* Header */}
          <div className="w-full flex justify-between items-end ">
            <h4 className="text-xl font-light text-[#FFFFFF]">Chatbot</h4>
            {/* Added fallback to 'X' icon if image fails or path is wrong, typical in dev */}
            <div onClick={onClose} className='cursor-pointer'>
                <Image src='/images/close.svg' alt='Close' height={16} width={16} 
                       onError={(e) => { e.currentTarget.style.display='none'; }} />
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col gap-3">
            {messages?.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={` px-4 py-2.5 rounded-xl 
                     bg-[#FFFFFF1F] border heading-6 font-normal border-[#FFFFFF52] text-white
                  `}
                >
                  <p className='max-w-[252px] text-wrap wrap-break-word'> {msg.text} </p>
                </div>
              </div>
            ))}
            
            {/* Loading Bubble */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1a1f3a] text-[#B8B8B8] px-4 py-2.5 rounded-2xl animate-pulse">
                  ...
                </div>
              </div>
            )}
            {/* Invisible div to track bottom */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Container */}
          <div className="flex w-full gap-1 sm:gap-[15px]">
            <div className="   sm:w-full ">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                placeholder={isLoading ? "Please wait..." : "What's on your mind?"}
                className={` ${poppins.className} flex-1  p-4 bg-[#FFFFFF33] rounded-lg text-white placeholder-[#FFFFFF99] outline-none text-sm w-full disabled:opacity-50`}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="disabled:opacity-50"
            >
               {/* Ensure this path exists or replace with text if image missing */}
              <Image height={56} width={56} src='/images/send.png' alt='send' />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .non-rounded {
          background: linear-gradient(#4542e0, #4542e0) padding-box,
            linear-gradient(0deg, #00031c, #8ea0e0, #00031c) border-box;
        }
        /* Custom scrollbar hiding for consistency */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}