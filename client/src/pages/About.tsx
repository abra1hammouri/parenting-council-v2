import React from 'react';
import { Link } from 'wouter';

export default function About() {
  const goals = [
    {
      number: 1,
      title: "الكتب أصلًا متوفرة",
      content: "لكن أنا عندي (ملكة) وطريق واسع، لإنك تشوف أبعد بكتير جدًا من الكتاب، وزي كل كتاب بنشرحه، الكتاب (مطية) لمجموعة أفكار أوسع عايز أبرزها."
    },
    {
      number: 2,
      title: "أنت جوا التربية",
      content: "مش بتقرأ عنها. أنت داخل التربية وتشرب أفكارها وأنت ماشٍ. الأفكار اللي بنتكلم عنها تصبح حتة منك."
    },
    {
      number: 3,
      title: "تطوير الحس التربوي",
      content: "المجلس واحد من أهدافه، إنه يكون عند المتعلم، حس تربوي! ميبقاش ناقل، ولا سميع! إنما أنت عندك حِس! عندك ملكة!"
    },
    {
      number: 4,
      title: "مشاركة الرحلة والاهتمام بك",
      content: "المجلس مهتم بيك أنت! أنت التربية اللي بينزرع فيها الطفل، وأنت اللي محتاج تخلي بالك من نفسك!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6" style={{ fontFamily: "'Raqaa', serif" }}>
            عن مجلس التربية الممتد
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-orange-400 to-primary mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Opening Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-r-4 border-primary">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8" style={{ fontFamily: "'Raqaa', serif" }}>
              المجلس (ممتد)، وياخد فترة طويلة، ونشرح فيه كتاب واحد فقط! أو كتابين بحد أقصى؟
            </h2>
            <div className="space-y-6 text-right text-gray-700 leading-relaxed text-lg">
              <p>
                آه، وده شيء ربما يكون مثير للاستغراب لبعض الناس، وأنا مقدر ده جدًا، وهنا بعض الناس بتسأل: طب ليه أعمل في نفسي كده؟ مادمت أقدر أحصل على كتب أكثر في وقت أقل؟
              </p>
              
              <p>
                الحقيقة إنه التصور ده خارج من مساحة، فيها عدم تدقيق في ماهية التربية بالأساس، الكتب اللي إحنا بنشرحها، كتب موجودة ومتوفرة، وسهل الوصول ليها في نهاية المطاف، والاستمتاع بأفكارها، ولن تعدم خيرًا أبدًا من الوصول للكتب والقراءة فيها، وأنا لا أرى إن الكتب دي (كتب التربية الإيجابية) تحتاج معلم يفك ألفاظها، بل حتى لا أرى الترجمات سيئة لدرجة إنك عايز حد يفك أفكارها، بالعكس، الكلام سلس وجميل، على الأقل في الكتابين اللي إحنا بنشرحهم، أو مهتمين بشرحهم.
              </p>

              <p>
                إنما أنا بشرح الكتب دي لإني عندي أشياء، ثرية جدًا، نافعة جدًا، ومفيدة جدًا على المستوى الشخصي وعلى المستوى التربوي، أشياء أزعم إنها راجعة لرحلتي أنا، وبالتالي مش العادي إنها تكون متوفرة بالشكل ده بسهولة.
              </p>

              <p>
                كمان، التصور الغير دقيق ده مبني على إن التربية هي مجموعة الأدوات اللي أنت هتعرفها، فهتلاقي نفسك بتطبقها، والدنيا تبقى فل! وأبسط الأشياء إن ده تصور مش حقيقي أبدًا.
              </p>
            </div>
          </div>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.map((goal) => (
              <div key={goal.number} className="bg-gradient-to-br from-primary/10 to-orange-100 rounded-2xl shadow-lg p-8 border-t-4 border-primary hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    {goal.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mr-4" style={{ fontFamily: "'Raqaa', serif" }}>
                    {goal.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-right">
                  {goal.content}
                </p>
              </div>
            ))}
          </div>

          {/* Core Philosophy Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-l-4 border-primary">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8" style={{ fontFamily: "'Raqaa', serif" }}>
              أساس المجلس
            </h2>
            <div className="space-y-6 text-right text-gray-700 leading-relaxed text-lg">
              <p>
                المجلس هدفه إقحامك في التربية، مش بمعرفة الأدوات اللي تقدر تستخدمها وبس، إنما بإنك تشوف الأدوات دي ممثلة قدامك على الحقيقة مرة وإتنين وتلاتة، المجلس هدفه إن الأفكار اللي بنتكلم عنها تكون حتة منك.
              </p>

              <p>
                إحنا مش بنتكلم عن قبول المشاعر، إحنا تسمية المشاعر، والإقرار بيها، واحترامها أيًا ما كان اللي بتقوله، بنمارسه طول ما إحنا ماشيين، أنت بتشرب تربية.
              </p>

              <p>
                المجلس كمان، هدفه، يشاركك الرحلة! يعني أنا لما أعرف سمات المرحلة، هتتوقف المرحلة عن كونها صعبة؟ طيب لما أتعلم تربية، وأعرف السلوك الواجب فعله! التربية بتبقى عملية سهلة وسلسلة! لأ، وعلشان كده الجروب موجود، يحتوي (المفكات) اللي الطفل بيضربها فيك!
              </p>

              <p>
                المجلس مبني على عدد كبير جدًا جدًا جدًا من الكتب! إحنا بنقرأ كتاب آه، لكن تحضير كل مجلس لامم مجموعة كتب تصدع أي حد، وبتصدعني أنا شخصيًا من كترها. والمجلس لوحده، كافي يخليك تشوف كل الكتب التربوية بعين مختلفة!
              </p>

              <p>
                المجلس كائن حي! أهله أهم شيء فيه، ثم كل الأشياء اللي بتحصل حواليه، واللي من ضمنها قراءة المنهج.
              </p>
            </div>
          </div>

          {/* Final Section */}
          <div className="bg-gradient-to-r from-primary/5 to-orange-100/50 rounded-2xl shadow-lg p-8 sm:p-12 border-r-4 border-primary">
            <p className="text-right text-gray-700 leading-relaxed text-lg">
              طيب أعمل إيه لو أنا محتاج أمد إيدي في المنهج كله، جمب مجلس التربية، أو لوحده من غير المجلس؟ احضر الكورس المتعلق ب"كيف تكون فني (صنايعي) تربية إيجابية".
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-orange-500 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: "'Raqaa', serif" }}>
              هل تريد التواصل معنا؟
            </h2>
            <p className="text-lg mb-8 opacity-90">
              تابعنا على وسائل التواصل الاجتماعي أو تواصل معنا مباشرة
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
