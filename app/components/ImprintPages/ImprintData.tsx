import Link from "next/link";
import React from "react";

const ImprintData = () => {
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="px-5 sm:px-20 pt-0 pb-[60px] sm:pt-[60px]space-y-16">
        {/* Header Section */}
        <div className="space-y-6">
          <p className="text-[#F4F7FF] opacity-80 body-3">
            Information provided in accordance with Section 5 TMG
          </p>
        </div>

        {/* Company Information */}
        <div className="space-y-6">
          <div>
            <h2 className="heading-2 font-semibold text-white mt-6">mirya.ai</h2>
            <p className="text-[#F4F7FF] opacity-80 body-3">is a product of</p>
          </div>

          <div className="space-y-2">
            <h3 className="heading-3 font-semibold text-white mt-6">MIRYA GmbH</h3>
            <div className="text-[#F4F7FF] opacity-80 body-3 space-y-1">
              <p>[Your Street Name & Number]</p>
              <p>[Postal Code, City], Germany</p>
            </div>
          </div>

          <div className="text-[#F4F7FF] opacity-80 body-3 space-y-2">
            <p>
              Commercial Register: District Court [City] (Amtsgericht [City])
            </p>
            <p>
              Company Registration Number (Handelsregisternummer): [HRB Number]
            </p>
            <p>
              VAT Identification Number in accordance with Section 27a German
              VAT Act: [VAT Number]
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-[#F4F7FF] opacity-80 body-3">
              <span className="font-semibold">Contact:</span> legal@mirya.ai
            </p>
          </div>

          <div className="text-[#F4F7FF] opacity-80 body-3 space-y-2">
            <p>Responsible for content in accordance with § 55 Abs. 2 RStV:</p>
            <p className="sm:mb-[60px] mb-[40px]">
              [Name of Responsible Person, typically same as managing director],
              address above
            </p>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="space-y-6">
          <h1 className="heading-1 font-medium text-white">Disclaimer</h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4 text-white">
              Liability for Content
            </h2>
            <div className="text-[#F4F7FF] opacity-80 body-3 space-y-4">
              <p>
                As a service provider, MIRYA GmbH is responsible for its own
                content on these pages according to § 7 Abs. 1 TMG. Under §§
                8–10 TMG, however, we are not obligated to continuously monitor
                transmitted or stored external information or actively search
                for circumstances indicating unlawful activity.
              </p>
              <p>
                Should we become aware of specific legal violations, we will
                remove such content immediately. Our obligations to block or
                remove information in accordance with general laws remain
                unaffected.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4 text-white">
              Liability for Links
            </h2>
            <div className="text-[#F4F7FF] opacity-80 body-3 space-y-4">
              <p>
                Our website contains links to external third-party websites. We
                have no influence over the content of those sites and therefore
                cannot assume liability for them. The respective provider or
                operator is always responsible for the content on linked
                websites.
              </p>
              <p>
                At the time the links were created, no unlawful content was
                visible. Ongoing monitoring of linked pages is not feasible
                without concrete indications of legal violations. If we become
                aware of such issues, we will remove the links immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Notice Section */}
        <div className="space-y-6">
          <h1 className="heading-1 font-medium text-white sm:mt-[60px] mt-[40px]">Copyright Notice</h1>

          <div className="text-[#F4F7FF] opacity-80 body-3 space-y-4">
            <p>
              All content and materials created and published by MIRYA GmbH on
              this website are protected under German copyright law.
              Reproduction, editing, distribution, or any form of use outside
              the limits of copyright law requires prior written permission from
              MIRYA GmbH.
            </p>
            <p>
              Downloads and copies of this website are permitted for private,
              non-commercial use only.
            </p>
            <p>Content originating from third parties is marked accordingly.</p>
            <p>
              If you notice any copyright infringement, please inform us. We
              will remove such content without delay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprintData;
