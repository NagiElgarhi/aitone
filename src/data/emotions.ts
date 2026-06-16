import { Emotion } from './types';

export const emotions: Emotion[] = [
  {
    "id": "nostalgia",
    "name": {
      "en": "Nostalgia & Longing",
      "ar": "الحنين والشوق"
    },
    "musicalChars": {
      "en": "Slow to medium tempo, sweeping string melodies, lingering wind instrument solos, and subtle rhythmic backing.",
      "ar": "إيقاع بطيء إلى متوسط، ألحان وترية واسعة، عزف منفرد ممتد لآلات النفخ، وخلفية إيقاعية خفيفة."
    },
    "suggestedMaqamat": [
      "Hijaz",
      "Saba",
      "Kurd"
    ],
    "suggestedRhythms": [
      "Samai Thaqil",
      "Slow Maqsoum"
    ],
    "recommendedInstruments": [
      "Oud",
      "Ney",
      "Viola",
      "Qanun"
    ],
    "vocalStyle": {
      "en": "Soft Tarab, expressive and dragging notes, deep vibrato.",
      "ar": "طرب ناعم، نبرات معبرة وممتدة، اهتزاز صوتي عميق (فيبراتو)."
    },
    "aiPrompt": {
      "en": "Create a nostalgic and longing mood using Maqam Hijaz, slow tempo, and a crying Ney solo over soft strings.",
      "ar": "اصنع مزاجاً من الحنين والشوق باستخدام مقام الحجاز، إيقاع بطيء، وعزف ناي باكي فوق وتريات ناعمة."
    }
  },
  {
    "id": "epic_victory",
    "name": {
      "en": "Epic & Victory",
      "ar": "الملحمية والنصر"
    },
    "musicalChars": {
      "en": "Fast, driving tempo, heavy percussion, bright brass elements, and full orchestral strings playing staccato.",
      "ar": "إيقاع سريع ومندفع، إيقاعات ثقيلة، عناصر نحاسية لامعة، ووتريات أوركسترالية كاملة تعزف بتقطع (ستاكاتو)."
    },
    "suggestedMaqamat": [
      "Ajam",
      "Rast"
    ],
    "suggestedRhythms": [
      "Ayoub",
      "Malfuf",
      "4/4 March"
    ],
    "recommendedInstruments": [
      "Brass Section",
      "Timpani",
      "Large Strings",
      "Big Frame Drums"
    ],
    "vocalStyle": {
      "en": "Powerful, operatic or epic ethnic vocals, choral chanting.",
      "ar": "غناء قوي، أوبرالي أو ملحمي عرقي، إنشاد جماعي."
    },
    "aiPrompt": {
      "en": "Generate an epic orchestral track evoking victory in Maqam Ajam. Heavy timpani, majestic brass, and a sweeping choir.",
      "ar": "أنتج مقطوعة أوركسترالية ملحمية تثير الشعور والنصر على مقام العجم. طبول التيمباني الثقيلة، نحاسيات مهيبة، وجوقة واسعة."
    }
  },
  {
    "id": "meditation",
    "name": {
      "en": "Meditation & Spirituality",
      "ar": "التأمل والروحانية"
    },
    "musicalChars": {
      "en": "Free rhythm or very slow tempo, droning background pads, sparse notes, high reverb.",
      "ar": "بدون إيقاع أو إيقاع بطيء جداً، وسادات صوتية مستمرة في الخلفية، نغمات متفرقة، صدى (Reverb) عالي."
    },
    "suggestedMaqamat": [
      "Hijaz",
      "Saba",
      "Nawa Athar"
    ],
    "suggestedRhythms": [
      "Free Rhythm (Taqsim)",
      "Very slow Wahda"
    ],
    "recommendedInstruments": [
      "Ney",
      "Buzuq",
      "Ambient Synths"
    ],
    "vocalStyle": {
      "en": "Sufi chanting, breathy, minimal ornamentation.",
      "ar": "إنشاد صوفي، تنفسي، زخرفة قليلة."
    },
    "aiPrompt": {
      "en": "Compose a meditative, spiritual piece. Ambient synth drone with a distant Ney playing Maqam Saba. High reverb, no percussion.",
      "ar": "ألف مقطوعة تأملية وروحانية. خلفية صوتية إلكترونية مستمرة مع ناي بعيد يعزف مقام الصبا. صدى عالي، بدون إيقاع."
    }
  },
  {
    "id": "joy_celebration",
    "name": {
      "en": "Joy & Celebration",
      "ar": "الفرح والاحتفال"
    },
    "musicalChars": {
      "en": "Fast, upbeat, energetic, syncopated rhythms, bright chords and lively solos.",
      "ar": "إيقاعات سريعة ومبهجة، نبض قوي، تآلفات مضيئة وعزف منفرد حيوي."
    },
    "suggestedMaqamat": [
      "Rast",
      "Bayati",
      "Sikah"
    ],
    "suggestedRhythms": [
      "Malfuf",
      "Saidi",
      "Fallahi"
    ],
    "recommendedInstruments": [
      "Tabla",
      "Mizmar",
      "Qanun",
      "Violin"
    ],
    "vocalStyle": {
      "en": "Energetic, loud and festive, group choruses.",
      "ar": "حيوي، عالٍ واحتفالي، غناء جماعي (كورس مرددين)."
    },
    "aiPrompt": {
      "en": "Create a festive Arabic track in Maqam Rast. Upbeat Saidi rhythm, lively Mizmar, and energetic group choir.",
      "ar": "أنتج مقطوعة عربية احتفالية على مقام الراست. إيقاع صعيدي سريع، مزمار حيوي وكورس جماعي مفعم بالطاقة."
    }
  },
  {
    "id": "sadness",
    "name": {
      "en": "Sadness & Heartbreak",
      "ar": "الحزن والألم"
    },
    "musicalChars": {
      "en": "Slow, melancholic, weeping instrumentals, descending scales, minor-feel intervals.",
      "ar": "بطيء، شجي، عزف باكي، سلالم هابطة، ومسافات ذات طابع ماينور (حزين)."
    },
    "suggestedMaqamat": [
      "Saba",
      "Kurd",
      "Nahawand"
    ],
    "suggestedRhythms": [
      "Ciftatelli",
      "Slow Wahda"
    ],
    "recommendedInstruments": [
      "Oud",
      "Cello",
      "Ney"
    ],
    "vocalStyle": {
      "en": "Deeply sorrowful, breathy, extensive vibrato and long wailing notes.",
      "ar": "حزين بعمق، تنفسي، فيبراتو ممتد ونغمات طويلة باكية."
    },
    "aiPrompt": {
      "en": "Compose a heartbreaking, sad melody in Maqam Kurd. Slow tempo, weeping Cello, and an emotional solo Oud.",
      "ar": "ألف لحن حزين ومؤلم على مقام الكرد. إيقاع بطيء، تشيلو باكي، وعود منفرد مليء بالعاطفة."
    }
  },
  {
    "id": "hope",
    "name": {
      "en": "Hope",
      "ar": "الأمل"
    },
    "musicalChars": {
      "en": "A musical reflection of Hope, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الأمل، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Hope.",
      "ar": "غناء معبر يجسد حالة الأمل."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Hope, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الأمل، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "determination",
    "name": {
      "en": "Determination",
      "ar": "الإصرار"
    },
    "musicalChars": {
      "en": "A musical reflection of Determination, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الإصرار، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Determination.",
      "ar": "غناء معبر يجسد حالة الإصرار."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Determination, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الإصرار، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "romantic_love",
    "name": {
      "en": "Romantic Love",
      "ar": "الحب الرومانسي"
    },
    "musicalChars": {
      "en": "A musical reflection of Romantic Love, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الحب الرومانسي، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Romantic Love.",
      "ar": "غناء معبر يجسد حالة الحب الرومانسي."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Romantic Love, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الحب الرومانسي، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "fear",
    "name": {
      "en": "Fear",
      "ar": "الخوف"
    },
    "musicalChars": {
      "en": "A musical reflection of Fear, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الخوف، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Fear.",
      "ar": "غناء معبر يجسد حالة الخوف."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Fear, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الخوف، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "anger",
    "name": {
      "en": "Anger",
      "ar": "الغضب"
    },
    "musicalChars": {
      "en": "A musical reflection of Anger, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الغضب، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Anger.",
      "ar": "غناء معبر يجسد حالة الغضب."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Anger, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الغضب، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "serenity",
    "name": {
      "en": "Serenity",
      "ar": "السكينة"
    },
    "musicalChars": {
      "en": "A musical reflection of Serenity, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ السكينة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Serenity.",
      "ar": "غناء معبر يجسد حالة السكينة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Serenity, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس السكينة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "excitement",
    "name": {
      "en": "Excitement",
      "ar": "الحماس"
    },
    "musicalChars": {
      "en": "A musical reflection of Excitement, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الحماس، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Excitement.",
      "ar": "غناء معبر يجسد حالة الحماس."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Excitement, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الحماس، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "regret",
    "name": {
      "en": "Regret",
      "ar": "الندم"
    },
    "musicalChars": {
      "en": "A musical reflection of Regret, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الندم، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Regret.",
      "ar": "غناء معبر يجسد حالة الندم."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Regret, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الندم، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "courage",
    "name": {
      "en": "Courage",
      "ar": "الشجاعة"
    },
    "musicalChars": {
      "en": "A musical reflection of Courage, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الشجاعة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Courage.",
      "ar": "غناء معبر يجسد حالة الشجاعة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Courage, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الشجاعة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "melancholic_beauty",
    "name": {
      "en": "Melancholic Beauty",
      "ar": "الجمال الشجي"
    },
    "musicalChars": {
      "en": "A musical reflection of Melancholic Beauty, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الجمال الشجي، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Melancholic Beauty.",
      "ar": "غناء معبر يجسد حالة الجمال الشجي."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Melancholic Beauty, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الجمال الشجي، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "suspense",
    "name": {
      "en": "Suspense",
      "ar": "التشويق"
    },
    "musicalChars": {
      "en": "A musical reflection of Suspense, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التشويق، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Suspense.",
      "ar": "غناء معبر يجسد حالة التشويق."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Suspense, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التشويق، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "tragedy",
    "name": {
      "en": "Tragedy",
      "ar": "المأساة"
    },
    "musicalChars": {
      "en": "A musical reflection of Tragedy, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ المأساة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Tragedy.",
      "ar": "غناء معبر يجسد حالة المأساة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Tragedy, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس المأساة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "awe___wonder",
    "name": {
      "en": "Awe & Wonder",
      "ar": "الرهبة والدهشة"
    },
    "musicalChars": {
      "en": "A musical reflection of Awe & Wonder, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الرهبة والدهشة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Awe & Wonder.",
      "ar": "غناء معبر يجسد حالة الرهبة والدهشة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Awe & Wonder, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الرهبة والدهشة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "rebellion",
    "name": {
      "en": "Rebellion",
      "ar": "التمرد"
    },
    "musicalChars": {
      "en": "A musical reflection of Rebellion, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التمرد، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Rebellion.",
      "ar": "غناء معبر يجسد حالة التمرد."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Rebellion, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التمرد، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "triumph",
    "name": {
      "en": "Triumph",
      "ar": "الانتصار"
    },
    "musicalChars": {
      "en": "A musical reflection of Triumph, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الانتصار، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Triumph.",
      "ar": "غناء معبر يجسد حالة الانتصار."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Triumph, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الانتصار، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "grief",
    "name": {
      "en": "Grief",
      "ar": "الأسى"
    },
    "musicalChars": {
      "en": "A musical reflection of Grief, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الأسى، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Grief.",
      "ar": "غناء معبر يجسد حالة الأسى."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Grief, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الأسى، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "playful",
    "name": {
      "en": "Playful",
      "ar": "المرح"
    },
    "musicalChars": {
      "en": "A musical reflection of Playful, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ المرح، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Playful.",
      "ar": "غناء معبر يجسد حالة المرح."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Playful, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس المرح، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "mystical",
    "name": {
      "en": "Mystical",
      "ar": "الصوفية"
    },
    "musicalChars": {
      "en": "A musical reflection of Mystical, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الصوفية، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Mystical.",
      "ar": "غناء معبر يجسد حالة الصوفية."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Mystical, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الصوفية، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "betrayal",
    "name": {
      "en": "Betrayal",
      "ar": "الخيانة"
    },
    "musicalChars": {
      "en": "A musical reflection of Betrayal, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الخيانة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Betrayal.",
      "ar": "غناء معبر يجسد حالة الخيانة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Betrayal, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الخيانة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "inner_peace",
    "name": {
      "en": "Inner Peace",
      "ar": "السلام الداخلي"
    },
    "musicalChars": {
      "en": "A musical reflection of Inner Peace, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ السلام الداخلي، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Inner Peace.",
      "ar": "غناء معبر يجسد حالة السلام الداخلي."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Inner Peace, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس السلام الداخلي، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "innocence",
    "name": {
      "en": "Innocence",
      "ar": "البراءة"
    },
    "musicalChars": {
      "en": "A musical reflection of Innocence, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ البراءة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Innocence.",
      "ar": "غناء معبر يجسد حالة البراءة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Innocence, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس البراءة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "passionate",
    "name": {
      "en": "Passionate",
      "ar": "الشغف"
    },
    "musicalChars": {
      "en": "A musical reflection of Passionate, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الشغف، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Passionate.",
      "ar": "غناء معبر يجسد حالة الشغف."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Passionate, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الشغف، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "solitude",
    "name": {
      "en": "Solitude",
      "ar": "العزلة"
    },
    "musicalChars": {
      "en": "A musical reflection of Solitude, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ العزلة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Solitude.",
      "ar": "غناء معبر يجسد حالة العزلة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Solitude, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس العزلة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "darkness",
    "name": {
      "en": "Darkness",
      "ar": "الظلام"
    },
    "musicalChars": {
      "en": "A musical reflection of Darkness, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الظلام، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Darkness.",
      "ar": "غناء معبر يجسد حالة الظلام."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Darkness, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الظلام، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "tension",
    "name": {
      "en": "Tension",
      "ar": "التوتر"
    },
    "musicalChars": {
      "en": "A musical reflection of Tension, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التوتر، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Tension.",
      "ar": "غناء معبر يجسد حالة التوتر."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Tension, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التوتر، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "freedom",
    "name": {
      "en": "Freedom",
      "ar": "الحرية"
    },
    "musicalChars": {
      "en": "A musical reflection of Freedom, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الحرية، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Freedom.",
      "ar": "غناء معبر يجسد حالة الحرية."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Freedom, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الحرية، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "despair",
    "name": {
      "en": "Despair",
      "ar": "اليأس"
    },
    "musicalChars": {
      "en": "A musical reflection of Despair, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ اليأس، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Despair.",
      "ar": "غناء معبر يجسد حالة اليأس."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Despair, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس اليأس، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "empowerment",
    "name": {
      "en": "Empowerment",
      "ar": "التمكين"
    },
    "musicalChars": {
      "en": "A musical reflection of Empowerment, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التمكين، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Empowerment.",
      "ar": "غناء معبر يجسد حالة التمكين."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Empowerment, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التمكين، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "anxiety",
    "name": {
      "en": "Anxiety",
      "ar": "القلق"
    },
    "musicalChars": {
      "en": "A musical reflection of Anxiety, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ القلق، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Anxiety.",
      "ar": "غناء معبر يجسد حالة القلق."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Anxiety, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس القلق، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "gratitude",
    "name": {
      "en": "Gratitude",
      "ar": "الامتنان"
    },
    "musicalChars": {
      "en": "A musical reflection of Gratitude, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الامتنان، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Gratitude.",
      "ar": "غناء معبر يجسد حالة الامتنان."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Gratitude, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الامتنان، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "seduction",
    "name": {
      "en": "Seduction",
      "ar": "الإغراء"
    },
    "musicalChars": {
      "en": "A musical reflection of Seduction, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الإغراء، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Seduction.",
      "ar": "غناء معبر يجسد حالة الإغراء."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Seduction, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الإغراء، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "confusion",
    "name": {
      "en": "Confusion",
      "ar": "الحيرة"
    },
    "musicalChars": {
      "en": "A musical reflection of Confusion, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الحيرة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Confusion.",
      "ar": "غناء معبر يجسد حالة الحيرة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Confusion, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الحيرة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "optimism",
    "name": {
      "en": "Optimism",
      "ar": "التفاؤل"
    },
    "musicalChars": {
      "en": "A musical reflection of Optimism, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التفاؤل، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Optimism.",
      "ar": "غناء معبر يجسد حالة التفاؤل."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Optimism, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التفاؤل، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "majestic",
    "name": {
      "en": "Majestic",
      "ar": "المهابة"
    },
    "musicalChars": {
      "en": "A musical reflection of Majestic, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ المهابة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Majestic.",
      "ar": "غناء معبر يجسد حالة المهابة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Majestic, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس المهابة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "compassion",
    "name": {
      "en": "Compassion",
      "ar": "التعاطف"
    },
    "musicalChars": {
      "en": "A musical reflection of Compassion, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التعاطف، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Compassion.",
      "ar": "غناء معبر يجسد حالة التعاطف."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Compassion, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التعاطف، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "yearning",
    "name": {
      "en": "Yearning",
      "ar": "التوق"
    },
    "musicalChars": {
      "en": "A musical reflection of Yearning, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التوق، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Yearning.",
      "ar": "غناء معبر يجسد حالة التوق."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Yearning, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التوق، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "resilience",
    "name": {
      "en": "Resilience",
      "ar": "الصمود"
    },
    "musicalChars": {
      "en": "A musical reflection of Resilience, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الصمود، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Resilience.",
      "ar": "غناء معبر يجسد حالة الصمود."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Resilience, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الصمود، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "bittersweet",
    "name": {
      "en": "Bittersweet",
      "ar": "حلو ومر"
    },
    "musicalChars": {
      "en": "A musical reflection of Bittersweet, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ حلو ومر، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Bittersweet.",
      "ar": "غناء معبر يجسد حالة حلو ومر."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Bittersweet, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس حلو ومر، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "frustration",
    "name": {
      "en": "Frustration",
      "ar": "الإحباط"
    },
    "musicalChars": {
      "en": "A musical reflection of Frustration, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الإحباط، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Frustration.",
      "ar": "غناء معبر يجسد حالة الإحباط."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Frustration, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الإحباط، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "relief",
    "name": {
      "en": "Relief",
      "ar": "الارتياح"
    },
    "musicalChars": {
      "en": "A musical reflection of Relief, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الارتياح، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Relief.",
      "ar": "غناء معبر يجسد حالة الارتياح."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Relief, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الارتياح، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "whimsical",
    "name": {
      "en": "Whimsical",
      "ar": "غريب الأطوار"
    },
    "musicalChars": {
      "en": "A musical reflection of Whimsical, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ غريب الأطوار، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Whimsical.",
      "ar": "غناء معبر يجسد حالة غريب الأطوار."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Whimsical, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس غريب الأطوار، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "devotion",
    "name": {
      "en": "Devotion",
      "ar": "الإخلاص"
    },
    "musicalChars": {
      "en": "A musical reflection of Devotion, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الإخلاص، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Devotion.",
      "ar": "غناء معبر يجسد حالة الإخلاص."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Devotion, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الإخلاص، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "intrigue",
    "name": {
      "en": "Intrigue",
      "ar": "الغموض والمكيدة"
    },
    "musicalChars": {
      "en": "A musical reflection of Intrigue, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الغموض والمكيدة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Intrigue.",
      "ar": "غناء معبر يجسد حالة الغموض والمكيدة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Intrigue, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الغموض والمكيدة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "ethereal",
    "name": {
      "en": "Ethereal",
      "ar": "أثيري"
    },
    "musicalChars": {
      "en": "A musical reflection of Ethereal, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ أثيري، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Ethereal.",
      "ar": "غناء معبر يجسد حالة أثيري."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Ethereal, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس أثيري، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "lust",
    "name": {
      "en": "Lust",
      "ar": "الشهوة"
    },
    "musicalChars": {
      "en": "A musical reflection of Lust, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الشهوة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Lust.",
      "ar": "غناء معبر يجسد حالة الشهوة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Lust, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الشهوة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "envy",
    "name": {
      "en": "Envy",
      "ar": "الحسد"
    },
    "musicalChars": {
      "en": "A musical reflection of Envy, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الحسد، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Envy.",
      "ar": "غناء معبر يجسد حالة الحسد."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Envy, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الحسد، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "astonishment",
    "name": {
      "en": "Astonishment",
      "ar": "الذهول"
    },
    "musicalChars": {
      "en": "A musical reflection of Astonishment, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الذهول، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Astonishment.",
      "ar": "غناء معبر يجسد حالة الذهول."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Astonishment, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الذهول، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "patience",
    "name": {
      "en": "Patience",
      "ar": "الصبر"
    },
    "musicalChars": {
      "en": "A musical reflection of Patience, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الصبر، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Patience.",
      "ar": "غناء معبر يجسد حالة الصبر."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Patience, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الصبر، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "agony",
    "name": {
      "en": "Agony",
      "ar": "العذاب"
    },
    "musicalChars": {
      "en": "A musical reflection of Agony, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ العذاب، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Agony.",
      "ar": "غناء معبر يجسد حالة العذاب."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Agony, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس العذاب، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "euphoria",
    "name": {
      "en": "Euphoria",
      "ar": "النشوة"
    },
    "musicalChars": {
      "en": "A musical reflection of Euphoria, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ النشوة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Euphoria.",
      "ar": "غناء معبر يجسد حالة النشوة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Euphoria, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس النشوة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "pride",
    "name": {
      "en": "Pride",
      "ar": "الكبرياء"
    },
    "musicalChars": {
      "en": "A musical reflection of Pride, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الكبرياء، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Pride.",
      "ar": "غناء معبر يجسد حالة الكبرياء."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Pride, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الكبرياء، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "surprise",
    "name": {
      "en": "Surprise",
      "ar": "المفاجأة"
    },
    "musicalChars": {
      "en": "A musical reflection of Surprise, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ المفاجأة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Surprise.",
      "ar": "غناء معبر يجسد حالة المفاجأة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Surprise, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس المفاجأة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "revenge",
    "name": {
      "en": "Revenge",
      "ar": "الانتقام"
    },
    "musicalChars": {
      "en": "A musical reflection of Revenge, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الانتقام، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Revenge.",
      "ar": "غناء معبر يجسد حالة الانتقام."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Revenge, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الانتقام، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "acceptance",
    "name": {
      "en": "Acceptance",
      "ar": "التقبل"
    },
    "musicalChars": {
      "en": "A musical reflection of Acceptance, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التقبل، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Acceptance.",
      "ar": "غناء معبر يجسد حالة التقبل."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Acceptance, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التقبل، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "humility",
    "name": {
      "en": "Humility",
      "ar": "التواضع"
    },
    "musicalChars": {
      "en": "A musical reflection of Humility, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التواضع، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Humility.",
      "ar": "غناء معبر يجسد حالة التواضع."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Humility, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التواضع، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "guilt",
    "name": {
      "en": "Guilt",
      "ar": "الشعور بالذنب"
    },
    "musicalChars": {
      "en": "A musical reflection of Guilt, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الشعور بالذنب، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Guilt.",
      "ar": "غناء معبر يجسد حالة الشعور بالذنب."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Guilt, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الشعور بالذنب، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "vulnerability",
    "name": {
      "en": "Vulnerability",
      "ar": "الضعف والانكشاف"
    },
    "musicalChars": {
      "en": "A musical reflection of Vulnerability, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الضعف والانكشاف، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Vulnerability.",
      "ar": "غناء معبر يجسد حالة الضعف والانكشاف."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Vulnerability, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الضعف والانكشاف، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "nervousness",
    "name": {
      "en": "Nervousness",
      "ar": "الرهبة العصبية"
    },
    "musicalChars": {
      "en": "A musical reflection of Nervousness, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الرهبة العصبية، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Nervousness.",
      "ar": "غناء معبر يجسد حالة الرهبة العصبية."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Nervousness, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الرهبة العصبية، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "affection",
    "name": {
      "en": "Affection",
      "ar": "المودة"
    },
    "musicalChars": {
      "en": "A musical reflection of Affection, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ المودة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Affection.",
      "ar": "غناء معبر يجسد حالة المودة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Affection, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس المودة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "admiration",
    "name": {
      "en": "Admiration",
      "ar": "الإعجاب"
    },
    "musicalChars": {
      "en": "A musical reflection of Admiration, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الإعجاب، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Admiration.",
      "ar": "غناء معبر يجسد حالة الإعجاب."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Admiration, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الإعجاب، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "pity",
    "name": {
      "en": "Pity",
      "ar": "الشفقة"
    },
    "musicalChars": {
      "en": "A musical reflection of Pity, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الشفقة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Pity.",
      "ar": "غناء معبر يجسد حالة الشفقة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Pity, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الشفقة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "disgust",
    "name": {
      "en": "Disgust",
      "ar": "الاشمئزاز"
    },
    "musicalChars": {
      "en": "A musical reflection of Disgust, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الاشمئزاز، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Disgust.",
      "ar": "غناء معبر يجسد حالة الاشمئزاز."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Disgust, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الاشمئزاز، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "contentment",
    "name": {
      "en": "Contentment",
      "ar": "القناعة والرضا"
    },
    "musicalChars": {
      "en": "A musical reflection of Contentment, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ القناعة والرضا، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Contentment.",
      "ar": "غناء معبر يجسد حالة القناعة والرضا."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Contentment, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس القناعة والرضا، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "optimism",
    "name": {
      "en": "Optimism",
      "ar": "الاستبشار"
    },
    "musicalChars": {
      "en": "A musical reflection of Optimism, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الاستبشار، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Optimism.",
      "ar": "غناء معبر يجسد حالة الاستبشار."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Optimism, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الاستبشار، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "rejection",
    "name": {
      "en": "Rejection",
      "ar": "الرفض"
    },
    "musicalChars": {
      "en": "A musical reflection of Rejection, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الرفض، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Rejection.",
      "ar": "غناء معبر يجسد حالة الرفض."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Rejection, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الرفض، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "sympathy",
    "name": {
      "en": "Sympathy",
      "ar": "المواساة"
    },
    "musicalChars": {
      "en": "A musical reflection of Sympathy, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ المواساة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Sympathy.",
      "ar": "غناء معبر يجسد حالة المواساة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Sympathy, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس المواساة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "amusement",
    "name": {
      "en": "Amusement",
      "ar": "التسلية"
    },
    "musicalChars": {
      "en": "A musical reflection of Amusement, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التسلية، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Amusement.",
      "ar": "غناء معبر يجسد حالة التسلية."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Amusement, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التسلية، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "boredom",
    "name": {
      "en": "Boredom",
      "ar": "الملل"
    },
    "musicalChars": {
      "en": "A musical reflection of Boredom, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الملل، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Boredom.",
      "ar": "غناء معبر يجسد حالة الملل."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Boredom, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الملل، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "apprehension",
    "name": {
      "en": "Apprehension",
      "ar": "التوجس"
    },
    "musicalChars": {
      "en": "A musical reflection of Apprehension, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التوجس، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Apprehension.",
      "ar": "غناء معبر يجسد حالة التوجس."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Apprehension, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التوجس، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "ecstasy",
    "name": {
      "en": "Ecstasy",
      "ar": "الهيام"
    },
    "musicalChars": {
      "en": "A musical reflection of Ecstasy, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الهيام، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Ecstasy.",
      "ar": "غناء معبر يجسد حالة الهيام."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Ecstasy, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الهيام، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "alienation",
    "name": {
      "en": "Alienation",
      "ar": "الاغتراب"
    },
    "musicalChars": {
      "en": "A musical reflection of Alienation, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الاغتراب، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Alienation.",
      "ar": "غناء معبر يجسد حالة الاغتراب."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Alienation, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الاغتراب، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "paranoia",
    "name": {
      "en": "Paranoia",
      "ar": "الارتياب"
    },
    "musicalChars": {
      "en": "A musical reflection of Paranoia, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الارتياب، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Paranoia.",
      "ar": "غناء معبر يجسد حالة الارتياب."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Paranoia, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الارتياب، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "trust",
    "name": {
      "en": "Trust",
      "ar": "الثقة"
    },
    "musicalChars": {
      "en": "A musical reflection of Trust, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الثقة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Trust.",
      "ar": "غناء معبر يجسد حالة الثقة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Trust, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الثقة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "restlessness",
    "name": {
      "en": "Restlessness",
      "ar": "التململ"
    },
    "musicalChars": {
      "en": "A musical reflection of Restlessness, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التململ، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Restlessness.",
      "ar": "غناء معبر يجسد حالة التململ."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Restlessness, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التململ، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "anticipation",
    "name": {
      "en": "Anticipation",
      "ar": "الترقب"
    },
    "musicalChars": {
      "en": "A musical reflection of Anticipation, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الترقب، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Anticipation.",
      "ar": "غناء معبر يجسد حالة الترقب."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Anticipation, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الترقب، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "dread",
    "name": {
      "en": "Dread",
      "ar": "الفزع"
    },
    "musicalChars": {
      "en": "A musical reflection of Dread, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الفزع، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Dread.",
      "ar": "غناء معبر يجسد حالة الفزع."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Dread, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الفزع، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "fascination",
    "name": {
      "en": "Fascination",
      "ar": "الانبهار"
    },
    "musicalChars": {
      "en": "A musical reflection of Fascination, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الانبهار، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Fascination.",
      "ar": "غناء معبر يجسد حالة الانبهار."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Fascination, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الانبهار، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "homesickness",
    "name": {
      "en": "Homesickness",
      "ar": "الغربة"
    },
    "musicalChars": {
      "en": "A musical reflection of Homesickness, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الغربة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Homesickness.",
      "ar": "غناء معبر يجسد حالة الغربة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Homesickness, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الغربة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "repentance",
    "name": {
      "en": "Repentance",
      "ar": "التوبة"
    },
    "musicalChars": {
      "en": "A musical reflection of Repentance, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التوبة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Repentance.",
      "ar": "غناء معبر يجسد حالة التوبة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Repentance, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التوبة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "vindication",
    "name": {
      "en": "Vindication",
      "ar": "رد الاعتبار"
    },
    "musicalChars": {
      "en": "A musical reflection of Vindication, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ رد الاعتبار، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Vindication.",
      "ar": "غناء معبر يجسد حالة رد الاعتبار."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Vindication, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس رد الاعتبار، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "insecurity",
    "name": {
      "en": "Insecurity",
      "ar": "انعدام الأمان"
    },
    "musicalChars": {
      "en": "A musical reflection of Insecurity, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ انعدام الأمان، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Insecurity.",
      "ar": "غناء معبر يجسد حالة انعدام الأمان."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Insecurity, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس انعدام الأمان، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "pensive",
    "name": {
      "en": "Pensive",
      "ar": "التفكير العميق"
    },
    "musicalChars": {
      "en": "A musical reflection of Pensive, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التفكير العميق، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Pensive.",
      "ar": "غناء معبر يجسد حالة التفكير العميق."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Pensive, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التفكير العميق، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "rejuvenation",
    "name": {
      "en": "Rejuvenation",
      "ar": "التجدد"
    },
    "musicalChars": {
      "en": "A musical reflection of Rejuvenation, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التجدد، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Rejuvenation.",
      "ar": "غناء معبر يجسد حالة التجدد."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Rejuvenation, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التجدد، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "self_pity",
    "name": {
      "en": "Self-pity",
      "ar": "رثاء الذات"
    },
    "musicalChars": {
      "en": "A musical reflection of Self-pity, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ رثاء الذات، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Self-pity.",
      "ar": "غناء معبر يجسد حالة رثاء الذات."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Self-pity, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس رثاء الذات، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "toxicity",
    "name": {
      "en": "Toxicity",
      "ar": "السُمية العاطفية"
    },
    "musicalChars": {
      "en": "A musical reflection of Toxicity, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ السُمية العاطفية، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Toxicity.",
      "ar": "غناء معبر يجسد حالة السُمية العاطفية."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Toxicity, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس السُمية العاطفية، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "tenderness",
    "name": {
      "en": "Tenderness",
      "ar": "الرقة"
    },
    "musicalChars": {
      "en": "A musical reflection of Tenderness, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الرقة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Tenderness.",
      "ar": "غناء معبر يجسد حالة الرقة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Tenderness, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الرقة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "disappointment",
    "name": {
      "en": "Disappointment",
      "ar": "خيبة الأمل"
    },
    "musicalChars": {
      "en": "A musical reflection of Disappointment, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ خيبة الأمل، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Disappointment.",
      "ar": "غناء معبر يجسد حالة خيبة الأمل."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Disappointment, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس خيبة الأمل، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "exhaustion",
    "name": {
      "en": "Exhaustion",
      "ar": "الإنهاك"
    },
    "musicalChars": {
      "en": "A musical reflection of Exhaustion, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الإنهاك، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Exhaustion.",
      "ar": "غناء معبر يجسد حالة الإنهاك."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Exhaustion, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الإنهاك، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "ennui",
    "name": {
      "en": "Ennui",
      "ar": "السأم"
    },
    "musicalChars": {
      "en": "A musical reflection of Ennui, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ السأم، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Ennui.",
      "ar": "غناء معبر يجسد حالة السأم."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Ennui, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس السأم، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "resignation",
    "name": {
      "en": "Resignation",
      "ar": "التسليم والأمر الواقع"
    },
    "musicalChars": {
      "en": "A musical reflection of Resignation, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التسليم والأمر الواقع، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Resignation.",
      "ar": "غناء معبر يجسد حالة التسليم والأمر الواقع."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Resignation, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التسليم والأمر الواقع، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "radiance",
    "name": {
      "en": "Radiance",
      "ar": "الإشراق"
    },
    "musicalChars": {
      "en": "A musical reflection of Radiance, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ الإشراق، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Radiance.",
      "ar": "غناء معبر يجسد حالة الإشراق."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Radiance, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس الإشراق، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "defiance",
    "name": {
      "en": "Defiance",
      "ar": "التحدي"
    },
    "musicalChars": {
      "en": "A musical reflection of Defiance, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ التحدي، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Defiance.",
      "ar": "غناء معبر يجسد حالة التحدي."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Defiance, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس التحدي، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "spite",
    "name": {
      "en": "Spite",
      "ar": "النكاية"
    },
    "musicalChars": {
      "en": "A musical reflection of Spite, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ النكاية، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Spite.",
      "ar": "غناء معبر يجسد حالة النكاية."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Spite, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس النكاية، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "elation",
    "name": {
      "en": "Elation",
      "ar": "البهجة العارمة"
    },
    "musicalChars": {
      "en": "A musical reflection of Elation, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ البهجة العارمة، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Elation.",
      "ar": "غناء معبر يجسد حالة البهجة العارمة."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Elation, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس البهجة العارمة، مع التركيز على العناصر المحيطية واللحنية."
    }
  },
  {
    "id": "heartache",
    "name": {
      "en": "Heartache",
      "ar": "لوعة الجوى"
    },
    "musicalChars": {
      "en": "A musical reflection of Heartache, utilizing specialized harmonic textures and rhythms.",
      "ar": "انعكاس موسيقي لـ لوعة الجوى، باستخدام تركيبات وتوافقات إيقاعية ولحنية متخصصة."
    },
    "suggestedMaqamat": [
      "Varies based on intensity"
    ],
    "suggestedRhythms": [
      "Varies"
    ],
    "recommendedInstruments": [
      "Depends on arrangement"
    ],
    "vocalStyle": {
      "en": "Expressive vocals embodying Heartache.",
      "ar": "غناء معبر يجسد حالة لوعة الجوى."
    },
    "aiPrompt": {
      "en": "Compose a piece that strongly conveys Heartache, focusing on atmospheric and melodic elements.",
      "ar": "ألف مقطوعة تنقل بوضوح إحساس لوعة الجوى، مع التركيز على العناصر المحيطية واللحنية."
    }
  }
];
