/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../higherOrderComponents";
import { slideIn } from "../utils/motion";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ahmad Waseem Piracha",
          from_email: form.email,
          to_email: "ahmadwaseempiracha@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex flex-col gap-6"
      >
        {/* Heading */}
        <div>
          <h3 className={styles.sectionHeadText}>Let's <span className="text-accent-cyan">Connect</span>.</h3>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-full mt-4"></div>
        </div>

        {/* Description */}
        <p className="text-white leading-relaxed">
          Feel free to reach out to me through any of the social media links,
          email, or contact number below. I'd love to hear from you!
        </p>

        {/* Social media links */}
        <div className="flex gap-4 mt-5">
          <a
            href="https://www.facebook.com/ahmadwaseempiracha/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-black-100/50 hover:bg-accent-cyan/20 transition-all duration-300 group"
            aria-label="Visit Facebook profile"
            title="Facebook"
          >
            <FaFacebook size={24} className="text-secondary group-hover:text-accent-cyan transition-colors" />
          </a>
          <a
            href="https://instagram.com/ahmadpiracha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-black-100/50 hover:bg-accent-cyan/20 transition-all duration-300 group"
            aria-label="Visit Instagram profile"
            title="Instagram"
          >
            <FaInstagram size={24} className="text-secondary group-hover:text-accent-cyan transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-waseem-piracha/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-black-100/50 hover:bg-accent-cyan/20 transition-all duration-300 group"
            aria-label="Visit LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedin size={24} className="text-secondary group-hover:text-accent-cyan transition-colors" />
          </a>
          <a
            href="https://wa.me/923061138468"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-black-100/50 hover:bg-accent-cyan/20 transition-all duration-300 group"
            aria-label="Contact on WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp size={24} className="text-secondary group-hover:text-accent-cyan transition-colors" />
          </a>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-3 mt-6">
          <div className="p-4 bg-black-100/30 rounded-lg flex items-center gap-3 hover:bg-accent-cyan/10 transition-all duration-300 border border-accent-violet/20">
            <FaEnvelope className="text-accent-cyan text-xl" />
            <a href="mailto:ahmadpiracha3@gmail.com" className="text-white hover:text-accent-cyan transition-colors">
              ahmadpiracha3@gmail.com
            </a>
          </div>
          <div className="p-4 bg-black-100/30 rounded-lg flex items-center gap-3 hover:bg-accent-cyan/10 transition-all duration-300 border border-accent-violet/20">
            <FaPhone className="text-accent-cyan text-xl" />
            <span className="text-white">(+92) 306 1138468</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl overflow-hidden"
      >
        <div className="relative p-8 bg-black-100 border border-accent-violet/20">
          <div className="relative z-10">
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={`${styles.sectionHeadText} text-accent-cyan`}>Contact.</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-black-200 py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-accent-violet/20 focus:border-accent-cyan/50 focus:bg-black-200/80 transition-all duration-300 font-medium"
                />
                {errors.name && <span className="text-red-400 text-sm mt-2">{errors.name}</span>}
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-black-200 py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-accent-violet/20 focus:border-accent-cyan/50 focus:bg-black-200/80 transition-all duration-300 font-medium"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm mt-2">{errors.email}</span>
                )}
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Message</span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-black-200 py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-accent-violet/20 focus:border-accent-cyan/50 focus:bg-black-200/80 transition-all duration-300 font-medium resize-none"
                />
                {errors.message && (
                  <span className="text-red-400 text-sm mt-2">{errors.message}</span>
                )}
              </label>

              <button
                type="submit"
                className="group relative py-3 px-8 rounded-lg outline-none w-fit text-white font-bold overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-violet opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>
                <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
