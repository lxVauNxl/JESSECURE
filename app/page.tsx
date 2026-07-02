"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";


const stats = [
  { k: "4.9", v: "Average Rating" },
  { k: "50+", v: "Happy Clients" },
  { k: "98%", v: "Client Satisfaction" },
  { k: "3+ Years", v: "Experience" },
];

const creds = [
  {
    title: "Licensed Financial Advisor",
    desc: "Providing professional and ethical financial guidance tailored to your needs.",
    icon: ShieldCheck,
  },
  {
    title: "Insurance Specialist",
    desc: "Expertise in life insurance, health protection, and long-term financial planning.",
    icon: BadgeCheck,
  },
  {
    title: "Client-Focused Approach",
    desc: "No pressure, no jargon—just clear and honest advice to help you decide.",
    icon: HeartHandshake,
  },
];

const faqs = [
  {
    q: "Is the assessment really free?",
    a: "Yes. The assessment and initial consultation are completely free with no obligation.",
  },
  {
    q: "Do I need insurance right away?",
    a: "Not necessarily. We first understand your situation and recommend only what fits you.",
  },
  {
    q: "What happens during the consultation?",
    a: "We review your answers, discuss your goals, and show plan options with no pressure.",
  },
  {
    q: "Is my information safe?",
    a: "Yes. Your data is kept private and only used to generate your personalized results.",
  },
];

const testimonials = [
  {
    name: "user1",
    video: "/vid/user.mp4",
    image: "/img/user1.jpg",
    text: "Since starting this consultation, I learned how to manage my money properly.",
  },
  {
    name: "Client 2",
    video: "/vid/user2.mp4",
    image: "/img/user2.jpg",
    text: "They helped me build a solid financial plan for my family.",
  },
  {
    name: "Client 3",
    video: "/vid/user3.mp4",
    image: "/img/user3.jpg",
    text: "Very professional and easy to understand guidance.",
  },
  {
    name: "Client 4",
    video: "/vid/user4.mp4",
    image: "/img/user4.jpg",
    text: "I feel more confident about my future now.",
  },
  {
    name: "Client 5",
    video: "/vid/user5.mp4",
    image: "/img/user5.jpg",
    text: "Highly recommend this service to anyone!",
  },
  {
    name: "Client 6",
    video: "/vid/user6.mp4",
    image: "/img/user6.jpg",
    text: "Highly recommend this service to anyone!",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonial" },
    { label: "Assessment", href: "#test" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#1a0d05]">

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 py-3 shadow-lg backdrop-blur-xl"
            : "border-b border-white/10 bg-black/20 py-5 backdrop-blur-lg"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/img/logo.png"
              alt="JesSecure Logo"
              width={48}
              height={48}
              className="rounded-full border-2 border-red-700"
            />

            <div>
              <p
                className={`font-bold ${
                  scrolled ? "text-red-700" : "text-white"
                }`}
              >
                JesSecure
              </p>

              <p
                className={`text-sm ${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Your Future
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition hover:text-[#d4a373] ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl md:hidden ${
              scrolled ? "text-red-700" : "text-white"
            }`}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="space-y-4 bg-white/95 p-6 backdrop-blur-xl md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-lg font-medium text-red-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center bg-cover bg-center px-6 pt-28"
        style={{ backgroundImage: "url('/img/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-white"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d4a373]">
              Financial Protection & Guidance
            </p>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
              Protect What Matters Most
            </h1>

            <h2 className="mt-4 text-2xl text-[#d4a373]">
              Secure Your Future with Jess
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-200">
              Helping you protect your income, family, and future through
              smart insurance planning and financial guidance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/assessment"
                className="rounded-xl bg-red-700 px-7 py-4 font-medium text-white transition hover:bg-red-800"
              >
                Take Assessment
              </Link>

              <a
                href="#services"
                className="rounded-xl border border-[#d4a373] bg-[#faf3eb] px-7 py-4 font-medium text-[#1a0d05] transition hover:bg-[#f5ebe0]"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-white py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h2 className="text-4xl font-bold text-red-700">
            What We Offer
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Personalized financial solutions designed to secure your future.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {[
              {
                href: "/services/insurance",
                image: "/img/insurance.jpg",
                title: "Insurance Planning",
                text: "Flexible and affordable plans designed to protect your future.",
              },
              {
                href: "/services/financial",
                image: "/img/financial.jpg",
                title: "Financial Planning",
                text: "Smart strategies to grow and manage your finances effectively.",
              },
              {
                href: "/services/estate",
                image: "/img/estate.jpg",
                title: "Estate Protection",
                text: "Secure your legacy and protect your loved ones long-term.",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block overflow-hidden rounded-3xl bg-[#faf3eb] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="border-t-4 border-red-700 p-7 text-left">
                    <h3 className="text-2xl font-semibold text-red-700">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-gray-600">
                      {service.text}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#faf3eb] py-24 sm:py-32"
      >

        {/* BACKGROUND DECOR */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-700 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#d4a373] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">

          {/* TOP */}
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-4xl shadow-2xl">
                <Image
                  src="/img/img1.png"
                  alt="Jess, Licensed Financial Advisor"
                  width={700}
                  height={900}
                  className="aspect-4/5 w-full object-cover"
                />
              </div>

              {/* REVIEW CARD */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-[#d4a373]/20 bg-white p-5 shadow-xl sm:block"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#d4a373] text-[#d4a373]"
                    />
                  ))}
                </div>

                <p className="mt-2 text-xs text-gray-600">
                  Trusted by 50+ Filipino families
                </p>
              </motion.div>
            </motion.div>

            {/* CONTENT */}
            <div>

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">
                About JesSecure
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#1a0d05] sm:text-5xl">
                A trusted partner in your financial future
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                JesSecure is dedicated to helping individuals and families build
                financial security through smart insurance planning. We simplify
                complex decisions and guide you toward the right protection
                based on your real-life needs.
              </p>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.v}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="rounded-2xl border border-[#d4a373]/20 bg-white p-5 text-center shadow-lg"
                  >
                    <div className="text-3xl font-bold text-red-700">
                      {s.k}
                    </div>

                    <div className="mt-2 text-[11px] uppercase tracking-widest text-gray-500">
                      {s.v}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CREDENTIALS */}
          <div className="mt-28">
            <h3 className="text-center text-4xl font-bold text-[#1a0d05]">
              Credentials & Expertise
            </h3>

            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {creds.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-[#d4a373]/20 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-50 text-red-700">
                    <c.icon className="h-7 w-7" />
                  </div>

                  <h4 className="mt-6 text-2xl font-semibold text-[#1a0d05]">
                    {c.title}
                  </h4>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    {c.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mx-auto mt-28 max-w-4xl">
            <h3 className="text-center text-4xl font-bold text-[#1a0d05]">
              Frequently Asked Questions
            </h3>

            <div className="mt-12 space-y-5">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="overflow-hidden rounded-2xl border border-[#d4a373]/20 bg-white shadow-lg"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === i ? null : i)
                    }
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-red-700">
                      {faq.q}
                    </span>

                    <span className="text-xl text-red-700">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === i && (
                    <div className="px-6 pb-6 text-sm leading-relaxed text-gray-600">
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonial"
        className="bg-gray-100 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h2 className="text-4xl font-bold text-red-700">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Real stories from people who secured their future with us.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {testimonials.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="h-56 overflow-hidden">
                  <video
                    src={client.video}
                    controls
                    preload="none"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6 text-left">
                  <p className="italic leading-relaxed text-gray-700">
                    “{client.text}”
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-semibold text-red-700">
                        {client.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        Client
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="test"
        className="bg-linear-to-br from-[#faf3eb] to-white py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h2 className="text-4xl font-bold text-red-700">
            Start Your Free Assessment
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-700">
            Answer a few quick questions so we can recommend the best
            financial plan for your goals and future.
          </p>

          <div className="mt-12 overflow-hidden rounded-4xl border border-[#d4a373]/20 bg-white shadow-2xl">
            <iframe
              src="/assessment"
              className="min-h-175 w-full"
            />
          </div>

          
        </div>
      </section>

{/* FLOATING BUTTON */}
<button
  onClick={() =>
    window.open(
      "https://calendly.com/coolboygamer107/30min",
      "_blank",
      "noopener,noreferrer"
    )
  }
  title="Book a Free Consultation"
  aria-label="Book a Free Consultation"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-linear-to-r from-red-700 to-[#1a0d05] px-5 py-4 text-white shadow-2xl transition hover:scale-110"
>
  <span className="text-xl">📅</span>

  <span className="hidden sm:inline font-medium">
  </span>
</button>



{/* FOOTER */}
<footer className="border-t border-gray-800 bg-[#0f0f0f]">
  <div className="max-w-7xl mx-auto px-6 py-10">

    <div className="grid md:grid-cols-4 gap-8">

      {/* Brand */}
      <div>
        <h3 className="text-xl font-bold text-white">
          JesSecure
        </h3>

        <p className="mt-3 text-sm text-gray-400">
          Helping Filipino families identify protection gaps and
          make informed financial decisions through personalized
          assessments and expert guidance.
        </p>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-semibold text-white mb-3">
          Services
        </h4>

        <ul className="space-y-2 text-sm text-gray-400">
          <li>Protection Gap Assessment</li>
          <li>Life Insurance Planning</li>
          <li>Health Protection</li>
          <li>Financial Consultation</li>
        </ul>
      </div>

     {/* Partners */}
<div>
  <h4 className="font-semibold text-white mb-3">
   Our Insurance Agency
  </h4>

  <div className="space-y-4">

    {/* REDLIA Logo */}
    <img
      src="/img/REDLIA.jpg"
      alt="REDLIA"
      className="h-16 w-auto object-contain"
    />

    <div>
          <p className="text-sm font-semibold text-white">
            RISING EAGLE DYNASTY LIFE INSURANCE AGENCY INC.
          </p>

          <p className="text-xs text-gray-400 mt-1">
            In Partnership with{" "}
            <span className="text-red-500">
              Pru Life UK
            </span>
          </p>
        </div>

    

  </div>
</div>
      {/* Contact */}
      <div>
        <h4 className="font-semibold text-white mb-3">
          Contact
        </h4>

        <div className="space-y-2 text-sm text-gray-400">

          <p>📧 plukjessicaodquin@gmail.com</p>

          <a
            href="https://calendly.com/coolboygamer107/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-red-500 hover:text-red-400 font-medium transition"
          >
            📅 Book Free Consultation
          </a>
        </div>
      </div>
    </div>

    {/* Trust Badges */}
    <div className="border-t border-gray-800 mt-8 pt-6">
      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
        <span>🔒 Secure Form Submission</span>
        <span>📧 Powered by EmailJS</span>
        <span>📅 Powered by Calendly</span>
        <span>🛡️ Financial Protection Assessment</span>
      </div>
    </div>

    {/* Legal */}
    <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
      <p>
        JesSecure complies with the Data Privacy Act of 2012
        (RA 10173). Information submitted through this website
        is used solely for assessment and consultation purposes.
      </p>

      <div className="mt-4 flex flex-wrap justify-center gap-6">
        <a
          href="/privacy-policy"
          className="hover:text-red-500 transition"
        >
          Privacy Policy
        </a>

        <a
          href="/terms"
          className="hover:text-red-500 transition"
        >
          Terms & Conditions
        </a>

        <a
          href="/data-privacy"
          className="hover:text-red-500 transition"
        >
          Data Privacy Notice
        </a>
      </div>

      <p className="mt-6 text-gray-500">
        © 2026{" "}
        <span className="font-semibold text-white">
          JesSecure
        </span>
        . All rights reserved.
      </p>

      <p className="mt-2 text-xs text-gray-600">
        JesSecure is an independent financial education and
        advisory platform. Insurance products and financial
        solutions are offered through our accredited partners.
      </p>
    </div>

  </div>
</footer>
    </div>
  );
}