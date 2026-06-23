import { MessageCircle, Youtube, Facebook } from 'lucide-react';

/**
 * Design Philosophy: Warm Educational Minimalism
 * - Contact page with boat background image
 * - Small transparent icon cards on the right
 * - Icon names below each icon
 * - Image extends across the full page
 * - Minimal, clean design
 */

export default function Contact() {
  const whatsappNumber = '201063070272';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
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
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-end px-4 sm:px-6 lg:px-12">
        <div className="space-y-6 max-w-xs">
          {/* WhatsApp Card */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group cursor-pointer"
            title="WhatsApp"
          >
            <div className="bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-all duration-200 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-sm text-gray-700 mt-2 font-semibold">WhatsApp</p>
            <p className="text-xs text-gray-600">+201063070272</p>
          </a>

          {/* YouTube Card */}
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group cursor-pointer"
            title="YouTube"
          >
            <div className="bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-all duration-200 flex items-center justify-center">
              <Youtube className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-sm text-gray-700 mt-2 font-semibold">YouTube</p>
            <p className="text-xs text-gray-600">Ahmed Yaser Roza</p>
          </a>

          {/* Facebook Card */}
          <a
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group cursor-pointer"
            title="Facebook"
          >
            <div className="bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-all duration-200 flex items-center justify-center">
              <Facebook className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-sm text-gray-700 mt-2 font-semibold">Facebook</p>
            <p className="text-xs text-gray-600">Ahmed Yaser Roza</p>
          </a>
        </div>
      </div>
    </div>
  );
}
