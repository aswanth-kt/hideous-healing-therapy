import React from 'react';
import useNavbarController from '../../../controllers/useNavbarController';
import Button from '../../shared/Button';
import { Menu, X } from 'lucide-react';

export const NavbarView = () => {
  const { isScrolled, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavbarController();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Journey", href: "#journey" },
    { label: "Why Us", href: "#why-choose-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    closeMobileMenu();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const headerBgClass = isScrolled
    ? "top-2.5 bg-bg-light/70 backdrop-blur-xl border border-primary/10 shadow-[0_12px_40px_rgba(0,0,0,0.06),inset_0_1px_rgba(255,255,255,0.5)] py-3"
    : "top-4 bg-white/10 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_rgba(255,255,255,0.15)] py-4";

  const textColorClass = isScrolled
    ? "text-text-dark"
    : "text-accent";

  const linkColorClass = isScrolled
    ? "text-text-muted hover:text-primary-dark after:bg-primary"
    : "text-accent/80 hover:text-primary after:bg-white";

  const logoSubTextClass = isScrolled
    ? "text-primary-dark"
    : "text-primary";

  const mobileMenuClass = isScrolled
    ? "top-[72px] bg-bg-light/85 backdrop-blur-xl border border-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_1px_rgba(255,255,255,0.5)]"
    : "top-[84px] bg-dark/85 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.15)]";

  const mobileTextClass = isScrolled 
    ? 'text-text-dark hover:text-primary-dark' 
    : 'text-accent hover:text-primary';

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl rounded-2xl z-40 transition-all duration-500 ease-in-out ${headerBgClass}`}
      >
        <div className="px-6 flex items-center justify-between relative z-10">
          <a href="#" className="flex items-center gap-3 group" onClick={(e) => handleLinkClick(e, '#root')}>
            <img
              src="/assets/logo/logo.png"
              alt="Hideous Healing Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform duration-500 group-hover:scale-105 filter brightness-110"
            />
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl font-bold font-serif tracking-wide uppercase leading-none transition-colors duration-500 ${textColorClass}`}>
                Hideous
              </span>
              <span className={`text-xs font-sans tracking-widest uppercase transition-colors duration-500 ${logoSubTextClass}`}>
                Healing
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-sans font-medium transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:transition-all after:duration-300 hover:after:w-full ${linkColorClass}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              variant="primary"
              className={!isScrolled ? "bg-primary text-dark hover:bg-accent border-transparent" : ""}
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Book Consultation
            </Button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-full hover:bg-primary/10 transition-colors cursor-pointer ${
              isScrolled ? 'text-text-dark' : 'text-accent'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className={`lg:hidden fixed left-4 right-4 z-30 flex flex-col p-6 rounded-2xl transition-all duration-500 ease-in-out animate-fade-in ${mobileMenuClass}`}>
          <nav className="flex flex-col gap-6 my-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-lg font-sans font-medium transition-colors duration-300 ${mobileTextClass}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-6 border-t border-primary/10 flex flex-col gap-4">
            <Button
              variant="primary"
              className="w-full"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarView;
