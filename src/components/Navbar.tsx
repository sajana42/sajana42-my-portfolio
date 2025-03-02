import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = ["Home", "About", "Skills", "Education", "Resume", "Contact"];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent" whileHover={{
          scale: 1.05
        }}>
            Portfolio
          </motion.span>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map(item => <motion.a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors" whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }}>
                  {item}
                </motion.a>)}
            </div>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md" onClick={() => setIsOpen(false)}>
                  {item}
                </a>)}
            </div>
          </motion.div>}
      </div>
    </motion.nav>;
};