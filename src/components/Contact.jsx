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
        <h3 className={styles.sectionHeadText}>Let's Connect.</h3>

        {/* Description */}
        <p className="text-white">
          Feel free to reach out to me through any of the social media links,
          email, or contact number below. I'd love to hear from you!
        </p>
        {/* Social media links */}
        <div className="flex gap-4 mt-5 justify-center">
          <div className="icon-container group relative">
            <a
              href="https://www.facebook.com/ahmadwaseempiracha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaFacebook size={24} />
            </a>
            <p className="opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded py-1 px-2 absolute top-[-30px] left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
              Facebook
            </p>
          </div>
          <div className="icon-container group relative">
            <a
              href="https://instagram.com/ahmadpiracha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaInstagram size={24} />
            </a>
            <p className="opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded py-1 px-2 absolute top-[-30px] left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
              Instagram
            </p>
          </div>
          <div className="icon-container group relative">
            <a
              href="https://www.linkedin.com/in/ahmad-waseem-piracha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <p className="opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded py-1 px-2 absolute top-[-30px] left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
              LinkedIn
            </p>
          </div>
          <div className="icon-container group relative">
            <a
              href="https://wa.me/923061138468"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaWhatsapp size={24} />
            </a>
            <p className="opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded py-1 px-2 absolute top-[-30px] left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
              WhatsApp
            </p>
          </div>
        </div>

        {/* Email and contact number */}
        <div className="flex justify-center gap-4">
          <FaEnvelope size={24} className="text-white" />
          <a href="mailto:ahmadpiracha3@gmail.com" className="text-white">
            ahmadpiracha3@gmail.com
          </a>
        </div>
        <div className="flex justify-center gap-4">
          <FaPhone size={24} className="text-white" />
          <span className="text-white">(+92) 306 1138468</span>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

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
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
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
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
