import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
export const Footer = () => {
  const socialLinks = [{
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/sajana42",
    label: "GitHub"
  }, {
    icon: <Linkedin className="w-5 h-5" />,
    href: "www.linkedin.com/insajana-senanayake-227306308",
    label: "LinkedIn"
  }, {
    icon: <Twitter className="w-5 h-5" />,
    href: "#",
    label: "Twitter"
  }, {
    icon: <Mail className="w-5 h-5" />,
    href: "#",
    label: "Email"
  }];
  const quickLinks = [{
    name: "About",
    href: "#about"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Education",
    href: "#education"
  }, {
    name: "Resume",
    href: "#resume"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <footer className="py-12 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-4">
              sajana senanayake .portfolio
            </h3>
            <p className="text-gray-400">
              Turning innovative ideas into electronic reality through expertise
              and dedication.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-500 transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map(link => <a key={link.label} href={link.href} className="text-gray-400 hover:text-cyan-500 transition-colors" aria-label={link.label}>
                  {link.icon}
                </a>)}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} SS.Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};