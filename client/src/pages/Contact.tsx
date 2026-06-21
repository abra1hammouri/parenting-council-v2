import { MessageCircle } from 'lucide-react';

/**
 * Design Philosophy: Warm Educational Minimalism
 * - Contact page with WhatsApp integration
 * - Simple, clean layout
 * - Raqaa font for headings
 */

export default function Contact() {
  const whatsappNumber = '+201063070272';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent via-background to-background">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
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

      {/* Contact Section */}
      <div className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            {/* WhatsApp Contact */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-green-100 rounded-full">
                <MessageCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-primary mb-3">
                تواصل عبر WhatsApp
              </h2>
              
              <p className="text-muted-foreground mb-8 max-w-md">
                يمكنك التواصل معنا مباشرة عبر WhatsApp للحصول على إجابات سريعة وفعالة
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                <span>فتح WhatsApp</span>
              </a>

              <p className="text-sm text-muted-foreground mt-6">
                رقم الهاتف: {whatsappNumber}
              </p>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-primary mb-4 text-center">
                ساعات التواصل
              </h3>
              <p className="text-center text-muted-foreground">
                نحن متاحون للرد على استفساراتك خلال ساعات العمل
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
