import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+ (94) 788514447",
      subtitle: "Monday to Friday 9am - 6pm",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "sajanasenanayke2000@gmail.com",
      subtitle: "Online support",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "address",
      details: "sri saranapala nahimi road ",
      subtitle: "Hiththetiya - Matara",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = {
      to_name: "Recipient Name", // Replace with actual recipient name
      from_name: form.name.valueOf,
      from_email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const result = await emailjs.send(
        'service_sp7dgii', // Your Service ID
        'template_z2mmebl', // Replace with your actual Template ID from EmailJS
        formData,
        'uOfrRErMrhbjeVBri' // Your Public Key
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus("success");
      form.reset();
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Leave a message!
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-800/70 transition-colors"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-500">{info.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-cyan-500 font-medium mb-1">{info.details}</p>
              <p className="text-gray-400">{info.subtitle}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                placeholder="Project Discussion"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white resize-none"
                placeholder="Your message here..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium
                flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300
                ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 text-center"
              >
                Message sent successfully!
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-center"
              >
                Error sending message. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};