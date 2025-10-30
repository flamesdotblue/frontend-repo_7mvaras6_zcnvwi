import { useState } from 'react';
import { Globe, Menu, LogIn, Tv, Twitter, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react';

const languages = [
  'English',
  'Hindi',
  'Telugu',
  'Punjabi',
  'Tamil',
  'Malayalam',
  'Kannada',
  'Gujarati',
  'Marathi',
];

const categories = [
  'News',
  'Entertainment',
  'Lifestyle',
  'Sports',
  'Food',
  'Business',
  'AI',
  'Travel',
  'Health',
  'Education',
];

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');

  return (
    <header className="w-full bg-white/90 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
      {/* Language bar */}
      <div className="hidden md:flex items-center justify-between px-4 lg:px-8 py-2 text-sm bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2 text-gray-600">
          <Globe className="h-4 w-4" />
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              {selectedLang}
              <ChevronDown className="h-4 w-4" />
            </button>
            {langOpen && (
              <ul
                className="absolute mt-1 left-0 bg-white shadow-lg rounded border border-gray-200 w-44 max-h-64 overflow-auto z-50"
                role="listbox"
              >
                {languages.map((lang) => (
                  <li
                    key={lang}
                    role="option"
                    aria-selected={selectedLang === lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                      selectedLang === lang ? 'text-red-700 font-medium' : 'text-gray-700'
                    }`}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <a href="#" className="hover:text-red-700" aria-label="Twitter">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-red-700" aria-label="Facebook">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-red-700" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-red-700" aria-label="YouTube">
            <Youtube className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="px-4 lg:px-8 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-sm bg-red-700 grid place-content-center text-white font-black tracking-tight">IN</div>
          <div className="leading-tight">
            <div className="text-xl font-extrabold tracking-tight">IndiaOnNews</div>
            <div className="text-[10px] uppercase tracking-widest text-red-700 font-semibold">Live. Bold. Now.</div>
          </div>
        </div>

        {/* Center: Categories */}
        <nav className="hidden lg:flex items-center gap-5">
          {categories.map((c) => (
            <a
              key={c}
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-red-700 hover:underline underline-offset-4"
            >
              {c}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-red-700 text-red-700 hover:bg-red-50 text-sm font-semibold"
          >
            <Tv className="h-4 w-4" /> Live TV
          </a>
          <button
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-700 text-white hover:bg-red-800 text-sm font-semibold"
          >
            <LogIn className="h-4 w-4" /> Login
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden ml-1 inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 hover:bg-gray-50"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile categories */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 px-4 pb-3">
          <div className="grid grid-cols-2 gap-2 pt-3">
            {categories.map((c) => (
              <a
                key={c}
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-red-700 py-2"
              >
                {c}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
