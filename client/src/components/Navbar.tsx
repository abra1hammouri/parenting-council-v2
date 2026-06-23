import { useState } from 'react';

/**
 * Shared Navbar Component
 * - Appears on all pages
 * - Logo on the left, navigation links on the right
 * - RTL support for Arabic
 * - Mobile responsive with hamburger menu
 */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container flex justify-between items-center py-3 sm:py-4">
        {/* Logo */}
        <h1 className="text-lg sm:text-2xl font-black text-primary" style={{ fontFamily: "'Raqaa', serif" }}>
          مجلس التربية الممتد
        </h1>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-2">
          <a href="/" className="text-base lg:text-lg text-foreground hover:text-primary px-4 py-2 rounded-lg hover:bg-primary/10 smooth-transition">
            الرئيسية
          </a>
          <a href="/about" className="text-base lg:text-lg text-foreground hover:text-primary px-4 py-2 rounded-lg hover:bg-primary/10 smooth-transition">
            عن المجلس
          </a>
          <a href="/files" className="text-base lg:text-lg text-foreground hover:text-primary px-4 py-2 rounded-lg hover:bg-primary/10 smooth-transition">
            الملفات
          </a>
          <a href="/contact" className="text-base lg:text-lg text-foreground hover:text-primary px-4 py-2 rounded-lg hover:bg-primary/10 smooth-transition">
            اتصل بنا
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`h-0.5 w-5 bg-primary transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-5 bg-primary transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-5 bg-primary transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container flex flex-col gap-3 py-3">
            <a href="/" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              الرئيسية
            </a>
            <a href="/about" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              عن المجلس
            </a>
            <a href="/files" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              الملفات
            </a>
            <a href="/contact" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              اتصل بنا
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
