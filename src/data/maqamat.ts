import { Maqam } from './types';

export const maqamat: Maqam[] = [
  {
    "id": "rast",
    "name": {
      "en": "Rast",
      "ar": "راست"
    },
    "description": {
      "en": "The fundamental maqam of Arabic music. It starts on C and uses half-flat notes (E half-flat and B half-flat).",
      "ar": "المقام الأساسي في الموسيقى العربية. يبدأ من درجة الدو (C) ويستخدم أرباع التون في المي والسي."
    },
    "emotionalEffect": {
      "en": "Pride, power, soundness of mind, and masculinity.",
      "ar": "الفخر، القوة، الرزانة، والرجولة."
    },
    "typicalUsage": {
      "en": "Used in classical and folk Arabic music for solemn and grandiose compositions.",
      "ar": "يستخدم في الموسيقى الكلاسيكية والشعبية للألحان الرصينة والفخمة."
    },
    "scaleNotes": "C - D - E half-flat - F - G - A - B half-flat - C",
    "westernEquivalent": "C Major (with quarter tones)",
    "famousSongs": {
      "en": "\"Ya Shadi Al-Alhan\" by Fairuz, \"Ghannili Shway Shway\" by Umm Kulthum.",
      "ar": "\"يا شادي الألحان\" لفيروز، \"غنيلي شوي شوي\" لأم كلثوم."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney",
      "Violin"
    ],
    "aiPrompt": {
      "en": "Compose a majestic orchestral piece in Maqam Rast, 80 BPM, featuring an Oud solo followed by sweeping strings. Convey a sense of pride and historical depth.",
      "ar": "ألف مقطوعة أوركسترالية مهيبة على مقام الراست، بسرعة 80 نبضة في الدقيقة، تتميز بعزف منفرد على العود يليه وتريات واسعة، لتوصيل إحساس بالفخر والعمق التاريخي."
    }
  },
  {
    "id": "bayati",
    "name": {
      "en": "Bayati",
      "ar": "بياتي"
    },
    "description": {
      "en": "The most popular maqam across the Middle East. It conveys a mix of joy and sorrow.",
      "ar": "المقام الأكثر شعبية في الشرق الأوسط. ينقل مزيجاً من الفرح والحزن."
    },
    "emotionalEffect": {
      "en": "Vitality, joy mixed with a touch of sadness, longing.",
      "ar": "الحيوية، الفرح الممزوج بمسحة من الحزن، الشوق."
    },
    "typicalUsage": {
      "en": "Extensively used in folk dances (Dabke), pop music, and religious chanting.",
      "ar": "يُستخدم على نطاق واسع في الرقصات الشعبية (الدبكة)، موسيقى البوب، والإنشاد الديني."
    },
    "scaleNotes": "D - E half-flat - F - G - A - Bb - C - D",
    "westernEquivalent": "D Minor (with a lowered second degree)",
    "famousSongs": {
      "en": "\"Al-Atlal\" (parts of it) by Umm Kulthum, \"Ya Ana Ya Ana\" by Fairuz.",
      "ar": "أجزاء من \"الأطلال\" لأم كلثوم، \"يا أنا يا أنا\" لفيروز."
    },
    "suggestedInstruments": [
      "Ney",
      "Darbuka",
      "Oud",
      "Buzuq"
    ],
    "aiPrompt": {
      "en": "Generate a lively Middle Eastern folk song in Maqam Bayati at 110 BPM. Use Ney and energetic Darbuka rhythms. The mood should be rhythmic and slightly nostalgic.",
      "ar": "اصنع أغنية شعبية شرق أوسطية حيوية على مقام البياتي بسرعة 110 نبضات. استخدم الناي وإيقاعات الدربكة الحماسية. يجب أن يكون المزاج إيقاعياً وحنينياً بعض الشيء."
    }
  },
  {
    "id": "hijaz",
    "name": {
      "en": "Hijaz",
      "ar": "حجاز"
    },
    "description": {
      "en": "Characterized by an augmented second interval between the second and third notes, giving it an exotic, desert-like feel.",
      "ar": "يتميز بمسافة ثانية زائدة بين النغمة الثانية والثالثة، مما يمنحه طابعاً غريباً وجواً صحراوياً."
    },
    "emotionalEffect": {
      "en": "Desert ambience, spirituality, deep sadness, or exotic mystery.",
      "ar": "أجواء الصحراء، الروحانية، الحزن العميق، والغموض الساحر."
    },
    "typicalUsage": {
      "en": "Call to prayer (Adhan), spiritual songs, and exotic dramatic pieces.",
      "ar": "الأذان، الأناشيد الروحانية، والمقطوعات الدرامية العميقة."
    },
    "scaleNotes": "D - Eb - F# - G - A - Bb - C - D",
    "westernEquivalent": "Phrygian Dominant (Spanish Minor)",
    "famousSongs": {
      "en": "\"Zourouni Kull Sana Marra\" by Fairuz.",
      "ar": "\"زوروني كل سنة مرة\" لفيروز."
    },
    "suggestedInstruments": [
      "Ney",
      "Oud",
      "Violin"
    ],
    "aiPrompt": {
      "en": "Create a cinematic and spiritual composition in Maqam Hijaz. Feature a solo Ney echoing in a vast acoustic space, supported by soft synth pads.",
      "ar": "ألف مقطوعة سينمائية وروحانية على مقام الحجاز. قم بتسليط الضوء على عزف منفرد للناي يتردد صداه في مساحة صوتية واسعة بدعم من وسادات صوتية ناعمة."
    }
  },
  {
    "id": "nahawand",
    "name": {
      "en": "Nahawand",
      "ar": "نهاوند"
    },
    "description": {
      "en": "Similar to the Western harmonic minor scale. It is highly emotionally expressive and bridges Eastern and Western musical sensibilities.",
      "ar": "يشبه السلم الصغير المنسجم (Harmonic Minor) الغربي. إنه معبر عاطفياً بقوة ويربط بين الأحاسيس الموسيقية الشرقية والغربية."
    },
    "emotionalEffect": {
      "en": "Romance, tender sadness, drama, elegance.",
      "ar": "الرومانسية، الحزن الرقيق، الدراما، الأناقة."
    },
    "typicalUsage": {
      "en": "Romantic ballads, classical Muwashahat, and modern pop.",
      "ar": "الأغاني الرومانسية، الموشحات الكلاسيكية، وموسيقى البوب الحديثة."
    },
    "scaleNotes": "C - D - Eb - F - G - Ab - B - C",
    "westernEquivalent": "C Harmonic Minor",
    "famousSongs": {
      "en": "\"Lamma Bada Yatathanna\", \"Aatini al-Nay\" by Fairuz.",
      "ar": "\"لما بدا يتثنى\"، \"أعطني الناي\" لفيروز."
    },
    "suggestedInstruments": [
      "Cello",
      "Violin",
      "Piano",
      "Qanun"
    ],
    "aiPrompt": {
      "en": "Produce a romantic Arabic ballad in Maqam Nahawand. Use a lush string orchestra and a classical piano. Tempo 75 BPM. The mood is highly emotional and dramatic.",
      "ar": "أنتج أغنية عربية رومانسية على مقام النهاوند. استخدم أوركسترا وترية غنية وبيانو كلاسيكي. السرعة 75 نبضة. المزاج عاطفي ودرامي للغاية."
    }
  },
  {
    "id": "kurd",
    "name": {
      "en": "Kurd",
      "ar": "كرد"
    },
    "description": {
      "en": "A maqam without quarter tones, making it identical to the Phrygian mode. It is highly versatile and widely used in modern Pan-Arab pop.",
      "ar": "مقام لا يحتوي على أرباع التون، مما يجعله مطابقاً للسلم الفريجي (Phrygian). وهو مرن للغاية ويستخدم بكثرة في موسيقى البوب العربية الحديثة."
    },
    "emotionalEffect": {
      "en": "Freedom, romance, gentleness, modern vibes.",
      "ar": "الحرية، الرومانسية، الرقة، المشاعر الحديثة."
    },
    "typicalUsage": {
      "en": "Modern Arabic pop music, romantic songs.",
      "ar": "موسيقى البوب العربية الحديثة، الأغاني الرومانسية."
    },
    "scaleNotes": "D - Eb - F - G - A - Bb - C - D",
    "westernEquivalent": "D Phrygian",
    "famousSongs": {
      "en": "\"Nassam Alayna El Hawa\" by Fairuz.",
      "ar": "\"نسم علينا الهوى\" لفيروز."
    },
    "suggestedInstruments": [
      "Guitar",
      "Oud",
      "Clarinet"
    ],
    "aiPrompt": {
      "en": "Generate a modern acoustic pop track in Maqam Kurd at 90 BPM. Use acoustic guitar and light percussion. The feel should be gentle and uplifting.",
      "ar": "أنتج مقطوعة بوب صوتية حديثة على مقام الكرد بسرعة 90 نبضة. استخدم الجيتار الصوتي والإيقاع الخفيف. يجب أن يكون الإحساس رقيقاً ومبهجاً."
    }
  },
  {
    "id": "saba",
    "name": {
      "en": "Saba",
      "ar": "صبا"
    },
    "description": {
      "en": "One of the most uniquely Arabic scales, evoking profound sorrow and pain. It has a flat 4th interval creating high tension.",
      "ar": "من أكثر المقامات العربية تفردًا، يثير شعوراً عميقاً بالحزن والألم. يمتلك مسافة رابعة ناقصة تخلق توتراً عالياً."
    },
    "emotionalEffect": {
      "en": "Extreme sadness, anguish, grief, deep spiritual pain.",
      "ar": "الحزن الشديد، الأسى، الكآبة، الألم الروحي العميق."
    },
    "typicalUsage": {
      "en": "Elegies, deeply emotional classical pieces, and expressive Quranic recitations.",
      "ar": "المراثي، المقطوعات الكلاسيكية العاطفية العميقة، والتلاوات القرآنية المعبرة."
    },
    "scaleNotes": "D - E half-flat - F - Gb - A - Bb - C - Db",
    "westernEquivalent": "None (highly microtonal)",
    "famousSongs": {
      "en": "\"Huwa Sahih el Hawa Ghallab\" by Umm Kulthum.",
      "ar": "\"هو صحيح الهوى غلاب\" لأم كلثوم."
    },
    "suggestedInstruments": [
      "Ney",
      "Violin (Arab style)"
    ],
    "aiPrompt": {
      "en": "Compose a heart-wrenching instrumental piece in Maqam Saba. Slow tempo, featuring a crying Ney and a solo Oud. Evoke a sense of deep longing and sorrow.",
      "ar": "ألف مقطوعة موسيقية مفطرة للقلب على مقام الصبا. إيقاع بطيء، تضم ناي باكياً وعزف منفرد على العود. تثير إحساساً عميقاً بالشوق والحزن."
    }
  },
  {
    "id": "ajam",
    "name": {
      "en": "Ajam",
      "ar": "عجم"
    },
    "description": {
      "en": "Identical to the Western Major scale. It represents joy, victory, and grandeur.",
      "ar": "مطابق للسلم الكبير (Major) الغربي. يمثل الفرح، النصر، والعظمة."
    },
    "emotionalEffect": {
      "en": "Happiness, victory, celebration, clarity.",
      "ar": "السعادة، النصر، الاحتفال، الوضوح."
    },
    "typicalUsage": {
      "en": "National anthems, celebratory songs, joyous pop tracks.",
      "ar": "الأناشيد الوطنية، أغاني الاحتفالات، ومسارات البوب المبهجة."
    },
    "scaleNotes": "Bb - C - D - Eb - F - G - A - Bb",
    "westernEquivalent": "Major Scale",
    "famousSongs": {
      "en": "\"Tala'a Al Badru Alayna\".",
      "ar": "\"طلع البدر علينا\"."
    },
    "suggestedInstruments": [
      "Trumpet",
      "Violin Section",
      "Piano"
    ],
    "aiPrompt": {
      "en": "Create a festive and celebratory Eastern tune in Maqam Ajam. Upbeat tempo at 120 BPM, using full orchestra and bright brass elements.",
      "ar": "ألف لحن شرقي احتفالي ومبهج على مقام العجم. إيقاع سريع 120 نبضة، باستخدام أوركسترا كاملة وعناصر نحاسية لامعة."
    }
  },
  {
    "id": "sikah",
    "name": {
      "en": "Sikah",
      "ar": "سيكاه"
    },
    "description": {
      "en": "A maqam rooted in quarter tones, traditionally starting on the note E half-flat (Sikah). It is deeply traditional and evocative.",
      "ar": "مقام متجذر في أرباع التون، يبدأ تقليدياً من نغمة المي نصف بيمول (السيكاه). هو تقليدي جداً ومثير للمشاعر."
    },
    "emotionalEffect": {
      "en": "Ancient beauty, nostalgia, tarab (musical ecstasy).",
      "ar": "الجمال القديم، الحنين، الطرب (النشوة الموسيقية)."
    },
    "typicalUsage": {
      "en": "Classical Muwashahat, Tarab songs, and traditional poetry recitations.",
      "ar": "الموشحات الكلاسيكية، أغاني الطرب، وإلقاء الشعر التقليدي."
    },
    "scaleNotes": "E half-flat - F - G - A - B half-flat - C - D - E half-flat",
    "westernEquivalent": "None",
    "famousSongs": {
      "en": "\"Lissa Fakir\" by Umm Kulthum.",
      "ar": "\"لسة فاكر\" لأم كلثوم."
    },
    "suggestedInstruments": [
      "Qanun",
      "Oud",
      "Classic Vocals"
    ],
    "aiPrompt": {
      "en": "Compose an authentic classical Arabic piece in Maqam Sikah. Use Tarab style arrangements with intertwined Qanun and Oud passages, tempo 70 BPM.",
      "ar": "ألف مقطوعة عربية كلاسيكية أصيلة على مقام السيكاه. استخدم توزيعات طربية مع مقاطع متشابكة من القانون والعود، السرعة 70 نبضة."
    }
  },
  {
    "id": "suznak",
    "name": {
      "en": "Suznak",
      "ar": "سوزناك"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Suznak. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام سوزناك. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "nairuz",
    "name": {
      "en": "Nairuz",
      "ar": "نيروز"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Nairuz. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام نيروز. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "yakah",
    "name": {
      "en": "Yakah",
      "ar": "يكاه"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Yakah. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام يكاه. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "mahur",
    "name": {
      "en": "Mahur",
      "ar": "ماهور"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Mahur. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام ماهور. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "sazkar",
    "name": {
      "en": "Sazkar",
      "ar": "سازكار"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Sazkar. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام سازكار. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "kerdan",
    "name": {
      "en": "Kerdan",
      "ar": "كردان"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Kerdan. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام كردان. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "muhayyar-sikah",
    "name": {
      "en": "Muhayyar Sikah",
      "ar": "محير سيكاه"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Muhayyar Sikah. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام محير سيكاه. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "dalanshin",
    "name": {
      "en": "Dalanshin",
      "ar": "دلانشين"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Dalanshin. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام دلانشين. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "rast-jadid",
    "name": {
      "en": "Rast Jadid",
      "ar": "راست جديد"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Rast Jadid. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام راست جديد. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "zirkash",
    "name": {
      "en": "Zirkash",
      "ar": "زركش"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Zirkash. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام زركش. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "tarz-nevin",
    "name": {
      "en": "Tarz Nevin",
      "ar": "طرز نيفين"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Tarz Nevin. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام طرز نيفين. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "zanjaran",
    "name": {
      "en": "Zanjaran",
      "ar": "زنجران"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Zanjaran. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام زنجران. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "hijaz-kar",
    "name": {
      "en": "Hijaz Kar",
      "ar": "حجاز كار"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Hijaz Kar. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام حجاز كار. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "shahnaz",
    "name": {
      "en": "Shahnaz",
      "ar": "شهناز"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Shahnaz. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام شهناز. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "awj-araq",
    "name": {
      "en": "Awj Araq",
      "ar": "أوج عراق"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Awj Araq. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام أوج عراق. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "shad-araban",
    "name": {
      "en": "Shad Araban",
      "ar": "شد عربان"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Shad Araban. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام شد عربان. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "suzidil",
    "name": {
      "en": "Suzidil",
      "ar": "سوزديل"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Suzidil. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام سوزديل. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "nawathar",
    "name": {
      "en": "Nawathar",
      "ar": "نوا أثر"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Nawathar. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام نوا أثر. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "husseini",
    "name": {
      "en": "Husseini",
      "ar": "حسيني"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Husseini. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام حسيني. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "bayati-shuri",
    "name": {
      "en": "Bayati Shuri",
      "ar": "بياتي شوري"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Bayati Shuri. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بياتي شوري. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "muhayyar",
    "name": {
      "en": "Muhayyar",
      "ar": "محير"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Muhayyar. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام محير. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "huzzam",
    "name": {
      "en": "Huzzam",
      "ar": "هزام"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Huzzam. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام هزام. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "iraq",
    "name": {
      "en": "Iraq",
      "ar": "عراق"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Iraq. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام عراق. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "bastanikar",
    "name": {
      "en": "Bastanikar",
      "ar": "بستة نكار"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Bastanikar. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بستة نكار. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "rahat-el-arwah",
    "name": {
      "en": "Rahat El Arwah",
      "ar": "راحة الأرواح"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Rahat El Arwah. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام راحة الأرواح. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "mustaar",
    "name": {
      "en": "Mustaar",
      "ar": "مستعار"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Mustaar. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام مستعار. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "farahfaza",
    "name": {
      "en": "Farahfaza",
      "ar": "فرحفزا"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Farahfaza. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام فرحفزا. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "nahawand-murassaa",
    "name": {
      "en": "Nahawand Murassaa",
      "ar": "نهاوند مرصع"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Nahawand Murassaa. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام نهاوند مرصع. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "ushhaq-masri",
    "name": {
      "en": "Ushhaq Masri",
      "ar": "عشاق مصري"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Ushhaq Masri. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام عشاق مصري. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "hijaz-kar-kurd",
    "name": {
      "en": "Hijaz Kar Kurd",
      "ar": "حجاز كار كرد"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Hijaz Kar Kurd. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام حجاز كار كرد. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "lami",
    "name": {
      "en": "Lami",
      "ar": "لامي"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Lami. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام لامي. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "tarz-jadid",
    "name": {
      "en": "Tarz Jadid",
      "ar": "طرز جديد"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Tarz Jadid. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام طرز جديد. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "saba-zamzam",
    "name": {
      "en": "Saba Zamzam",
      "ar": "صبا زمزم"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Saba Zamzam. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام صبا زمزم. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "jiharkah",
    "name": {
      "en": "Jiharkah",
      "ar": "جهاركاه"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Jiharkah. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام جهاركاه. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "shawq-afza",
    "name": {
      "en": "Shawq Afza",
      "ar": "شوق أفزا"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Shawq Afza. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام شوق أفزا. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "ajam-ushayran",
    "name": {
      "en": "Ajam Ushayran",
      "ar": "عجم عشيران"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Ajam Ushayran. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام عجم عشيران. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "athar-kurd",
    "name": {
      "en": "Athar Kurd",
      "ar": "أثر كرد"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Athar Kurd. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام أثر كرد. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "farahnak",
    "name": {
      "en": "Farahnak",
      "ar": "فرحناك"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Farahnak. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام فرحناك. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "shawq-awar",
    "name": {
      "en": "Shawq Awar",
      "ar": "شوق آور"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Shawq Awar. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام شوق آور. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "sultani-yakah",
    "name": {
      "en": "Sultani Yakah",
      "ar": "سلطاني يكاه"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Sultani Yakah. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام سلطاني يكاه. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "zawil",
    "name": {
      "en": "Zawil",
      "ar": "زويل"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Zawil. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام زويل. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "hesar-mubarqa",
    "name": {
      "en": "Hesar Mubarqa",
      "ar": "حصار مبرقع"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Hesar Mubarqa. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام حصار مبرقع. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "shuri",
    "name": {
      "en": "Shuri",
      "ar": "شوري"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Shuri. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام شوري. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "awj",
    "name": {
      "en": "Awj",
      "ar": "أوج"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Awj. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام أوج. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "busalik",
    "name": {
      "en": "Busalik",
      "ar": "بوسليك"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Busalik. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بوسليك. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "nawa",
    "name": {
      "en": "Nawa",
      "ar": "نوى"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Nawa. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام نوى. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "kujuk",
    "name": {
      "en": "Kujuk",
      "ar": "كوجك"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Kujuk. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام كوجك. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "nakriz",
    "name": {
      "en": "Nakriz",
      "ar": "نكريز"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Nakriz. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام نكريز. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "bahr-jood",
    "name": {
      "en": "Bahr Jood",
      "ar": "بحر جود"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Bahr Jood. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بحر جود. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "hisar",
    "name": {
      "en": "Hisar",
      "ar": "حصار"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Hisar. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام حصار. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "isfahan",
    "name": {
      "en": "Isfahan",
      "ar": "أصفهان"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Isfahan. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام أصفهان. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "saba-buslik",
    "name": {
      "en": "Saba Buslik",
      "ar": "صبا بوسليك"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Saba Buslik. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام صبا بوسليك. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "neveser",
    "name": {
      "en": "Neveser",
      "ar": "نيفسر"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Neveser. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام نيفسر. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "shuranka",
    "name": {
      "en": "Shuranka",
      "ar": "شورنكا"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Shuranka. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام شورنكا. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "bahr-noor",
    "name": {
      "en": "Bahr Noor",
      "ar": "بحر نور"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Bahr Noor. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بحر نور. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "ghavvas",
    "name": {
      "en": "Ghavvas",
      "ar": "غواص"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Ghavvas. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام غواص. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "tarz-e-jahan",
    "name": {
      "en": "Tarz-e-Jahan",
      "ar": "طرز جهان"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Tarz-e-Jahan. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام طرز جهان. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "penjgah",
    "name": {
      "en": "Penjgah",
      "ar": "بنجكاه"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Penjgah. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بنجكاه. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "ashiran",
    "name": {
      "en": "Ashiran",
      "ar": "عشيران"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Ashiran. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام عشيران. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "jaldad",
    "name": {
      "en": "Jaldad",
      "ar": "جلداد"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Jaldad. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام جلداد. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "uzzal",
    "name": {
      "en": "Uzzal",
      "ar": "عزال"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Uzzal. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام عزال. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "zangula",
    "name": {
      "en": "Zangula",
      "ar": "زنجلة"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Zangula. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام زنجلة. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "muhayyar-kurd",
    "name": {
      "en": "Muhayyar Kurd",
      "ar": "محير كرد"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Muhayyar Kurd. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام محير كرد. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "shahnaz-kurdi",
    "name": {
      "en": "Shahnaz Kurdi",
      "ar": "شهناز كردي"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Shahnaz Kurdi. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام شهناز كردي. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "busalik-kurdi",
    "name": {
      "en": "Busalik Kurdi",
      "ar": "بوسليك كردي"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Busalik Kurdi. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بوسليك كردي. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "nahawand-kabir",
    "name": {
      "en": "Nahawand Kabir",
      "ar": "نهاوند كبير"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Nahawand Kabir. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام نهاوند كبير. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "mubarqa",
    "name": {
      "en": "Mubarqa",
      "ar": "مبرقع"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Mubarqa. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام مبرقع. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "suzidila",
    "name": {
      "en": "Suzidila",
      "ar": "سوز ديلا"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Suzidila. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام سوز ديلا. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "suzidilara",
    "name": {
      "en": "Suzidilara",
      "ar": "سوز دلارا"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Suzidilara. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام سوز دلارا. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "shuba",
    "name": {
      "en": "Shuba",
      "ar": "شعبة"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Shuba. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام شعبة. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "awaz",
    "name": {
      "en": "Awaz",
      "ar": "آواز"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Awaz. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام آواز. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "ajam-kurd",
    "name": {
      "en": "Ajam Kurd",
      "ar": "عجم كرد"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Ajam Kurd. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام عجم كرد. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "hijazayn",
    "name": {
      "en": "Hijazayn",
      "ar": "حجازين"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Hijazayn. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام حجازين. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "rast-murassaa",
    "name": {
      "en": "Rast Murassaa",
      "ar": "راست مرصع"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Rast Murassaa. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام راست مرصع. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "bastanigar",
    "name": {
      "en": "Bastanigar",
      "ar": "بستة نكار"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Bastanigar. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بستة نكار. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "uzzal-mubarqa",
    "name": {
      "en": "Uzzal Mubarqa",
      "ar": "عزال مبرقع"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Uzzal Mubarqa. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام عزال مبرقع. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "mukhayyef",
    "name": {
      "en": "Mukhayyef",
      "ar": "مخيف"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Mukhayyef. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام مخيف. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "sazkar-murassaa",
    "name": {
      "en": "Sazkar Murassaa",
      "ar": "سازكار مرصع"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Sazkar Murassaa. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام سازكار مرصع. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "bayati-sultan",
    "name": {
      "en": "Bayati Sultan",
      "ar": "بياتي سلطان"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Bayati Sultan. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بياتي سلطان. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "bayati-araban",
    "name": {
      "en": "Bayati Araban",
      "ar": "بياتي عربان"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Bayati Araban. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بياتي عربان. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "awj-sikah",
    "name": {
      "en": "Awj Sikah",
      "ar": "أوج سيكاه"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Awj Sikah. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام أوج سيكاه. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "awj-rast",
    "name": {
      "en": "Awj Rast",
      "ar": "أوج راست"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Awj Rast. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام أوج راست. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "saba-kurd",
    "name": {
      "en": "Saba Kurd",
      "ar": "صبا كرد"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Saba Kurd. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام صبا كرد. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "bahr-kurd",
    "name": {
      "en": "Bahr Kurd",
      "ar": "بحر كرد"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Bahr Kurd. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بحر كرد. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "majd",
    "name": {
      "en": "Majd",
      "ar": "مجد"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Majd. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام مجد. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "sazanda",
    "name": {
      "en": "Sazanda",
      "ar": "سازندا"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Sazanda. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام سازندا. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "busalik-ashiran",
    "name": {
      "en": "Busalik Ashiran",
      "ar": "بوسليك عشيران"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Busalik Ashiran. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بوسليك عشيران. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "nahawand-murassaa-kurdi",
    "name": {
      "en": "Nahawand Murassaa Kurdi",
      "ar": "نهاوند مرصع كردي"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Nahawand Murassaa Kurdi. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام نهاوند مرصع كردي. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "husayni-kurd",
    "name": {
      "en": "Husayni Kurd",
      "ar": "حسيني كرد"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Husayni Kurd. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام حسيني كرد. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "shadd-kurdi",
    "name": {
      "en": "Shadd Kurdi",
      "ar": "شد كردي"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Shadd Kurdi. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام شد كردي. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "bayati-shahnaz",
    "name": {
      "en": "Bayati Shahnaz",
      "ar": "بياتي شهناز"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Bayati Shahnaz. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بياتي شهناز. ركز على الآلات الأصيلة."
    }
  },
  {
    "id": "bayati-husseini",
    "name": {
      "en": "Bayati Husseini",
      "ar": "بياتي حسيني"
    },
    "description": {
      "en": "A fascinating variant or branch in the vast family of Arabic Maqamat. Each maqam branch provides a unique color by combining half-flats or different tetrachords (Ajnas).",
      "ar": "أحد التفريعات أو الفروع الساحرة في عائلة المقامات العربية الواسعة. يقدم كل فرع مقامي لوناً مميزاً بجمع أرباع التون أو أجناس مختلفة."
    },
    "emotionalEffect": {
      "en": "Evocative, deeply traditional, offering nuanced emotions tied to its parent family.",
      "ar": "مثير للمشاعر ومفعم بالأصالة، ويقدم مشاعر دقيقة مرتبطة بالعائلة المقامية الأساسية."
    },
    "typicalUsage": {
      "en": "Used in classical Muwashahat, specific forms of Taqsim, and traditional folklore.",
      "ar": "يستخدم في الموشحات الكلاسيكية، أشكال معينة من التقاسيم، والفلكلور التقليدي."
    },
    "scaleNotes": "Varies based on branching from the parent Maqam.",
    "westernEquivalent": "Microtonal, specific to Eastern modalities.",
    "famousSongs": {
      "en": "Used frequently in classical Tarab repertoires.",
      "ar": "يعزف بكثرة في قوالب الطرب الكلاسيكي."
    },
    "suggestedInstruments": [
      "Oud",
      "Qanun",
      "Ney"
    ],
    "aiPrompt": {
      "en": "Create a traditional Arabic track utilizing the intricate microtones of Maqam Bayati Husseini. Focus on authentic instrumentation.",
      "ar": "أنتج مقطوعة عربية تقليدية باستخدام أرباع التون المعقدة في مقام بياتي حسيني. ركز على الآلات الأصيلة."
    }
  }
];
