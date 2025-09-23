export const Navigation = () => {
  const navItems = ['Home', 'Services', 'Why Us?', 'About Us', 'Contact Us'];

  const scrollToSection = (item: string) => {
    const sectionMap: { [key: string]: string } = {
      'Home': 'home',
      'Services': 'services',
      'Why Us?': 'why-us',
      'About Us': 'about-us',
      'Contact Us': 'contact-us'
    };
    
    const sectionId = sectionMap[item];
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex space-x-5">
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
  );
};