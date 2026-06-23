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
    // Very slow speeds: typing 200ms, deleting 100ms
    const speed = isDeleting ? 100 : 200;
    const delay = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setDisplayedText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 3000);
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
      <main className="flex-1 pt-32">
        {/* Title */}
        <div className="text-center px-4 md:px-8 mb-20">
          <h1 
            className="text-4xl md:text-6xl font-black text-primary drop-shadow-lg"
            style={{ fontFamily: "'Raqaa', serif" }}
          >
            مجلسنا - مجلس التربية الممتد
          </h1>
        </div>

        {/* Typewriter Text Section */}
        <section className="w-full flex items-center justify-center px-4 md:px-8 mb-24">
          <div className="min-h-40 flex items-center justify-center">
            <div className="relative inline-block">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-lg blur-xl -z-10"></div>
              
              {/* Text with smooth fade-in effect */}
              <p 
                className="text-2xl md:text-4xl font-black text-foreground drop-shadow-md text-center px-8 py-6 transition-all duration-300"
                style={{ 
                  fontFamily: "'Raqaa', serif",
                  minHeight: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span className="inline-block">{displayedText}</span>
                {/* Blinking cursor with smooth animation */}
                <span 
                  className="inline-block ml-2 text-primary"
                  style={{
                    animation: 'blink 1s infinite',
                    fontSize: '1.2em',
                    fontWeight: 'bold'
                  }}
                >
                  |
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Video Section - Below Text with Professional Edges */}
        <section className="w-full flex items-center justify-center px-4 md:px-8 pb-24">
          <div className="relative w-full max-w-4xl">
            {/* Video Container with Professional Styling */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/40">
              <video 
                ref={videoRef}
                autoPlay
                muted={isMuted}
                loop
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '16/9' }}
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
              className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
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

      {/* Blinking cursor animation */}
      <style>{`
        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
