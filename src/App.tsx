import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';
import { useTheme } from './contexts/ThemeContext';
import { 
  Music, Guitar, BookHeart, Wand2, Search, 
  Menu, X, Moon, Sun, Globe, Mic2, Star, ListMusic, AlignLeft
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Pages will be imported here
import Home from './pages/Home';
import MaqamatPage from './pages/MaqamatPage';
import RhythmsPage from './pages/RhythmsPage';
import EmotionsPage from './pages/EmotionsPage';
import InstrumentsPage from './pages/InstrumentsPage';
import SingingStylesPage from './pages/SingingStylesPage';
import AIPromptGenerator from './pages/AIPromptGenerator';
import SongBuilder from './pages/SongBuilder';
import FavoritesPage from './pages/FavoritesPage';
import ComposerAgentPage from './pages/ComposerAgentPage';
import { Bot } from 'lucide-react';

function Layout({ children }: { children: React.ReactNode }) {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    { to: '/', icon: Music, label: t('Home', 'الرئيسية') },
    { to: '/composer', icon: Bot, label: t('Composer Agent', 'وكيل الألحان') },
    { to: '/maqamat', icon: AlignLeft, label: t('Maqamat', 'المقامات') },
    { to: '/rhythms', icon: ListMusic, label: t('Rhythms', 'الإيقاعات') },
    { to: '/emotions', icon: BookHeart, label: t('Emotions', 'المشاعر') },
    { to: '/instruments', icon: Guitar, label: t('Instruments', 'الآلات') },
    { to: '/singing', icon: Mic2, label: t('Singing Styles', 'أساليب الغناء') },
    { to: '/generator', icon: Wand2, label: t('AI Generator', 'المولد الذكي') },
    { to: '/builder', icon: Music, label: t('Song Builder', 'بناء الأغنية') },
    { to: '/favorites', icon: Star, label: t('Favorites', 'المفضلة') },
  ];

  return (
    <div className="min-h-screen bg-eastern-bg text-eastern-text font-sans flex flex-col md:flex-row relative">
      <div className="absolute inset-0 gradient-overlay opacity-40 pointer-events-none z-0"></div>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 glass sticky top-0 z-50">
        <h1 className="text-lg font-bold font-serif whitespace-nowrap overflow-hidden text-ellipsis flex-1">
          {t('Eastern Music AI', 'الموسيقى الشرقية')}
        </h1>
        <div className="flex items-center gap-1">
          <button 
            onClick={toggleLanguage}
            className="p-2 border border-eastern-text/20 rounded-lg text-[18px] font-bold font-bold hover:bg-eastern-text/10"
          >
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          <button 
            onClick={toggleTheme}
            className="p-2 border border-eastern-text/20 rounded-lg text-[18px] font-bold hover:bg-eastern-text/10"
          >
            {theme === 'dark' ? <Moon className="w-4 h-4"/> : <Sun className="w-4 h-4"/>}
          </button>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 ml-1">
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside className={cn(
        "fixed md:sticky top-0 h-screen w-64 glass border-r border-eastern-text/5 rtl:border-r-0 rtl:border-l flex flex-col transition-transform duration-300 z-40",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 rtl:translate-x-full rtl:md:translate-x-0"
      )}>
        <div className="p-6 hidden md:block text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full border border-eastern-gold flex items-center justify-center text-eastern-gold font-serif text-2xl mx-auto mb-4">Σ</div>
          <h1 className="text-xl font-serif tracking-widest uppercase">
            {t('Eastern Music AI', 'الموسيقى الشرقية')}
          </h1>
          <p className="text-[10px] text-eastern-text/40 tracking-[0.3em] font-arabic mt-2">
            موسوعة الموسيقى والترنيم
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsSidebarOpen(false)}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 uppercase tracking-widest text-[11px] font-semibold",
                    isActive 
                      ? "text-eastern-gold border-l-2 border-eastern-gold bg-eastern-text/5 rtl:border-l-0 rtl:border-r-2" 
                      : "text-eastern-text/50 hover:text-eastern-text"
                  )}
                >
                  <link.icon className="w-5 h-5 flex-shrink-0" />
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-eastern-text/10 flex flex-col gap-2">
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-between w-full px-4 py-2 hover:bg-eastern-text/5 rounded-lg transition-colors text-[10px] uppercase tracking-widest text-eastern-text/60 hover:text-eastern-text"
          >
            <span className="flex items-center gap-2"><Globe className="w-4 h-4"/> {t('Language', 'اللغة')}</span>
            <span className="font-bold border border-eastern-text/20 px-2 py-1 rounded">
              {language === 'en' ? 'AR' : 'EN'}
            </span>
          </button>
          
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-between w-full px-4 py-2 hover:bg-eastern-text/5 rounded-lg transition-colors text-[10px] uppercase tracking-widest text-eastern-text/60 hover:text-eastern-text"
          >
            <span className="flex items-center gap-2">
              {theme === 'dark' ? <Moon className="w-4 h-4"/> : <Sun className="w-4 h-4"/>} 
              {t('Theme', 'المظهر')}
            </span>
            <span className="font-bold border border-eastern-text/20 px-2 py-1 rounded">
              {theme === 'dark' ? t('Dark', 'ليلي') : t('Light', 'نهاري')}
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 flex flex-col h-screen overflow-y-auto relative z-10">
        <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-12 relative pb-24">
          {children}
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/composer" element={<ComposerAgentPage />} />
          <Route path="/maqamat" element={<MaqamatPage />} />
          <Route path="/rhythms" element={<RhythmsPage />} />
          <Route path="/emotions" element={<EmotionsPage />} />
          <Route path="/instruments" element={<InstrumentsPage />} />
          <Route path="/singing" element={<SingingStylesPage />} />
          <Route path="/generator" element={<AIPromptGenerator />} />
          <Route path="/builder" element={<SongBuilder />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
