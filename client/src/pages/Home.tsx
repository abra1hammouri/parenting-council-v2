import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

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
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <div className="flex flex-col min-h-screen" style={{ background: '#F8E6BC' }}>
      {/* Main Content */}
      <main className="flex-1 pt-16 flex flex-col">
        {/* Title */}
        <div className="text-center px-4 md:px-8 mb-8">
          <h1 
            className="text-4xl md:text-6xl font-black text-primary drop-shadow-lg"
            style={{ fontFamily: "'Raqaa', serif" }}
          >
            مجلسنا - مجلس التربية الممتد
          </h1>
        </div>

        {/* Hero Section - Text and Large Half-Circle Video */}
        <section className="flex-1 w-full flex flex-col md:flex-row items-stretch justify-between relative overflow-hidden">
          {/* Left Side - Text Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-8 md:py-0 z-10">
            {/* Typewriter Text */}
            <div className="min-h-32 flex items-center justify-center">
              <p 
                className="text-2xl md:text-4xl font-black text-foreground drop-shadow-md text-center"
                style={{ fontFamily: "'Raqaa', serif" }}
              >
                <span className="inline-block">{displayedText}</span>
                <span className="inline-block ml-2 animate-pulse text-primary">|</span>
              </p>
            </div>
          </div>

          {/* Right Side - Large Half-Circle Video */}
          <div className="flex-1 relative flex items-center justify-center md:justify-end">
            {/* Half-Circle Video Container */}
            <div 
              className="relative w-full h-full md:w-auto md:h-auto"
              style={{
                clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
              }}
            >
              <video 
                ref={videoRef}
                autoPlay
                muted={isMuted}
                loop
                className="w-full h-full md:h-screen object-cover"
              >
                <source src="/manus-storage/home-video_8c2f1ef2.mp4" type="video/mp4" />
              </video>
            </div>
            
            {/* Sound Toggle Button */}
            <button
              onClick={() => {
                setIsMuted(!isMuted);
                if (videoRef.current) {
                  videoRef.current.muted = !isMuted;
                }
              }}
              className="absolute bottom-8 md:bottom-12 left-8 md:left-1/2 md:translate-x-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20"
              title={isMuted ? 'تشغيل الصوت' : 'إيقاف الصوت'}
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-gray-800" />
              ) : (
                <Volume2 className="w-6 h-6 text-gray-800" />
              )}
            </button>
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
