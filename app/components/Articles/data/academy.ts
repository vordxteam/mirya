// types/academy.ts
export interface SidebarItem {
  id: string;
  title: string;
  subItems?: {
    id: string;
    title: string;
  }[];
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  bulletPoints?: string[];
  subsections?: {
    title: string;
    content: string;
    bulletPoints?: string[];
  }[];
}

export interface RightCard {
  title: string;
  items: {
    icon: string;
    text: string;
    link?: string;
  }[];
}

export interface AcademyCategory {
  id: number;
  slug: string;
  title: string;
  sidebar: SidebarItem[];
  content: { [key: string]: ContentSection };
  rightCard: RightCard;
}

// data/academyData.ts
export const academyData: AcademyCategory[] = [
  {
    id: 1,
    slug: "getting-started",
    title: "Getting Started",
    sidebar: [
      {
        id: "welcome",
        title: "Welcome to MIRYA",
        subItems: [
          { id: "no-code", title: "No-Code Automation" },
          { id: "interface", title: "Mirya Interface" },
          { id: "structure", title: "Academy Structure" },
          { id: "login", title: "Login" }
        ]
      },
      {
        id: "installation",
        title: "Installation & Setup"
      },
      {
        id: "first-automation",
        title: "Build Your First Automation"
      }
    ],
    content: {
      "no-code": {
        id: "no-code",
        title: "Introduction to No-Code Automation",
        content: "Mirya allows you to build powerful automation workflows without writing code. Using a visual drag-and-drop interface, you can combine actions, logic, and data operations to automate repetitive work across desktop apps, websites, email, spreadsheets, documents, and more.",
        subsections: [
          {
            title: "Key Advantages and Typical Use Cases",
            content: "Mirya Academy is divided into clear learning paths that guide you from beginner to expert.",
            bulletPoints: [
              "Finance & Accounting: Invoice extraction, payment preparation, data validation",
              "Customer Service: Creating tickets from emails, auto-responding, classification",
              "HR & Recruiting: Sorting CVs, onboarding workflows, document generation",
              "Operations: Data migration, system updates, routine administrative tasks",
              "E-Commerce: Order processing, product updates, return handling"
            ]
          },
          {
            title: "How No-Code Automation Helps Businesses",
            content: "No-code automation helps businesses:",
            bulletPoints: [
              "Reduce manual workload",
              "Eliminate repetitive tasks",
              "Improve accuracy and consistency",
              "Scale operations efficiently",
              "Speed up processes without expanding"
            ]
          }
        ]
      },
      "welcome": {
        id: "welcome",
        title: "Welcome to MIRYA",
        content: "MIRYA runs in the cloud and works on any modern device with an internet connection. No servers, heavy setup, or installation required — just sign up and start automating.",
        bulletPoints: [
          "Cloud-based platform accessible from anywhere",
          "No installation or server setup needed",
          "Works on all modern devices",
          "Instant access after signup"
        ]
      }
    },
    rightCard: {
      title: "On this Page",
      items: [
        { icon: "📖", text: "Introduction to No-Code Automation", link: "#no-code" },
        { icon: "⚡", text: "Key Advantages and Typical Use Cases", link: "#advantages" },
        { icon: "🚀", text: "How No-Code Automation Helps Businesses", link: "#benefits" }
      ]
    }
  },
  {
    id: 2,
    slug: "mirya-tutorials",
    title: "MIRYA Tutorials",
    sidebar: [
      {
        id: "basic",
        title: "Basic Tutorials",
        subItems: [
          { id: "workflow-basics", title: "Workflow Basics" },
          { id: "data-handling", title: "Data Handling" }
        ]
      },
      {
        id: "advanced",
        title: "Advanced Tutorials"
      }
    ],
    content: {
      "workflow-basics": {
        id: "workflow-basics",
        title: "Workflow Basics",
        content: "Learn the fundamentals of creating and managing workflows in MIRYA. This tutorial covers everything from creating your first workflow to understanding the core concepts.",
        bulletPoints: [
          "Creating your first workflow",
          "Understanding workflow components",
          "Testing and debugging",
          "Publishing workflows"
        ]
      }
    },
    rightCard: {
      title: "Tutorial Resources",
      items: [
        { icon: "🎥", text: "Video Tutorials" },
        { icon: "📝", text: "Step-by-Step Guides" },
        { icon: "💡", text: "Best Practices" }
      ]
    }
  },
  {
    id: 3,
    slug: "process-use-cases",
    title: "Process Use Cases",
    sidebar: [
      {
        id: "finance",
        title: "Finance & Accounting"
      },
      {
        id: "hr",
        title: "HR & Recruiting"
      },
      {
        id: "customer-service",
        title: "Customer Service"
      }
    ],
    content: {
      "finance": {
        id: "finance",
        title: "Finance & Accounting Automation",
        content: "Automate your financial processes with MIRYA. From invoice processing to payment reconciliation, streamline your accounting workflows.",
        bulletPoints: [
          "Invoice extraction and processing",
          "Payment preparation and approval",
          "Data validation and verification",
          "Financial reporting automation"
        ]
      }
    },
    rightCard: {
      title: "Popular Use Cases",
      items: [
        { icon: "💰", text: "Invoice Processing" },
        { icon: "📊", text: "Financial Reporting" },
        { icon: "✅", text: "Expense Approval" }
      ]
    }
  },
  {
    id: 4,
    slug: "best-practices",
    title: "Best Practices",
    sidebar: [
      {
        id: "workflow-design",
        title: "Workflow Design"
      },
      {
        id: "error-handling",
        title: "Error Handling"
      },
      {
        id: "performance",
        title: "Performance Optimization"
      }
    ],
    content: {
      "workflow-design": {
        id: "workflow-design",
        title: "Workflow Design Best Practices",
        content: "Design efficient and maintainable workflows by following industry best practices and MIRYA recommendations.",
        bulletPoints: [
          "Keep workflows modular and reusable",
          "Use clear naming conventions",
          "Document your processes",
          "Test thoroughly before deployment"
        ]
      }
    },
    rightCard: {
      title: "Quick Tips",
      items: [
        { icon: "✨", text: "Design Patterns" },
        { icon: "🔧", text: "Optimization Tips" },
        { icon: "📋", text: "Checklist" }
      ]
    }
  },
  {
    id: 5,
    slug: "troubleshooting",
    title: "Trouble Shooting & Support Guides",
    sidebar: [
      {
        id: "common-issues",
        title: "Common Issues"
      },
      {
        id: "debugging",
        title: "Debugging Guide"
      },
      {
        id: "contact-support",
        title: "Contact Support"
      }
    ],
    content: {
      "common-issues": {
        id: "common-issues",
        title: "Common Issues and Solutions",
        content: "Find quick solutions to the most frequently encountered issues in MIRYA.",
        bulletPoints: [
          "Connection errors and how to resolve them",
          "Workflow execution failures",
          "Data sync issues",
          "Performance problems"
        ]
      }
    },
    rightCard: {
      title: "Support Resources",
      items: [
        { icon: "🆘", text: "Help Center" },
        { icon: "💬", text: "Live Chat" },
        { icon: "📧", text: "Email Support" }
      ]
    }
  },
  {
    id: 6,
    slug: "updates-release-roadmap",
    title: "Updates, Release & Roadmap",
    sidebar: [
      {
        id: "latest-updates",
        title: "Latest Updates"
      },
      {
        id: "release-notes",
        title: "Release Notes"
      },
      {
        id: "roadmap",
        title: "Product Roadmap"
      }
    ],
    content: {
      "latest-updates": {
        id: "latest-updates",
        title: "Latest Updates",
        content: "Stay up to date with the latest features and improvements in MIRYA.",
        bulletPoints: [
          "New workflow components",
          "Performance improvements",
          "Bug fixes and stability updates",
          "New integrations"
        ]
      }
    },
    rightCard: {
      title: "Release Info",
      items: [
        { icon: "🆕", text: "What's New" },
        { icon: "🗓️", text: "Release Schedule" },
        { icon: "🚀", text: "Upcoming Features" }
      ]
    }
  },
  {
    id: 7,
    slug: "community-hub",
    title: "Community Hub",
    sidebar: [
      {
        id: "forums",
        title: "Community Forums"
      },
      {
        id: "templates",
        title: "Shared Templates"
      },
      {
        id: "events",
        title: "Events & Webinars"
      }
    ],
    content: {
      "forums": {
        id: "forums",
        title: "Community Forums",
        content: "Connect with other MIRYA users, share experiences, and get help from the community.",
        bulletPoints: [
          "Ask questions and get answers",
          "Share your workflows and templates",
          "Learn from community experts",
          "Participate in discussions"
        ]
      }
    },
    rightCard: {
      title: "Community",
      items: [
        { icon: "👥", text: "Join Forums" },
        { icon: "📚", text: "Template Library" },
        { icon: "🎓", text: "Upcoming Events" }
      ]
    }
  }
];