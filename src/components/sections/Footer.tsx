export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Navigation */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Services
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Why Us?</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <div className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <p>Guwahati, Assam, India</p>
              <p>Call Us: +91 96269 6186</p>
              <p>Email: contact@arodos.com</p>
            </div>
          </div>
          
          {/* Socials */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Socials</h4>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:flex-col sm:space-y-2 sm:gap-0">
              <a href="#" className="flex items-center hover:opacity-75 transition-opacity">
                <img src="/images/link.png" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                <span className="text-gray-400 text-sm sm:text-base">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center hover:opacity-75 transition-opacity">
                <img src="/images/insta.png" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                <span className="text-gray-400 text-sm sm:text-base">Instagram</span>
              </a>
              <a href="#" className="flex items-center hover:opacity-75 transition-opacity">
                <img src="/images/x.png" alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                <span className="text-gray-400 text-sm sm:text-base">Twitter</span>
              </a>
              <a href="#" className="flex items-center hover:opacity-75 transition-opacity">
                <img src="/images/facebook.png" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                <span className="text-gray-400 text-sm sm:text-base">Facebook</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
            © 2025 www.arodos.com
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                Privacy Policy
              </a>
            </div>
            <img src="/images/arodoslogo.png" alt="Arodos Logo" className="h-5 sm:h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};