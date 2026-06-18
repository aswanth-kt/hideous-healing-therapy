import { FaFacebook, FaInstagram } from 'react-icons/fa';

export const FooterView = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
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

  return (
    <footer className="bg-bg-light border-t border-primary/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-12">
          
          {/* Logo & Info column */}
          <div className="flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-3 group" onClick={(e) => handleLinkClick(e, '#root')}>
              <img
                src="/assets/logo/logo.png"
                alt="Hideous Healing Logo"
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold font-serif text-text-dark tracking-wide uppercase leading-none">
                  Hideous
                </span>
                <span className="text-xs font-sans text-primary-dark tracking-widest uppercase font-semibold">
                  Healing
                </span>
              </div>
            </a>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed font-sans max-w-sm mt-2">
              Empowering self-recovery and emotional resilience through confidential, board-certified therapeutic counseling services.
            </p>
          </div>

          {/* Quick links column */}
          <div className="flex flex-col items-start gap-3">
            <h4 className="text-sm font-bold font-serif text-text-dark uppercase tracking-wider mb-2">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs md:text-sm font-sans font-medium text-text-muted">
              <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-primary transition-colors">About</a>
              <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-primary transition-colors">Services</a>
              <a href="#journey" onClick={(e) => handleLinkClick(e, '#journey')} className="hover:text-primary transition-colors">Journey</a>
              <a href="#why-choose-us" onClick={(e) => handleLinkClick(e, '#why-choose-us')} className="hover:text-primary transition-colors">Why Us</a>
              <a href="#testimonials" onClick={(e) => handleLinkClick(e, '#testimonials')} className="hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col items-start gap-3 text-xs md:text-sm text-text-muted font-sans">
            <h4 className="text-sm font-bold font-serif text-text-dark uppercase tracking-wider mb-2">
              Get in Touch
            </h4>
            <p><strong>Email:</strong> support@hideoushealing.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM IST</p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-primary/20 text-text-muted flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:text-primary hover:border-primary hover:shadow-[0_0_12px_rgba(213,164,78,0.35)] hover:bg-primary/5 cursor-pointer"
                aria-label="Instagram Link"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-primary/20 text-text-muted flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:text-primary hover:border-primary hover:shadow-[0_0_12px_rgba(213,164,78,0.35)] hover:bg-primary/5 cursor-pointer"
                aria-label="Facebook Link"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Clinical Disclaimer Block */}
        <div className="border-t border-primary/10 pt-8 mt-8 text-left">
          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 text-xs text-text-muted leading-relaxed font-sans">
            <span className="font-bold text-text-dark uppercase tracking-wider block mb-2">
              🚨 Clinical Crisis Disclaimer
            </span>
            If you are experiencing a life-threatening mental health emergency, self-harm crisis, or a psychiatric emergency, please contact your local national emergency services hotline (e.g. 112 in India, 988 in USA) or visit the nearest hospital emergency room immediately. We do not provide crisis intervention or emergency counseling services on this website.
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 pt-8 border-t border-primary/10 text-[10px] md:text-xs text-text-muted font-sans">
          <p>© {currentYear} Hideous Healing. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterView;
