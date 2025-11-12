"use client";

import { motion } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setSuccess("");

    emailjs
      .sendForm(
        "service_tshs7an", // Service ID
        "template_60ebxj7", // Template ID
        form.current,
        "yKkNfloeDr4_DMgho" // Public Key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setSuccess("✅ Message sent successfully!");
          form.current?.reset();
          setLoading(false);
        },
        (error) => {
          console.log("Error:", error.text);
          setSuccess("❌ Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8 md:gap-12 lg:gap-16">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full max-w-2xl"
          >
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 sm:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-white via-indigo-400 to-sky-400 text-transparent bg-clip-text">
                  <span className="text-2xl sm:text-3xl">✉️</span> Contact Us
                </h3>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                  Contact us for more information and get notified when I publish something new.
                </p>
              </motion.div>

              {/* Name Input */}
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="p-3 sm:p-4 rounded-xl border border-indigo-500/50 bg-indigo-500/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
              />

              {/* Email Input */}
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="p-3 sm:p-4 rounded-xl border border-indigo-500/50 bg-indigo-500/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
              />

              {/* Message */}
              <motion.textarea
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="p-3 sm:p-4 rounded-xl border border-indigo-500/50 bg-indigo-500/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-none backdrop-blur-sm"
              ></motion.textarea>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className={`bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 transition-all duration-300 py-3 sm:py-4 rounded-xl font-semibold text-white mt-2 text-sm sm:text-base shadow-lg hover:shadow-indigo-500/50 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Submit"}
              </motion.button>

              {/* Success / Error Message */}
              {success && <p className="mt-2 text-sm text-white">{success}</p>}
            </form>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full max-w-sm lg:max-w-md relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <img
                src="./landing-image.png"
                alt="Contact Image"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
