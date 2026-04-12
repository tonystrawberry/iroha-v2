const footerLinks = [
  { href: "#about", label: "私たちについて" },
  { href: "#services", label: "サービス紹介" },
  { href: "#news", label: "ニュース" },
  { href: "#ceo", label: "代表メッセージ" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-mint-200/60 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 blob"
                style={{ background: "linear-gradient(135deg, #7ecfb5, #f5a8a8)" }}
              />
              <span className="font-bold text-base tracking-widest">IROHA</span>
            </div>
            <p className="text-xs text-gray-500 max-w-xs leading-loose">
              Nurture Words and Ears.
              <br />
              Open your stories.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-0">
              Menu
            </p>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-mint-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
              Follow us
            </p>
            <div className="flex gap-3">
              {/* Instagram */}
              <div className="relative group">
                <div className="w-9 h-9 rounded-full bg-mint-100 flex items-center justify-center opacity-50 cursor-not-allowed">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5bbfa0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="#5bbfa0"/>
                  </svg>
                </div>
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap bg-gray-800 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Coming soon</span>
              </div>
              {/* Twitter / X */}
              <div className="relative group">
                <div className="w-9 h-9 rounded-full bg-mint-100 flex items-center justify-center opacity-50 cursor-not-allowed">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#5bbfa0">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap bg-gray-800 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Coming soon</span>
              </div>
              {/* Facebook */}
              <div className="relative group">
                <div className="w-9 h-9 rounded-full bg-mint-100 flex items-center justify-center opacity-50 cursor-not-allowed">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#5bbfa0">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </div>
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap bg-gray-800 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Coming soon</span>
              </div>
              {/* LinkedIn */}
              <div className="relative group">
                <div className="w-9 h-9 rounded-full bg-mint-100 flex items-center justify-center opacity-50 cursor-not-allowed">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#5bbfa0">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap bg-gray-800 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Coming soon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-mint-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} 株式会社IROHA. All rights reserved.
          </p>
          <p className="text-xs text-gray-300 tracking-widest">IROHA支文変変</p>
        </div>
      </div>
    </footer>
  );
}
