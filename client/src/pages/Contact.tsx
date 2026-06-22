import { MessageCircle, Youtube, Facebook } from 'lucide-react';

/**
 * Design Philosophy: Warm Educational Minimalism
 * - Contact page with full background image
 * - Contact options overlay on bottom right
 * - Raqaa font for headings
 */

export default function Contact() {
  const whatsappNumber = '201063070272';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const displayNumber = '+201063070272';
  const youtubeLink = 'https://youtube.com/@ahmedyaserroza833?si=7JLFfBnASSTn9J6p';
  const facebookLink = 'https://www.facebook.com/share/1EFELisGn8/';

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(/manus-storage/contact-image_31029b27.png)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
            {/* Left Side - Empty or Title */}
            <div className="hidden lg:block flex-1">
              <h1 
                className="text-5xl sm:text-6xl font-black text-white drop-shadow-lg"
                style={{ fontFamily: "'Raqaa', serif" }}
              >
                تواصل معنا
              </h1>
            </div>

            {/* Right Side - Contact Options */}
            <div className="w-full lg:w-96 space-y-4">
              {/* WhatsApp Contact */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-white/40">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-white drop-shadow-lg truncate">
                      تواصل عبر WhatsApp
                    </h2>
                    
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>تواصل</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* YouTube Channel */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-white/40">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-100 rounded-full flex-shrink-0">
                    <Youtube className="w-6 h-6 text-red-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-white drop-shadow-lg truncate">
                      قناة اليوتيوب
                    </h2>
                    
                    <a
                      href={youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
                    >
                      <Youtube className="w-4 h-4" />
                      <span>تابع</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Facebook Page */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-white/40">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full flex-shrink-0">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-white drop-shadow-lg truncate">
                      صفحة الفيسبوك
                    </h2>
                    
                    <a
                      href={facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
                    >
                      <Facebook className="w-4 h-4" />
                      <span>تابع</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
