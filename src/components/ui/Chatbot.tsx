import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  hasVideo?: boolean;
  videoSrc?: string;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Namaste! Welcome to Arodos Technologies! 🚀 I am your AI assistant with complete website knowledge. Ask me about: 🏠 Home 🛠️ Services 🌟 Why Us 🏢 About Us 👥 Clients ⚡ Agile Approach 📞 Contact Us. I have detailed information about everything!',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node) && 
          videoRef.current && !videoRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getResponse = (question: string): string | { text: string; hasVideo: boolean; videoSrc: string } => {
    const q = question.toLowerCase();
    
    // Home Section
    if (q.includes('home') || q.includes('welcome') || q.includes('main') || q.includes('intro') || q.includes('hero')) {
      return '🏠 Welcome to Arodos Technologies! Build Innovative Solutions at Affordable Cost. We are trusted globally for reliable, high-performance Web, Mobile, ERP, CRM, and AI Development - delivered on time, within budget, & built to last. ⭐ 4.7/5 rating from 100+ happy customers. 📊 Our Stats: 98% On-Time Delivery, 75 Apps Launched, 120+ Projects Completed. Born in Assam, built with global ambition - we partner with businesses across India, US, Canada, and worldwide!';
    }
    
    // Services Section
    if (q.includes('service') || q.includes('what do you do') || q.includes('offer') || q.includes('solutions')) {
      return '🛠️ Our Services - Turning ideas into scalable, innovative digital products: 1️⃣ Custom Websites & Mobile Apps - User-centric, performance-driven digital experiences designed to engage, convert, and scale. Tailored, intuitive, and built for impact. 2️⃣ ERP, CRM & AI Solutions - Unique approach combining intelligence, efficiency, and security. Systems that think, adapt, and grow with your business. 3️⃣ Technology Assessment - Deep-dive audits uncovering hidden inefficiencies and untapped opportunities. 4️⃣ Strategic IT Planning - Tailored IT strategies aligned with your vision, accelerating growth and maximizing ROI.';
    }
    
    // Why Us / Core Principles
    if (q.includes('why us') || q.includes('why choose') || q.includes('advantage') || q.includes('benefits') || q.includes('unique') || q.includes('principle') || q.includes('core')) {
      return '🌟 5 Core Principles that Keep Arodos Ahead: 1️⃣ Client-Centric Approach - Your goals at the heart of every solution, exceeding expectations 2️⃣ Professional Excellence - Skilled professionals combining creativity, precision, and technical expertise 3️⃣ Innovation & Impact - Transforming challenges into opportunities with smarter, faster solutions 4️⃣ Quality & Assurance - Secure, scalable, future-ready projects with highest quality standards 5️⃣ Affordable & Transparent - High-performance solutions without compromising cost or clarity. 📈 Track Record: 35+ brands partnered, 98% client satisfaction, 12+ industries served.';
    }
    
    // About Us / CEO / Team
    if (q.includes('about') || q.includes('company') || q.includes('history') || q.includes('founded') || q.includes('team') || q.includes('ceo') || q.includes('dhruba') || q.includes('sarma')) {
      return '🏢 About Arodos Technologies: Founded post-COVID in Assam, India with global vision. 👨‍💼 CEO Dhruba Sarma - 15+ years tech leadership, managed 100+ developers. Philosophy: "Quality should never be compromised for quantity." 🎯 Vision: Lead with innovation, deliver solutions that evolve to power tomorrow\'s opportunities. 🎯 Mission: Client-first approach, delivering tailored solutions built on quality, innovation, and long-term value. Every project crafted with precision by experienced professionals. 🌍 Offices: Guwahati & Bangalore, serving globally. Creating opportunities for brilliant minds across India to explore cutting-edge technology horizons.';
    }
    
    // Agile Approach / Methodology
    if (q.includes('agile') || q.includes('approach') || q.includes('methodology') || q.includes('process') || q.includes('work')) {
      return '⚡ Agile Approach: We thrive on collaboration, combining professional expertise with problem-solving mindset. Our team works seamlessly to deliver tailored, scalable solutions—ensuring quality, agility, and measurable impact at every step. 🎯 Three Pillars: 1️⃣ Customer First - Putting customers at heart of everything, delivering value, trust, and long-term relationships 2️⃣ Professional - Excellence backed by deep knowledge and customer-focused approach 3️⃣ Problem Solver - Turning challenges into opportunities with smart, effective, actionable solutions.';
    }
    
    // Clients / Testimonials
    if (q.includes('client') || q.includes('customer') || q.includes('testimonial') || q.includes('review') || q.includes('feedback')) {
      return '👥 Our Clients: We build trust through strong partnerships, blending expertise with innovation. 📊 Stats: 35+ brands partnered, 98% client satisfaction, 12+ industries served. 🏢 Notable Clients: YHA India, Aurobindo, Aulas, Zemidi, Minbury, Electrower, Brigosha. 💬 What Clients Say: "Transforming visionary ideas into powerful, user-centric digital solutions that drive innovation, enhance operational efficiency, and accelerate sustainable business growth." We ensure flexibility, quality, and impactful results every time.';
    }
    
    // Contact Us Section
    if (q.includes('contact') || q.includes('reach') || q.includes('phone') || q.includes('email') || q.includes('address') || q.includes('location') || q.includes('touch')) {
      return '📞 Get in Touch - Ready to transform your digital ideas into reality? 📱 Phone: +919620861198 📧 Email: contact@arodos.com 🌐 Website: www.arodos.com 📍 Locations: Guwahati & Bangalore, India 🌍 Global Presence: Serving India, US, Canada, and worldwide. Available for phone, email, website contact form, or video calls. Our team is ready for consultations and project planning. Let\'s start building something exceptional!';
    }
    
    // Vision Mission specific
    if (q.includes('vision') || q.includes('mission') || q.includes('goal') || q.includes('purpose')) {
      return '🎯 Our Vision: To lead with innovation and deliver digital solutions that don\'t just meet today\'s challenges but evolve to power tomorrow\'s opportunities. 🎯 Our Mission: We put clients first, delivering tailored digital solutions built on quality, innovation, and long-term value. Every project is crafted with precision and handled by experienced professionals to ensure measurable impact. As our clients grow, we grow—building lasting partnerships rooted in trust and customer satisfaction.';
    }
    
    if (q.includes('demo') || q.includes('video') || q.includes('presentation') || q.includes('showcase') || q.includes('watch')) {
      return { text: 'Here is a video presentation showcasing our company and services!', hasVideo: true, videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1' };
    }
    
    return 'Hello! I am your Arodos Technologies assistant. I have comprehensive information about: 🏠 Home - Company overview, stats, and introduction 🛠️ Services - Our 4 core technology solutions 🌟 Why Us - 5 core principles and competitive advantages 🏢 About Us - Company history, CEO insights, and team 👥 Clients - Our partnerships and testimonials ⚡ Agile Approach - Our methodology and work process 📞 Contact Us - Get in touch information. Ask me about any of these topics!';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsLoading(true);

    setTimeout(() => {
      const response = getResponse(currentInput);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: typeof response === 'string' ? response : response.text,
        isUser: false,
        timestamp: new Date(),
        hasVideo: typeof response === 'object' ? response.hasVideo : false,
        videoSrc: typeof response === 'object' ? response.videoSrc : undefined
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <style>{`
        .cyber-glow {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3);
        }
        .neon-border {
          border: 1px solid rgba(0, 255, 255, 0.6);
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.3), inset 0 0 10px rgba(0, 255, 255, 0.1);
        }
        .hologram {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 40, 0.95));
          backdrop-filter: blur(10px);
        }
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.5); }
          50% { box-shadow: 0 0 30px rgba(255, 0, 255, 0.7); }
        }
        .pulse-glow { animation: pulse-glow 2s infinite; }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-in { animation: slide-in 0.5s ease-out; }
        video::-webkit-media-controls-picture-in-picture-button {
          display: none !important;
        }
        video::-webkit-media-controls {
          display: none !important;
        }
      `}</style>

      {/* Toggle Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 z-50">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin" style={{ animationDuration: '4s' }}></div>
          <video
            ref={videoRef}
            onClick={() => {
              setIsOpen(!isOpen);
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
              }
            }}
            className="absolute inset-1 sm:inset-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer object-cover pulse-glow transition-all duration-300 hover:scale-110"
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src="/videos/gifrobot.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          ref={chatRef} 
          className="fixed bottom-16 right-2 left-2 sm:bottom-24 sm:right-6 sm:left-auto w-auto sm:w-96 hologram neon-border rounded-2xl flex flex-col z-50 transition-all duration-500"
          style={{ 
            top: '20px',
            maxHeight: 'calc(100vh - 100px)',
            height: 'auto',
            minHeight: '400px'
          }}
        >
          {/* Header */}
          <div className="p-3 sm:p-4 border-b border-cyan-400/30 rounded-t-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
            <h3 className="font-bold text-lg sm:text-xl text-cyan-300" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }}>
              ARODOS AI
            </h3>
            <p className="text-xs sm:text-sm text-purple-300 font-mono">Arodos Assistant</p>
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3 hide-scrollbar">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} slide-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`max-w-[280px] sm:max-w-sm px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-xs sm:text-sm transition-all duration-300 hover:scale-105 ${
                    message.isUser
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-100 neon-border'
                      : 'bg-gradient-to-r from-gray-900/80 to-gray-800/80 text-gray-100 border border-purple-400/30'
                  }`}
                >
                  {message.text}
                  {message.hasVideo && message.videoSrc && (
                    <div className="mt-3">
                      <iframe
                        src={message.videoSrc}
                        width="100%"
                        height="140"
                        frameBorder="0"
                        allow="encrypted-media; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg border border-cyan-400/30 max-w-[250px] sm:max-w-[280px]"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 text-gray-100 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-xs sm:text-sm border border-purple-400/30">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span className="text-xs text-cyan-300 font-mono">Processing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-cyan-400/30 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
            <div className="flex space-x-2 sm:space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter query..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-cyan-100 placeholder-cyan-400/60 font-mono neon-border rounded-xl transition-all duration-300 focus:cyber-glow"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(20, 20, 40, 0.8))',
                  backdropFilter: 'blur(10px)'
                }}
                disabled={isLoading}
              />
              <button
                onClick={() => {
                  setInputText('show me a video');
                  setTimeout(() => handleSendMessage(), 100);
                }}
                disabled={isLoading}
                className="px-2 sm:px-4 py-2 sm:py-3 text-white rounded-xl transition-all duration-300 hover:scale-110 neon-border"
                style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8))' }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
                className="px-3 sm:px-5 py-2 sm:py-3 text-white rounded-xl transition-all duration-300 hover:scale-110 neon-border disabled:opacity-50"
                style={{ background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.8), rgba(255, 0, 255, 0.8))' }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};