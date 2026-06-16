import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Music, RefreshCw, FileText, ArrowLeft } from 'lucide-react';
import { cn } from '../App';
import { songIdeas } from '../data/songIdeas';

export default function SongBuilder() {
  const { language, t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [songIdea, setSongIdea] = useState<any>(null);

  const generateIdea = () => {
    setLoading(true);
    // Simulate AI generation with timeout
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * songIdeas.length);
      setSongIdea(songIdeas[randomIndex]);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <div className="mb-6 flex justify-start">
        <Link to="/" className="inline-flex items-center gap-2 text-eastern-text/60 hover:text-eastern-gold transition-colors text-[18px] font-bold uppercase tracking-widest">
          <ArrowLeft className="w-5 h-5 rtl:rotate-180" /> {t('Back', 'عودة')}
        </Link>
      </div>
      <header className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-4 bg-eastern-gold/10 text-eastern-gold rounded-full border border-eastern-gold/20 mb-2">
          <Music className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif tracking-widest text-eastern-text glow-gold uppercase">
          {t('Complete Song Builder', 'باني الأغنية المتكامل')}
        </h1>
        <p className="text-eastern-text/60 font-sans text-[18px] font-bold max-w-2xl mx-auto">
          {t(
            'Instantly generate a highly structured song concept including arrangement, flow, and thematic lyrics ideas.',
            'أنشئ على الفور مفهوم أغنية مهيكل للغاية بما في ذلك التوزيع المتبلور، والتدفق، وأفكار الكلمات الموضوعية.'
          )}
        </p>
      </header>

      <div className="flex justify-center">
        <button 
          onClick={generateIdea}
          disabled={loading}
          className="flex items-center gap-2 bg-eastern-gold hover:bg-[#b0912d] disabled:bg-eastern-text/10 disabled:text-eastern-text/40 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[18px] font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
          {t('Generate Concept', 'توليد فكرة أغنية')}
        </button>
      </div>

      {songIdea && (
        <div className="glass rounded-2xl p-6 sm:p-10 animate-in slide-in-from-bottom-8 fade-in duration-500 flex flex-col gap-8">
          
          <div className="text-center pb-6 border-b border-eastern-gold/20">
            <h2 className="text-3xl font-bold text-eastern-gold glow-gold font-serif tracking-widest uppercase">
              "{language === 'en' ? songIdea.title.en : songIdea.title.ar}"
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mt-6 text-[10px] font-bold uppercase tracking-widest">
              <span className="bg-eastern-text/5 border border-eastern-text/10 text-eastern-text/70 px-4 py-1.5 rounded-full">{language === 'en' ? songIdea.maqam.en : songIdea.maqam.ar}</span>
              <span className="bg-eastern-text/5 border border-eastern-text/10 text-eastern-text/70 px-4 py-1.5 rounded-full">{language === 'en' ? songIdea.rhythm.en : songIdea.rhythm.ar}</span>
            </div>
            <p className="mt-6 text-eastern-text/60 italic font-sans">
              {language === 'en' ? songIdea.emotion.en : songIdea.emotion.ar}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold font-serif tracking-widest uppercase text-eastern-text flex items-center gap-2">
              <Music className="w-4 h-4 text-eastern-gold" /> 
              {t('Arrangement Structure', 'هيكل التوزيع الموسيقي')}
            </h3>
            
            <div className="grid gap-3 sm:ml-4 rtl:sm:mr-4 rtl:sm:ml-0 font-sans">
              {[
                { k: 'intro', l: t('Intro', 'المقدمة') },
                { k: 'verse', l: t('Verse', 'المقطع') },
                { k: 'chorus', l: t('Chorus', 'اللازمة (الكورس)') },
                { k: 'bridge', l: t('Bridge', 'الجسر الموسيقي') },
                { k: 'outro', l: t('Outro', 'الخاتمة') }
              ].map((part) => (
                <div key={part.k} className="flex flex-col sm:flex-row gap-2 sm:gap-6 bg-black/40 p-5 rounded-xl border border-eastern-text/5">
                  <div className="font-bold sm:w-24 text-eastern-gold uppercase tracking-widest text-[10px] sm:mt-1">
                    {part.l}
                  </div>
                  <div className="flex-1 text-[18px] font-bold text-eastern-text/80 leading-relaxed font-bold">
                    {language === 'en' ? songIdea.arrangement[part.k].en : songIdea.arrangement[part.k].ar}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-eastern-surface rounded-xl p-6 border border-eastern-gold/20 font-sans relative overflow-hidden">
            <div className="absolute inset-0 bg-eastern-gold/5 pointer-events-none"></div>
            <h3 className="text-[18px] font-bold uppercase tracking-widest font-bold flex items-center gap-2 text-eastern-gold mb-4 relative z-10">
              <FileText className="w-4 h-4" /> 
              {t('Thematic Lyrical Direction', 'الاتجاه الموضوعي للكلمات')}
            </h3>
            <p className="text-eastern-text/80 leading-relaxed text-[18px] font-bold relative z-10">
              {language === 'en' ? songIdea.lyricsIdea.en : songIdea.lyricsIdea.ar}
            </p>
          </div>

        </div>
      )}
    </div>
  );
}
