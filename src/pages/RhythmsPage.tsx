import { Link } from 'react-router-dom';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { Star, FileText, PlayCircle, ArrowLeft } from 'lucide-react';
import { rhythms } from '../data/rhythms';
import { cn } from '../App';

export default function RhythmsPage() {
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
          {t('Eastern Rhythms', 'الإيقاعات الشرقية')}
        </h1>
        <p className="text-eastern-text/60 max-w-2xl text-[18px] font-bold leading-relaxed font-sans mt-4">
          {t(
            'The heartbeat of Arabic music. Discover time signatures, Dum-Tak patterns, and cultural origins.',
            'نبض الموسيقى العربية. اكتشف المقاييس الزمنية، وأنماط الدم-تك، والأصول الثقافية.'
          )}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rhythms.map((rhythm) => {
          const favId = `rhythm_${rhythm.id}`;
          const isFav = isFavorite(favId);
          return (
            <div key={rhythm.id} className="glass rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col hover:border-eastern-gold/40">
              <div className="p-6 flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold font-serif glow-gold text-eastern-gold">
                      {language === 'en' ? rhythm.name.en : rhythm.name.ar}
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[18px] font-bold font-bold bg-eastern-gold/10 text-eastern-gold px-2 py-0.5 rounded border border-eastern-gold/20">
                        {rhythm.timeSignature}
                      </span>
                      <span className="text-[18px] font-bold text-eastern-text/50">{rhythm.tempoRange}</span>
                    </div>
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
                
                <div className="text-[18px] font-bold border-l-2 border-eastern-gold pl-3 rtl:pl-0 rtl:pr-3 rtl:border-l-0 rtl:border-r-2 py-1 mt-4">
                  <span className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-1">{t('Mnemonic (Pattern)', 'النمط الإيقاعي')}</span>
                  <span className="font-mono font-bold text-eastern-text/80 flex items-center gap-2">
                    <PlayCircle className="w-4 h-4 text-eastern-gold" />
                    {language === 'en' ? rhythm.audioDesc.en : rhythm.audioDesc.ar}
                  </span>
                </div>

                <p className="text-[18px] font-bold text-eastern-text/70">
                  <strong className="text-eastern-gold">{t('Origin: ', 'الأصل: ')}</strong>
                  {language === 'en' ? rhythm.culturalOrigin.en : rhythm.culturalOrigin.ar}
                </p>

              </div>

              <div className="bg-eastern-surface p-4 border-t border-eastern-gold/20 relative">
                <div className="flex items-center gap-2 text-eastern-gold font-bold text-[10px] uppercase tracking-widest mb-2">
                  <FileText className="w-3.5 h-3.5" />
                  {t('AI Prompt', 'أمر التوليد')}
                </div>
                <p className="text-[18px] font-bold text-eastern-text/70 italic font-mono bg-black/40 p-3 rounded border border-eastern-text/5">
                  "{language === 'en' ? rhythm.aiPrompt.en : rhythm.aiPrompt.ar}"
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
