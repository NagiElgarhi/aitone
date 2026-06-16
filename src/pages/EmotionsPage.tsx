import { Link } from 'react-router-dom';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { Star, Heart, FileText, ArrowLeft } from 'lucide-react';
import { emotions } from '../data/emotions';
import { cn } from '../App';

export default function EmotionsPage() {
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
          {t('Human Emotions Library', 'مكتبة المشاعر الإنسانية')}
        </h1>
        <p className="text-eastern-text/60 max-w-2xl text-[18px] font-bold leading-relaxed font-sans mt-4">
          {t(
            'Map feelings to the precise musical characteristics, maqamat, and rhythms to tell your story effectively.',
            'اربط المشاعر بالخصائص الموسيقية الدقيقة والمقامات والإيقاعات لتروي قصتك بفاعلية.'
          )}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {emotions.map((emotion) => {
          const favId = `emotion_${emotion.id}`;
          const isFav = isFavorite(favId);
          return (
            <div key={emotion.id} className="glass rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:border-eastern-gold/40">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start border-b border-eastern-gold/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-eastern-gold/10 text-eastern-gold rounded-full border border-eastern-gold/20">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h2 className="text-3xl font-bold font-serif text-eastern-gold glow-gold tracking-wider">
                      {language === 'en' ? emotion.name.en : emotion.name.ar}
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
                
                <p className="text-eastern-text/80 text-[18px] font-bold italic font-sans leading-relaxed">
                  {language === 'en' ? emotion.musicalChars.en : emotion.musicalChars.ar}
                </p>

                <div className="grid grid-cols-2 gap-4 text-[18px] font-bold mt-4 text-eastern-text/70 font-sans">
                  <div>
                    <span className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Maqamat:', 'المقامات:')}</span>
                    {emotion.suggestedMaqamat.join(' • ')}
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Rhythms:', 'الإيقاعات:')}</span>
                    {emotion.suggestedRhythms.join(' • ')}
                  </div>
                  <div className="col-span-2">
                    <span className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Vocal Style:', 'أسلوب الغناء:')}</span>
                    {language === 'en' ? emotion.vocalStyle.en : emotion.vocalStyle.ar}
                  </div>
                </div>

                <div className="mt-6 bg-eastern-surface p-4 rounded-xl border border-eastern-gold/20 relative">
                  <div className="flex items-center gap-2 text-eastern-gold font-bold text-[10px] uppercase tracking-widest mb-2">
                    <FileText className="w-4 h-4" />
                    {t('AI Prompt', 'أمر التوليد الذكي')}
                  </div>
                  <p className="text-[18px] font-bold text-eastern-text/70 font-mono bg-black/40 p-3 rounded">
                    "{language === 'en' ? emotion.aiPrompt.en : emotion.aiPrompt.ar}"
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
