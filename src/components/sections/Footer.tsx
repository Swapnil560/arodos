export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Why Us?</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-400">
              <p>Guwahati, Assam, India</p>
              <p>Call Us: +91 96269 6186</p>
              <p>Email: contact@arodos.com</p>
            </div>
          </div>
          
          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Socials</h4>
            <div className="space-y-2">
              <a href="#" className="flex items-center hover:opacity-75 transition-opacity">
                <img src="/images/link.png" alt="LinkedIn" className="w-6 h-6 mr-3" />
                <span className="text-gray-400">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center hover:opacity-75 transition-opacity">
                <img src="/images/insta.png" alt="Instagram" className="w-6 h-6 mr-3" />
                <span className="text-gray-400">Instagram</span>
              </a>
              <a href="#" className="flex items-center hover:opacity-75 transition-opacity">
                <img src="/images/x.png" alt="Twitter" className="w-6 h-6 mr-3" />
                <span className="text-gray-400">Twitter</span>
              </a>
              <a href="#" className="flex items-center hover:opacity-75 transition-opacity">
                <img src="/images/facebook.png" alt="Facebook" className="w-6 h-6 mr-3" />
                <span className="text-gray-400">Facebook</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 www.arodos.com
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <img src="/images/arodoslogo.png" alt="Arodos Logo" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};