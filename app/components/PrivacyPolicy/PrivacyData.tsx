// "use client"
// import Link from "next/link";
// import React from "react";
// import { useTranslation } from "react-i18next";
// const PrivacyData = () => {
//   const { t } = useTranslation("privacy");
//   return (
//     <div className="max-w-[1440px] m-auto">
//       <div className="px-5 sm:px-20 pt-0 sm:pt-[60px] space-y-16">
//         <div className="space-y-6">
//           <h1 className="heading-1 font-medium">{t("summary.title")}</h1>{" "}
//           <div>
//             <div className="text-white font-semibold">
//               This summary highlights the key points from our Privacy Notice.
//               You can explore more details on any topic by using our{" "}
//               <Link
//                 target="_blank"
//                 href="https://app.termly.io/policy-viewer/policy.html?policyUUID=400411c8-b685-4686-9682-e779bbd1a879#toc"
//                 className="underline"
//               >
//                 table of contents
//               </Link>{" "}
//               below to navigate to the section you're looking for.
//             </div>
//             <br />

//             <p className="text-[#F4F7FF]">
//               MIRYA collects only the information needed to operate and improve
//               the platform—such as your account details, usage activity, and the
//               documents or data you choose to process through workflows. Your
//               data stays yours: MIRYA uses it only to run automations, enhance
//               performance, and provide support. We never sell your information
//               and only share it with trusted service providers or apps you
//               choose to integrate with. We protect your data using encryption,
//               access controls, and secure infrastructure. You can request
//               access, correction, or deletion of your information at any time.
//               MIRYA uses cookies to improve your experience, and the service is
//               not intended for children under 16. <br />
//               <br /> By using MIRYA, you agree to follow our rules, keep your
//               account secure, and use the platform responsibly. You retain
//               ownership of all data, documents, and workflows you upload, and
//               MIRYA processes them only to deliver automation functionality.
//               While we strive for high reliability, continuous service is not
//               guaranteed, and features may change over time. <br />
//               <br /> Using MIRYA responsibly means avoiding illegal, harmful, or
//               abusive automation behaviors. We are not liable for indirect
//               losses, misuse, or issues arising from third-party integrations.
//               Subscriptions renew automatically unless canceled, and refunds are
//               limited to legal requirements.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <h1 className="heading-1 font-medium ">Table of Content</h1>
//           <div>
//             <ol className="space-y-1 list-decimal list-inside text-[#7BADFF]">
//               <li>
//                 <Link className="body-3 underline" href="#data">
//                   How we use your data?
//                 </Link>
//               </li>
//               <li>
//                 <Link className="body-3 underline" href="#data1">
//                   How Long MIRYA Keeps Your Data?
//                 </Link>
//               </li>
//               <li>
//                 <Link className="body-3 underline" href="#data2">
//                   What are my rights under data protection laws?
//                 </Link>
//               </li>
//               <li>
//                 <Link className="body-3 underline" href="#data3">
//                   Questions, comments and more detail
//                 </Link>
//               </li>
//             </ol>
//           </div>
//         </div>

//         <div className="space-y-6 scroll-mt-[120px]" id="data">
//           <h1 className="heading-1 font-medium ">1. How we use your date?</h1>
//           <div className="space-y-5">
//             <h2 className="font-semibold heading-4">
//               1.1. Create and Manage Your MIRYA Account
//             </h2>
//             <p className="opacity-80 body-3">
//               We use the information you provide (like your name, email,
//               password, and company details) to
//             </p>
//             <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
//               <li>Register your account</li>
//               <li>Authenticate your login</li>
//               <li>Manage your workspace</li>
//               <li>Provide access to features based on your plan</li>
//             </ul>
//           </div>

//           <div className="space-y-5">
//             <h2 className="font-semibold heading-4">
//               1.2. To Run, Process, and Execute Your Automations
//             </h2>
//             <p className="opacity-80 body-3">
//               When you upload documents or connect apps, MIRYA uses that data
//               to:
//             </p>
//             <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
//               <li>
//                 Read and understand email text, PDFs, forms, and other files
//               </li>
//               <li>Extract, classify, or restructure information</li>
//               <li>Trigger automated steps based on your workflow settings</li>
//               <li>
//                 Send the processed data to your ERP, CRM, HR, or other systems
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-5">
//             <h2 className="font-semibold heading-4">
//               1.3. Improve Accuracy, Intelligence, and Performance
//             </h2>
//             <p className="opacity-80 body-3">
//               We process usage patterns and workflow data (never in a way that
//               reveals your private content) to:
//             </p>
//             <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
//               <li>Train and fine-tune automation logic</li>
//               <li>Detect patterns that improve reliability</li>
//               <li>Optimize workflow execution speed</li>
//               <li>Reduce errors and improve stability</li>
//             </ul>
//           </div>
//         </div>

//         <div className="space-y-6 scroll-mt-[120px]" id="data1">
//           <h1 className="heading-1 font-medium ">
//             2. How Long MIRYA Keeps Your Data?
//           </h1>
//           <p className="body-4">
//             MIRYA retains your information only for as long as it is genuinely
//             needed — either to operate the services you use, to comply with
//             legal obligations, or to resolve issues. We follow strict retention
//             practices to ensure your data is never stored longer than necessary.
//           </p>
//           <div className="space-y-5">
//             <h2 className="font-semibold heading-4">
//               1.1. Data You Provide (Account Details, Profile Info, Workspace
//               Data)
//             </h2>
//             <p className="opacity-80 body-3">
//               We keep this information for as long as your account remains
//               active. When you delete your account, we begin a structured
//               deletion process that removes your personal information from our
//               active systems
//             </p>
//           </div>

//           <div className="space-y-5">
//             <h2 className="font-semibold heading-4">
//               1.2. Workflow Data (Documents, Emails, Files, Inputs You Process
//               Through MIRYA)
//             </h2>
//             <p className="opacity-80 body-3">
//               MIRYA stores workflow inputs only as long as required to execute
//               your automations. We do not store your documents indefinitely
//               unless you explicitly upload or save them in MIRYA.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-6 scroll-mt-[120px]" id="data2">
//           <h1 className="heading-1 font-medium ">
//             3. What are my rights under data protection laws?
//           </h1>
//           <p className="body-4">
//             You have various other rights under applicable data protection laws,
//             including the right to:
//           </p>

//           <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
//             <li>
//               access your personal data (also known as a “subject access
//               request”)
//             </li>
//             <li>correct incomplete or inaccurate data we hold about you</li>
//             <li>ask us to erase the personal data we hold about you</li>
//             <li>ask us to restrict our handling of your personal data</li>
//             <li>ask us to transfer your personal data to a third party</li>
//             <li>object to how we are using your personal data</li>
//             <li>withdraw your consent to us handling your personal data</li>
//           </ul>
//         </div>

//         <div className="space-y-6 scroll-mt-[120px]" id="data3">
//           <h1 className="heading-1 font-medium ">
//             4. Questions, comments and more detail
//           </h1>
//           <div className="space-y-5">
//             <h2 className="font-semibold heading-4">
//               We welcome your feedback and suggestions
//             </h2>
//             <p className="opacity-80 body-3">
//               At MIRYA, we are committed to keeping this Privacy Notice clear,
//               transparent, and easy to understand. <br />
//               If you have ideas on how we can improve the wording, add missing
//               perspectives, or enhance clarity, we’d be happy to hear from you.
//             </p>
//             <p className="opacity-80 body-3">
//               You can share your feedback directly with us at: <br />
//               📩 privacy@mirya.ai
//             </p>
//           </div>

//           <div className="space-y-5">
//             <h2 className="font-semibold heading-4">
//               Learn more about MIRYA’s data protection practices
//             </h2>
//             <p className="opacity-80 body-3">
//               For additional details on MIRYA’s approach to privacy, security,
//               compliance, and data handling—including GDPR, data processing
//               agreements, sub-processors, workflow data processing, and the
//               distinction between cloud and self-hosted environments—please
//               refer to our main Privacy & Security documentation page.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyData;

"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
const PrivacyData = () => {
  const { t } = useTranslation("privacy");
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="px-5 sm:px-20 pt-0 sm:pt-[60px] space-y-16">
        <div className="space-y-6">
          <h1 className="heading-1 font-medium">{t("summary.title")}</h1>
          <div>
            <div className="text-white font-semibold">
              {t("summary.highlight")}{" "}
              <Link
                target="_blank"
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=400411c8-b685-4686-9682-e779bbd1a879#toc"
                className="underline"
              >
                {t("summary.tableOfContentsLink")}
              </Link>{" "}
              {t("summary.highlightSuffix")}
            </div>
            <br />

            <p className="text-[#F4F7FF]">
              {t("summary.paragraphs.0")} <br />
              <br /> {t("summary.paragraphs.1")} <br />
              <br /> {t("summary.paragraphs.2")}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="heading-1 font-medium ">{t("toc.title")}</h1>
          <div>
            <ol className="space-y-1 list-decimal list-inside text-[#7BADFF]">
              <li>
                <Link className="body-3 underline" href="#data">
                  {t("toc.items.0.text")}
                </Link>
              </li>
              <li>
                <Link className="body-3 underline" href="#data1">
                  {t("toc.items.1.text")}
                </Link>
              </li>
              <li>
                <Link className="body-3 underline" href="#data2">
                  {t("toc.items.2.text")}
                </Link>
              </li>
              <li>
                <Link className="body-3 underline" href="#data3">
                  {t("toc.items.3.text")}
                </Link>
              </li>
            </ol>
          </div>
        </div>

        <div className="space-y-6 scroll-mt-[120px]" id="data">
          <h1 className="heading-1 font-medium ">
            {t("sections.usage.title")}
          </h1>
          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.usage.sub1.title")}
            </h2>
            <p className="opacity-80 body-3">{t("sections.usage.sub1.desc")}</p>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>{t("sections.usage.sub1.list.0")}</li>
              <li>{t("sections.usage.sub1.list.1")}</li>
              <li>{t("sections.usage.sub1.list.2")}</li>
              <li>{t("sections.usage.sub1.list.3")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.usage.sub2.title")}
            </h2>
            <p className="opacity-80 body-3">{t("sections.usage.sub2.desc")}</p>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>{t("sections.usage.sub2.list.0")}</li>
              <li>{t("sections.usage.sub2.list.1")}</li>
              <li>{t("sections.usage.sub2.list.2")}</li>
              <li>{t("sections.usage.sub2.list.3")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.usage.sub3.title")}
            </h2>
            <p className="opacity-80 body-3">{t("sections.usage.sub3.desc")}</p>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>{t("sections.usage.sub3.list.0")}</li>
              <li>{t("sections.usage.sub3.list.1")}</li>
              <li>{t("sections.usage.sub3.list.2")}</li>
              <li>{t("sections.usage.sub3.list.3")}</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6 scroll-mt-[120px]" id="data1">
          <h1 className="heading-1 font-medium ">
            {t("sections.retention.title")}
          </h1>
          <p className="body-4">{t("sections.retention.desc")}</p>
          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.retention.sub1.title")}
            </h2>
            <p className="opacity-80 body-3">
              {t("sections.retention.sub1.desc")}
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.retention.sub2.title")}
            </h2>
            <p className="opacity-80 body-3">
              {t("sections.retention.sub2.desc")}
            </p>
          </div>
        </div>

        <div className="space-y-6 scroll-mt-[120px]" id="data2">
          <h1 className="heading-1 font-medium ">
            {t("sections.rights.title")}
          </h1>
          <p className="body-4">{t("sections.rights.desc")}</p>

          <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
            <li>{t("sections.rights.list.0")}</li>
            <li>{t("sections.rights.list.1")}</li>
            <li>{t("sections.rights.list.2")}</li>
            <li>{t("sections.rights.list.3")}</li>
            <li>{t("sections.rights.list.4")}</li>
            <li>{t("sections.rights.list.5")}</li>
            <li>{t("sections.rights.list.6")}</li>
          </ul>
        </div>

        <div className="space-y-6 scroll-mt-[120px]" id="data3">
          <h1 className="heading-1 font-medium ">
            {t("sections.contact.title")}
          </h1>
          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.contact.sub1.title")}
            </h2>
            <p className="opacity-80 body-3">
              {t("sections.contact.sub1.desc")} <br />
              <br /> {t("sections.contact.sub1.email")}
              <br /> {t("sections.contact.sub1.box")}
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.contact.sub2.title")}
            </h2>
            <p className="opacity-80 body-3">
              {t("sections.contact.sub2.desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyData;
