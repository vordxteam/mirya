import Link from "next/link";
import React from "react";

const SecurityData = () => {
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="px-5 sm:px-20 py-[60px] space-y-16">
        <div className="space-y-6">
          <h1 className="heading-1 font-medium">Summary of key Points</h1>
          <div>
            <div className="text-white font-semibold">
              This summary provides key points from our Privacy Notice, but you
              can find out more details about any of these topics by using our{" "}
              <Link
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=400411c8-b685-4686-9682-e779bbd1a879#toc"
                className="underline"
              >
                table of contents
              </Link>{" "}
              below to find the section you are looking for.
            </div>
            <br />

            <p className="text-[#F4F7FF]">
              MIRYA collects only the information needed to operate and improve
              the platform—such as your account details, usage activity, and the
              documents or data you choose to process through workflows. Your
              data stays yours: MIRYA uses it only to run automations, enhance
              performance, and provide support. We never sell your information
              and only share it with trusted service providers or apps you
              choose to integrate with. We protect your data using encryption,
              access controls, and secure infrastructure. You can request
              access, correction, or deletion of your information at any time.
              MIRYA uses cookies to improve your experience, and the service is
              not intended for children under 16. <br />
              <br />
              By using MIRYA, you agree to follow our rules, keep your account
              secure, and use the platform responsibly. You retain ownership of
              all data, documents, and workflows you upload, and MIRYA processes
              them only to deliver automation functionality. While we strive for
              high reliability, continuous service is not guaranteed, and
              features may change over time. <br />
              <br />
              Using MIRYA responsibly means avoiding illegal, harmful, or
              abusive automation behaviors. We are not liable for indirect
              losses, misuse, or issues arising from third-party integrations.
              Subscriptions renew automatically unless canceled, and refunds are
              limited to legal requirements.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="heading-1 font-medium">Table of Content</h1>
          <div>
            <ol className="space-y-1 list-decimal list-inside text-[#7BADFF]">
              <li>
                <Link className="body-3 underline" href="#data">
                  Compliance
                </Link>
              </li>
              <li>
                <Link className="body-3 underline" href="#data1">
                  Customer Data Protection & Encryption
                </Link>
              </li>
              <li>
                <Link className="body-3 underline" href="#data2">
                  Cloud Hosting & Storage
                </Link>
              </li>
              <li>
                <Link className="body-3 underline" href="#data3">
                  Secure Development Practices
                </Link>
              </li>
              <li>
                <Link className="body-3 underline" href="#data4">
                  Access Controls
                </Link>
              </li>
              <li>
                <Link className="body-3 underline" href="#data5">
                  Corporate Security
                </Link>
              </li>
              <li>
                <Link className="body-3 underline" href="#data6">
                  Threat & Vulnerability Management
                </Link>
              </li>
              <li>
                <Link className="body-3 underline" href="#data7">
                  Backup, Recovery & Business Continuity
                </Link>
              </li>
            </ol>
          </div>
        </div>

        {/* Section 1: Compliance */}
        <div className="space-y-6 scroll-mt-[120px]" id="data">
          <h1 className="heading-1 font-medium">1. Compliance</h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">SOC 2 & SOC 3 Reports</h2>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>
                SOC 2 reports are available to enterprise customers under NDA.
              </li>
              <li>
                SOC 3 summary reports may be available publicly for general
                review.
              </li>
              <li>
                These reports outline our security program, internal controls,
                and independent auditor assessments.
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">GDPR & Data Protection</h2>
            <p className="opacity-80 body-3">
              MIRYA complies with the GDPR (EU General Data Protection
              Regulation). We provide:
            </p>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>Data Processing Agreements (DPAs)</li>
              <li>Clear retention policies</li>
              <li>Transparent sub-processor lists</li>
              <li>Data portability & deletion rights</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Customer Data Protection & Encryption */}
        <div className="space-y-6 scroll-mt-[120px]" id="data1">
          <h1 className="heading-1 font-medium">
            2. Customer Data Protection & Encryption
          </h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              User Accounts, Authentication & Authorization
            </h2>
            <p className="body-1 font-semibold">MIRYA Cloud</p>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>Passwords are hashed and salted before storage.</li>
              <li>
                Authentication credentials are stored in encrypted databases.
              </li>
              <li>MFA (Multi-Factor Authentication) is supported.</li>
              <li>
                OAuth and secure credential storage is used wherever possible.
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <p className="body-1 font-semibold">MIRYA Self-Hosted</p>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>
                Password hashing follows MIRYA's recommended security
                configuration.
              </li>
              <li>
                Encryption at-rest, network encryption, and secret management
                must be configured by the customer.
              </li>
              <li>
                Custom session timeouts and advanced password policies are
                supported.
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              Third-Party Accounts & Integrations
            </h2>
            <p className="opacity-80 body-3">
              Automation often requires connecting to external systems (ERP,
              CRM, HR, email, etc.).
            </p>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>
                MIRYA uses OAuth whenever supported to provide secure, scoped
                access.
              </li>
              <li>
                If OAuth is unavailable, API keys or tokens are stored securely
                and encrypted at rest.
              </li>
              <li>Credentials never appear in logs.</li>
              <li>
                MIRYA isolates tokens inside the execution environment on a
                per-workspace basis.
              </li>
              <li>
                MIRYA does not log credential values unless explicitly enabled
                by the customer.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Cloud Hosting & Storage */}
        <div className="space-y-6 scroll-mt-[120px]" id="data2">
          <h1 className="heading-1 font-medium">3. Cloud Hosting & Storage</h1>
          <p className="body-4">
            MIRYA Cloud uses Microsoft Azure or equivalent enterprise-grade
            cloud providers with strong physical and network security.
          </p>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Data Center Security</h2>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>Servers run in private, isolated networks.</li>
              <li>Physical access is controlled by the cloud provider.</li>
              <li>All storage volumes are encrypted by default (AES-256).</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              Infrastructure Access Controls
            </h2>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>MFA enforced for MIRYA engineering access</li>
              <li>No direct public access to internal services</li>
              <li>Services run inside private sub-nets with firewall rules</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              Database & Credential Storage
            </h2>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>
                All customer data, workflow data, and credentials are encrypted
                at rest.
              </li>
              <li>
                Backups are encrypted and stored in separate availability zones.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4: Encryption */}
        <div className="space-y-6 scroll-mt-[120px]" id="data3">
          <h1 className="heading-1 font-medium">4. Encryption</h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">In Transit</h2>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>
                All data transmitted between your device, MIRYA's cloud
                services, and public APIs is encrypted using industry-standard
                TLS/SSL.
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">At Rest</h2>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>
                MIRYA encrypts all customer data, databases, workflow
                inputs/outputs, and credential stores at rest.
              </li>
              <li>AES-256 encryption is applied to all disks and backups.</li>
              <li>
                Encryption keys are managed by the cloud provider using
                compliant KMS systems.
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Self-Hosted Deployment</h2>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>Set up TLS for all traffic</li>
              <li>Ensure storage volumes are encrypted</li>
              <li>Keep encryption keys secure</li>
              <li>
                Configure KMS and firewall rules via their hosting provider
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5: Network Security */}
        <div className="space-y-6 scroll-mt-[120px]" id="data4">
          <h1 className="heading-1 font-medium">5. Network Security</h1>
          <p className="body-4">
            MIRYA Cloud infrastructure is continuously monitored using automated
            audits and alert systems.
          </p>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Controls include:</h2>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>Web Application Firewall (WAF)</li>
              <li>Firewall-restricted ports and protocols</li>
              <li>Intrusion Detection Systems (IDS)</li>
              <li>Continuous log monitoring and anomaly alerts</li>
              <li>Rate-limiting and request filtering</li>
            </ul>
          </div>
        </div>

        {/* Section 6: Audit Logging */}
        <div className="space-y-6 scroll-mt-[120px]" id="data4">
          <h1 className="heading-1 font-medium">6. Audit Logging</h1>
          <p className="body-4">MIRYA logs:</p>
          <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
            <li>Workflow execution events</li>
            <li>System activity</li>
            <li>Authentication attempts</li>
            <li>Platform and infrastructure events</li>
          </ul>
        </div>

        {/* Section 7: Secure Development Practices */}
        <div className="space-y-6 scroll-mt-[120px]" id="data4">
          <h1 className="heading-1 font-medium">
            7. Secure Development Practices
          </h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Code Management</h2>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>
                Source code stored in private repositories (Github or similar)
              </li>
              <li>Access granted on a least-privilege basis</li>
              <li>MFA required for developer access</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Code Reviews & Testing</h2>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>Every code change is reviewed by a second engineer</li>
              <li>Automated CI/CD pipelines</li>
              <li>Static Application Security Testing (SAST)</li>
              <li>Dependency scanning and vulnerability testing</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Environment Separation</h2>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>
                Development, staging, and production environments are isolated
              </li>
              <li>Only authorized personnel can deploy to production</li>
            </ul>
          </div>
        </div>

        {/* Section 8: Corporate Security */}
        <div className="space-y-6 scroll-mt-[120px]" id="data5">
          <h1 className="heading-1 font-medium">8. Corporate Security</h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Hiring Practices</h2>
            <p className="opacity-80 body-3">
              All MIRYA team members complete:
            </p>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>Background checks where legally permitted</li>
              <li>Security and privacy onboarding</li>
              <li>Annual security training</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Workstation Security</h2>
            <p className="opacity-80 body-3">
              All employee devices follow strict policies:
            </p>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>Full-disk encryption</li>
              <li>Automatic updates</li>
              <li>Strong password management</li>
              <li>Enforced screen lock</li>
              <li>Anti-malware tools</li>
            </ul>
          </div>
        </div>

        {/* Section 9: Threat & Vulnerability Management */}
        <div className="space-y-6 scroll-mt-[120px]" id="data6">
          <h1 className="heading-1 font-medium">
            9. Threat & Vulnerability Management
          </h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Vulnerability Scanning</h2>
            <p className="opacity-80 body-3">
              Regular automated scans are performed on cloud infrastructure and
              application code.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Penetration Testing</h2>
            <p className="opacity-80 body-3">
              Independent penetration tests are conducted annually or after
              major releases.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Intrusion Detection</h2>
            <p className="opacity-80 body-3">
              MIRYA monitors for signs of intrusions and responds immediately to
              suspicious activity.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Threat Intelligence</h2>
            <p className="opacity-80 body-3">
              We use trusted intelligence feeds and security tools to stay
              updated on new threats.
            </p>
          </div>
        </div>

        {/* Section 10: Backup, Recovery & Business Continuity */}
        <div className="space-y-6 scroll-mt-[120px]" id="data7">
          <h1 className="heading-1 font-medium">
            10. Backup, Recovery & Business Continuity
          </h1>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Data Backups</h2>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>Customer data is backed up daily.</li>
              <li>Backups stored in separate availability zones</li>
              <li>Encrypted using the same standards as production data</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Disaster Recovery</h2>
            <p className="opacity-80 body-3">
              MIRYA maintains a detailed DR plan covering:
            </p>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>Recovery procedures</li>
              <li>Role definitions</li>
              <li>Communication paths</li>
              <li>System restoration processes</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">Business Continuity</h2>
            <p className="opacity-80 body-3">
              Regular tests ensure MIRYA can recover quickly from:
            </p>
            <ul className="list-disc list-inside opacity-80 body-3 space-y-1">
              <li>Infrastructure failures</li>
              <li>Provider outages</li>
              <li>Data corruption</li>
              <li>System-level disruptions</li>
            </ul>
          </div>
        </div>

        {/* Questions and Feedback Section */}
        <div className="space-y-6">
          <h1 className="heading-1 font-medium">
            Questions, comments and more detail
          </h1>
          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              We welcome your feedback and suggestions
            </h2>
            <p className="opacity-80 body-3">
              At MIRYA, we are committed to keeping this Security Notice clear,
              transparent, and easy to understand. <br />
              If you have ideas on how we can improve the wording, add missing
              perspectives, or enhance clarity, we'd be happy to hear from you.
            </p>
            <p className="opacity-80 body-3">
              You can share your feedback directly with us at: <br />
              📩 security@mirya.ai
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold heading-4">
              Learn more about MIRYA's security practices
            </h2>
            <p className="opacity-80 body-3">
              For additional details on MIRYA's approach to privacy, security,
              compliance, and data handling—including GDPR, data processing
              agreements, sub-processors, workflow data processing, and the
              distinction between cloud and self-hosted environments—please
              refer to our main Security & Privacy documentation page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityData;
