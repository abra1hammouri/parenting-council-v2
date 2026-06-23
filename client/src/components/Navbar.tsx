/**
 * Shared Navbar Component
 * - Appears on all pages
 * - Logo on the left, navigation links on the right
 * - RTL support for Arabic
 */

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container flex justify-between items-center py-4">
        <h1 className="text-2xl font-black text-primary" style={{ fontFamily: "'Raqaa', serif" }}>
          مجلس التربية الممتد
        </h1>
        <div className="flex gap-8">
          <a href="/" className="text-foreground hover:text-primary transition-colors">
            الرئيسية
          </a>
          <a href="/about" className="text-foreground hover:text-primary transition-colors">
            عن المجلس
          </a>
          <a href="/files" className="text-foreground hover:text-primary transition-colors">
            الملفات
          </a>
          <a href="/contact" className="text-foreground hover:text-primary transition-colors">
            اتصل بنا
          </a>
        </div>
      </nav>
    </header>
  );
}
