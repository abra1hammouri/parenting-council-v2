import { useEffect, useState } from 'react';

/**
 * Design Philosophy: Warm Educational Minimalism
 * - Hero section with full-width image as emotional anchor
 * - Typewriter animation cycling through core parenting principles
 * - Warm color palette: terracotta (#D97757), sage green (#A8B8A8), cream (#FAFAF8)
 * - Arabic-optimized typography with Almarai font
 * - Generous whitespace and asymmetric layout
 */

const phrases = [
  'الأخطاء فرص رائعة للتعلم',
  'بالراحة',
  'التربية الايجابية ضد التدليل',
  'اقبل محدوديتك وبشريتك',
  'لا عقاب في التربية الايجابية مطلقا',
  'حق الكرامة والاحترام'
];

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;
    const delayBeforeDelete = 2000;
    const delayBeforeNextPhrase = 500;

    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentPhrase.length) {
      // Typing phase
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBeforeDelete);
    } else if (isDeleting && charIndex > 0) {
      // Deleting phase
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Move to next phrase
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setCharIndex(0);
      }, delayBeforeNextPhrase);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentPhraseIndex]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">مجلس التربية الممتد</div>
          <div className="flex gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">الرئيسية</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">عن المجلس</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">الموارد</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">اتصل بنا</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-16">
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/manus-storage/family-video-call_02b16b7d.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              مجلس التربية الممتد
            </h1>
            
            {/* Typewriter Text */}
            <div className="h-24 flex items-center justify-center mb-12">
              <p className="text-2xl md:text-4xl text-white font-light min-h-20">
                <span className="inline-block">{displayedText}</span>
                <span className="inline-block ml-1 animate-pulse text-primary">|</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105">
                اكتشف معنا
              </button>
              <button className="px-8 py-3 bg-white/20 text-white rounded-lg font-semibold border border-white hover:bg-white/30 transition-all duration-200 backdrop-blur-sm">
                تعرف أكثر
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Values Section - Coming Soon */}
        <section className="py-20 bg-secondary/50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              قيمنا الأساسية
            </h2>
            <p className="text-center text-muted-foreground text-lg">
              سيتم إضافة المزيد من الأقسام قريباً...
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container text-center">
          <p>&copy; 2026 مجلس التربية الممتد. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
