"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Variants } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const fieldVariants :Variants= {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 1.7 + i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const Contact = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    interest: "Web Development",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass = `
    w-full px-4 py-3 rounded-lg text-sm outline-none
    bg-secondary border border-tertiary-hover
    text-ring placeholder-ring
    focus:border-[var(--color-accent)] transition-colors duration-200
  `;

  const labelClass = `
    block text-xs font-semibold mb-2 tracking-wide
  `;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center px-6 py-20 md:px-16"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7, duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div>
            <h2 className="h1 mb-5">
              Get In{" "}
              <span style={{ color: "var(--color-accent)" }}>Touch</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur
              <br />
              adipisicing elit. Nesciunt, ex.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {[
              { icon: Phone, label: "+212 6-70-95-22-18", href: "tel:+212670952219" },
              { icon: Mail, label: "imanemeliane18@gmail.com", href: "mailto:imanemeliane18@gmail.com" },
              { icon: MapPin, label: "Settat, Morocco", href: null },
            ].map(({ icon: Icon, label, href }, i) => (
              <li key={i} className="flex items-center gap-3">
                <Icon size={17} strokeWidth={1.5} style={{ color: "var(--color-accent)" }} />
                {href ? (
                  <a
                    href={href}
                    className="text-sm hover:text-accent transition-colors duration-200"
                    
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-sm" >{label}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — Form */}
        <div className="flex flex-col gap-5">

          {/* First & Last name */}
          <motion.div
            custom={0}
            variants={fieldVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-4"
          >
            <div>
              <label className={labelClass}>
                Firstname <span style={{ color: "var(--color-dot)" }}>*</span>
              </label>
              <input
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
                placeholder="First name"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass} >
                Lastname <span style={{ color: "var(--color-dot)"}}>*</span>
              </label>
              <input
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                placeholder="Last name"
                className={inputClass}
              />
            </div>
          </motion.div>

          {/* Email */}
          <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="show">
            <label className={labelClass} >
              Email <span style={{ color:"var(--color-dot)" }}>*</span>
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="youremail@gmail.com"
              className={inputClass}
            />
          </motion.div>

          {/* Interest */}
          <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="show">
            <label className={labelClass} >
              I'm interested in <span style={{ color: "var(--color-dot)" }}>*</span>
            </label>
<Select value={form.interest} onValueChange={(val) => setForm({ ...form, interest: val })}>
  <SelectTrigger
    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors duration-200"
    style={{
      backgroundColor: "var(--color-select)",
      border: "1px solid #565b81",
     
    }}
  >
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>

  <SelectContent
    style={{
      backgroundColor: "#1a1d2e",
      border: "1px solid #2a2d45",
      color: "#e8e6f0",
    }}
  >
    {["Web Development", "Frontend Development", "Backend Development", "Fullstack", "Other"].map((opt) => (
      <SelectItem
        key={opt}
        value={opt}
        className="text-sm cursor-pointer focus:bg-accent focus:text-white"
        style={{ color: "#f0f3f9" }}
      >
        {opt}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
          </motion.div>

          {/* Message */}
          <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="show">
            <label className={labelClass}>
              Message <span style={{ color: "var(--color-dot)" }}>*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message.."
              rows={6}
              className={inputClass}
              style={{ resize: "none" }}
            />
          </motion.div>

          {/* Submit */}
          <motion.div custom={4} variants={fieldVariants} initial="hidden" animate="show">
            <button
              type="button"
              className="flex items-center gap-3 px-8 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "var(--color-accent)", cursor: "pointer" }}
            >
              Send message
              <span className="text-base">→</span>
            </button>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;