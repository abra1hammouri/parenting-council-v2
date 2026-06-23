import React from 'react';
import { Link } from 'wouter';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6" style={{ fontFamily: "'Raqaa', serif" }}>
            عن مجلس التربية الممتد
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-orange-400 to-primary mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            رحلة تربوية عميقة تتجاوز المعرفة إلى الممارسة والتحول الشخصي
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-r-4 border-primary">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6" style={{ fontFamily: "'Raqaa', serif" }}>
              لماذا المجلس يستغرق وقتاً طويلاً؟
            </h2>
            <div className="space-y-6 text-right text-gray-700 leading-relaxed">
              <p>
                المجلس <span className="font-semibold text-primary">(ممتد)</span> يأخذ فترة طويلة، ونشرح فيه كتاب واحد فقط! أو كتابين بحد أقصى. قد يبدو هذا مثيراً للاستغراب لبعض الناس، وأنا أقدّر ذلك جداً.
              </p>
              
              <p>
                البعض يسأل: <span className="italic">"لماذا أعمل في نفسي هكذا؟ مادمت أستطيع الحصول على كتب أكثر في وقت أقل؟"</span>
              </p>

              <div className="bg-amber-50 border-r-4 border-orange-400 p-6 rounded-lg">
                <p className="font-semibold text-primary mb-3">الحقيقة:</p>
                <p>
                  هذا التصور ينبع من عدم تدقيق في ماهية التربية بالأساس. الكتب التي نشرحها متوفرة وسهل الوصول إليها، والاستمتاع بأفكارها لن يعدمك خيراً أبداً. لكن إضافتي على الكتاب ليست في فك الألفاظ أو ترجمة الأفكار، بل في الأشياء الثرية والنافعة جداً على المستوى الشخصي والتربوي، أشياء راجعة لرحلتي الخاصة، وليست متوفرة بهذا الشكل بسهولة.
                </p>
              </div>

              <p>
                <span className="font-semibold text-primary">الكتاب مطية</span> لمجموعة أفكار أوسع عايز أبرزها. أنت ستشوف أبعد بكتير جداً من الكتاب.
              </p>
            </div>
          </div>

          {/* Section 2 - The Core Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Goal 1 */}
            <div className="bg-gradient-to-br from-primary/10 to-orange-100 rounded-2xl shadow-lg p-8 border-t-4 border-primary">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-2xl font-bold text-primary mr-4" style={{ fontFamily: "'Raqaa', serif" }}>أنت داخل التربية</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-right">
                أنت لا تقرأ عن التربية، بل أنت داخلها! الأفكار التي نتكلم عنها تصبح جزءاً منك. مثلاً: نحن لا نتكلم عن "إقرار المشاعر" فقط، بل نمارسها طول الطريق. أنت تشرب التربية وأنت ماشٍ.
              </p>
            </div>

            {/* Goal 2 */}
            <div className="bg-gradient-to-br from-primary/10 to-orange-100 rounded-2xl shadow-lg p-8 border-t-4 border-primary">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-2xl font-bold text-primary mr-4" style={{ fontFamily: "'Raqaa', serif" }}>تطوير الحس التربوي</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-right">
                المجلس يهدف إلى أن تملك <span className="font-semibold">حساً تربوياً</span>، لا أن تكون ناقلاً أو سامعاً فقط. بعد وقت ستجد نفسك تشعر بما هو خاطئ، حتى لو لم تدرك الخطأ بالضبط. هذا الحس الداخلي سيتعلمه الطفل منك.
              </p>
            </div>

            {/* Goal 3 */}
            <div className="bg-gradient-to-br from-primary/10 to-orange-100 rounded-2xl shadow-lg p-8 border-t-4 border-primary">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-2xl font-bold text-primary mr-4" style={{ fontFamily: "'Raqaa', serif" }}>مشاركة الرحلة</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-right">
                معرفة سمات المرحلة لا تجعلها سهلة تلقائياً. التربية عملية معقدة، والطفل سيعلمك من خلال تحدياته. المجلس موجود ليحتويك ويشاركك هذه الرحلة الصعبة.
              </p>
            </div>

            {/* Goal 4 */}
            <div className="bg-gradient-to-br from-primary/10 to-orange-100 rounded-2xl shadow-lg p-8 border-t-4 border-primary">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">4</div>
                <h3 className="text-2xl font-bold text-primary mr-4" style={{ fontFamily: "'Raqaa', serif" }}>الاهتمام بك أولاً</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-right">
                المجلس مهتم بك أنت! لن نطلب منك ممارسة شيء لا تفهمه أو لا تستطيع تطبيقه على نفسك أولاً. <span className="font-semibold">أنت التربية</span> التي سينزرع فيها الطفل، وأنت من يحتاج أن تعتني بنفسك.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-l-4 border-primary">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6" style={{ fontFamily: "'Raqaa', serif" }}>
              الأساس الحقيقي للمجلس
            </h2>
            <div className="space-y-6 text-right text-gray-700 leading-relaxed">
              <p>
                المجلس مبني على عدد كبير جداً من الكتب! نحن نقرأ كتاباً واحداً، لكن تحضير كل مجلس يتطلب مراجعة مجموعة كتب ضخمة. هذا البحث العميق يخليك ترى كل الكتب التربوية بعين مختلفة تماماً.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-orange-100/50 p-6 rounded-lg border-r-4 border-primary">
                <p className="font-semibold text-primary mb-3">المجلس كائن حي:</p>
                <p>
                  أهله أهم شيء فيه. ثم كل الأشياء التي تحصل حوله، بما فيها قراءة المنهج. المجلس ليس مجرد معلومات، بل هو مجتمع يتعلم ويتطور معاً.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-orange-500 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: "'Raqaa', serif" }}>
              هل تريد المزيد؟
            </h2>
            <p className="text-lg mb-8 opacity-90">
              إذا كنت تريد الغوص أعمق في المنهج الكامل، انضم إلى كورس "كيف تكون فني (صنايعي) تربية إيجابية"
            </p>
            <Link href="/contact">
              <a className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105">
                تواصل معنا
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
