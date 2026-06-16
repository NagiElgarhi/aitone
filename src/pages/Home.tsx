import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Wand2, Music, AlignLeft, BookHeart, Guitar, Bot } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      to: '/maqamat',
      icon: AlignLeft,
      title: t('Arabic Maqamat', 'المقامات العربية'),
      desc: t('Explore the foundational scales of Eastern music.', 'اكتشف السلالم الموسيقية الأساسية في الموسيقى الشرقية.'),
    },
    {
      to: '/rhythms',
      icon: Music,
      title: t('Eastern Rhythms', 'الإيقاعات الشرقية'),
      desc: t('Discover the complex beats of the Middle East.', 'تعرف على الإيقاعات المذهلة للشرق الأوسط.'),
    },
    {
      to: '/instruments',
      icon: Guitar,
      title: t('Instruments', 'الآلات الموسيقية'),
      desc: t('Learn about traditional strings, winds, and percussions.', 'تعرف على الآلات الوترية والنفخية والإيقاعية.'),
    },
    {
      to: '/emotions',
      icon: BookHeart,
      title: t('Human Emotions', 'المشاعر الإنسانية'),
      desc: t('Map feelings to musical scales and rhythms.', 'اربط مشاعرك بالمقامات والإيقاعات المناسبة.'),
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-10">
        <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-eastern-gold/10 text-eastern-gold rounded-full mb-4 border border-eastern-gold/20">
          <Music className="w-8 h-8 sm:w-12 sm:h-12" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif tracking-widest text-eastern-text glow-gold uppercase">
          {t('Eastern Music Encyclopedia', 'موسوعة الموسيقى الشرقية')}
        </h1>
        <p className="text-lg sm:text-xl text-eastern-text/60 leading-relaxed font-sans mt-4 max-w-2xl mx-auto">
          {t(
            'The complete encyclopedia and creative studio dedicated to Arabic and Eastern music. Discover maqamat, rhythms, and generate professional AI music prompts.',
            'الموسوعة الشاملة والاستوديو الإبداعي المخصص للموسيقى العربية والشرقية. اكتشف المقامات، الإيقاعات، وأنتج نصوص توليد موسيقى احترافية بالذكاء الاصطناعي.'
          )}
        </p>
        <div className="pt-8 flex flex-wrap justify-center gap-4">
          <Link 
            to="/composer"
            className="inline-flex items-center gap-2 bg-[#b0912d] hover:bg-eastern-gold text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[18px] font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-eastern-gold/20"
          >
            <Bot className="w-4 h-4" />
            {t('Composer Agent', 'وكيل الألحان')}
          </Link>
          <Link 
            to="/generator"
            className="inline-flex items-center gap-2 bg-eastern-gold hover:bg-[#b0912d] text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[18px] font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-eastern-gold/20"
          >
            <Wand2 className="w-4 h-4" />
            {t('AI Prompt Generator', 'مولد الأوامر الذكي')}
          </Link>
          <Link 
            to="/builder"
            className="inline-flex items-center gap-2 glass hover:bg-eastern-text/5 text-eastern-text px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[18px] font-bold transition-all hover:scale-105 active:scale-95"
          >
            <Music className="w-4 h-4" />
            {t('Song Builder', 'باني الأغاني')}
          </Link>
        </div>
      </section>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        {features.map((f, idx) => (
          <Link 
            key={idx} 
            to={f.to}
            className="group flex flex-col p-6 glass rounded-2xl transition-all hover:-translate-y-1 hover:border-eastern-gold/40 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-eastern-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <f.icon className="w-8 h-8 text-eastern-gold mb-4 transition-transform group-hover:scale-110 relative z-10" />
            <h3 className="text-xl font-serif tracking-wider uppercase mb-2 relative z-10">{f.title}</h3>
            <p className="text-eastern-text/50 text-[18px] font-bold leading-relaxed font-sans relative z-10">{f.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
