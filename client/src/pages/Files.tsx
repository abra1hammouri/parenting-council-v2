import { useState } from 'react';

/**
 * Design Philosophy: Warm Educational Minimalism
 * - Files page with 5 resource cards
 * - Card layout inspired by Strevora template
 * - Raqaa font for headings
 * - Hover effects with smooth transitions
 */

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  links: { label: string; url: string }[];
}

const cards: Card[] = [
  {
    id: 1,
    title: 'كتاب المجلس الجزء الأول',
    description: 'يحتوي الكتاب على شرح الدكتور أحمد ياسر رزة للفصول الأولى الثلاثة من كتاب الانضباط الإيجابي حيث ستتمكن من قراءة الفصول وتعليق الدكتور وشرحه بين علامات الجملة المعترضة والكتاب ملخص شامل لأهم المواضيع التي ذكرت خلال المحاضرات',
    image: '/manus-storage/card-1-book_fe43273a.png',
    links: [
      { label: 'اقرأ الكتاب', url: '#' },
      { label: 'حمّل PDF', url: '#' }
    ]
  },
  // Placeholder cards - will be updated with user data
  {
    id: 2,
    title: 'البطاقة الثانية',
    description: 'في انتظار المحتوى...',
    image: '/manus-storage/card-1-book_fe43273a.png',
    links: [
      { label: 'المزيد', url: '#' }
    ]
  },
  {
    id: 3,
    title: 'البطاقة الثالثة',
    description: 'في انتظار المحتوى...',
    image: '/manus-storage/card-1-book_fe43273a.png',
    links: [
      { label: 'المزيد', url: '#' }
    ]
  },
  {
    id: 4,
    title: 'البطاقة الرابعة',
    description: 'في انتظار المحتوى...',
    image: '/manus-storage/card-1-book_fe43273a.png',
    links: [
      { label: 'المزيد', url: '#' }
    ]
  },
  {
    id: 5,
    title: 'البطاقة الخامسة',
    description: 'في انتظار المحتوى...',
    image: '/manus-storage/card-1-book_fe43273a.png',
    links: [
      { label: 'المزيد', url: '#' }
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
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">اتصل بنا</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-20">
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
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Image */}
                <div className="relative h-64 overflow-hidden bg-secondary">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold text-primary mb-3"
                    style={{ fontFamily: "'Raqaa', serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                    {card.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {card.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        className="inline-block px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
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
