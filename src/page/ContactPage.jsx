// ContactMe.jsx
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  FaWhatsapp, FaLinkedin, FaGithub, FaYoutube, FaMapMarkerAlt, 
  FaEnvelope, FaClock, FaUser, FaPaperPlane 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const ContactMe = () => {
  const pageRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const formElementsRef = useRef([]);
  const infoElementsRef = useRef([]);
  
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa758943-87d2-4e9b-ae33-04d3c123e88d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setShowPopup(true); // Show popup
      event.target.reset();

      // Hide popup after 2 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(pageRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(formElementsRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)", delay: 0.5 }
      );

      gsap.fromTo(infoRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.8 }
      );

      gsap.fromTo(infoElementsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out", delay: 1.2 }
      );

    }, pageRef);

    return () => ctx.revert();
  }, []);

  const addToFormRefs = (el) => {
    if (el && !formElementsRef.current.includes(el)) {
      formElementsRef.current.push(el);
    }
  };

  const addToInfoRefs = (el) => {
    if (el && !infoElementsRef.current.includes(el)) {
      infoElementsRef.current.push(el);
    }
  };

  const handleInputFocus = (e) => {
    gsap.to(e.target, { scale: 1.02, duration: 0.3, ease: "power2.out" });
  };

  const handleInputBlur = (e) => {
    gsap.to(e.target, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div ref={pageRef} className="min-h-screen transition-colors duration-300 p-4 md:p-8 relative">

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-black/10 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl w-[320px] text-center animate-fadeIn">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <span className="text-green-600 text-2xl">✔</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Submitted Successfully</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your message has been sent!
              </p>
            </div>
          </div>
        </div>
      )}


      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">Get In Touch</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          Let's work together on your next project
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Box */}
          <div ref={formRef} className="lg:w-2/3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-2xl rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 dark:border-gray-700/20">
            <form onSubmit={onSubmit} className="space-y-6">
              <div ref={addToFormRefs}>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
                <input type="text" id="name" name="name" required
                  onFocus={handleInputFocus} onBlur={handleInputBlur}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 rounded-lg focus:outline-none focus:border-blue-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Enter your full name" />
              </div>

              <div ref={addToFormRefs}>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email Address</label>
                <input type="email" id="email" name="email" required
                  onFocus={handleInputFocus} onBlur={handleInputBlur}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 rounded-lg focus:outline-none focus:border-blue-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Enter your email" />
              </div>

              <div ref={addToFormRefs}>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" name="subject" required
                  onFocus={handleInputFocus} onBlur={handleInputBlur}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 rounded-lg focus:outline-none focus:border-blue-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="What's this about?" />
              </div>

              <div ref={addToFormRefs}>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" name="message" rows="5" required
                  onFocus={handleInputFocus} onBlur={handleInputBlur}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 rounded-lg focus:outline-none focus:border-blue-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."></textarea>
              </div>

              <button ref={addToFormRefs} type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Box */}
          <div ref={infoRef} className="lg:w-1/3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-2xl rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 dark:border-gray-700/20">
            <h2 ref={addToInfoRefs} className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-white">
              <FaUser className="text-blue-500" />
              Contact Information
            </h2>
            
            <div className="space-y-6">
              {/* WhatsApp */}
              <div ref={addToInfoRefs} className="flex items-center gap-3 p-3 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-300 group">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp className="text-green-500 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">WhatsApp</p>
                  <p className="font-medium text-gray-800 dark:text-white">+01405409474</p>
                </div>
              </div>

              {/* Email */}
              <div ref={addToInfoRefs} className="flex items-center gap-3 p-3 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-300 group">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-red-500 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Email</p>
                  <p className="font-medium text-gray-800 dark:text-white">rudrobairagi33@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div ref={addToInfoRefs} className="flex items-center gap-3 p-3 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-300 group">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-orange-500 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Address</p>
                  <p className="font-medium text-gray-800 dark:text-white">Khulna, Bangladesh</p>
                </div>
              </div>

              {/* Work Time */}
              <div ref={addToInfoRefs} className="flex items-center gap-3 p-3 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-300 group">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaClock className="text-yellow-500 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Freelance Work Time</p>
                  <p className="font-medium text-gray-800 dark:text-white">Full Time</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div ref={addToInfoRefs} className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Follow Me</h3>
              <div className="flex gap-3">
                {[
                  { icon: FaLinkedin, color: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400", href: "https://www.linkedin.com/in/rudro-boiragi-05697831b/", label: "LinkedIn" },
                  { icon: FaXTwitter, color: "bg-white dark:bg-gray-700/30", text: "text-gray-800 dark:text-white", href: "https://x.com/rudrobairagi231", label: "Twitter" },
                  { icon: FaGithub, color: "bg-gray-100 dark:bg-gray-700/30", text: "text-gray-800 dark:text-gray-300", href: "https://github.com/rudro3132004", label: "GitHub" },
                  { icon: FaYoutube, color: "bg-red-100 dark:bg-red-900/30", text: "text-red-600 dark:text-red-400", href: "https://www.youtube.com/@ProgrammingWorld-f1z", label: "YouTube" }
                ].map((social, index) => (
                  <a key={index} href={social.href} aria-label={social.label}
                    className={`p-3 ${social.color} rounded-lg backdrop-blur-sm hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg`}>
                    <social.icon className={`text-xl ${social.text}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
