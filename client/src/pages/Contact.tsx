import { MessageCircle, Youtube, Facebook } from 'lucide-react';

/**
 * Design Philosophy: Warm Educational Minimalism
 * - Contact page with unified background color
 * - Boat image on the right side
 * - Contact icons on the left side
 * - Arabic tagline at the top
 */

export default function Contact() {
  const whatsappNumber = '201063070272';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const youtubeLink = 'https://youtube.com/@ahmedyaserroza833?si=7JLFfBnASSTn9J6p';
  const facebookLink = 'https://www.facebook.com/share/1EFELisGn8/';

  return (
    <div className="min-h-screen bg-yellow-50 pt-20">
      {/* Tagline */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: "'Raqaa', serif" }}>
          تواصل معنا
        </h2>
        <p className="text-lg text-gray-600 mt-2">نحن هنا لمساعدتك والإجابة على جميع استفساراتك</p>
      </div>

      {/* Main Content Container */}
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-8 px-4">
        
        {/* Left Side - Contact Icons */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start space-y-8">
          {/* WhatsApp Card */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center lg:items-start group cursor-pointer w-full"
            title="WhatsApp"
          >
            <div className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-xl font-bold text-gray-800">WhatsApp</p>
            <p className="text-gray-600 mt-1">+201063070272</p>
          </a>

          {/* YouTube Card */}
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center lg:items-start group cursor-pointer w-full"
            title="YouTube"
          >
            <div className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center mb-4">
              <Youtube className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-xl font-bold text-gray-800">YouTube</p>
            <p className="text-gray-600 mt-1">Ahmed Yaser Roza</p>
          </a>

          {/* Facebook Card */}
          <a
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center lg:items-start group cursor-pointer w-full"
            title="Facebook"
          >
            <div className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center mb-4">
              <Facebook className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-xl font-bold text-gray-800">Facebook</p>
            <p className="text-gray-600 mt-1">Ahmed Yaser Roza</p>
          </a>
        </div>

        {/* Right Side - Boat Image */}
        <div className="w-full lg:w-2/3 flex justify-center lg:justify-end">
          <img
            src="/manus-storage/contact-image_31029b27.png"
            alt="We're all in the same boat"
            className="max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
