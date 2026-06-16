export type Language = 'en' | 'ar';

export interface Maqam {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  emotionalEffect: { en: string; ar: string };
  typicalUsage: { en: string; ar: string };
  scaleNotes: string;
  westernEquivalent: string;
  famousSongs: { en: string; ar: string };
  suggestedInstruments: string[];
  aiPrompt: { en: string; ar: string };
}

export interface Rhythm {
  id: string;
  name: { en: string; ar: string };
  timeSignature: string;
  tempoRange: string;
  culturalOrigin: { en: string; ar: string };
  audioDesc: { en: string; ar: string };
  aiPrompt: { en: string; ar: string };
}

export interface Emotion {
  id: string;
  name: { en: string; ar: string };
  musicalChars: { en: string; ar: string };
  suggestedMaqamat: string[];
  suggestedRhythms: string[];
  recommendedInstruments: string[];
  vocalStyle: { en: string; ar: string };
  aiPrompt: { en: string; ar: string };
}

export interface Instrument {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  soundChars: { en: string; ar: string };
  musicalRange: { en: string; ar: string };
  playingTechniques: { en: string; ar: string };
  suggestedGenres: string[];
  imageUrl?: string;
}

export interface SingingStyle {
  id: string;
  name: { en: string; ar: string };
  vocalTechniques: { en: string; ar: string };
  ornamentation: { en: string; ar: string };
  typicalMaqamat: string[];
  suitableEmotions: string[];
  aiPrompt: { en: string; ar: string };
}
