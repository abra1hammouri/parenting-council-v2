import { useEffect, useState } from 'react';

/**
 * Design Philosophy: Warm Educational Minimalism
 * - Hero section with text overlay (no background image)
 * - Typewriter animation cycling through core parenting principles
 * - Raqaa font for title and animated text (bold, impactful)
 * - Warm color palette: terracotta (#D97757), sage green (#A8B8A8), cream (#FAFAF8)
 * - Arabic-optimized typography
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
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Raqaa', serif" }}>
            مجلس التربية الممتد
          </div>
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
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
          {/* Content Overlay */}
          <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
            <h1 
              className="text-6xl md:text-8xl font-black text-primary mb-12 leading-tight"
              style={{ fontFamily: "'Raqaa', serif" }}
            >
              مجلس التربية الممتد
            </h1>
            
            {/* Typewriter Text */}
            <div className="h-32 flex items-center justify-center mb-16">
              <p 
                className="text-4xl md:text-5xl font-black text-foreground min-h-24"
                style={{ fontFamily: "'Raqaa', serif" }}
              >
                <span className="inline-block">{displayedText}</span>
                <span className="inline-block ml-2 animate-pulse text-primary">|</span>
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Values Section - Coming Soon */}
        <section className="py-20 bg-secondary/50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground" style={{ fontFamily: "'Raqaa', serif" }}>
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
