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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors text-base block"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-base block"
                >
                  Services
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-base block">Why Us?</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-base block">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-base block">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col items-center">
            <div className="text-left">
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
              <div className="space-y-2 text-gray-400 text-base">
              <p>Guwahati, Bangalore</p>
              <p>Call Us: +919620861198</p>
              <p>Email: contact@arodos.com</p>
              </div>
            </div>
          </div>
          
          {/* Socials */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-4 text-white text-right">Socials</h4>
            <div className="flex flex-col items-end space-y-2">
              <a href="https://www.linkedin.com/company/arodos-technologies/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-75 transition-opacity text-gray-400 hover:text-white">
                <img src="/images/link.png" alt="LinkedIn" className="w-6 h-6 mr-3" />
                <span className="text-base">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/arodos_technologies/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-75 transition-opacity text-gray-400 hover:text-white">
                <img src="/images/insta.png" alt="Instagram" className="w-6 h-6 mr-3" />
                <span className="text-base">Instagram</span>
              </a>
              <a href="https://www.facebook.com/arodos.technologies" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-75 transition-opacity text-gray-400 hover:text-white">
                <img src="/images/facebook.png" alt="Facebook" className="w-6 h-6 mr-3" />
                <span className="text-base">Facebook</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
            © 2025 | www.arodos.com
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