import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'Services', 'Why Us?', 'About Us', 'Contact Us'];

  const scrollToSection = (item: string) => {
    const sectionMap: { [key: string]: string } = {
      'Home': 'hero',
      'Services': 'services',
      'Why Us?': 'agile-approach', 
      'About Us': 'who-we-are',
      'Contact Us': 'contact-us'
    };
    
    const sectionId = sectionMap[item];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-5">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="text-white text-base hover:text-red-500 transition-colors duration-300"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-20 right-4 w-48 bg-gray-900 bg-opacity-95 rounded-lg shadow-lg md:hidden z-50">
          <nav className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  scrollToSection(item);
                }}
                className="text-white text-left hover:text-red-500 transition-colors duration-300 py-2 w-full"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};