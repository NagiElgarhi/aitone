import { Link } from 'react-router-dom';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { Star, FileText, ArrowLeft } from 'lucide-react';
import { maqamat } from '../data/maqamat';
import { cn } from '../App';

export default function MaqamatPage() {
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
          {t('Arabic Maqamat', 'المقامات العربية')}
        </h1>
        <p className="text-eastern-text/60 max-w-2xl text-[18px] font-bold leading-relaxed font-sans mt-4">
          {t(
            'Explore the foundational scales of Eastern music. Discover their emotional impact, structural notes, and use them to inspire AI generation.',
            'اكتشف السلالم الموسيقية الأساسية في الموسيقى الشرقية. تعرف على تأثيرها العاطفي ونغماتها الهيكلية واستخدمها لإلهام التوليد الذكي.'
          )}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {maqamat.map((maqam) => {
          const favId = `maqam_${maqam.id}`;
          const isFav = isFavorite(favId);
          return (
            <div key={maqam.id} className="glass rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col hover:border-eastern-gold/40">
              <div className="p-6 flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-4xl font-bold font-serif glow-gold text-eastern-gold mb-1">
                      {language === 'en' ? maqam.name.en : maqam.name.ar}
                    </h2>
                    <p className="text-[18px] font-bold font-mono text-eastern-text/40 uppercase tracking-widest">
                      {maqam.scaleNotes}
                    </p>
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
                
                <p className="text-eastern-text/80 text-[18px] font-bold leading-relaxed font-sans">
                  {language === 'en' ? maqam.description.en : maqam.description.ar}
                </p>

                <div className="grid grid-cols-2 gap-4 text-[18px] font-bold mt-4">
                  <div className="bg-eastern-text/5 p-3 rounded-xl border border-eastern-text/10 font-sans">
                    <span className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Emotional Effect', 'التأثير العاطفي')}</span>
                    <span className="text-eastern-text/70">{language === 'en' ? maqam.emotionalEffect.en : maqam.emotionalEffect.ar}</span>
                  </div>
                  <div className="bg-eastern-text/5 p-3 rounded-xl border border-eastern-text/10 font-sans">
                    <span className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Western Equivalent', 'المعادل الغربي')}</span>
                    <span className="text-eastern-text/70">{maqam.westernEquivalent}</span>
                  </div>
                </div>

                <div className="text-[18px] font-bold font-sans pt-2">
                  <strong className="text-eastern-gold">{t('Suggested Instruments: ', 'الآلات المقترحة: ')}</strong>
                  <span className="text-eastern-text/70">{maqam.suggestedInstruments.join(', ')}</span>
                </div>
              </div>

              <div className="bg-eastern-surface p-6 border-t border-eastern-gold/20 flex flex-col justify-center border-l-2 border-l-eastern-gold">
                <div className="flex items-center gap-2 text-eastern-gold text-[10px] uppercase tracking-widest mb-2 font-bold">
                  <FileText className="w-4 h-4" />
                  {t('AI Prompt Example', 'مثال لأمر التوليد الذكي')}
                </div>
                <p className="text-[18px] font-bold text-eastern-text/80 italic font-mono bg-black/40 p-3 rounded border border-eastern-text/5">
                  "{language === 'en' ? maqam.aiPrompt.en : maqam.aiPrompt.ar}"
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
