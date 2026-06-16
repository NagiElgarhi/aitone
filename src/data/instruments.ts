import { Instrument } from './types';

export const instruments: Instrument[] = [
  {
    id: 'oud',
    name: { en: 'Oud', ar: 'عود' },
    description: {
      en: 'A fretless, pear-shaped string instrument, considered the king of Arabic instruments.',
      ar: 'آلة وترية خالية من الدساتين (الفرتس)، كمثرية الشكل، تعتبر ملك الآلات العربية.'
    },
    soundChars: {
      en: 'Warm, woody, resonant, and highly expressive.',
      ar: 'دافئ، خشبي، رنان، ومعبر للغاية.'
    },
    musicalRange: { en: 'Approx. 3 octaves', ar: 'حوالي 3 أوكتافات' },
    playingTechniques: {
      en: 'Plucking with a risha, tremolo, slides (glissando).',
      ar: 'النقش بالريشة، التريمولو، والانزلاقات (الجليساندو).'
    },
    suggestedGenres: ['Tarab', 'Classical Arabic', 'Acoustic Folk', 'Sufi']
  },
  {
    id: 'qanun',
    name: { en: 'Qanun', ar: 'قانون' },
    description: {
      en: 'A large flat zither with 78 to 81 strings, played sitting down or on the lap.',
      ar: 'آلة وترية خشبية مسطحة كبيرة تحتوي على 78 إلى 81 وتراً، تُعزف أثناء الجلوس أو على الحضن.'
    },
    soundChars: {
      en: 'Bright, metallic, crystalline, capable of rapid cascades.',
      ar: 'لامع، معدني، نقي كالفريستال، وقادر على عزف متواليات سريعة.'
    },
    musicalRange: { en: '3.5 octaves', ar: '3.5 أوكتافات' },
    playingTechniques: {
      en: 'Plucked with finger-picks, using mandals (levers) for microtones.',
      ar: 'يُنقر بريشات الأصابع، مع استخدام العرب (المفاتيح) لأرباع التون.'
    },
    suggestedGenres: ['Tarab', 'Orchestral Arabic', 'Turkish Classical']
  },
  {
    id: 'ney',
    name: { en: 'Ney', ar: 'ناي' },
    description: {
      en: 'An end-blown flute that figures prominently in Middle Eastern music.',
      ar: 'آلة نفخ خشبية (ناي) تُنفخ من النهاية ولها مكانة بارزة في موسيقى الشرق الأوسط.'
    },
    soundChars: {
      en: 'Breathy, emotive, melancholic, mimics the human voice.',
      ar: 'تنفسي، عاطفي، شجي، يحاكي الصوت البشري.'
    },
    musicalRange: { en: '2.5 octaves', ar: '2.5 أوكتافات' },
    playingTechniques: {
      en: 'Varying breath pressure, lip glissando, vibrato.',
      ar: 'تغيير ضغط التنفس، الانزلاق بالشفتين، الفيبراتو.'
    },
    suggestedGenres: ['Sufi', 'Classical', 'Ambient']
  },
  {
    id: 'darbuka',
    name: { en: 'Darbuka (Tabla)', ar: 'دربكة (طبلة)' },
    description: {
      en: 'A goblet drum providing the primary rhythmic drive in Eastern music.',
      ar: 'طبلة على شكل كأس توفر الدافع الإيقاعي الأساسي في الموسيقى الشرقية.'
    },
    soundChars: {
      en: 'Crisp "Tak", deep resonant "Dum", highly percussive.',
      ar: 'صوت "تَك" حاد ونقي، وصوت "دُم" عميق ورنان، إيقاعية بامتياز.'
    },
    musicalRange: { en: 'N/A (Percussion)', ar: 'غير متاح (إيقاع)' },
    playingTechniques: {
      en: 'Finger rolls, slaps, muted hits.',
      ar: 'دحرجة الأصابع، الصفعات، الضربات المكتومة.'
    },
    suggestedGenres: ['Pop', 'Folk', 'Dance', 'Tarab']
  }
];
