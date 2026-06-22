import { MessageCircle, Youtube, Facebook, Mail } from 'lucide-react';

/**
 * Design Philosophy: Warm Educational Minimalism
 * - Contact page with vertical card layout
 * - Minimal, clean design with light background cards
 * - Icons centered at top, clickable as primary action
 * - English names for contact options
 */

export default function Contact() {
  const whatsappNumber = '201063070272';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const youtubeLink = 'https://youtube.com/@ahmedyaserroza833?si=7JLFfBnASSTn9J6p';
  const facebookLink = 'https://www.facebook.com/share/1EFELisGn8/';

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 
          className="text-4xl sm:text-5xl font-black text-gray-800 mb-4"
          style={{ fontFamily: "'Raqaa', serif" }}
        >
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Get in touch with us through any of these channels. We'd love to hear from you!
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* WhatsApp Card */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 text-center group cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h2>
            <p className="text-gray-600 text-sm">+201063070272</p>
          </a>

          {/* YouTube Card */}
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 text-center group cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-red-100 rounded-full group-hover:bg-red-200 transition-colors">
                <Youtube className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">YouTube</h2>
            <p className="text-gray-600 text-sm">Subscribe to our channel</p>
          </a>

          {/* Facebook Card */}
          <a
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 text-center group cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                <Facebook className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Facebook</h2>
            <p className="text-gray-600 text-sm">Follow our page</p>
          </a>

          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-amber-100 rounded-full">
                <Mail className="w-8 h-8 text-amber-600" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Email</h2>
            <p className="text-gray-600 text-sm">Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
