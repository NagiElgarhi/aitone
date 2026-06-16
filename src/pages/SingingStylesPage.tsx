import { Link } from 'react-router-dom';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { Star, Mic2, FileText, ArrowLeft } from 'lucide-react';
import { singingStyles } from '../data/singing';
import { cn } from '../App';

export default function SingingStylesPage() {
  const { language, t } = useLanguage();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-6 flex justify-start">
        <Link to="/" className="inline-flex items-center gap-2 text-eastern-text/60 hover:text-eastern-gold transition-colors text-[18px] font-bold uppercase tracking-widest">
          <ArrowLeft className="w-5 h-5 rtl:rotate-180" /> {t('Back', 'عودة')}
        </Link>
      </div>
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif tracking-widest text-eastern-text glow-gold uppercase">
          {t('Singing Styles Library', 'مكتبة أساليب الغناء')}
        </h1>
        <p className="text-eastern-text/60 max-w-2xl text-[18px] font-bold leading-relaxed font-sans mt-4">
          {t(
            'Explore the rich vocal traditions of the Middle East, from classic Tarab to regional folk.',
            'اكتشف التقاليد الصوتية الغنية للشرق الأوسط، من الطرب الكلاسيكي إلى الفلكلور الإقليمي.'
          )}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {singingStyles.map((style) => {
          const favId = `singing_${style.id}`;
          const isFav = isFavorite(favId);
          return (
            <div key={style.id} className="glass rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:border-eastern-gold/40">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start border-b border-eastern-gold/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-eastern-gold/10 text-eastern-gold rounded-full border border-eastern-gold/20">
                      <Mic2 className="w-5 h-5" />
                    </div>
                    <h2 className="text-3xl font-bold font-serif text-eastern-gold glow-gold tracking-wider">
                      {language === 'en' ? style.name.en : style.name.ar}
                    </h2>
                  </div>
                  <button 
                    onClick={() => toggleFavorite(favId)}
                    className={cn(
                      "p-2 rounded-full transition-colors border",
                      isFav ? "text-eastern-gold bg-eastern-gold/10 border-eastern-gold" : "text-eastern-text/40 border-eastern-text/10 hover:text-eastern-text hover:bg-eastern-text/5"
                    )}
                  >
                    <Star className={cn("w-5 h-5", isFav && "fill-current")} />
                  </button>
                </div>
                
                <div className="space-y-4 text-[18px] font-bold font-sans pt-2">
                  <div>
                    <span className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Techniques:', 'التقنيات:')}</span>
                    <p className="text-eastern-text/80 leading-relaxed">{language === 'en' ? style.vocalTechniques.en : style.vocalTechniques.ar}</p>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Ornamentation:', 'الزخرفة:')}</span>
                    <p className="text-eastern-text/80 leading-relaxed">{language === 'en' ? style.ornamentation.en : style.ornamentation.ar}</p>
                  </div>
                </div>

                <div className="mt-6 bg-eastern-surface p-4 rounded-xl border border-eastern-gold/20 relative">
                  <div className="flex items-center gap-2 text-eastern-gold font-bold text-[10px] uppercase tracking-widest mb-2">
                    <FileText className="w-4 h-4" />
                    {t('AI Prompt', 'أمر التوليد')}
                  </div>
                  <p className="text-[18px] font-bold text-eastern-text/70 font-mono bg-black/40 p-3 rounded">
                    "{language === 'en' ? style.aiPrompt.en : style.aiPrompt.ar}"
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
