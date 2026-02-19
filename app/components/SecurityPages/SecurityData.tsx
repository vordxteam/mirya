import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const SecurityData = () => {
  const { t } = useTranslation("security");

  return (
    <div className="max-w-[1440px] m-auto">
      <div className="px-5 sm:px-20 pt-0 pb-[60px] sm:pt-[60px] space-y-16">
        <div className="space-y-6">
          <h1 className="heading-1 font-medium">{t("summary.title")}</h1>
          <div>
            <div className="text-white font-semibold">
              {t("summary.intro")}{" "}
              <Link
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=400411c8-b685-4686-9682-e779bbd1a879#toc"
                className="underline"
              >
                {t("summary.tocLinkText")}
              </Link>{" "}
              {t("summary.introSuffix")}
            </div>
            <br />

            <p className="text-[#F4F7FF]">
              {t("summary.paragraphs.0")} <br />
              <br />
              {t("summary.paragraphs.1")} <br />
              <br />
              {t("summary.paragraphs.2")}
              <br />
              <br />
              {t("summary.paragraphs.3")}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="heading-1 font-medium">{t("toc.title")}</h1>
          <div>
            <ol className="space-y-1 list-decimal list-inside text-[#7BADFF]">
              <li>
                <Link className="body-6 underline" href="#data">
                  {t("toc.items.0.text")}
                </Link>
              </li>
              <li>
                <Link className="body-6 underline" href="#data1">
                  {t("toc.items.1.text")}
                </Link>
              </li>
              <li>
                <Link className="body-6 underline" href="#data2">
                  {t("toc.items.2.text")}
                </Link>
              </li>
              <li>
                <Link className="body-6 underline" href="#data3">
                  {t("toc.items.3.text")}
                </Link>
              </li>
              <li>
                <Link className="body-6 underline" href="#data4">
                  {t("toc.items.4.text")}
                </Link>
              </li>
              <li>
                <Link className="body-6 underline" href="#data5">
                  {t("toc.items.5.text")}
                </Link>
              </li>
              <li>
                <Link className="body-6 underline" href="#data6">
                  {t("toc.items.6.text")}
                </Link>
              </li>
              <li>
                <Link className="body-6 underline" href="#data7">
                  {t("toc.items.7.text")}
                </Link>
              </li>
               <li>
                <Link className="body-6 underline" href="#data8">
                  {t("toc.items.8.text")}
                </Link>
              </li>
            </ol>
          </div>
        </div>

        {/* Section 1: Compliance */}
        <div className="space-y-6 scroll-mt-[120px]" id="data">
          <h1 className="heading-1 font-medium">
            {t("sections.compliance.title")}
          </h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.compliance.soc.title")}
            </h2>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.compliance.soc.list.0")}</li>
              <li>{t("sections.compliance.soc.list.1")}</li>
              <li>{t("sections.compliance.soc.list.2")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.compliance.gdpr.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.compliance.gdpr.desc")}
            </p>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.compliance.gdpr.list.0")}</li>
              <li>{t("sections.compliance.gdpr.list.1")}</li>
              <li>{t("sections.compliance.gdpr.list.2")}</li>
              <li>{t("sections.compliance.gdpr.list.3")}</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Customer Data Protection & Encryption */}
        <div className="space-y-6 scroll-mt-[120px]" id="data1">
          <h1 className="heading-1 font-medium">
            {t("sections.dataProtection.title")}
          </h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.dataProtection.auth.title")}
            </h2>
            <p className="body-1 font-semibold">
              {t("sections.dataProtection.auth.cloudTitle")}
            </p>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.dataProtection.auth.cloudList.0")}</li>
              <li>{t("sections.dataProtection.auth.cloudList.1")}</li>
              <li>{t("sections.dataProtection.auth.cloudList.2")}</li>
              <li>{t("sections.dataProtection.auth.cloudList.3")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <p className="body-1 font-semibold">
              {t("sections.dataProtection.auth.selfHostedTitle")}
            </p>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.dataProtection.auth.selfHostedList.0")}</li>
              <li>{t("sections.dataProtection.auth.selfHostedList.1")}</li>
              <li>{t("sections.dataProtection.auth.selfHostedList.2")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h1 className="font-medium heading-1">
              {t("sections.dataProtection.integrations.title")}
            </h1>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.dataProtection.integrations.desc")}
            </p>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.dataProtection.integrations.list.0")}</li>
              <li>{t("sections.dataProtection.integrations.list.1")}</li>
              <li>{t("sections.dataProtection.integrations.list.2")}</li>
              <li>{t("sections.dataProtection.integrations.list.3")}</li>
              <li>{t("sections.dataProtection.integrations.list.4")}</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Cloud Hosting & Storage */}
        <div className="space-y-6 scroll-mt-[120px]" id="data2">
          <h1 className="heading-1 font-medium">
            {t("sections.cloudHosting.title")}
          </h1>
          <p className="body-6">{t("sections.cloudHosting.desc")}</p>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.cloudHosting.dataCenter.title")}
            </h2>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.cloudHosting.dataCenter.list.0")}</li>
              <li>{t("sections.cloudHosting.dataCenter.list.1")}</li>
              <li>{t("sections.cloudHosting.dataCenter.list.2")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.cloudHosting.infrastructure.title")}
            </h2>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.cloudHosting.infrastructure.list.0")}</li>
              <li>{t("sections.cloudHosting.infrastructure.list.1")}</li>
              <li>{t("sections.cloudHosting.infrastructure.list.2")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.cloudHosting.database.title")}
            </h2>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.cloudHosting.database.list.0")}</li>
              <li>{t("sections.cloudHosting.database.list.1")}</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Encryption */}
        <div className="space-y-6 scroll-mt-[120px]" id="data3">
          <h1 className="heading-1 font-medium">
            {t("sections.encryption.title")}
          </h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.encryption.inTransit.title")}
            </h2>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.encryption.inTransit.list.0")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.encryption.atRest.title")}
            </h2>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.encryption.atRest.list.0")}</li>
              <li>{t("sections.encryption.atRest.list.1")}</li>
              <li>{t("sections.encryption.atRest.list.2")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.encryption.selfHosted.title")}
            </h2>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.encryption.selfHosted.list.0")}</li>
              <li>{t("sections.encryption.selfHosted.list.1")}</li>
              <li>{t("sections.encryption.selfHosted.list.2")}</li>
              <li>{t("sections.encryption.selfHosted.list.3")}</li>
            </ul>
          </div>
        </div>

        {/* Section 5: Network Security */}
        <div className="space-y-6 scroll-mt-[120px]" id="data4">
          <h1 className="heading-1 font-medium">
            {t("sections.network.title")}
          </h1>
          <p className="body-6">{t("sections.network.desc")}</p>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.network.controlsTitle")}
            </h2>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.network.controls.0")}</li>
              <li>{t("sections.network.controls.1")}</li>
              <li>{t("sections.network.controls.2")}</li>
              <li>{t("sections.network.controls.3")}</li>
              <li>{t("sections.network.controls.4")}</li>
            </ul>
          </div>
        </div>

        {/* Section 6: Audit Logging */}
        <div className="space-y-6 scroll-mt-[120px]" id="data4">
          <h1 className="heading-1 font-medium">{t("sections.audit.title")}</h1>
          <p className="body-6">{t("sections.audit.desc")}</p>
          <ul className="list-disc list-inside text-[#FFFFFFCC] body-6 space-y-1">
            <li>{t("sections.audit.list.0")}</li>
            <li>{t("sections.audit.list.1")}</li>
            <li>{t("sections.audit.list.2")}</li>
            <li>{t("sections.audit.list.3")}</li>
          </ul>
        </div>

        {/* Section 7: Secure Development Practices */}
        <div className="space-y-6 scroll-mt-[120px]" id="data4">
          <h1 className="heading-1 font-medium">
            {t("sections.development.title")}
          </h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.development.codeManagement.title")}
            </h2>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.development.codeManagement.list.0")}</li>
              <li>{t("sections.development.codeManagement.list.1")}</li>
              <li>{t("sections.development.codeManagement.list.2")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.development.codeReview.title")}
            </h2>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.development.codeReview.list.0")}</li>
              <li>{t("sections.development.codeReview.list.1")}</li>
              <li>{t("sections.development.codeReview.list.2")}</li>
              <li>{t("sections.development.codeReview.list.3")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.development.environment.title")}
            </h2>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.development.environment.list.0")}</li>
              <li>{t("sections.development.environment.list.1")}</li>
            </ul>
          </div>
        </div>

        {/* Section 8: Corporate Security */}
        <div className="space-y-6 scroll-mt-[120px]" id="data5">
          <h1 className="heading-1 font-medium">
            {t("sections.corporate.title")}
          </h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.corporate.hiring.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.corporate.hiring.desc")}
            </p>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.corporate.hiring.list.0")}</li>
              <li>{t("sections.corporate.hiring.list.1")}</li>
              <li>{t("sections.corporate.hiring.list.2")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.corporate.workstation.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.corporate.workstation.desc")}
            </p>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.corporate.workstation.list.0")}</li>
              <li>{t("sections.corporate.workstation.list.1")}</li>
              <li>{t("sections.corporate.workstation.list.2")}</li>
              <li>{t("sections.corporate.workstation.list.3")}</li>
              <li>{t("sections.corporate.workstation.list.4")}</li>
            </ul>
          </div>
        </div>

        {/* Section 9: Threat & Vulnerability Management */}
        <div className="space-y-6 scroll-mt-[120px]" id="data6">
          <h1 className="heading-1 font-medium">
            {t("sections.threat.title")}
          </h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.threat.vulnerability.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.threat.vulnerability.desc")}
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.threat.penetration.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.threat.penetration.desc")}
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.threat.intrusion.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.threat.intrusion.desc")}
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.threat.intelligence.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.threat.intelligence.desc")}
            </p>
          </div>
        </div>

        {/* Section 10: Backup, Recovery & Business Continuity */}
        <div className="space-y-6 scroll-mt-[120px]" id="data7">
          <h1 className="heading-1 font-medium">
            {t("sections.backup.title")}
          </h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.backup.dataBackups.title")}
            </h2>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.backup.dataBackups.list.0")}</li>
              <li>{t("sections.backup.dataBackups.list.1")}</li>
              <li>{t("sections.backup.dataBackups.list.2")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.backup.disaster.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.backup.disaster.desc")}
            </p>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.backup.disaster.list.0")}</li>
              <li>{t("sections.backup.disaster.list.1")}</li>
              <li>{t("sections.backup.disaster.list.2")}</li>
              <li>{t("sections.backup.disaster.list.3")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.backup.business.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.backup.business.desc")}
            </p>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.backup.business.list.0")}</li>
              <li>{t("sections.backup.business.list.1")}</li>
              <li>{t("sections.backup.business.list.2")}</li>
              <li>{t("sections.backup.business.list.3")}</li>
            </ul>
          </div>
        </div>

        {/* Section 11: Backup, Recovery & Business Continuity */}
        <div className="space-y-6 scroll-mt-[120px]" id="data8">
          <h1 className="heading-1 font-medium">
            {t("sections.processors.title")}
          </h1>
          <p className="body-6">{t("sections.processors.des")}</p>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.processors.dataBackups.title")}
            </h2>
            <p className="body-6 mb-[6px]">
              {t("sections.processors.dataBackups.desc")}
            </p>

            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.processors.dataBackups.list.0")}</li>
              <li>{t("sections.processors.dataBackups.list.1")}</li>
              <li>{t("sections.processors.dataBackups.list.2")}</li>
              <li>{t("sections.processors.dataBackups.list.3")}</li>

              <li>{t("sections.processors.dataBackups.list.4")}</li>
            </ul>
            <p className="body-6 mb-[6px]">
              {t("sections.processors.dataBackups.descs")}
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.processors.disaster.title")}
            </h2>

            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.processors.disaster.list.0")}</li>
              <li>{t("sections.processors.disaster.list.1")}</li>
              <li>{t("sections.processors.disaster.list.2")}</li>
              <li>{t("sections.processors.disaster.list.3")}</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.processors.business.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.processors.business.desc")}
            </p>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.processors.business.list.0")}</li>
              <li>{t("sections.processors.business.list.1")}</li>
              <li>{t("sections.processors.business.list.2")}</li>
            </ul>
          </div>
          {/*  */}
          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.processors.customer.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.processors.customer.desc")}
            </p>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.processors.customer.des")}
            </p>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.processors.customer.list.0")}</li>
              <li>{t("sections.processors.customer.list.1")}</li>
              <li>{t("sections.processors.customer.list.2")}</li>
              <li>{t("sections.processors.customer.list.3")}</li>
            </ul>
          </div>
           <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.processors.confidentiality.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6">
              {t("sections.processors.confidentiality.desc")}
            </p>
           
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.processors.confidentiality.list.0")}</li>
              <li>{t("sections.processors.confidentiality.list.1")}</li>
              <li>{t("sections.processors.confidentiality.list.2")}</li>
              <li>{t("sections.processors.confidentiality.list.3")}</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              {t("sections.processors.compliance.title")}
            </h2>
            <p className="text-[#FFFFFFCC] body-6 max-w-[759px] w-full">
              {t("sections.processors.compliance.desc")}
            </p>
             <p className="text-[#FFFFFFCC] body-6">
              {t("sections.processors.compliance.des")}
            </p>
            <ul className="list-disc list-outside text-[#FFFFFFCC] body-6 space-y-1 max-w-[759px] w-full pl-5">
              <li>{t("sections.processors.compliance.list.0")}</li>
              <li>{t("sections.processors.compliance.list.1")}</li>
              <li>{t("sections.processors.compliance.list.2")}</li>
              <li>{t("sections.processors.compliance.list.3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityData;
