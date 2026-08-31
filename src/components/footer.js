"use client";
import FaqSection from "@/home.js/faqs";
import React, { useEffect, useRef } from "react";
import Glow from "./layout/bg-glow";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const mainRef = useRef(null);
  const footerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(function () {
    function updateFooter() {
      if (!footerRef.current || !mainRef.current) return;

      const footerHeight = footerRef.current.offsetHeight;
      const mainBottom =
        mainRef.current.offsetTop + mainRef.current.offsetHeight;

      const scrollBottom = window.scrollY + window.innerHeight;

      // Parallax text
      if (textRef.current) {
        const triggerPoint = mainBottom - window.innerHeight;
        if (window.scrollY >= triggerPoint) {
          const offset = window.scrollY - triggerPoint;
          textRef.current.style.transform =
            "translateY(" + offset * 0.15 + "px)";
        }
      }

      if (scrollBottom >= mainBottom) {
        footerRef.current.style.position = "fixed";
        footerRef.current.style.bottom = "0";
        footerRef.current.style.left = "0";
        footerRef.current.style.right = "0";

        document.body.style.marginBottom = footerHeight + "px";
      } else {
        footerRef.current.style.position = "relative";
        document.body.style.marginBottom = "0px";
      }
    }

    updateFooter();
    window.addEventListener("scroll", updateFooter);
    window.addEventListener("resize", updateFooter);

    return function () {
      window.removeEventListener("scroll", updateFooter);
      window.removeEventListener("resize", updateFooter);
    };
  }, []);

  return (
    <>
      <main ref={mainRef} className="w-full  relative z-10">
        <FaqSection />
      </main>

      <footer
        ref={footerRef}
        className="    text-white pt-10 pb-6 px-6 md:px-16 relative z-0 w-full"
      >
        <Glow className="top-0 left-[20%]  w-0"></Glow>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Left Logo */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image width={200} height={120} src="/logo.png" alt="logo"></Image>
            <p className="text-sm text-gray-400 max-w-xs text-center md:text-left">
              Home of Bw Task — our CRM platform for lead and task management.
            </p>
          </div>

          {/* Center Contact */}
          <div className="text-center">
            <p className="text-gray-400 mb-2">Connect with us:</p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <span className="hover:underline cursor-pointer">
                +91 96677 37755
              </span>
              <span className="hover:underline cursor-pointer">
                support@brandingwaale.com
              </span>
            </div>
          </div>

          {/* Right Address */}
          <div className="text-center md:text-right text-sm text-gray-300 leading-6">
            <p>SCF 147, Second Floor,</p>
            <p>Huda Market, Sector 37,</p>
            <p>Faridabad, Haryana 121003</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {["in", "ig", "yt", "fb"].map((icon, i) => (
            <div
              key={i}
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer"
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-4"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-300">
          <p>© 2026 Bwtasks. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:underline hover:text-white transition cursor-pointer"
            >
              Privacy Policy
            </Link>
            <a
              href="https://www.brandingwaale.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-white transition cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
