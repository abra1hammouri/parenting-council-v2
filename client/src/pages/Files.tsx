import { useState } from 'react';

/**
 * Design Philosophy: Warm Educational Minimalism
 * - Files page with resource cards
 * - Each card has image as background with content overlay
 * - Raqaa font for headings
 */

interface Link {
  label: string;
  url: string;
  target?: string;
}

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  links: Link[];
}

const cards: Card[] = [
  {
    id: 1,
    title: 'كتاب المجلس الجزء الأول',
    description: 'يحتوي الكتاب على شرح الدكتور أحمد ياسر رزة للفصول الأولى الثلاثة من كتاب الانضباط الإيجابي حيث ستتمكن من قراءة الفصول وتعليق الدكتور وشرحه بين علامات الجملة المعترضة والكتاب ملخص شامل لأهم المواضيع التي ذكرت خلال المحاضرات',
    image: '/manus-storage/card1_b3c7f8e2.png',
    links: [
      { label: 'اطلع على الملفات', url: 'https://drive.google.com/drive/folders/1ygJGvIAL5Hrf5yKtofUmSgXEsuvIa07f', target: '_blank' },
      { label: 'حمّل الملفات', url: 'https://drive.google.com/drive/folders/1ygJGvIAL5Hrf5yKtofUmSgXEsuvIa07f', target: '_blank' }
    ]
  },
  {
    id: 2,
    title: 'تفريغات أحمد حجازي',
    description: 'تفريغات المحاضرات التفصيلية أي كل كلمة ستجدها موجودة والملفات منظمة حسب أشهر المجلس الستة',
    image: '/manus-storage/card2_a1d4e5f3.png',
    links: [
      { label: 'اطلع على الملفات', url: 'https://drive.google.com/drive/folders/1QEm2n39xnvBcPQ4I0cu1oABX_pxg98Rh', target: '_blank' }
    ]
  },
  {
    id: 3,
    title: 'التكليفات',
    description: 'جميع التكليفات من مقالات وكتيبات مرتبة ومترجمة والفيديوهات محملة',
    image: '/manus-storage/card3_c2b5d6e4.png',
    links: [
      { label: 'اطلع على الملفات', url: 'https://drive.google.com/drive/folders/1PHGwHkoD9wSASfobJ2zZ-ivlhoNTec8A', target: '_blank' },
      { label: 'حمّل الملفات', url: 'https://drive.google.com/drive/folders/1PHGwHkoD9wSASfobJ2zZ-ivlhoNTec8A', target: '_blank' }
    ]
  },
  {
    id: 4,
    title: 'بودكاست محمود حرب',
    description: 'العديد من الملخصات الصوتية والفيديوهات الرائعة المصنوعة بأدوات الذكاء الاصطناعي',
    image: '/manus-storage/card4_d3c6e7f5.png',
    links: [
      { label: 'اطلع على الملفات', url: 'https://drive.google.com/drive/folders/1fw9Urfa6y1J5TvX97Lifrs6kVR766Mlm?usp=drive_link', target: '_blank' }
    ]
  },
  {
    id: 5,
    title: 'تلخيصات مريم طارق',
    description: 'تلخيصات لكل محاضرة بأسلوب مميز',
    image: '/manus-storage/card5_e4d7f8g6.png',
    links: [
      { label: 'اطلع على الملفات', url: 'https://drive.google.com/drive/folders/1tnq72eMY2bGU4BTo-oNcVRi5Gf5HjUfo', target: '_blank' }
    ]
  }
];

export default function Files() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary" style={{ fontFamily: "'Raqaa', serif" }}>
            مجلس التربية الممتد
          </a>
          <div className="flex gap-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors duration-200">الرئيسية</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">عن المجلس</a>
            <a href="/files" className="text-primary font-semibold transition-colors duration-200">الملفات</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors duration-200">اتصل بنا</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-20 bg-secondary/30">
        <div className="container">
          {/* Page Title */}
          <div className="mb-16 text-center">
            <h1 
              className="text-5xl md:text-6xl font-black text-primary mb-4"
              style={{ fontFamily: "'Raqaa', serif" }}
            >
              الملفات والموارد
            </h1>
            <p className="text-lg text-muted-foreground">
              مجموعة شاملة من الموارد التعليمية والكتب والمحاضرات
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-xl h-96 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content Box - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-secondary via-secondary/95 to-secondary/80 transform transition-all duration-300">
                  <h3 
                    className="text-xl font-bold text-primary mb-2"
                    style={{ fontFamily: "'Raqaa', serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-foreground mb-4 line-clamp-2">
                    {card.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {card.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target={link.target || '_self'}
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Hover Box Effect */}
                {hoveredCard === card.id && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-primary rounded-xl pointer-events-none animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>
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
