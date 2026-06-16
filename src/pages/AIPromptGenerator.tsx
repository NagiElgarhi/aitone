import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Wand2, Copy, CheckCircle, ArrowLeft } from 'lucide-react';
import { instruments } from '../data/instruments';
import { cn } from '../App';

const PROMPT_EMOTIONS = [
  { en: "Joy/Happiness", ar: "فرح / سعادة" },
  { en: "Sadness/Melancholy", ar: "حزن / شجن" },
  { en: "Nostalgia/Longing", ar: "حنين / شوق" },
  { en: "Epic/Triumphant", ar: "ملحمي / انتصار" },
  { en: "Mystical/Spiritual", ar: "روحاني / صوفي" },
  { en: "Romance/Love", ar: "رومانسي / حب" },
  { en: "Anger/Aggression", ar: "غضب / تمرد" },
  { en: "Calm/Relaxing", ar: "هدوء / استرخاء" },
  { en: "Energetic/Upbeat", ar: "حيوية / نشاط" },
  { en: "Dark/Ominous", ar: "غموض / ظلام" },
  { en: "Hope/Inspiration", ar: "أمل / إلهام" },
  { en: "Playful/Fun", ar: "مرح / لعب" },
  { en: "Tension/Anxiety", ar: "توتر / قلق" },
  { en: "Proud/Majestic", ar: "فخر / عظمة" },
  { en: "Dreamy/Ethereal", ar: "حالم / خيالي" },
  { en: "Uplifting/Motivational", ar: "تحفيزي / مشجع" },
  { en: "Grief/Sorrow", ar: "أسى / لوعة" },
  { en: "Wonder/Awe", ar: "دهشة / روعة" },
  { en: "Reflective/Thoughtful", ar: "تأملي / تفكير" },
  { en: "Sexy/Sensual", ar: "حسي / جذاب" }
];

const PROMPT_MAQAMAT = [
  { en: "Maqam Rast", ar: "مقام راست" },
  { en: "Maqam Bayati", ar: "مقام بياتي" },
  { en: "Maqam Hijaz", ar: "مقام حجاز" },
  { en: "Maqam Nahawand", ar: "مقام نهاوند" },
  { en: "Maqam Kurd", ar: "مقام كرد" },
  { en: "Maqam Sikah", ar: "مقام سيكاه" },
  { en: "Maqam Saba", ar: "مقام صبا" },
  { en: "Maqam Ajam", ar: "مقام عجم" },
  { en: "Maqam Nawa Athar", ar: "مقام نوأثر" },
  { en: "Maqam Hijaz Kar", ar: "مقام حجاز كار" },
  { en: "Maqam Suznak", ar: "مقام سوزناك" },
  { en: "Maqam Zanjaran", ar: "مقام زنجران" },
  { en: "Maqam Lami", ar: "مقام لامي" },
  { en: "Maqam Shawq Afza", ar: "مقام شوق أفزا" },
  { en: "Maqam Farahfaza", ar: "مقام فرحفزا" },
  { en: "Maqam Huzzam", ar: "مقام هزام" },
  { en: "Maqam Iraq", ar: "مقام عراق" },
  { en: "Maqam Jiharkah", ar: "مقام جهاركاه" },
  { en: "Maqam Mahur", ar: "مقام ماهور" },
  { en: "Maqam Nakriz", ar: "مقام نكريز" }
];

const PROMPT_RHYTHMS = [
  { en: "Maqsoum", ar: "مقسوم" },
  { en: "Saidi", ar: "صعيدي" },
  { en: "Malfuf", ar: "ملفوف" },
  { en: "Baladi", ar: "بلدي" },
  { en: "Ayoub", ar: "أيوب" },
  { en: "Ciftatelli", ar: "شفتتلي" },
  { en: "Wahda", ar: "وحدة" },
  { en: "Masmoudi Kabir", ar: "مصمودي كبير" },
  { en: "Masmoudi Saghir", ar: "مصمودي صغير" },
  { en: "Samai", ar: "سماعي" },
  { en: "Fallahi", ar: "فلاحي" },
  { en: "Khaleegy - Rumba", ar: "خليجي رومبا" },
  { en: "Khaleegy - Khubayti", ar: "خليجي خبيتي" },
  { en: "Khaleegy - Bandari", ar: "خليجي بندري" },
  { en: "Jerk", ar: "جيرك" },
  { en: "Waltz 3/4", ar: "فالس 3/4" },
  { en: "Fox 2/4", ar: "فوكس 2/4" },
  { en: "Zaffa", ar: "زفة" },
  { en: "Nawakht", ar: "نواخت" },
  { en: "Aqsaq", ar: "أقصاق" }
];

const PROMPT_TEMPOS = [
  { en: "Ultra Slow (40-50 BPM)", ar: "بطيء جداً متعمد (40-50)" },
  { en: "Very Slow (50-60 BPM)", ar: "بطيء جداً (50-60)" },
  { en: "Slow & Heavy (60-70 BPM)", ar: "بطيء وثقيل (60-70)" },
  { en: "Relaxed (70-75 BPM)", ar: "مسترخي (70-75)" },
  { en: "Andante (75-80 BPM)", ar: "إيقاع المشي / أندانتي (75-80)" },
  { en: "Moderate Slow (80-85 BPM)", ar: "معتدل بطيء (80-85)" },
  { en: "Moderate (85-90 BPM)", ar: "معتدل (85-90)" },
  { en: "Moderate Fast (90-95 BPM)", ar: "معتدل سريع (90-95)" },
  { en: "Mid-Tempo (95-100 BPM)", ar: "متوسط السرعة (95-100)" },
  { en: "Upbeat (100-105 BPM)", ar: "مبهج (100-105)" },
  { en: "Lively (105-110 BPM)", ar: "حيوي (105-110)" },
  { en: "Energetic (110-115 BPM)", ar: "حيوي جداً (110-115)" },
  { en: "Allegro / Fast (115-120 BPM)", fast: true, ar: "سريع / أليجرو (115-120)" },
  { en: "Dance / Club (120-125 BPM)", ar: "موسيقى رقص (120-125)" },
  { en: "Fast Dance (125-130 BPM)", ar: "موسيقى رقص سريعة (125-130)" },
  { en: "Uptempo (130-140 BPM)", ar: "تصاعدي سريع (130-140)" },
  { en: "Very Fast (140-150 BPM)", ar: "سريع جداً (140-150)" },
  { en: "Rapid (150-160 BPM)", ar: "خاطف (150-160)" },
  { en: "Frenetic (160-180 BPM)", ar: "جنوني السرعة (160-180)" },
  { en: "Extremely Fast (180+ BPM)", ar: "أقصى سرعة (+180)" }
];

const PROMPT_VOCAL_STYLES = [
  { en: "Tarab / Melismatic", ar: "طرب أصيل / عُرب صوتية" },
  { en: "Mawwal / Improvisation", ar: "موال / ارتجال" },
  { en: "Modern Pop", ar: "غناء بوب حديث" },
  { en: "Operatic", ar: "غناء أوبرالي" },
  { en: "Spoken Word / Poetry", ar: "إلقاء شعري" },
  { en: "Whisper / Mumble", ar: "همس / غناء خافت" },
  { en: "Powerful / Belting", ar: "غناء قوي / جهوري" },
  { en: "Soft / Breathy", ar: "صوت ناعم / مليء بالأنفاس" },
  { en: "Folkloric / Rural", ar: "غناء فلكلوري / ريفي" },
  { en: "Sufi Chanting", ar: "إنشاد صوفي" },
  { en: "Cinematic Choral", ar: "إنشاد سينمائي" },
  { en: "Rap / Hip-Hop Flow", ar: "تدفق راب / هيب هوب" },
  { en: "Jazzy / Soulful", ar: "غناء جاز / سول" },
  { en: "Theatrical / Dramatic", ar: "مسرحي / درامي" },
  { en: "Falsetto / Head Voice", ar: "طبقة مستعارة / صوت الرأس" },
  { en: "Raspy / Gritty", ar: "صوت مبحوح / خشن" },
  { en: "Yodel / Trill", ar: "زغردة / تنقل طبقي" },
  { en: "Robotic / Vocoder", ar: "صوت آلي / فوكودر" },
  { en: "Acapella (No Instruments)", ar: "أكابيلا (بدون آلات)" },
  { en: "Chanting Monks", ar: "ترتيل" }
];

const PROMPT_GENDERS = [
  { en: "Male Solo - Baritone", ar: "باريتون - ذكر" },
  { en: "Male Solo - Tenor", ar: "تينور - ذكر" },
  { en: "Male Solo - Bass", ar: "باص - ذكر" },
  { en: "Female Solo - Soprano", ar: "سوبرانو - أنثى" },
  { en: "Female Solo - Alto", ar: "ألتو - أنثى" },
  { en: "Female Solo - Mezzo-Soprano", ar: "ميزو سوبرانو - أنثى" },
  { en: "Child Solo - Boy", ar: "طفل" },
  { en: "Child Solo - Girl", ar: "طفلة" },
  { en: "Duet - Male & Female", ar: "دويتو - ذكر وأنثى" },
  { en: "Duet - Two Males", ar: "دويتو - ذكران" },
  { en: "Duet - Two Females", ar: "دويتو - أنثيان" },
  { en: "Small Male Choir", ar: "كورس رجال مصغر" },
  { en: "Huge Male Choir", ar: "جوقة رجال ضخمة" },
  { en: "Small Female Choir", ar: "كورس نساء مصغر" },
  { en: "Huge Female Choir", ar: "جوقة نساء ضخمة" },
  { en: "Mixed Choir - SATB", ar: "جوقة مختلطة" },
  { en: "Children's Choir", ar: "جوقة أطفال" },
  { en: "Crowd / Stadium Singing", ar: "غناء جماهير / ملعب" },
  { en: "Androgynous Voice", ar: "صوت محايد" },
  { en: "Artificial / AI Voice", ar: "صوت ذكاء اصطناعي" }
];

const PROMPT_GENRES = [
  { en: "Traditional Tarab", ar: "طرب شرقي تقليدي" },
  { en: "Modern Arabic Pop", ar: "بوب عربي حديث" },
  { en: "Classic Andalusian", ar: "موشحات أندلسية" },
  { en: "Sufi / Spiritual", ar: "صوفي / روحاني" },
  { en: "Shaabi / Mahraganat", ar: "شعبي / مهرجانات" },
  { en: "Khaleeji Modern", ar: "خليجي حديث" },
  { en: "Iraqi Chobi", ar: "عراقي جوبي" },
  { en: "Levantine Dabke", ar: "دبكة شامية" },
  { en: "Rai / North African", ar: "راي مغاربي" },
  { en: "Cinematic Orchestral", ar: "أوركسترالي سينمائي" },
  { en: "Arabic Jazz Fusion", ar: "فيوجن جاز شرقي" },
  { en: "Oriental Rock", ar: "روك شرقي" },
  { en: "Electronic / Ambient", ar: "إلكتروني / محيطي" },
  { en: "Lo-Fi Oriental", ar: "لو-فاي شرقي" },
  { en: "Trap / Oriental Hip-Hop", ar: "تراب / هيب هوب شرقي" },
  { en: "Acoustic Folk", ar: "فلكلوريات أكوستيك" },
  { en: "Lounge / Chillout", ar: "لاونج / أرابيسك هادئ" },
  { en: "Synthwave Oriental", ar: "سينثويف شرقي" },
  { en: "Classical Crossover", ar: "كلاسيكي متقاطع" },
  { en: "World Music / Tribal", ar: "موسيقى عالمية / قبلية" }
];

const PROMPT_COMPLEXITIES = [
  { en: "Solo Instrument Only", ar: "عزف منفرد فقط" },
  { en: "Voice & One Instrument", ar: "صوت وآلة واحدة" },
  { en: "Minimalist / Sparse", ar: "بسيط جداً / متناثر" },
  { en: "Acoustic Unplugged", ar: "أكوستيك طبيعي" },
  { en: "Intimate Trio", ar: "مجموعة ثلاثية حميمية" },
  { en: "Standard Band", ar: "فرقة موسيقية قياسية" },
  { en: "Balanced Pop Arrangement", ar: "توزيع بوب متوازن" },
  { en: "Rhythm-Heavy / Percussive", ar: "تركيز كثيف على الإيقاع" },
  { en: "Synth-Heavy / Electronic", ar: "تركيز على السنثسيزر" },
  { en: "Bass-Heavy / Subwoofer", ar: "تركيز على البيس" },
  { en: "Orchestral Strings Emphasis", ar: "تركيز على الوتريات" },
  { en: "Brass/Wind Section Featured", ar: "تركيز على النفخيات" },
  { en: "Dense & Lush", ar: "كثيف وغني بالطبقات" },
  { en: "Complex Time Signatures", ar: "موازين معقدة" },
  { en: "Progressive / Experimental", ar: "تقدمي / تجريبي" },
  { en: "Symphony Orchestra", ar: "أوركسترا سيمفونية كاملة" },
  { en: "Massive Choral Background", ar: "خلفية كورال ضخمة" },
  { en: "Wall of Sound", ar: "جدار صوتي / ضخم جداً" },
  { en: "Cinematic Trailer Epic", ar: "ملحمي / إعلان سينمائي" },
  { en: "Chaotic / Avant-Garde", ar: "فوضوي / مفرط التعقيد" }
];

export default function AIPromptGenerator() {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  // Form State
  const [genre, setGenre] = useState('');
  const [emotion, setEmotion] = useState('');
  const [maqam, setMaqam] = useState('');
  const [rhythm, setRhythm] = useState('');
  const [tempo, setTempo] = useState('');
  const [selectedInstruments, setSelectedInstruments] = useState<string[]>([]);
  const [vocalStyle, setVocalStyle] = useState('');
  const [gender, setGender] = useState('');
  const [complexity, setComplexity] = useState('Standard Band');

  const handleInstrumentToggle = (inst: string) => {
    setSelectedInstruments(prev => 
      prev.includes(inst) ? prev.filter(i => i !== inst) : [...prev, inst]
    );
  };

  const generatePrompt = () => {
    const parts = [];
    parts.push(`Create a professional, high-quality audio track.`);
    if (genre) parts.push(`Genre: ${genre}.`);
    if (emotion) parts.push(`Mood/Emotion: ${emotion}.`);
    if (maqam) parts.push(`Scale/Maqam: ${maqam}.`);
    if (rhythm) parts.push(`Rhythm: ${rhythm}.`);
    if (tempo) parts.push(`Tempo: ${tempo}.`);
    if (selectedInstruments.length > 0) parts.push(`Lead Instruments: ${selectedInstruments.join(', ')}.`);
    
    if (vocalStyle && gender) {
      parts.push(`Vocals: ${gender} performing in ${vocalStyle} style.`);
    } else if (vocalStyle || gender) {
      parts.push(`Vocals: ${gender || vocalStyle} style.`);
    } else {
      parts.push(`Vocals: Instrumental (no vocals).`);
    }

    parts.push(`Production: ${complexity} arrangement, studio-level mixing and mastering.`);
    
    return parts.join(' ');
  };

  const generatedPrompt = generatePrompt();

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          <Wand2 className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif tracking-widest text-eastern-text glow-gold uppercase">
          {t('AI Prompt Generator', 'مولد أوامر الذكاء الاصطناعي')}
        </h1>
        <p className="text-eastern-text/60 font-sans text-[18px] font-bold">
          {t(
            'Mix and match variables to generate perfect prompts for Suno, Udio, or other music generation AI.',
            'اجمع بين المتغيرات لإنشاء أوامر مثالية لبرامج توليد الموسيقى مثل Suno أو Udio.'
          )}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 glass p-6 rounded-2xl">
          <h2 className="font-bold text-xl border-b border-eastern-gold/20 pb-2 text-eastern-gold font-serif glow-gold">
            {t('Configuration', 'الإعدادات')}
          </h2>

          <div className="space-y-4 text-[18px] font-bold font-sans">
            {/* Emotion */}
            <div>
              <label className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Emotion/Mood', 'الحالة المزاجية')}</label>
              <select className="w-full p-2 border border-eastern-text/10 rounded-lg bg-black/40 text-eastern-text/80 focus:border-eastern-gold outline-none" value={emotion} onChange={e => setEmotion(e.target.value)}>
                <option value="">{t('Select Emotion...', 'اختر الشعور...')}</option>
                {PROMPT_EMOTIONS.map(e => <option key={e.en} value={e.en}>{language === 'en' ? e.en : e.ar}</option>)}
              </select>
            </div>

            {/* Maqam */}
            <div>
              <label className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Maqam (Scale)', 'المقام')}</label>
              <select className="w-full p-2 border border-eastern-text/10 rounded-lg bg-black/40 text-eastern-text/80 focus:border-eastern-gold outline-none" value={maqam} onChange={e => setMaqam(e.target.value)}>
                <option value="">{t('Select Maqam...', 'اختر المقام...')}</option>
                {PROMPT_MAQAMAT.map(m => <option key={m.en} value={m.en}>{language === 'en' ? m.en : m.ar}</option>)}
              </select>
            </div>

            {/* Rhythm & Tempo */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Rhythm', 'الإيقاع')}</label>
                <select className="w-full p-2 border border-eastern-text/10 rounded-lg bg-black/40 text-eastern-text/80 focus:border-eastern-gold outline-none" value={rhythm} onChange={e => setRhythm(e.target.value)}>
                  <option value="">{t('Select...', 'اختر...')}</option>
                  {PROMPT_RHYTHMS.map(r => <option key={r.en} value={r.en}>{language === 'en' ? r.en : r.ar}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Tempo (BPM)', 'السرعة')}</label>
                <select className="w-full p-2 border border-eastern-text/10 rounded-lg bg-black/40 text-eastern-text/80 focus:border-eastern-gold outline-none" value={tempo} onChange={e => setTempo(e.target.value)}>
                  <option value="">{t('Select...', 'اختر...')}</option>
                  {PROMPT_TEMPOS.map(tOption => <option key={tOption.en} value={tOption.en}>{language === 'en' ? tOption.en : tOption.ar}</option>)}
                </select>
              </div>
            </div>

            {/* Vocals */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Vocal Style', 'أسلوب الغناء')}</label>
                <select className="w-full p-2 border border-eastern-text/10 rounded-lg bg-black/40 text-eastern-text/80 focus:border-eastern-gold outline-none" value={vocalStyle} onChange={e => setVocalStyle(e.target.value)}>
                  <option value="">{t('Instrumental', 'موسيقى فقط')}</option>
                  {PROMPT_VOCAL_STYLES.map(s => <option key={s.en} value={s.en}>{language === 'en' ? s.en : s.ar}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Voice/Gender', 'الصوت والجنس')}</label>
                <select className="w-full p-2 border border-eastern-text/10 rounded-lg bg-black/40 text-eastern-text/80 focus:border-eastern-gold outline-none" value={gender} onChange={e => setGender(e.target.value)} disabled={!vocalStyle}>
                  <option value="">-</option>
                  {PROMPT_GENDERS.map(g => <option key={g.en} value={g.en}>{language === 'en' ? g.en : g.ar}</option>)}
                </select>
              </div>
            </div>
            
            {/* Genre & Complexity */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Genre Base', 'النوع الموسيقي')}</label>
                <select className="w-full p-2 border border-eastern-text/10 rounded-lg bg-black/40 text-eastern-text/80 focus:border-eastern-gold outline-none" value={genre} onChange={e => setGenre(e.target.value)}>
                  <option value="">{t('Select...', 'اختر...')}</option>
                  {PROMPT_GENRES.map(g => <option key={g.en} value={g.en}>{language === 'en' ? g.en : g.ar}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-1">{t('Complexity', 'التعقيد التوزيعي')}</label>
                <select className="w-full p-2 border border-eastern-text/10 rounded-lg bg-black/40 text-eastern-text/80 focus:border-eastern-gold outline-none" value={complexity} onChange={e => setComplexity(e.target.value)}>
                  <option value="">{t('Select...', 'اختر...')}</option>
                  {PROMPT_COMPLEXITIES.map(c => <option key={c.en} value={c.en}>{language === 'en' ? c.en : c.ar}</option>)}
                </select>
              </div>
            </div>

            {/* Instruments */}
            <div>
              <label className="block text-[10px] uppercase text-eastern-gold tracking-widest mb-2">{t('Instruments', 'الآلات')}</label>
              <div className="flex flex-wrap gap-2">
                {instruments.map(inst => (
                  <button
                    key={inst.id}
                    onClick={() => handleInstrumentToggle(inst.name.en)}
                    className={cn(
                      "px-3 py-1 rounded-full text-[18px] font-bold font-bold border transition-colors",
                      selectedInstruments.includes(inst.name.en)
                        ? "bg-eastern-gold/20 border-eastern-gold text-eastern-gold"
                        : "bg-eastern-text/5 border-eastern-text/10 hover:bg-eastern-text/10 text-eastern-text/60"
                    )}
                  >
                    {language === 'en' ? inst.name.en : inst.name.ar}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="space-y-6 flex flex-col">
          <div className="flex-1 bg-eastern-surface rounded-2xl p-6 text-eastern-gold font-mono text-[18px] font-bold shadow-xl flex flex-col relative overflow-hidden group border border-eastern-gold/20">
            <div className="absolute top-0 right-0 p-4 font-serif opacity-30 text-eastern-gold select-none text-2xl">PROMPT</div>
            <h2 className="text-eastern-text font-sans font-bold mb-4 tracking-widest uppercase text-[18px] font-bold">{t('Generated Prompt', 'الأمر المولد')}</h2>
            
            <div className="flex-1 whitespace-pre-wrap leading-relaxed select-all">
              {generatedPrompt}
            </div>

            <button 
              onClick={handleCopy}
              className="mt-6 w-full py-3 px-4 bg-eastern-gold hover:bg-[#b0912d] text-black rounded-full font-bold uppercase tracking-widest text-[18px] font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? t('Copied!', 'تم النسخ!') : t('Copy AI Prompt', 'نسخ الأمر')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

