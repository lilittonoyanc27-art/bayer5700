import { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Layers, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  Info,
  ChevronRight,
  ChevronDown,
  Compass,
  FileText
} from 'lucide-react';
import { 
  INTRO_TEXT, 
  ENDINGS_TABLE, 
  REGULAR_VERBS, 
  USE_CASES, 
  IRREGULAR_VERBS_STEMS, 
  IRREGULAR_VERBS, 
  COMPUESTO_CONTENT, 
  COMPARISON_SIMPLE_COMPUESTO, 
  COMPARISON_FUTURO, 
  USEFUL_PHRASES, 
  DIALOGUES, 
  CONDITIONAL_STRUCTURES, 
  MINI_EXERCISES 
} from './grammarData';

export default function ManualTab() {
  const [activeSection, setActiveSection] = useState<'intro' | 'simple' | 'irregulars' | 'compuesto' | 'uses' | 'dialogues' | 'test'>('intro');
  const [openedExerciseIndex, setOpenedExerciseIndex] = useState<number[]>([]);
  const [selectedIrregularVerb, setSelectedIrregularVerb] = useState<string>("Decir");

  const toggleExercise = (index: number) => {
    if (openedExerciseIndex.includes(index)) {
      setOpenedExerciseIndex(openedExerciseIndex.filter(i => i !== index));
    } else {
      setOpenedExerciseIndex([...openedExerciseIndex, index]);
    }
  };

  const currentIrregVerb = IRREGULAR_VERBS.find(v => v.infinitivo === selectedIrregularVerb) || IRREGULAR_VERBS[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
      {/* Navigation Side Panel - Bento Style */}
      <div className="lg:col-span-1 space-y-4 lg:sticky lg:top-6">
        <div className="bg-white rounded-2.5xl p-5 border border-slate-200/95 shadow-xs">
          <h3 className="font-display font-extrabold text-slate-800 text-xs tracking-wider uppercase mb-4 px-1">
            ԴԱՍԱԳՐՔԻ ԲԱԺԻՆՆԵՐԸ
          </h3>
          <nav className="space-y-1.5">
            {[
              { id: 'intro', label: 'Ներածություն', icon: BookOpen, color: 'text-indigo-600 bg-indigo-50 border border-indigo-100/30' },
              { id: 'simple', label: '1. Condicional Simple', icon: Sparkles, color: 'text-amber-650 bg-amber-50 border border-amber-150/40' },
              { id: 'irregulars', label: '2. Բացառիկ բայեր', icon: Layers, color: 'text-rose-600 bg-rose-50 border border-rose-150/40' },
              { id: 'uses', label: '3. Կիրառություններ', icon: Compass, color: 'text-emerald-600 bg-emerald-50 border border-emerald-150/40' },
              { id: 'dialogues', label: '4. Առօրյա և Պայմաններ', icon: MessageSquare, color: 'text-blue-600 bg-blue-50 border border-blue-150/40' },
              { id: 'compuesto', label: '5. Condicional Compuesto', icon: FileText, color: 'text-violet-650 bg-violet-50 border border-violet-150/40' },
              { id: 'test', label: '6. Ինքնաստուգում (Mini Test)', icon: HelpCircle, color: 'text-pink-600 bg-pink-50 border border-pink-150/40' }
            ].map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id as any)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left border cursor-pointer ${
                    isActive 
                      ? 'bg-indigo-600 text-white shadow-xs border-indigo-600 scale-[1.01]' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-transparent'
                  }`}
                >
                  <span className={`p-1.5 rounded-lg transition-colors shrink-0 ${isActive ? 'bg-white/20 text-white' : section.color}`}>
                    <Icon className="w-4 h-4 text-inherit" />
                  </span>
                  <span>{section.label}</span>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto text-white/80" />}
                </button>
              );
            })}
          </nav>

          <div className="mt-5 p-4 rounded-xl bg-slate-55/40 border border-slate-200">
            <h4 className="text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
              Իսպաներեն Պայմանական
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
              Սովորիր կանոնները, դիտիր օրինակները և անցիր խաղերի բաժինը՝ գիտելիքներդ գործնականում ամրապնդելու համար։
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Pane */}
      <div className="lg:col-span-3 space-y-6">
        
        {/* SECTION: INTRO */}
        {activeSection === 'intro' && (
          <div className="bg-white rounded-2.5xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <span className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 border border-indigo-100/30">
                <BookOpen className="w-6 h-6" />
              </span>
              <div>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Դաս 1 • ՆԵՐԱԾՈՒԹՅՈՒՆ</span>
                <h1 className="text-2xl md:text-3xl font-display font-extrabold text-slate-800 uppercase tracking-tight">
                  {INTRO_TEXT.title}
                </h1>
              </div>
            </div>

            <p className="text-sm md:text-base text-slate-605 leading-relaxed font-sans">
              <strong className="text-indigo-600">{INTRO_TEXT.description.split(" ")[0]}</strong> {INTRO_TEXT.description.substring(INTRO_TEXT.description.indexOf(" ") + 1)}
            </p>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
              <h3 className="font-display font-extrabold text-indigo-950 mb-3 text-xs tracking-wide uppercase">
                Ինչի՞ համար է օգտագործվում իսպաներենում՝
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {INTRO_TEXT.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-sans">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-slate-800 text-xs tracking-wider uppercase">
                Օրինակներ (Ejemplos)՝
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {INTRO_TEXT.examples.map((ex, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200/85 hover:border-indigo-400 hover:shadow-xs transition-all space-y-2">
                    <div className="font-mono font-bold text-indigo-650 text-sm md:text-base">
                      {ex.spanish}
                    </div>
                    <div className="text-xs text-slate-400 font-sans leading-relaxed">
                      {ex.armenian}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECTION: CONDICIONAL SIMPLE & REGULARS */}
        {activeSection === 'simple' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-2.5xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-150 pb-5">
                <span className="p-3 bg-amber-50 rounded-2xl text-amber-600 border border-amber-100/40">
                  <Sparkles className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Դաս 2 • ԿԱՆՈՆԱՎՈՐ ԲԱՅԵՐ</span>
                  <h1 className="text-2xl md:text-3xl font-display font-extrabold text-slate-800 uppercase tracking-tight">
                    {ENDINGS_TABLE.title}
                  </h1>
                </div>
              </div>

              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {ENDINGS_TABLE.rule}
              </p>

              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 font-mono text-xs text-indigo-950 flex flex-wrap gap-4 items-center justify-center">
                <span className="font-sans font-bold text-[10px] uppercase text-indigo-700 tracking-wider">Օրինակներ՝</span>
                {ENDINGS_TABLE.examples.split(" | ").map((ex, idx) => {
                  const [verb, formed] = ex.split(" → ");
                  return (
                    <span key={idx} className="bg-white px-3 py-1 rounded-xl border border-indigo-200/50 shadow-xs">
                      <strong className="text-slate-600">{verb}</strong> <span className="text-indigo-400">→</span> <strong className="text-indigo-600">{formed}</strong>
                    </span>
                  );
                })}
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-extrabold text-slate-800 text-xs tracking-wider uppercase">
                  Վերջավորությունները բոլոր բայերի համար (-AR, -ER, -IR)՝
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse bg-white">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Դեմք (Pronoun)</th>
                        <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Վերջավորություն (Ending)</th>
                        <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Օրինակ (Hablar)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {ENDINGS_TABLE.endings.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-mono font-semibold text-slate-700">{row.pronoun}</td>
                          <td className="p-4 font-mono font-bold text-indigo-600 bg-indigo-50/30">{row.ending}</td>
                          <td className="p-4 font-mono text-slate-650">
                            {row.example.replace("ía", "")}<span className="text-indigo-600 font-bold">{row.example.slice(-3)}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Individual regular verbs tabs */}
            <div className="space-y-4">
              <h3 className="text-xs font-display font-extrabold text-slate-850 uppercase tracking-widest px-1">
                Կանոնավոր բայերի խոնարհումը (Verbos Regulares)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {REGULAR_VERBS.map((verb) => (
                  <div key={verb.infinitivo} className="bg-white rounded-2.5xl border border-slate-200 shadow-xs overflow-hidden hover:shadow-sm hover:border-slate-350 transition-all duration-300">
                    <div className="bg-indigo-600 p-4 text-white">
                      <div className="flex justify-between items-center">
                        <h4 className="font-mono font-bold text-lg tracking-tight">{verb.infinitivo}</h4>
                        <span className="text-[10px] uppercase font-bold bg-white/20 text-white px-2.5 py-0.5 rounded-full font-sans">
                          {verb.meaning}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4 divide-y divide-slate-105 bg-white">
                      {verb.conjugations.map((conj, i) => (
                        <div key={i} className="py-2.5 flex justify-between items-center text-xs">
                          <span className="text-slate-400 font-mono text-[11px]">
                            {conj.pronoun} <span className="text-[10px] text-slate-300">({conj.armenianPronoun})</span>
                          </span>
                          <span className="font-mono font-semibold text-slate-800 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                            {conj.form.slice(0, -3)}<span className="text-indigo-600 font-bold">{conj.form.slice(-3)}</span>
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-slate-50 border-t border-slate-150 space-y-2">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Օրինակներ՝</span>
                      {verb.examples.map((ex, idx) => (
                        <div key={idx} className="space-y-0.5 text-xs">
                          <p className="font-mono font-medium text-indigo-950">{ex.spanish}</p>
                          <p className="text-slate-500 font-sans text-[11px]">{ex.armenian}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECTION: IRREGULAR VERBS */}
        {activeSection === 'irregulars' && (
          <div className="bg-white rounded-2.5xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 border-b border-slate-150 pb-5">
              <span className="p-3 bg-rose-50 rounded-2xl text-rose-600 border border-rose-100/40">
                <Layers className="w-6 h-6" />
              </span>
              <div>
                <span className="text-[10px] font-bold text-rose-600 uppercase tracking-widest">Դաս 3 • ԱՆԿԱՆՈՆ ԲԱՅԵՐ</span>
                <h1 className="text-2xl md:text-3xl font-display font-extrabold text-slate-800 uppercase tracking-tight">
                  Բացառիկ բայեր (Verbos Irregulares)
                </h1>
              </div>
            </div>

            <div className="bg-rose-50/40 border border-rose-100 rounded-2xl p-4 text-xs md:text-sm text-rose-955 leading-relaxed space-y-2 font-sans">
              <p>
                <strong>Կարևոր կանոն՝</strong> Condicional-ի բացառությունները նույնն են, ինչ <strong>Futuro Simple</strong>-ում (Ապառնի ժամանակաձև)։
              </p>
              <p>
                Վերջավորությունները նույնն են մնում, բայց բայի հիմքը (infinitivo-ն) փոխվում է։
              </p>
            </div>

            {/* Quick stem lookups */}
            <div className="space-y-3">
              <h3 className="font-display font-extrabold text-slate-800 text-xs tracking-wider uppercase">
                Ամենակարևոր բացառիկ հիմքերի ամփոփիչ աղյուսակը՝
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {IRREGULAR_VERBS_STEMS.map((item) => (
                  <div key={item.infinitivo} className="border border-slate-200 rounded-xl p-3 text-center space-y-1 bg-slate-50/60 transition-transform hover:scale-[1.01]">
                    <span className="font-mono text-[10px] font-medium text-slate-400 block">{item.meaning}</span>
                    <strong className="font-mono text-xs text-slate-800 block underline decoration-indigo-400 decoration-2">{item.infinitivo}</strong>
                    <span className="text-xs font-mono font-bold text-rose-600 block">→ {item.stem}</span>
                    <span className="text-[9px] font-mono text-slate-400 italic block">({item.example})</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-150 pt-6 space-y-4">
              <h3 className="font-display font-extrabold text-slate-800 text-xs tracking-wider uppercase">
                Մանրամասն խոնարհումն ըստ բայերի՝
              </h3>
              
              {/* Selector */}
              <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl">
                {IRREGULAR_VERBS.map((v) => (
                  <button
                    key={v.infinitivo}
                    onClick={() => setSelectedIrregularVerb(v.infinitivo)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer ${
                      selectedIrregularVerb === v.infinitivo
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-200 border-transparent'
                    }`}
                  >
                    {v.infinitivo}
                  </button>
                ))}
              </div>

              {/* Single Verb Focus Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-br from-slate-50 to-indigo-50/10 p-5 rounded-2.5xl border border-slate-205/90 shadow-xs">
                <div className="md:col-span-1 space-y-3 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">Ընտրված բայը</span>
                    <h4 className="text-2xl font-mono font-bold text-indigo-600">{currentIrregVerb.infinitivo}</h4>
                    <p className="text-xs text-slate-500">Նշանակությունը՝ <strong>{currentIrregVerb.meaning}</strong></p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-sans">Բացառիկ հիմքը</span>
                    <span className="text-base font-mono font-bold text-rose-600">{currentIrregVerb.stem}</span>
                  </div>
                  <div className="bg-indigo-50/50 p-3.5 rounded-xl border border-indigo-100/60 space-y-1">
                    <span className="text-[10px] font-bold text-indigo-800 uppercase tracking-widest block font-sans">Կիրառման օրինակ՝</span>
                    <p className="font-mono text-xs font-bold text-slate-800">{currentIrregVerb.example.split(" (")[0]}</p>
                    <p className="text-[11px] text-slate-600">{currentIrregVerb.example.split(" (")[1]?.replace(")", "")}</p>
                  </div>
                </div>

                <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100">
                  {currentIrregVerb.conjugations.map((conj, idx) => (
                    <div key={idx} className="p-3 flex justify-between items-center text-xs hover:bg-slate-50/50 transition-colors">
                      <span className="text-slate-400 font-mono text-[11px]">
                        {conj.pronoun} <span className="text-[11px] text-slate-300">({conj.armenianPronoun})</span>
                      </span>
                      <span className="font-mono font-semibold text-slate-800 bg-slate-50/30 px-2 py-0.5 rounded border border-transparent hover:border-slate-100">
                        <span className="text-rose-650 font-bold">{currentIrregVerb.stem}</span>
                        <span>{conj.form.substring(currentIrregVerb.stem.length)}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION: USES & COMPARISONS */}
        {activeSection === 'uses' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-2.5xl p-6 md:p-8 border border-slate-205 shadow-xs space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-150 pb-5">
                <span className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 border border-emerald-100/40">
                  <Compass className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Դաս 4 • ԿԻՐԱՌՈՒԹՅՈՒՆՆԵՐ</span>
                  <h1 className="text-2xl md:text-3xl font-display font-extrabold text-slate-800 uppercase tracking-tight">
                    Ամենակարևոր օգտագործումները
                  </h1>
                </div>
              </div>

              <div className="space-y-8">
                {USE_CASES.map((uc, i) => (
                  <div key={i} className="border-l-4 border-indigo-600 pl-4 py-1 space-y-3">
                    <h3 className="font-display font-extrabold text-slate-800 text-base">
                      {uc.title}
                    </h3>
                    <p className="text-xs text-slate-500 whitespace-pre-line leading-relaxed font-sans">
                      {uc.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {uc.examples.map((ex, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl border border-slate-200/60 bg-slate-50/50 flex flex-col justify-between space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-bold text-indigo-950">{ex.spanish}</span>
                            {ex.context && (
                              <span className={`text-[9px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider ${
                                ex.context.includes('քաղաքավարի') ? 'bg-indigo-50 text-indigo-700 border border-indigo-100/40' : 'bg-slate-200/60 text-slate-600'
                              }`}>
                                {ex.context}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-500 font-sans">{ex.armenian}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FUTURO VS CONDICIONAL */}
            <div className="bg-white rounded-2.5xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-6">
              <h2 className="text-lg font-display font-extrabold text-slate-800 uppercase tracking-tight flex items-center gap-2 border-b border-slate-150 pb-4">
                <span>⚡ {COMPARISON_FUTURO.title}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50/55 p-5 rounded-2.5xl border border-amber-200/60 space-y-3">
                  <span className="text-[9px] font-bold text-amber-700 uppercase bg-amber-100/60 border border-amber-200/30 px-2.5 py-0.5 rounded-full">Ապառնի</span>
                  <h3 className="font-display font-extrabold text-amber-900 text-sm md:text-base">
                    {COMPARISON_FUTURO.futuro.title}
                  </h3>
                  <div className="font-mono font-bold text-sm text-amber-950">
                    {COMPARISON_FUTURO.futuro.example}
                  </div>
                  <p className="text-xs text-amber-800 leading-relaxed font-sans">
                    {COMPARISON_FUTURO.futuro.desc}
                  </p>
                </div>

                <div className="bg-indigo-50/55 p-5 rounded-2.5xl border border-indigo-200/60 space-y-3">
                  <span className="text-[9px] font-bold text-indigo-700 uppercase bg-indigo-100/60 border border-indigo-200/30 px-2.5 py-0.5 rounded-full">Պայմանական</span>
                  <h3 className="font-display font-extrabold text-indigo-900 text-sm md:text-base">
                    {COMPARISON_FUTURO.condicional.title}
                  </h3>
                  <div className="font-mono font-bold text-sm text-indigo-950">
                    {COMPARISON_FUTURO.condicional.example}
                  </div>
                  <p className="text-xs text-indigo-805 leading-relaxed font-sans">
                    {COMPARISON_FUTURO.condicional.desc}
                  </p>
                  <div className="text-[10px] bg-white text-indigo-900/80 p-2.5 rounded-xl border border-indigo-100/80 italic font-sans">
                    {COMPARISON_FUTURO.condicional.extra}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION: DIALOGUES & STRUCTS */}
        {activeSection === 'dialogues' && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Useful Expressions */}
            <div className="bg-white rounded-2.5xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-6">
              <h2 className="text-lg md:text-xl font-display font-extrabold text-slate-800 border-b border-slate-100 pb-3 uppercase tracking-tight">
                Շատ օգտակար արտահայտություններ Condicional-ով
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {USEFUL_PHRASES.map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-4 rounded-xl border border-slate-200/80 space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-mono font-extrabold text-[#314eae] text-sm">{item.spanish}</span>
                      <span className="text-[11px] text-slate-600 font-bold whitespace-nowrap bg-white px-2 py-0.5 rounded border border-slate-150">{item.armenian}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono pt-1.5 border-t border-slate-200/60 leading-relaxed">
                      {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Everyday Speech Dialogues */}
            <div className="bg-white rounded-2.5xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-lg md:text-xl font-display font-extrabold text-slate-800 border-b border-slate-100 pb-3 uppercase tracking-tight">
                Օրինակներ առօրյա խոսքում (Conversaciones Cotidianas)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {DIALOGUES.map((d, index) => (
                  <div key={index} className="bg-slate-50/50 border border-slate-200 rounded-2.5xl p-5 space-y-4 shadow-2xs">
                    <h3 className="font-display font-extrabold text-slate-800 text-xs md:text-sm border-b border-slate-200/60 pb-2.5 tracking-wide uppercase">
                      {d.title}
                    </h3>
                    <div className="space-y-3">
                      {d.phrases.map((ph, idx) => (
                        <div key={idx} className="space-y-1">
                          <p className="font-mono text-xs font-bold text-slate-900 tracking-tight">{ph.spanish}</p>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-sans">{ph.armenian}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditional Structures (Si Clauses) */}
            <div className="bg-white rounded-2.5xl p-6 md:p-8 border border-slate-205 shadow-xs space-y-6">
              <h2 className="text-lg md:text-xl font-display font-extrabold text-slate-800 border-b border-slate-100 pb-3 uppercase tracking-tight">
                Կառուցվածքներ պայմանով (Si Clausulas)
              </h2>

              <div className="space-y-6">
                {CONDITIONAL_STRUCTURES.map((struct, i) => (
                  <div key={i} className="space-y-3">
                    <h3 className="font-display font-extrabold text-indigo-950 text-xs md:text-sm bg-slate-50 px-4 py-2.5 rounded-xl border-l-4 border-indigo-600">
                      {struct.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {struct.examples.map((ex, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:border-indigo-400 transition-colors">
                          <p className="font-mono text-xs font-bold text-indigo-650 mb-2 leading-relaxed">{ex.spanish}</p>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-sans">{ex.armenian}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECTION: CONDICIONAL COMPUESTO */}
        {activeSection === 'compuesto' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-2.5xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                <span className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 border border-indigo-100/30">
                  <FileText className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Դաս 5 • ԲԱՂԱԴՐՅԱԼ ԺԱՄԱՆԱԿ</span>
                  <h1 className="text-2xl md:text-3xl font-display font-extrabold text-slate-800 uppercase tracking-tight">
                    {COMPUESTO_CONTENT.title}
                  </h1>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
                <span className="text-slate-700 font-extrabold text-xs uppercase tracking-wider font-display">Կազմությունը՝</span>
                <span className="font-mono font-bold text-xs text-indigo-600 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                  {COMPUESTO_CONTENT.formation}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Haber Subjugation */}
                <div className="space-y-3 border border-slate-200 rounded-xl p-4 bg-white">
                  <h3 className="font-display font-extrabold text-slate-700 text-xs tracking-wider uppercase mb-2">
                    {COMPUESTO_CONTENT.tableTitle}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {COMPUESTO_CONTENT.conjugations.map((item, idx) => (
                      <div key={idx} className="bg-slate-50/50 p-2.5 rounded-lg border border-slate-150 flex justify-between font-mono">
                        <span className="text-slate-400">{item.pronoun}</span>
                        <span className="text-indigo-600 font-bold">{item.form}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Example compound participles */}
                <div className="space-y-3 border border-slate-150 rounded-xl p-4 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-display font-extrabold text-slate-700 text-xs tracking-wider uppercase mb-2">
                      {COMPUESTO_CONTENT.examplesTitle}
                    </h3>
                    <div className="space-y-2">
                      {COMPUESTO_CONTENT.examplesList.map((item, i) => (
                        <div key={i} className="flex justify-between font-mono text-xs border-b border-slate-100 py-1.5 ">
                          <span className="text-slate-800 font-bold">{item.span}</span>
                          <span className="text-slate-550">{item.arm}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 bg-indigo-50/30 rounded-xl border border-indigo-100 text-[11px] italic text-indigo-900 font-sans">
                    * participio-ն կանոնավոր բայերի դեպքում կազմվում է՝ -ado (AR) և -ido (ER/IR) վերջավորություններով։
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <h3 className="font-display font-extrabold text-slate-800 text-xs tracking-wider uppercase">
                  Նախադասությունների Օրինակներ՝
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {COMPUESTO_CONTENT.sentences.map((sent, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs hover:border-indigo-300 transition-all">
                      <p className="font-mono text-xs font-bold text-indigo-700 leading-relaxed mb-2">{sent.spanish}</p>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-sans">{sent.armenian}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DIFFERENCES: SIMPLE VS COMPUESTO */}
            <div className="bg-white rounded-2.5xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-6">
              <h2 className="text-lg md:text-xl font-display font-extrabold text-slate-800 border-b border-slate-100 pb-3 uppercase tracking-tight">
                {COMPARISON_SIMPLE_COMPUESTO.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Simple */}
                <div className="border border-amber-200 rounded-2.5xl p-5 space-y-3 bg-amber-50/20">
                  <h3 className="font-display font-extrabold text-amber-950 text-sm md:text-base">
                    {COMPARISON_SIMPLE_COMPUESTO.simple.title}
                  </h3>
                  <p className="text-xs text-amber-900/85 leading-relaxed font-sans">
                    {COMPARISON_SIMPLE_COMPUESTO.simple.desc}
                  </p>
                  <div className="bg-white p-3.5 rounded-xl border border-amber-200/40 font-mono text-xs space-y-1.5 shadow-2xs">
                    <p className="font-bold text-amber-705">{COMPARISON_SIMPLE_COMPUESTO.simple.example.spanish}</p>
                    <p className="text-slate-550 font-sans">{COMPARISON_SIMPLE_COMPUESTO.simple.example.armenian}</p>
                    <p className="text-[10px] text-amber-600/70 font-sans italic pt-1 border-t border-slate-100">{COMPARISON_SIMPLE_COMPUESTO.simple.example.extra}</p>
                  </div>
                </div>

                {/* Compuesto */}
                <div className="border border-indigo-200 rounded-2.5xl p-5 space-y-3 bg-indigo-50/20">
                  <h3 className="font-display font-extrabold text-indigo-950 text-sm md:text-base">
                    {COMPARISON_SIMPLE_COMPUESTO.compuesto.title}
                  </h3>
                  <p className="text-xs text-indigo-900/85 leading-relaxed font-sans">
                    {COMPARISON_SIMPLE_COMPUESTO.compuesto.desc}
                  </p>
                  <div className="bg-white p-3.5 rounded-xl border border-indigo-200/40 font-mono text-xs space-y-1.5 shadow-2xs">
                    <p className="font-bold text-indigo-705">{COMPARISON_SIMPLE_COMPUESTO.compuesto.example.spanish}</p>
                    <p className="text-slate-550 font-sans">{COMPARISON_SIMPLE_COMPUESTO.compuesto.example.armenian}</p>
                    <p className="text-[10px] text-indigo-600/70 font-sans italic pt-1 border-t border-slate-100">{COMPARISON_SIMPLE_COMPUESTO.compuesto.example.extra}</p>
                  </div>
                </div>
              </div>

              {/* Si clause side-by-side comparison */}
              <div className="pt-4 space-y-3">
                <h3 className="font-display font-extrabold text-slate-800 text-xs tracking-wider uppercase">
                  Համեմատիր պայմանական կառույցներում՝
                </h3>
                <div className="space-y-3 flex flex-col">
                  {COMPARISON_SIMPLE_COMPUESTO.sideBySide.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 font-mono text-xs">
                      <div className="font-bold text-slate-800 mb-1">{item.spanish}</div>
                      <div className="text-slate-500 mb-1 font-sans">{item.armenian}</div>
                      <div className="text-[10px] text-indigo-600 font-sans font-bold">{item.explanation}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION: MINI TEST PREVIEW */}
        {activeSection === 'test' && (
          <div className="bg-white rounded-2.5xl p-6 md:p-8 border border-slate-205 shadow-xs space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 border-b border-slate-150 pb-5">
              <span className="p-3 bg-amber-50 rounded-2xl text-amber-600 border border-amber-100/40 font-bold">
                <HelpCircle className="w-6 h-6" />
              </span>
              <div>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Դաս 6 • ԻՆՔՆԱՍՏՈՒԳՈՒՄ</span>
                <h1 className="text-2xl md:text-3xl font-display font-extrabold text-slate-800 uppercase tracking-tight">
                  Պատասխաններով Փոքր Վարժություն
                </h1>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
              Փորձիր ինքնուրույն թարգմանել նախադասությունները իսպաներեն, այնուհետև սեղմիր յուրաքանչյուր նախադասության վրա՝ ճիշտ պատասխանը բացահայտելու համար։
            </p>

            <div className="space-y-3">
              {MINI_EXERCISES.map((ex, idx) => {
                const isOpen = openedExerciseIndex.includes(idx);
                return (
                  <div 
                    key={idx} 
                    onClick={() => toggleExercise(idx)}
                    className={`cursor-pointer rounded-xl p-4 border transition-all flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                      isOpen 
                        ? 'bg-indigo-50/30 border-indigo-200 shadow-2xs' 
                        : 'bg-white border-slate-200 hover:border-indigo-455 hover:bg-slate-50/20'
                    }`}
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-extrabold text-indigo-600 font-sans uppercase tracking-widest">Հարց {idx + 1}</span>
                      <p className="font-sans text-xs md:text-sm font-bold text-slate-800">{ex.q.substring(ex.q.indexOf(" ") + 1)}</p>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      {isOpen ? (
                        <div className="bg-indigo-600 text-white font-mono text-xs font-bold px-3 py-1.5 rounded-xl border border-indigo-600 animate-fade-in">
                          {ex.a}
                        </div>
                      ) : (
                        <span className="text-xs text-slate-400 font-sans flex items-center gap-1 font-semibold">
                          Բացահայտել պատասխանը <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
