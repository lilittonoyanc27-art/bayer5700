import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Trophy, 
  Sparkles, 
  MessageCircleOff,
  Moon, 
  Sun,
  Globe,
  Compass,
  ArrowRight,
  Type
} from 'lucide-react';
import ManualTab from './ManualTab';
import GamesTab from './GamesTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<'manual' | 'games'>('manual');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra'>('large');

  useEffect(() => {
    const root = document.documentElement;
    if (fontSize === 'normal') {
      root.style.fontSize = '16px';
    } else if (fontSize === 'large') {
      root.style.fontSize = '18px';
    } else if (fontSize === 'extra') {
      root.style.fontSize = '20.5px';
    }
  }, [fontSize]);

  return (
    <div id="app_root" className="min-h-screen bg-slate-100 text-slate-900 font-sans pb-12">
      
      {/* Decorative Top Accent Line */}
      <div className="h-1 bg-indigo-600 w-full" />

      {/* Main Header Card - Bento Pattern */}
      <header className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <div className="bg-white rounded-2.5xl shadow-xs border border-slate-200/80 p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            {/* Bento Brand Bubble */}
            <div className="relative shrink-0 select-none">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-3xl font-display font-black italic shadow-lg shadow-indigo-100/50">
                C
              </div>
              <span className="absolute -bottom-1 -right-1 bg-amber-400 border-2 border-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-sans font-bold text-amber-950">
                ES
              </span>
            </div>
            
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100/50 px-2.5 py-0.5 rounded-full uppercase tracking-widest font-sans inline-block">
                Ինտերակտիվ Ուսումնական Հարթակ
              </span>
              <h1 className="text-xl md:text-2xl font-display font-extrabold text-slate-800 uppercase tracking-tight flex items-center gap-2 justify-center sm:justify-start">
                <span>Condicional <span className="text-indigo-600">Simple & Compuesto</span></span>
                <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-sans font-bold">
                  ARM
                </span>
              </h1>
              <p className="text-xs text-slate-500 font-medium max-w-xl">
                Իսպաներենի պայմանական եղանակի լիարժեք ուղեցույց (կանոններ, բացառություններ, օրինակներ) և 6 ինտերակտիվ խաղեր։
              </p>
            </div>
          </div>

          {/* Quick Stats & Navigation CTA in Bento layout */}
          <div className="flex flex-col xl:flex-row items-center gap-3 shrink-0">
            {/* Font Size Selector */}
            <div className="flex items-center gap-1 bg-slate-200/50 p-1.5 rounded-xl border border-slate-200 shrink-0 select-none">
              <span className="text-[10px] uppercase font-bold text-slate-500 pl-2 pr-1.5 tracking-wider font-sans">
                ՏԱՌԱՉԱՓ՝
              </span>
              <button
                onClick={() => setFontSize('normal')}
                className={`w-8 h-8 rounded-lg font-bold transition-all text-xs flex items-center justify-center cursor-pointer ${
                  fontSize === 'normal'
                    ? 'bg-white text-indigo-650 shadow-2xs border border-slate-250/35'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Սովորական"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`w-8 h-8 rounded-lg font-bold transition-all text-sm flex items-center justify-center cursor-pointer ${
                  fontSize === 'large'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Խոշոր"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('extra')}
                className={`w-8 h-8 rounded-lg font-bold transition-all text-base flex items-center justify-center cursor-pointer ${
                  fontSize === 'extra'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Շատ խոշոր"
              >
                A++
              </button>
            </div>

            <div className="flex items-center gap-2 bg-slate-200/50 p-1.5 rounded-2xl border border-slate-200 shrink-0">
              <button
                onClick={() => setActiveTab('manual')}
                className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'manual'
                    ? 'bg-white text-indigo-650 shadow-xs border border-slate-250/30'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4 text-indigo-505" />
                <span>ԴԱՍԱԳԻՐՔ</span>
              </button>
              <button
                onClick={() => setActiveTab('games')}
                className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'games'
                    ? 'bg-white text-indigo-650 shadow-xs border border-slate-250/30'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Trophy className="w-4 h-4 text-indigo-505" />
                <span>ԻՆՏԵՐԱԿՏԻՎ ԽԱՂԵՐ</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        
        {/* Banner call-out styled with Indigo Bento palette */}
        {activeTab === 'manual' && (
          <div className="mb-6 bg-indigo-600 rounded-3xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-indigo-100/60 transition-all border border-indigo-700/15">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-[9px] font-bold bg-white/20 text-white px-2.5 py-1 rounded-full uppercase tracking-wider font-sans">
                Կանեի, կգնայի, կուզենայի
              </span>
              <h2 className="text-xl md:text-2xl font-display font-extrabold tracking-tight">
                Պատրա՞ստ ես փորձարկել գիտելիքներդ։
              </h2>
              <p className="text-xs text-indigo-100 max-w-lg leading-relaxed font-sans">
                Անցիր մեր 6 ինտերակտիվ խաղերը՝ կառուցելու խոնարհումներ, կազմելու քաղաքավարի նախադասություններ և տալու խորհուրդներ։
              </p>
            </div>
            <button
              onClick={() => setActiveTab('games')}
              className="flex items-center gap-2 bg-white text-indigo-950 text-xs font-bold py-3.5 px-6 rounded-2xl shadow-sm hover:bg-indigo-50 transition-all shrink-0 cursor-pointer"
            >
              <span>Անցնել Խաղերին</span>
              <ArrowRight className="w-4 h-4 text-indigo-600" />
            </button>
          </div>
        )}

        {/* Tab Swappers */}
        <div className="animate-fade-in">
          {activeTab === 'manual' ? (
            <ManualTab />
          ) : (
            <GamesTab />
          )}
        </div>
      </main>

      {/* Footer Block */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
        <div className="bg-white border border-slate-200/80 rounded-2.5xl p-6 text-center text-xs text-slate-500 space-y-2">
          <p className="font-sans font-medium">
            Condicional en Español (Español — Armenio) • Իսպաներենի խաղային ուսուցում
          </p>
          <p className="text-[10px] text-slate-400">
            Ստեղծված է իսպաներեն սովորողների համար՝ կատարյալ քերականական ճշտությամբ։
          </p>
        </div>
      </footer>

    </div>
  );
}
