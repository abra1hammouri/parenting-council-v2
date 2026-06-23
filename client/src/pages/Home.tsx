import { useState, useEffect } from 'react';

const phrases = [
  'أنا أحمد وده مجلس التربية الممتد',
  'الأخطاء فرص رائعة للتعلم',
  'بالراحة',
  'التربية الايجابية ضد التدليل',
  'اقبل محدوديتك وبشريتك',
  'لا عقاب في التربية الايجابية مطلقا',
  'حق الكرامة والاحترام',
  'المجلس ده هو أنتم',
  'ما تغسلوش العيشة بديتول',
  'الالم ده الم شريف',
  'يا كل النفوس الضيقة , العالم واسع'
];

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 50 : 100;
    const delay = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setDisplayedText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(delay);
  }, [charIndex, phraseIndex, isDeleting]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1 pt-16">
        {/* Hero Section with Title and Typewriter */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-20"
          style={{
            background: 'linear-gradient(to bottom, #F8E6BC 0%, #F8E6BC 25%, transparent 25%)',
          }}
        >
          {/* Title */}
          <h1 
            className="text-5xl md:text-7xl font-black text-primary mb-8 text-center drop-shadow-lg"
            style={{ fontFamily: "'Raqaa', serif" }}
          >
            مجلسنا - مجلس التربية الممتد
          </h1>

          {/* Typewriter Text */}
          <div className="h-24 flex items-center justify-center mb-12">
            <p 
              className="text-3xl md:text-4xl font-black text-foreground min-h-20 drop-shadow-md text-center"
              style={{ fontFamily: "'Raqaa', serif" }}
            >
              <span className="inline-block">{displayedText}</span>
              <span className="inline-block ml-2 animate-pulse text-primary">|</span>
            </p>
          </div>

          {/* Full Height Image */}
          <div className="w-full flex-1">
            <img 
              src="/manus-storage/home-group_f233a2de.png" 
              alt="مجلس التربية الممتد" 
              className="w-full h-full object-cover"
            />
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
