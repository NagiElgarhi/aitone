import { Link } from 'react-router-dom';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { Star, Guitar, ArrowLeft } from 'lucide-react';
import { instruments } from '../data/instruments';
import { cn } from '../App';

export default function InstrumentsPage() {
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
          {t('Eastern Instruments', 'الآلات الشرقية')}
        </h1>
        <p className="text-eastern-text/60 max-w-2xl text-[18px] font-bold leading-relaxed font-sans mt-4">
          {t(
            'The voices of the orchestra. Understand their timbres, ranges, and playing techniques.',
            'أصوات الأوركسترا. افهم نبراتها الععوتية، ومجالاتها، وتقنيات العزف عليها.'
          )}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {instruments.map((instrument) => {
          const favId = `instrument_${instrument.id}`;
          const isFav = isFavorite(favId);
          return (
            <div key={instrument.id} className="glass rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:border-eastern-gold/40">
              <div className="h-32 bg-eastern-surface flex items-center justify-center border-b border-eastern-gold/20 relative overflow-hidden">
                <div className="absolute inset-0 gradient-overlay opacity-30"></div>
                 <Guitar className="w-16 h-16 text-eastern-gold/20 relative z-10" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold font-serif text-eastern-gold glow-gold tracking-wider">
                    {language === 'en' ? instrument.name.en : instrument.name.ar}
                  </h2>
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
                
                <p className="text-[18px] font-bold text-eastern-text/70 font-sans leading-relaxed">
                  {language === 'en' ? instrument.description.en : instrument.description.ar}
                </p>

                <div className="space-y-3 text-[18px] font-bold pt-4 font-sans">
                  <div className="bg-eastern-text/5 px-4 py-3 rounded-xl border border-eastern-text/10">
                    <span className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Sound Character:', 'الطابع الصوتي:')}</span>
                    <span className="text-eastern-text/80">{language === 'en' ? instrument.soundChars.en : instrument.soundChars.ar}</span>
                  </div>
                  <div className="bg-eastern-text/5 px-4 py-3 rounded-xl border border-eastern-text/10">
                    <span className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Techniques:', 'تقنيات العزف:')}</span>
                    <span className="text-eastern-text/80">{language === 'en' ? instrument.playingTechniques.en : instrument.playingTechniques.ar}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
