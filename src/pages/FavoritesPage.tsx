import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { Star, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FavoritesPage() {
  const { t } = useLanguage();
  const { favorites } = useFavorites();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-6 flex justify-start">
        <Link to="/" className="inline-flex items-center gap-2 text-eastern-text/60 hover:text-eastern-gold transition-colors text-[18px] font-bold uppercase tracking-widest">
          <ArrowLeft className="w-5 h-5 rtl:rotate-180" /> {t('Back', 'عودة')}
        </Link>
      </div>
      <header className="space-y-4">
        <div className="inline-flex items-center justify-center p-4 bg-eastern-gold/10 text-eastern-gold rounded-full border border-eastern-gold/20 mb-2">
          <Star className="w-8 h-8 fill-current" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif tracking-widest text-eastern-text glow-gold uppercase">
          {t('Your Favorites', 'مفضلاتك')}
        </h1>
        <p className="text-eastern-text/60 max-w-2xl text-[18px] font-bold leading-relaxed font-sans">
          {t(
            'Elements you have saved for quick access.',
            'العناصر التي قمت بحفظها للوصول السريع إليها.'
          )}
        </p>
      </header>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 text-eastern-text/50 glass rounded-2xl">
          <AlertCircle className="w-12 h-12 mb-2 text-eastern-text/20" />
          <h2 className="text-xl font-bold font-serif tracking-widest uppercase">{t('No favorites yet.', 'لا توجد مفضلات بعد.')}</h2>
          <p className="font-sans text-[18px] font-bold">{t('Browse the encyclopedia and click the star icon to save items here.', 'تصفح الموسوعة واضغط على أيقونة النجمة لحفظ العناصر هنا.')}</p>
          <Link to="/maqamat" className="mt-4 px-6 py-2 bg-eastern-text/5 border border-eastern-text/10 hover:bg-eastern-text/10 rounded-full text-eastern-text/80 uppercase tracking-widest text-[10px] font-bold transition-colors">
            {t('Explore Maqamat', 'استكشف المقامات')}
          </Link>
        </div>
      ) : (
        <div className="glass rounded-2xl p-6 shadow-sm">
          <ul className="space-y-3">
             {favorites.map(fav => (
               <li key={fav} className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-eastern-text/5">
                 <Star className="w-4 h-4 text-eastern-gold fill-current" />
                 <span className="font-mono text-[18px] font-bold text-eastern-text/70">{fav}</span>
               </li>
             ))}
          </ul>
          <p className="mt-6 text-[10px] uppercase tracking-widest text-eastern-text/40 text-center">
            {t('Saved elements can be used as quick references while using the AI Generator.', 'يمكن استخدام العناصر المحفوظة كمراجع سريعة أثناء استخدام المولد الذكي.')}
          </p>
        </div>
      )}
    </div>
  );
}
