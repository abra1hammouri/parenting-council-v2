import { MessageCircle, Youtube, Facebook } from 'lucide-react';

/**
 * Design Philosophy: Professional Contact Page
 * - Unified background color
 * - Solid colored icons (no white backgrounds)
 * - Boat image with professional rounded corners on the right
 * - Icons aligned vertically with image boundaries
 * - Arabic tagline at the top
 * - Mobile responsive layout
 */

export default function Contact() {
  const whatsappNumber = '201063070272';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const youtubeLink = 'https://youtube.com/@ahmedyaserroza833?si=7JLFfBnASSTn9J6p';
  const facebookLink = 'https://www.facebook.com/share/1EFELisGn8/';

  return (
    <div className="min-h-screen bg-yellow-50 pt-24 pb-12 px-4">
      {/* Tagline */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary" style={{ fontFamily: "'Raqaa', serif" }}>
          تواصل معنا
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 md:mt-3">تابعنا على وسائل التواصل الاجتماعي للبقاء على اطلاع دائم</p>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-1">
          
          {/* Left Side - Contact Icons (Mobile: Top, Desktop: Left) */}
          <div className="w-full md:w-1/3 flex flex-col justify-start space-y-6 md:space-y-8 order-2 md:order-1">
            {/* WhatsApp Card */}
            <div className="flex flex-col items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer mb-3 md:mb-4"
                title="WhatsApp"
              >
                <div className="bg-green-600 rounded-full p-2 md:p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                  <MessageCircle className="w-4 md:w-5 h-4 md:h-5 text-white" />
                </div>
              </a>
              <p className="text-base md:text-lg font-bold text-gray-800 text-center">WhatsApp</p>
              <p className="text-gray-600 mt-1 text-xs md:text-sm text-center">+201063070272</p>
            </div>

            {/* YouTube Card */}
            <div className="flex flex-col items-center">
              <a
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer mb-3 md:mb-4"
                title="YouTube"
              >
                <div className="bg-red-600 rounded-full p-2 md:p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                  <Youtube className="w-4 md:w-5 h-4 md:h-5 text-white" />
                </div>
              </a>
              <p className="text-base md:text-lg font-bold text-gray-800 text-center">YouTube</p>
              <p className="text-gray-600 mt-1 text-xs md:text-sm text-center">Ahmed Yaser Roza</p>
            </div>

            {/* Facebook Card */}
            <div className="flex flex-col items-center">
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer mb-3 md:mb-4"
                title="Facebook"
              >
                <div className="bg-blue-600 rounded-full p-2 md:p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                  <Facebook className="w-4 md:w-5 h-4 md:h-5 text-white" />
                </div>
              </a>
              <p className="text-base md:text-lg font-bold text-gray-800 text-center">Facebook</p>
              <p className="text-gray-600 mt-1 text-xs md:text-sm text-center">Ahmed Yaser Roza</p>
            </div>
          </div>

          {/* Right Side - Boat Image (Mobile: Bottom, Desktop: Right) */}
          <div className="w-full md:w-2/3 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-sm md:max-w-2xl">
              <img
                src="/manus-storage/contact-image_31029b27.png"
                alt="We're all in the same boat"
                className="w-full h-auto object-contain rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground/20 text-foreground py-3 mt-16">
        <div className="container text-center">
          <p className="text-xs md:text-sm">&copy; 2026 مجلس التربية الممتد. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
