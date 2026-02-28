export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Services: [
      { label: "Custom Software", href: "#solution" },
      { label: "AI Agent Integration", href: "#solution" },
      { label: "Business Automation", href: "#solution" },
    ],
    Company: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-[#0a1020] border-t border-white/5 text-white/40 pt-16 pb-8 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Top row */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <polygon
                  points="16,2 30,9 30,23 16,30 2,23 2,9"
                  fill="#00e6fe"
                  opacity="0.7"
                />
              </svg>
              <span className="font-bold text-white text-lg">
                Beelio Technologies
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              We build intelligent software systems for African businesses — 
              custom platforms with AI built in, so your operations run 
              smarter with less manual work.
            </p>
            {/* Contact */}
            <div className="flex flex-col gap-2 text-sm mt-2">
              <a
                href="mailto:beeliotechnologies@gmail.com"
                className="hover:text-[#00e6fe] transition-colors"
              >
                beeliotechnologies@gmail.com
              </a>
              <a
                href="https://wa.me/256786367460"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00e6fe] transition-colors"
              >
                WhatsApp: +256 786 367460
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-semibold">
                {category}
              </h4>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-[#00e6fe] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          <p>© {currentYear} Beelio Technologies. All rights reserved.</p>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://tiktok.com/@beelio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00e6fe] transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://x.com/beelio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00e6fe] transition-colors"
            >
              X (Twitter)
            </a>
          </div>

          {/* Pride line */}
          <p className="text-white/20">
            Built in Uganda 🇺🇬 for Africa 🌍
          </p>
        </div>

      </div>
    </footer>
  );
}