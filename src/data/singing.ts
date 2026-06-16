import { SingingStyle } from './types';

export const singingStyles: SingingStyle[] = [
  {
    id: 'tarab',
    name: { en: 'Tarab', ar: 'طرب' },
    vocalTechniques: {
      en: 'Emotional intensity, expressive improvisation (Mawwal), heavy use of microtonal slides.',
      ar: 'كثافة عاطفية، ارتجال معبر (موال)، استخدام مكثف للانزلاقات التي تحتوي على أرباع التون.'
    },
    ornamentation: {
      en: 'High level of arabesque trills, melisma, and vibrato.',
      ar: 'مستوى عالٍ من الزخارف الصوتية، الميليسما، والفيبراتو عريض.'
    },
    typicalMaqamat: ['Rast', 'Bayati', 'Sikah', 'Nahawand'],
    suitableEmotions: ['Longing', 'Deep Love', 'Sorrow', 'Ecstasy'],
    aiPrompt: {
      en: 'Classic Tarab vocals. Deep, resonant voice with rich ornamentation, heavy vibrato, and emotional peaks.',
      ar: 'غناء طربي كلاسيكي. صوت عميق ورنان مع زخرفة غنية، فيبراتو ثقيل، وذروات عاطفية.'
    }
  },
  {
    id: 'muwashahat',
    name: { en: 'Muwashahat', ar: 'موشحات' },
    vocalTechniques: {
      en: 'Choral singing, strict rhythmic adherence, classical Arabic pronunciation.',
      ar: 'غناء جماعي (كورس)، التزام إيقاعي صارم، نطق عربي فصحى.'
    },
    ornamentation: {
      en: 'Precise vocal leaps, less improvisation, structured melodies.',
      ar: 'قفزات صوتية دقيقة، ارتجال أقل، ألحان مهيكلة.'
    },
    typicalMaqamat: ['Hijaz', 'Nahawand', 'Rast'],
    suitableEmotions: ['Elegance', 'Nostalgia', 'Courtly Love'],
    aiPrompt: {
      en: 'A choir performing classical Muwashahat style in unison. Clear pronunciation, precise pitch, no extreme improvisation.',
      ar: 'فرقة كورس تؤدي بأسلوب الموشحات الكلاسيكية بتناغم تام. نطق واضح، طبقة دقيقة، بدون ارتجال مفرط.'
    }
  },
  {
    id: 'khaleeji',
    name: { en: 'Khaleeji Singing', ar: 'غناء خليجي' },
    vocalTechniques: {
      en: 'Warm tones, slightly nasal resonance in some styles, strong rhythmic integration with percussion.',
      ar: 'نغمات دافئة، رنين أنفي خفيف في بعض الأساليب، اندماج إيقاعي قوي مع الإيقاع.'
    },
    ornamentation: {
      en: 'Subtle grace notes, specific microtonal coloring distinct from Egyptian Tarab.',
      ar: 'نغمات حلية دقيقة، تلوين دقيق لأرباع التون يختلف عن الطرب المصري.'
    },
    typicalMaqamat: ['Bayati', 'Rast', 'Kurd'],
    suitableEmotions: ['Romance', 'Joy', 'Cultural Pride'],
    aiPrompt: {
      en: 'Warm Khaleeji dialect vocals. Rhythmic and bouncy phrasing syncing with polyrhythmic percussion.',
      ar: 'غناء دافئ باللهجة الخليجية. صياغة إيقاعية وحيوية تتزامن مع الإيقاعات المتداخلة.'
    }
  }
];
