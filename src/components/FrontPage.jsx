import React, { useState } from "react";
import { ChevronRight, Plus } from "lucide-react";
import company_1 from "../images/CompanyLogos/company_1.png";
import company_2 from "../images/CompanyLogos/company_2.png";
import company_3 from "../images/CompanyLogos/company_3.png";
import company_4 from "../images/CompanyLogos/company_4.png";
import company_5 from "../images/CompanyLogos/company_5.png";
import company_6 from "../images/CompanyLogos/company_6.png";
import feature_1 from "../images/FeatureLogos/feature_1.png";
import feature_2 from "../images/FeatureLogos/feature_2.png";
import feature_3 from "../images/FeatureLogos/feature_3.png";
import feature_4 from "../images/FeatureLogos/feature_4.png";
import feature_5 from "../images/FeatureLogos/feature_5.png";
import feature_6 from "../images/FeatureLogos/feature_6.png";
import companyLogo from "../images/CompanyLogos/company_7.png";
import blog1 from "../images/Blogs/Blog_1.png";
import blog2 from "../images/Blogs/Blog_2.png";
import blog3 from "../images/Blogs/Blog_3.png";
import avatar5 from "../images/Avatars/Avatar_5.png";
import avatar6 from "../images/Avatars/Avatar_6.png";
import avatar1 from "../images/Avatars/Avatar_1.png";
import avatar3 from "../images/Avatars/Avatar_3.png";
import avatar4 from "../images/Avatars/Avatar_4.png";
import profilePic from "../images/Avatars/Avatar_2.png";
import front_top from "../images/front_top.png";
import logo from "../images/logo.png";

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
const features = [
  {
    icon: feature_1,
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: feature_2,
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: feature_3,
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.",
  },
  {
    icon: feature_4,
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: feature_5,
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: feature_6,
    title: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat with our friendly team 24/7 when you need help.",
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
    category: "Design",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: blog1,
    author: {
      name: "Olivia Rhye",
      avatar: avatar1,
      date: "20 Jan 2024",
    },
  },
  {
    title: "Migrating to Linear 101",
    category: "Product",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: blog2,
    author: {
      name: "Phoenix Baker",
      avatar: avatar5,
      date: "19 Jan 2024",
    },
  },
  {
    title: "Building your API stack",
    category: "Software Engineering",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    image: blog3,
    author: {
      name: "Lana Steiner",
      avatar: avatar6,
      date: "18 Jan 2024",
    },
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="text-center">
    <img src={Icon} className="w-8 h-8 mx-auto mb-4" />
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => (
  <div className="py-16 text-center mt-16">
    <h3 className="text-lg font-bold mb-4 text-red-500">Features</h3>
    <h3 className="text-3xl font-semibold mb-4">
      Analytics that feels like it's from the future
    </h3>
    <h2 className="text-gray-600 max-w-xl mx-auto mb-10">
      Powerful, self-serve product and growth analytics to help you convert,
      engage, and retain more users. Trusted by over 4,000 startups
    </h2>
    <div className="py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
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

const BlogCard = ({ post }) => (
  <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition p-4">
    <img src={post.image} alt={post.title} className="rounded-lg w-full mb-4" />

    <p className="text-red-500 text-sm font-semibold">{post.category}</p>

    <h3 className="font-semibold text-lg group-hover:text-purple-600 mb-2">
      {post.title}
    </h3>

    <p className="text-gray-600 text-sm mb-4">{post.description}</p>

    <div className="flex items-center space-x-3 mt-4">
      <img
        src={post.author.avatar}
        alt={post.author.name}
        className="w-8 h-8 rounded-full"
      />
      <div>
        <p className="text-gray-900 font-medium text-sm">{post.author.name}</p>
        <p className="text-gray-500 text-xs">{post.author.date}</p>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="py-16 ">
    <div className="flex flex-col justify-start items-start md:justify-center md:items-center ps-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 md:gap-32 gap-8 mb-8">
      {Object.entries(FOOTER_LINKS).map(([category, links]) => (
        <div key={category}>
          <h3 className="font-semibold mb-4 text-gray-500">{category}</h3>
          <ul>
            {links.map((link) => (
              <li key={link} className="mb-2">
                <a href="/" className="">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div></div>
    <div className="flex md:justify-between text-gray-500 text-sm border-t pt-3">
      <img src={logo} alt="logo" />
      <h2>
      © 2077 zysktechnologies. All rights reserved.</h2>
    </div>
  </footer>
);

const FrontPage = () => (
  <>
    <div className="flex flex-col items-center justify-center">
      {/* top_part of the front page */}
      <div className=" my-5">
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
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className="flex items-center justify-center gap-8 mb-6">
            <button className="px-4 py-2 border rounded-full hover:bg-gray-50">
              Demo
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
              Sign up
            </button>
          </div>
          <div className="mb-4 relative overflow-hidden px-4">
            <img
              src={front_top}
              className="rounded-lg mx-auto lg:translate-y-[15%] border-4 border-black lg:max-w-7xl"
            />
          </div>
        </div>
        <div className="py-8 px-4 md:px-20">
          <p className="text-center text-gray-600 mb-6">
            Join 4,000+ companies already growing
          </p>

          {/* Logos Grid */}
          <div className="max-w-6xl mx-auto p-4 ">
            <div className="grid grid-cols-2 lg:flex lg:justify-between lg:items-center gap-6 lg:gap-8">
              <img src={company_1} alt="Company 1" className="h-10 md:h-10 " />
              <img src={company_2} alt="Company 2" className="h-10 md:h-10 " />
              <img src={company_3} alt="Company 3" className="h-10 md:h-10 " />
              <img src={company_4} alt="Company 4" className="h-10 md:h-10 " />
              <img src={company_5} alt="Company 5" className="h-10 md:h-10 " />
              <img src={company_6} alt="Company 6" className="h-10 md:h-10 " />
            </div>
          </div>
        </div>
      </div>
      {/*feature part */}
      <FeaturesSection />

      <div
        className="flex flex-col items-center text-center py-16 px-4 w-full"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <img src={companyLogo} alt="Sisyphus Logo" className=" mb-4" />

        <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed max-w-3xl">
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </p>
        <div className="mt-6 flex flex-col items-center">
          <img
            src={profilePic}
            alt="Candice Wu"
            className="w-12 h-12 rounded-full mb-2"
          />
          <h3 className="text-gray-900 font-semibold">Candice Wu</h3>
          <p className="text-gray-500 text-sm">Product Manager, Sisyphus</p>
        </div>
      </div>
      {/* FAQ and Blog section */}
      <div className="py-16 w-3xl mx-auto px-6 my-4 w-full">

        <h2 className="text-3xl font-bold mb-4 text-center">Frequently asked questions</h2>
        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-10 max-w-6xl mx-auto text-center w-full mb-28">
        <div className="flex justify-center -space-x-2 mb-4">
          <img
            src={avatar1}
            alt="Support 1"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src={avatar3}
            alt="Support 2"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src={avatar4}
            alt="Support 3"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          Still have questions?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Can't find the answer you're looking for? Please chat with our
          friendly team.
        </p>

        <button className="bg-red-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-red-600">
          Get in touch
        </button>
      </div>
      <div className="py-16 max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-red-500 font-semibold">Our blog</p>
            <h3 className="text-2xl font-bold">Latest blog posts</h3>
            <p className="text-gray-600">
              Tools and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold">
            View all posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>

      <div
        className="flex flex-col items-center text-center py-16 px-4 w-full"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed max-w-3xl mb-4">Start your free trial</h3>

        <p className="text-gray-500">
        Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="mt-6 flex flex-row items-center gap-4">
           <button className="border border-black font-medium px-4 py-2 rounded-lg hover:bg-gray-600">
          Learn More
        </button>
           <button className="bg-red-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-red-600">
          Get in touch
        </button>
        </div>
      </div>

      <Footer />
    </div>
  </>
);

export default FrontPage;
