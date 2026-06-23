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
  links: { label: string; url: string; target?: string }[];
}

const cards: Card[] = [
  {
    id: 1,
    title: 'كتاب المجلس الجزء الأول',
    description: 'يحتوي الكتاب على شرح الدكتور أحمد ياسر رزة للفصول الأولى الثلاثة من كتاب الانضباط الإيجابي حيث ستتمكن من قراءة الفصول وتعليق الدكتور وشرحه بين علامات الجملة المعترضة والكتاب ملخص شامل لأهم المواضيع التي ذكرت خلال المحاضرات',
    image: '/manus-storage/card-1-book_fe43273a.png',
    links: [
      { label: 'اقرأ الكتاب', url: 'https://drive.google.com/file/d/17Dqs9045bDo1rt4dFxfdpCMY6FcOF8DS/view?usp=drivesdk', target: '_blank' }
    ]
  },
  // Placeholder cards - will be updated with user data
  {
    id: 2,
    title: 'تفريغات أحمد حجازي',
    description: 'تفريغات المحاضرات التفصيلية أي كل كلمة ستجدها موجودة والملفات منظمة حسب أشهر المجلس الستة',
    image: '/manus-storage/card-2-transcripts_ec0f3d4b.png',
    links: [
      { label: 'اطلع على التفريغات', url: 'https://drive.google.com/drive/folders/1QEm2n39xnvBcPQ4I0cu1oABX_pxg98Rh', target: '_blank' }
    ]
  },
  {
    id: 3,
    title: 'التكليفات',
    description: 'جميع التكليفات من مقالات وكتيبات مرتبة ومترجمة والفيديوهات محملة',
    image: '/manus-storage/card-3-assignments_040cfc66.png',
    links: [
      { label: 'اطلع على التكليفات', url: 'https://drive.google.com/file/d/1tStT0Y6UXxePcj77oa04-A9nmPUtUI6l/view?usp=drivesdk', target: '_blank' }
    ]
  },
  {
    id: 4,
    title: 'بودكاست محمود حرب',
    description: 'العديد من الملخصات الصوتية والفيديوهات الرائعة المصنوعة بأدوات الذكاء الاصطناعي',
    image: '/manus-storage/card-4-podcast_2a8a7a36.png',
    links: [
      { label: 'اطلع على البودكاست', url: 'https://drive.google.com/drive/folders/1fw9Urfa6y1J5TvX97Lifrs6kVR766Mlm?usp=drive_link', target: '_blank' }
    ]
  },
  {
    id: 5,
    title: 'تلخيصات مريم طارق',
    description: 'تلخيصات لكل محاضرة بأسلوب مميز',
    image: '/manus-storage/card-5-summaries_4963b28b.png',
    links: [
      { label: 'اطلع على التلخيصات', url: 'https://drive.google.com/drive/folders/1tnq72eMY2bGU4BTo-oNcVRi5Gf5HjUfo', target: '_blank' }
    ]
  },
  {
    id: 6,
    title: 'ملفات أساسية وقصص',
    description: 'مجموعة من الملفات الأساسية والقصص المهمة',
    image: '/manus-storage/card-6-stories_default.png',
    links: [
      { label: 'اطلع على الملفات', url: 'https://drive.google.com/drive/folders/1-jxiAgL1w8XcBHDY8rO64JcAL4Nk41SN', target: '_blank' }
    ]
  }
];

export default function Files() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
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
              مجموعة شاملة من الملخصات والتفريغات للمحاضرات
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-xl bg-secondary shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Image */}
                <div className="relative h-64 overflow-hidden bg-secondary flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
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
                        target={link.target || '_self'}
                        rel="noopener noreferrer"
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
