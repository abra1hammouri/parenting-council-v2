import { MessageCircle, Youtube, Facebook } from 'lucide-react';

/**
 * Design Philosophy: Warm Educational Minimalism
 * - Contact page with image and content side-by-side layout
 * - Image on left, contact options on right
 * - Raqaa font for headings
 */

export default function Contact() {
  const whatsappNumber = '201063070272';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const displayNumber = '+201063070272';
  const youtubeLink = 'https://youtube.com/@ahmedyaserroza833?si=7JLFfBnASSTn9J6p';
  const facebookLink = 'https://www.facebook.com/share/1EFELisGn8/';

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 
            className="text-5xl sm:text-6xl font-black text-primary mb-6"
            style={{ fontFamily: "'Raqaa', serif" }}
          >
            تواصل معنا
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            نحن هنا للإجابة على جميع استفساراتك وتقديم الدعم الذي تحتاجه
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="rounded-2xl overflow-hidden shadow-lg max-w-md w-full">
                <img 
                  src="/manus-storage/contact-image_31029b27.png"
                  alt="نحن جميعاً في نفس القارب"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Contact Options */}
            <div className="space-y-8">
              {/* WhatsApp Contact */}
              <div className="bg-secondary rounded-2xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      تواصل عبر WhatsApp
                    </h2>
                    
                    <p className="text-muted-foreground mb-6">
                      يمكنك التواصل معنا مباشرة عبر WhatsApp للحصول على إجابات سريعة وفعالة
                    </p>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>فتح WhatsApp</span>
                    </a>

                    <p className="text-sm text-muted-foreground mt-4">
                      رقم الهاتف: {displayNumber}
                    </p>
                  </div>
                </div>
              </div>

              {/* YouTube Channel */}
              <div className="bg-secondary rounded-2xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 rounded-full flex-shrink-0">
                    <Youtube className="w-8 h-8 text-red-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      قناة اليوتيوب
                    </h2>
                    
                    <p className="text-muted-foreground mb-6">
                      اشترك في قناتنا على اليوتيوب لمتابعة أحدث المحاضرات والدروس
                    </p>

                    <a
                      href={youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Youtube className="w-5 h-5" />
                      <span>زيارة القناة</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Facebook Page */}
              <div className="bg-secondary rounded-2xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full flex-shrink-0">
                    <Facebook className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      صفحة الفيسبوك
                    </h2>
                    
                    <p className="text-muted-foreground mb-6">
                      تابعنا على الفيسبوك للبقاء على اتصال مستمر مع مجتمعنا
                    </p>

                    <a
                      href={facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Facebook className="w-5 h-5" />
                      <span>زيارة الصفحة</span>
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
