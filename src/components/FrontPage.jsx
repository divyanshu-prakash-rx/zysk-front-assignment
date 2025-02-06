import React, { useState } from "react";
import {
  Share,
  Zap,
  FileText,
  Users,
  Link,
  Headphones,
  ChevronRight,
  Plus,
} from "lucide-react";
import front_top from "../images/front_top.png";

const FAQ_ITEMS = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can change your plan at any time.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add additional information to your invoices.",
  },
  {
    question: "How does billing work?",
    answer: "We bill monthly based on your selected plan.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your account email in your account settings.",
  },
];
const FOOTER_LINKS = {
  Product: [
    "Overview",
    "Features",
    "Solutions",
    "Tutorials",
    "Pricing",
    "Releases",
  ],
  Company: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
  Resources: [
    "Blog",
    "Newsletter",
    "Events",
    "Help center",
    "Tutorials",
    "Support",
  ],
  "Use cases": [
    "Startups",
    "Enterprise",
    "Government",
    "SaaS center",
    "Marketplaces",
    "Ecommerce",
  ],
  Social: ["Twitter", "LinkedIn", "GitHub", "AngelList", "Dribbble"],
  Legal: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
};
const BLOG_POSTS = [
  {
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "/api/placeholder/400/300",
    author: {
      name: "Olivia Rhye",
      avatar: "/api/placeholder/40/40",
      date: "20 Jan 2024",
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: "/api/placeholder/400/300",
    author: {
      name: "Phoenix Baker",
      avatar: "/api/placeholder/40/40",
      date: "19 Jan 2024",
    },
  },
  {
    title: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    image: "/api/placeholder/400/300",
    author: {
      name: "Lana Steiner",
      avatar: "/api/placeholder/40/40",
      date: "18 Jan 2024",
    },
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="text-center">
    <Icon className="w-8 h-8 mx-auto mb-4" />
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => (
  <div className="py-16 text-center">
    <h3 className="text-3xl font-bold mb-4">
      Analytics that feels like it's from the future
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: Share,
          title: "Share team indexes",
          description: "Keep everyone on the same page.",
        },
        {
          icon: Zap,
          title: "Deliver instant answers",
          description: "At-a-glance customer analytics.",
        },
        {
          icon: FileText,
          title: "Manage reports",
          description: "Measure with customizable reports.",
        },
        {
          icon: Users,
          title: "Connect with customers",
          description: "Establish customer-first relationships.",
        },
        {
          icon: Link,
          title: "Connect tools",
          description: "Explore 100+ integrations.",
        },
        {
          icon: Headphones,
          title: "Great support",
          description: "Our people make the difference.",
        },
      ].map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <Plus
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQSection = () => (
  <div className="py-16 text-center">
    <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
    <div className="max-w-3xl mx-auto">
      {FAQ_ITEMS.map((item, index) => (
        <FAQItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const BlogCard = ({ post }) => (
  <div className="group">
    <img src={post.image} alt={post.title} className="rounded-lg w-full mb-4" />
    <h3 className="font-semibold group-hover:text-purple-600 mb-2">
      {post.title}
    </h3>
    <p className="text-gray-600 mb-4">{post.description}</p>
  </div>
);

const BlogSection = () => (
  <div className="py-16">
    <h3 className="text-2xl font-bold mb-8">Latest blog posts</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {BLOG_POSTS.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer className="py-16">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
      {Object.entries(FOOTER_LINKS).map(([category, links]) => (
        <div key={category}>
          <h3 className="font-semibold mb-4">{category}</h3>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <a href="/" className="text-gray-500 hover:text-gray-900">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="text-center text-gray-500 text-sm">
      © 2024 Untitled UI. All rights reserved.
    </div>
  </footer>
);

const FrontPage = () => (
  <div className="flex flex-col items-center justify-center">
  <div className="mx-5 my-5 px-4">
    <div className="flex items-center justify-center py-4 mt-24 mb-4">
      <button className="flex items-center space-x-3 px-4 py-2 border border-red-300 text-red-500 rounded-full bg-red-50 hover:bg-red-100 transition">
        <span className="bg-red-200 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">
          New feature
        </span>
        <span className="text-sm font-medium">
          Check out the team dashboard
        </span>
        <ChevronRight className="w-4 h-4 text-red-500" />
      </button>
    </div>
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-7">
        Beautiful analytics to grow smarter
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="flex items-center justify-center gap-8 mb-6">
        <button className="px-4 py-2 border rounded-full hover:bg-gray-50">
          Demo
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
          Sign up
        </button>
      </div>
      <div className="mb-4 relative overflow-hidden">
        <img
          src={front_top}
          className="rounded-lg mx-auto md:translate-y-[15%] border-4 border-black md:max-w-7xl"
        />
      </div>
    </div>
    <FeaturesSection />
    <FAQSection />
    <BlogSection />
    <Footer />
  </div></div>
);

export default FrontPage;
