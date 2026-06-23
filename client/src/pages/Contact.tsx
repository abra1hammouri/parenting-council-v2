import { MessageCircle, Youtube, Facebook } from 'lucide-react';

/**
 * Design Philosophy: Professional Contact Page
 * - Unified background color
 * - Solid colored icons (no white backgrounds)
 * - Boat image with professional rounded corners on the right
 * - Icons aligned vertically with image boundaries
 * - Arabic tagline at the top
 */

export default function Contact() {
  const whatsappNumber = '201063070272';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const youtubeLink = 'https://youtube.com/@ahmedyaserroza833?si=7JLFfBnASSTn9J6p';
  const facebookLink = 'https://www.facebook.com/share/1EFELisGn8/';

  return (
    <div className="min-h-screen bg-yellow-50 pt-20 pb-12">
      {/* Tagline */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-primary" style={{ fontFamily: "'Raqaa', serif" }}>
          تواصل معنا
        </h2>
        <p className="text-lg text-gray-600 mt-3">نحن هنا لمساعدتك والإجابة على جميع استفساراتك</p>
      </div>

      {/* Main Content Container */}
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-1">
          
          {/* Left Side - Contact Icons */}
          <div className="w-full lg:w-1/3 flex flex-col justify-start space-y-6">
            {/* WhatsApp Card */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start group cursor-pointer"
              title="WhatsApp"
            >
              <div className="bg-green-600 rounded-full p-3 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg font-bold text-gray-800">WhatsApp</p>
              <p className="text-gray-600 mt-1 text-sm">+201063070272</p>
            </a>

            {/* YouTube Card */}
            <a
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start group cursor-pointer"
              title="YouTube"
            >
              <div className="bg-red-600 rounded-full p-3 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg font-bold text-gray-800">YouTube</p>
              <p className="text-gray-600 mt-1 text-sm">Ahmed Yaser Roza</p>
            </a>

            {/* Facebook Card */}
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start group cursor-pointer"
              title="Facebook"
            >
              <div className="bg-blue-600 rounded-full p-3 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg font-bold text-gray-800">Facebook</p>
              <p className="text-gray-600 mt-1 text-sm">Ahmed Yaser Roza</p>
            </a>
          </div>

          {/* Right Side - Boat Image */}
          <div className="w-full lg:w-2/3 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              <img
                src="/manus-storage/contact-image_31029b27.png"
                alt="We're all in the same boat"
                className="w-full h-auto object-contain rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
