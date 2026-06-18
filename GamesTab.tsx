import React, { useState } from 'react';
import { 
  Trophy, 
  ArrowLeft, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Award, 
  Info, 
  Play, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { 
  GAME1_CHALLENGES, 
  GAME2_CHALLENGES, 
  GAME3_CHALLENGES, 
  GAME4_CHALLENGES, 
  GAME5_CHALLENGES, 
  GAME6_CHALLENGES 
} from './grammarData';

export default function GamesTab() {
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);

  // General game states
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  // States for Game 1 (stem + ending)
  const [game1SelectedStem, setGame1SelectedStem] = useState<string | null>(null);
  const [game1SelectedEnding, setGame1SelectedEnding] = useState<string | null>(null);

  // States for Game 2 (sentence builder)
  const [game2Assembled, setGame2Assembled] = useState<string[]>([]);

  // States for Game 6
  const [game6BucketFeedback, setGame6BucketFeedback] = useState<string | null>(null);

  const gamesList = [
    {
      id: 1,
      title: "Կազմիր խոնարհումը (Conjugation)",
      badgeName: "Բայական խոնարհում",
      desc: "Միացրու ճիշտ բայական հիմքը և վերջավորությունը՝ ըստ պահանջվող դեմքի։",
      explanation: "Այս խաղում դու սովորում ես կազմել Condicional Simple-ը ինչպես կանոնավոր, այնպես էլ բացառիկ (անիրական հիմքերով) բայերի համար։ Յուրաքանչյուր դեմքի դիմաց ընտրիր համապատասխան արմատական հիմքը և իսպաներեն կանոնավոր վերջավորությունը։"
    },
    {
      id: 2,
      title: "Քաղաքավարության տրանսֆորմեր",
      badgeName: "Կիրառական Քաղաքավարություն",
      desc: "Փոխակերպիր սովորական կամ կոպիտ խնդրանքները չափազանց քաղաքավարի տարբերակների։",
      explanation: "Condicional-ի ամենակարևոր դերերից մեկը քաղաքավարությունն է։ Հավաքիր իսպաներեն բնական, քաղաքավարի նախադասությունը՝ տրված բառ-ղեկերից ճիշտ հաջորդականությամբ։"
    },
    {
      id: 3,
      title: "Իմաստուն Խորհրդատու (El Consejero)",
      badgeName: "Խորհրդատվություն",
      desc: "Լսիր տարբեր խնդիրներ և տուր լավագույն խորհուրդը՝ օգտագործելով պայմանականը։",
      explanation: "Երբ ուզում ենք խորհուրդ տալ, օգտագործում ենք «Deberías...» (դու պետք է...) կամ «Yo en tu lugar...» (ես քո տեղը...) կառույցները։ Ընտրիր լավագույն, քերականորեն ճիշտ խորհուրդը։"
    },
    {
      id: 4,
      title: "«Եթե» Պայմաններ (Si Clauses)",
      badgeName: "Հիպոթետիկ Պայմաններ",
      desc: "Իսկական քերականական արկած։ Լրացրու պայմանական նախադասության երկրորդ մասը։",
      explanation: "Իսպաներենում «Si»-ով սկսվող պայմաններից հետո պահանջվում է ենթակի անցյալ (Subjuntivo), որին հաջորդում է պայմանական (Condicional) եղանակը։ Ընտրիր ճիշտ ժամանակաձևերը։"
    },
    {
      id: 5,
      title: "Անցյալի Գաղտնիքներ",
      badgeName: "Ռետրո Ենթադրություններ",
      desc: "Կանխատեսիր անցյալում տեղի ունեցած իրադարձությունների հանգամանքները։",
      explanation: "Condicional-ով կարող ենք ենթադրություն անել անցյալի մասին (օրինակ՝ «Երևի ժամը 8-ն էր» կամ «Երևի 20 տարեկան էր»)։ Ընտրիր ճիշտ ձևը։"
    },
    {
      id: 6,
      title: "Պարզ թե՞ Բարդ պայմանական",
      badgeName: "Simple vs Compuesto",
      desc: "Արագ որոշիր՝ տվյալ իրավիճակը վերաբերո՞ւմ է ներկային, թե՞ անցյալի կորսված հնարավորությանը։",
      explanation: "Condicional Simple-ն օգտագործվում է ներկա/ապագա հիպոթետիկ իրավիճակների համար (կանեի), իսկ Condicional Compuesto-ն՝ անցյալում չկատարված բաների համար (արած կլինեի)։ Դասակարգիր նրանց։"
    }
  ];

  const handleStartGame = (id: number) => {
    setSelectedGameId(id);
    setCurrentIdx(0);
    setScore(0);
    resetQuestionState();
    setGameFinished(false);
  };

  const resetQuestionState = () => {
    setIsSelected(false);
    setSelectedOption(null);
    setIsCorrect(null);
    setShowAnswer(false);
    setGame1SelectedStem(null);
    setGame1SelectedEnding(null);
    setGame2Assembled([]);
    setGame6BucketFeedback(null);
  };

  const handleBackToHub = () => {
    setSelectedGameId(null);
    setGameFinished(false);
  };

  // ----------------------------------------------------
  // GAME-SPECIFIC ACTIONS
  // ----------------------------------------------------

  // Game 1 Validate
  const handleGame1Submit = (correctAnswer: string) => {
    if (!game1SelectedStem || !game1SelectedEnding) return;
    const combined = game1SelectedStem + game1SelectedEnding;
    const matched = combined.toLowerCase() === correctAnswer.toLowerCase();
    
    setIsSelected(true);
    setIsCorrect(matched);
    if (matched) {
      setScore(prev => prev + 1);
    }
    setShowAnswer(true);
  };

  // Game 2 Interactive Word Builder
  const handleGame2WordClick = (word: string) => {
    if (isSelected) return;
    if (game2Assembled.includes(word)) {
      setGame2Assembled(prev => prev.filter(w => w !== word));
    } else {
      setGame2Assembled(prev => [...prev, word]);
    }
  };

  const handleGame2Submit = (correctPhrase: string) => {
    const assembledText = game2Assembled.join(" ").trim();
    const matched = assembledText.toLowerCase().replace(/,|\.|\?/g, "") === correctPhrase.toLowerCase().replace(/,|\.|\?/g, "");
    
    setIsSelected(true);
    setIsCorrect(matched);
    if (matched) {
      setScore(prev => prev + 1);
    }
    setShowAnswer(true);
  };

  // Game 3 Submit
  const handleGame3Submit = (isCorrectOpt: boolean, text: string) => {
    if (isSelected) return;
    setSelectedOption(text);
    setIsSelected(true);
    setIsCorrect(isCorrectOpt);
    if (isCorrectOpt) {
      setScore(prev => prev + 1);
    }
    setShowAnswer(true);
  };

  // Game 4 Submit
  const handleGame4Submit = (option: string, correct: string) => {
    if (isSelected) return;
    setSelectedOption(option);
    setIsSelected(true);
    const matched = option === correct;
    setIsCorrect(matched);
    if (matched) {
      setScore(prev => prev + 1);
    }
    setShowAnswer(true);
  };

  // Game 5 Submit
  const handleGame5Submit = (option: string, correct: string) => {
    if (isSelected) return;
    setSelectedOption(option);
    setIsSelected(true);
    const matched = option === correct;
    setIsCorrect(matched);
    if (matched) {
      setScore(prev => prev + 1);
    }
    setShowAnswer(true);
  };

  // Game 6 Submit
  const handleGame6Submit = (type: 'simple' | 'compuesto', correctType: 'simple' | 'compuesto') => {
    if (isSelected) return;
    const matched = type === correctType;
    setSelectedOption(type);
    setIsSelected(true);
    setIsCorrect(matched);
    if (matched) {
      setScore(prev => prev + 1);
      setGame6BucketFeedback("Ճիշտ պատասխան է։");
    } else {
      setGame6BucketFeedback("Սխալ պատասխան է։");
    }
    setShowAnswer(true);
  };

  // Go to next question
  const handleNext = (totalQuestions: number) => {
    if (currentIdx + 1 < totalQuestions) {
      setCurrentIdx(prev => prev + 1);
      resetQuestionState();
    } else {
      setGameFinished(true);
    }
  };

  const renderProgress = (total: number) => {
    const percentage = ((currentIdx) / total) * 100;
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono font-bold tracking-wide">
          <span>ՀԱՐՑ {currentIdx + 1} / {total}</span>
          <span>ՄԻԱՎՈՐՆԵՐ՝ {score}</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-750 transition-all duration-500" 
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      
      {/* 1. GAME SELECTION HUB (selectedGameId === null) */}
      {selectedGameId === null && (
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 py-6">
            <span className="p-3 bg-indigo-50 text-indigo-650 rounded-2xl border border-indigo-150 inline-block">
              <Trophy className="w-5 h-5 animate-pulse" />
            </span>
            <h1 className="text-2xl md:text-3xl font-display font-extrabold text-slate-800 tracking-tight uppercase">
              Ինտերակտիվ Ուսուցողական Խաղեր
            </h1>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans">
              Կիրառիր քո գիտելիքները գործնականում մեր 6 մասնագիտացված խաղերով։ Յուրաքանչյուր խաղ կենտրոնանում է Condicional-ի որոշակի դերի և կառուցվածքի վրա։
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gamesList.map((g) => {
              return (
                <div 
                  key={g.id} 
                  className="bg-white rounded-2.5xl border border-slate-200 p-5 shadow-2xs hover:shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {g.id}
                      </span>
                      <h3 className="font-display font-bold text-slate-800 text-xs md:text-sm tracking-tight line-clamp-1">
                        {g.title}
                      </h3>
                    </div>
                    <span className="inline-block text-[9px] font-extrabold tracking-wider bg-slate-50 text-slate-400 border border-slate-150 px-2 py-0.5 rounded-md uppercase font-sans">
                      {g.badgeName}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      {g.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => handleStartGame(g.id)}
                      className="w-full flex items-center justify-center gap-1 bg-slate-900 border border-slate-900 text-white text-[11px] font-bold py-2.5 px-4 rounded-xl shadow-2xs hover:bg-indigo-650 hover:border-indigo-650 transition-colors cursor-pointer uppercase"
                    >
                      <Play className="w-3 h-3" />
                      <span>Խաղալ</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. GAME WORKSPACE (selectedGameId !== null) */}
      {selectedGameId !== null && (
        <div className="space-y-6">
          
          {/* Header Action Row */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 bg-white/50 p-4 rounded-2.5xl border border-slate-200 backdrop-blur-sm">
            <button
              onClick={handleBackToHub}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Վերադառնալ Հաբ</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-extrabold text-indigo-700 bg-indigo-50 px-3.5 py-1 rounded-xl border border-indigo-200 uppercase tracking-wider">
                {gamesList.find(g => g.id === selectedGameId)?.title}
              </span>
            </div>
          </div>

          {/* GAME FINISHED CONGRATULATIONS */}
          {gameFinished && (
            <div className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2.5xl flex items-center justify-center mx-auto shadow-sm shadow-indigo-100">
                <Award className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-display font-extrabold text-slate-800 uppercase tracking-tight">
                  Փայլո՜ւն աշխատանք։
                </h2>
                <p className="text-xs md:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                  Դու հաջողությամբ ավարտեցիր «<strong>{gamesList.find(g => g.id === selectedGameId)?.title}</strong>» խաղը։
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 inline-block px-10 shadow-2xs">
                <span className="text-[9px] text-slate-400 block tracking-wider uppercase font-bold mb-1">Վերջնական արդյունք</span>
                <span className="text-2xl font-mono font-extrabold text-indigo-600">{score} միավոր</span>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => handleStartGame(selectedGameId)}
                  className="flex items-center gap-1.5 bg-white text-slate-700 text-xs font-extrabold py-2.5 px-5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Կրկին փորձել</span>
                </button>
                <button
                  onClick={handleBackToHub}
                  className="flex items-center gap-1.5 bg-slate-900 hover:bg-indigo-600 text-white text-xs font-extrabold py-2.5 px-5 rounded-xl transition-all cursor-pointer"
                >
                  <span>Մյուս խաղերը</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ACTIVE GAME PLAYGROUND CONTAINER */}
          {!gameFinished && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left explanation card & instructions */}
              <div className="lg:col-span-1 bg-white rounded-2.5xl border border-slate-200 p-5 shadow-2xs space-y-4 h-fit">
                <div className="flex items-center gap-2 text-slate-800">
                  <Info className="w-4 h-4 text-indigo-500" />
                  <h4 className="font-display font-extrabold text-xs uppercase tracking-wide">Խաղի Կանոնները</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-sans whitespace-pre-line bg-slate-50 p-3.5 rounded-xl border border-slate-150">
                  {gamesList.find(g => g.id === selectedGameId)?.explanation}
                </p>
                <div className="bg-slate-50/50 p-4 rounded-xl space-y-2 border border-slate-200">
                  <span className="text-[9px] font-extrabold text-slate-400 uppercase block tracking-widest">Ընթացիկ վիճակագրություն</span>
                  <div className="flex justify-between items-center text-xs text-slate-650">
                    <span>Ճիշտ պատասխաններ՝</span>
                    <strong className="text-indigo-605 font-mono">{score}</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-650">
                    <span>Մնացած հարցեր՝</span>
                    <strong className="text-slate-805 font-mono">
                      {selectedGameId === 1 && GAME1_CHALLENGES.length - currentIdx}
                      {selectedGameId === 2 && GAME2_CHALLENGES.length - currentIdx}
                      {selectedGameId === 3 && GAME3_CHALLENGES.length - currentIdx}
                      {selectedGameId === 4 && GAME4_CHALLENGES.length - currentIdx}
                      {selectedGameId === 5 && GAME5_CHALLENGES.length - currentIdx}
                      {selectedGameId === 6 && GAME6_CHALLENGES.length - currentIdx}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Right Game Canvas */}
              <div className="lg:col-span-2 bg-white rounded-2.5xl border border-slate-200 p-6 md:p-8 shadow-2xs space-y-6">
                
                {/* ------------------------------------------------------------------ */}
                {/* GAME 1: CONJUGATION BUILDER */}
                {/* ------------------------------------------------------------------ */}
                {selectedGameId === 1 && (() => {
                  const challenge = GAME1_CHALLENGES[currentIdx];
                  if (!challenge) return null;
                  return (
                    <div className="space-y-6 animate-fade-in">
                      {renderProgress(GAME1_CHALLENGES.length)}

                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-2.5 shadow-2xs">
                        <span className="text-[10px] bg-indigo-600 text-white px-2.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider font-sans">
                          Խոնարհիր {challenge.verb} ({challenge.meaning}) բայը
                        </span>
                        <div className="text-2xl font-mono font-extrabold text-slate-800 leading-none pt-1">
                          {challenge.pronoun}
                        </div>
                        <p className="text-xs text-slate-500 font-sans leading-none pt-0.5">
                          Հայերեն թարգմանութամբ՝ <strong>«{challenge.armenianPronoun} {challenge.meaning.replace(" ", " կ")}...»</strong>
                        </p>
                      </div>

                      {/* Builder Layout */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-center gap-2 p-4 bg-slate-50/50 rounded-2xl border border-slate-200 min-h-[4rem]">
                          <span className="font-mono text-xs text-slate-400 block px-1">Արդյունք՝</span>
                          <span className="font-mono text-sm font-extrabold text-indigo-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                            {game1SelectedStem || "______"}
                          </span>
                          <span className="text-slate-350 font-bold text-lg">+</span>
                          <span className="font-mono text-sm font-extrabold text-indigo-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                            {game1SelectedEnding || "______"}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Stem Selection */}
                          <div className="border border-slate-200/80 rounded-xl p-3 space-y-2 bg-white">
                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block">Ընտրիր հիմքը (Base Stem)՝</span>
                            <div className="flex flex-wrap gap-1.5">
                              {Array.from(new Set(GAME1_CHALLENGES.map(c => c.stem))).map((st) => (
                                <button
                                  key={st}
                                  onClick={() => !isSelected && setGame1SelectedStem(st)}
                                  className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all border ${
                                    game1SelectedStem === st
                                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-350 hover:bg-slate-50'
                                  }`}
                                  disabled={isSelected}
                                >
                                  {st}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Ending Selection */}
                          <div className="border border-slate-200/80 rounded-xl p-3 space-y-2 bg-white">
                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block font-sans">Ընտրիր վերջավորությունը՝</span>
                            <div className="flex flex-wrap gap-1.5">
                              {["ía", "ías", "íamos", "íais", "ían"].map((end) => (
                                <button
                                  key={end}
                                  onClick={() => !isSelected && setGame1SelectedEnding(end)}
                                  className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all border ${
                                    game1SelectedEnding === end
                                      ? 'bg-indigo-700 border-indigo-700 text-white shadow-sm'
                                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-350 hover:bg-slate-50'
                                  }`}
                                  disabled={isSelected}
                                >
                                  -{end}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Submit action */}
                      {!isSelected ? (
                        <button
                          onClick={() => handleGame1Submit(challenge.correct)}
                          className={`w-full py-3 rounded-2xl text-xs font-extrabold text-white transition-all shadow-2xs uppercase tracking-wider font-sans ${
                            game1SelectedStem && game1SelectedEnding
                              ? 'bg-slate-900 border border-slate-900 cursor-pointer shadow-slate-100 hover:bg-indigo-600 hover:border-indigo-600'
                              : 'bg-slate-200 border border-slate-200 pointer-events-none text-slate-400'
                          }`}
                        >
                          Ստուգել պատասխանը
                        </button>
                      ) : (
                        <div className="space-y-4 animate-fade-in">
                          <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                            isCorrect ? 'bg-indigo-50/50 border-indigo-200 text-indigo-950' : 'bg-red-50/50 border-red-200 text-red-950'
                          }`}>
                            <span className="mt-0.5">
                              {isCorrect ? <CheckCircle2 className="w-5 h-5 text-indigo-600" /> : <XCircle className="w-5 h-5 text-red-500" />}
                            </span>
                            <div className="space-y-1">
                              <h5 className="font-display font-extrabold text-xs uppercase tracking-tight">{isCorrect ? "Անթերի է։" : "Ա՜խ, սխալ էր։"}</h5>
                              <p className="text-xs">
                                Ճիշտ պատասխանն է՝ <strong className="font-mono text-sm leading-none bg-white px-2 py-0.5 rounded border border-slate-250 text-indigo-700">{challenge.correct}</strong>
                              </p>
                              {challenge.isIrregular && (
                                <p className="text-[10px] text-slate-400 italic font-sans pt-1">
                                  * Սա բացառիկ բայ է, որի խոնարհման հիմքը փոխվում է դեպի <strong>{challenge.stem}</strong>։
                                </p>
                              )}
                            </div>
                          </div>

                          <button
                            onClick={() => handleNext(GAME1_CHALLENGES.length)}
                            className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-2xl hover:bg-indigo-600 transition-colors cursor-pointer"
                          >
                            Առաջ անցնել
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* ------------------------------------------------------------------ */}
                {/* GAME 2: POLITE TRANSFORMER */}
                {/* ------------------------------------------------------------------ */}
                {selectedGameId === 2 && (() => {
                  const challenge = GAME2_CHALLENGES[currentIdx];
                  if (!challenge) return null;
                  return (
                    <div className="space-y-6 animate-fade-in">
                      {renderProgress(GAME2_CHALLENGES.length)}

                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-2.5 shadow-2xs">
                        <span className="text-[10px] bg-amber-500/90 text-white px-2.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider font-sans">
                          Իրավիճակ՝ {challenge.directMeaning}
                        </span>
                        <div className="text-base font-mono font-bold text-red-500 line-through">
                          ❌ {challenge.directPhrase}
                        </div>
                        <p className="text-xs text-slate-500 font-sans">
                          Խնդիրը՝ <strong>Հավաքիր նախադասության չափազանց քաղաքավարի տարբերակը</strong>
                        </p>
                      </div>

                      {/* Display Screen */}
                      <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-200 min-h-[4.5rem] flex flex-wrap gap-2 items-center justify-center">
                        {game2Assembled.length === 0 ? (
                          <span className="text-xs text-slate-400 font-sans">Սեղմիր ստորև բառերը համապատասխան հավաքման հերթականությամբ...</span>
                        ) : (
                          game2Assembled.map((word, i) => (
                            <button
                              key={i}
                              onClick={() => handleGame2WordClick(word)}
                              className="bg-white px-3 py-1.5 rounded-xl border border-indigo-200 font-mono text-xs font-bold text-indigo-950 flex items-center gap-1.5 shadow-2xs"
                              disabled={isSelected}
                            >
                              <span>{word}</span>
                              {!isSelected && <span className="text-[10px] text-indigo-400">×</span>}
                            </button>
                          ))
                        )}
                      </div>

                      {/* Word bubbles choices */}
                      <div className="space-y-2.5">
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block text-center">Մատչելի բաղադրիչները՝</span>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {challenge.options.map((word, idx) => {
                            const isAdded = game2Assembled.includes(word);
                            return (
                              <button
                                key={idx}
                                onClick={() => handleGame2WordClick(word)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all border ${
                                  isAdded
                                    ? 'bg-slate-100 text-slate-350 border-slate-150 pointer-events-none'
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-400 hover:shadow-2xs'
                                }`}
                                disabled={isSelected}
                              >
                                {word}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Submit action */}
                      {!isSelected ? (
                        <button
                          onClick={() => handleGame2Submit(challenge.politePhrase)}
                          className={`w-full py-3 rounded-2xl text-xs font-extrabold text-white transition-all shadow-2xs uppercase tracking-wider font-sans ${
                            game2Assembled.length > 0
                              ? 'bg-slate-900 border border-slate-900 cursor-pointer hover:bg-indigo-600 hover:border-indigo-600'
                              : 'bg-slate-200 border border-slate-200 text-slate-400 pointer-events-none'
                          }`}
                        >
                          Ստուգել քաղաքավարի տարբերակը
                        </button>
                      ) : (
                        <div className="space-y-4 animate-fade-in">
                          <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                            isCorrect ? 'bg-indigo-50/50 border-indigo-200 text-indigo-950' : 'bg-red-50/50 border-red-200 text-red-950'
                          }`}>
                            <span className="mt-0.5">
                              {isCorrect ? <CheckCircle2 className="w-5 h-5 text-indigo-600" /> : <XCircle className="w-5 h-5 text-red-550" />}
                            </span>
                            <div className="space-y-1">
                              <h5 className="font-display font-extrabold text-xs uppercase tracking-tight">{isCorrect ? "Գաղափարը կատարյալ է արտահայտված:" : "Կարելի է ավելի լավ կազմել։"}</h5>
                              <p className="text-xs">
                                Ճիշտ տարբերակը՝ <strong className="font-mono text-xs block my-1 text-indigo-950 bg-white px-2 py-1 rounded border border-slate-200">{challenge.politePhrase}</strong>
                              </p>
                              <div className="text-[11px] text-slate-500 font-sans border-t border-slate-200/50 pt-1.5 mt-1">
                                <strong>Բացատրություն՝</strong> {challenge.politeExplanation}
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => handleNext(GAME2_CHALLENGES.length)}
                            className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-2xl hover:bg-indigo-600 transition-colors cursor-pointer"
                          >
                            Առաջ անցնել
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* ------------------------------------------------------------------ */}
                {/* GAME 3: WISE ADVISOR */}
                {/* ------------------------------------------------------------------ */}
                {selectedGameId === 3 && (() => {
                  const challenge = GAME3_CHALLENGES[currentIdx];
                  if (!challenge) return null;
                  return (
                    <div className="space-y-6 animate-fade-in">
                      {renderProgress(GAME3_CHALLENGES.length)}

                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-1.5 shadow-2xs">
                        <span className="text-[10px] bg-indigo-600 text-white px-2.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider font-sans">
                          Իրավիճակ / Խնդիր
                        </span>
                        <div className="text-base font-sans font-bold text-slate-800">
                          «{challenge.problem}»
                        </div>
                        <p className="text-xs text-slate-400 font-mono">
                          ({challenge.meaning})
                        </p>
                      </div>

                      {/* Advice variants list */}
                      <div className="space-y-3">
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block font-sans">Ընտրիր լավագույն պայմանական խորհուրդը՝</span>
                        <div className="space-y-2.5">
                          {challenge.options.map((opt, idx) => {
                            const isThisChosen = selectedOption === opt.text;
                            return (
                              <button
                                key={idx}
                                onClick={() => handleGame3Submit(opt.isCorrect, opt.text)}
                                className={`w-full text-left p-4 rounded-xl border transition-all text-xs font-mono font-bold block ${
                                  isSelected
                                    ? opt.isCorrect
                                      ? 'bg-indigo-50/50 border-indigo-350 text-indigo-950 shadow-2xs'
                                      : isThisChosen
                                        ? 'bg-red-50/50 border-red-300 text-red-950 shadow-inner'
                                        : 'bg-slate-50 text-slate-400 border-slate-100'
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-400 hover:bg-slate-50/10 hover:shadow-2xs'
                                }`}
                                disabled={isSelected}
                              >
                                <div className="flex justify-between items-center mb-1">
                                  <span>{opt.text}</span>
                                  {isSelected && (
                                    <span>
                                      {opt.isCorrect ? (
                                        <span className="text-[9px] font-sans bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded font-extrabold uppercase">Ճիշտ է</span>
                                      ) : isThisChosen ? (
                                        <span className="text-[9px] font-sans bg-red-100 text-red-800 px-2.5 py-0.5 rounded font-extrabold uppercase font-sans">Սխալ է</span>
                                      ) : null}
                                    </span>
                                  )}
                                </div>
                                {isSelected && (opt.isCorrect || isThisChosen) && (
                                  <p className="text-[10px] text-slate-500 font-sans mt-2 pt-1.5 border-t border-slate-200/45">
                                    <strong>Իմաստը՝</strong> {opt.explanation}
                                  </p>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Jump next */}
                      {isSelected && (
                        <button
                          onClick={() => handleNext(GAME3_CHALLENGES.length)}
                          className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-2xl hover:bg-indigo-650 transition-colors cursor-pointer animate-fade-in"
                        >
                          Առաջ անցնել
                        </button>
                      )}
                    </div>
                  );
                })()}

                {/* ------------------------------------------------------------------ */}
                {/* GAME 4: SI CLAUSES CHAIN */}
                {/* ------------------------------------------------------------------ */}
                {selectedGameId === 4 && (() => {
                  const challenge = GAME4_CHALLENGES[currentIdx];
                  if (!challenge) return null;
                  return (
                    <div className="space-y-6 animate-fade-in">
                      {renderProgress(GAME4_CHALLENGES.length)}

                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-1.5 shadow-2xs">
                        <span className="text-[10px] bg-indigo-600 text-white px-2.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider font-sans">
                          Պայմանական նախադասություն (Si Clause)
                        </span>
                        <div className="text-lg md:text-xl font-mono font-extrabold text-slate-800 pt-0.5">
                          {challenge.siClause} <span className="text-indigo-600 decoration-dotted underline">_______</span>
                        </div>
                        <p className="text-xs text-slate-400 font-sans leading-none pt-0.5">
                          (Իմաստը՝ <strong>«{challenge.siMeaning}, ...»</strong>)
                        </p>
                      </div>

                      {/* Options */}
                      <div className="space-y-2.5">
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block text-center font-sans">Ընտրիր նախադասությունը լրացնող ճիշտ տարբերակը՝</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {challenge.thenClauseOptions.map((opt, idx) => {
                            const isCorrectOpt = opt === challenge.correctThenClause;
                            const isThisChosen = selectedOption === opt;
                            return (
                              <button
                                key={idx}
                                onClick={() => handleGame4Submit(opt, challenge.correctThenClause)}
                                className={`p-4 rounded-xl border text-center font-mono text-xs font-bold transition-all ${
                                  isSelected
                                    ? isCorrectOpt
                                      ? 'bg-indigo-50/60 border-indigo-350 text-indigo-950 shadow-2xs'
                                      : isThisChosen
                                        ? 'bg-red-50/50 border-red-350 text-red-950'
                                        : 'bg-slate-50 text-slate-350 border-slate-150'
                                    : 'bg-white text-slate-700 border-slate-205 hover:border-indigo-400 hover:bg-slate-50/10'
                                }`}
                                disabled={isSelected}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Feedback screen */}
                      {isSelected && (
                        <div className="space-y-4 animate-fade-in">
                          <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                            isCorrect ? 'bg-indigo-50/50 border-indigo-200 text-indigo-950' : 'bg-red-50/50 border-red-200 text-red-950'
                          }`}>
                            <span className="mt-0.5">
                              {isCorrect ? <CheckCircle2 className="w-5 h-5 text-indigo-600" /> : <XCircle className="w-5 h-5 text-red-500" />}
                            </span>
                            <div className="space-y-1 text-xs">
                              <h5 className="font-display font-extrabold text-[11px] uppercase tracking-tight">{isCorrect ? "Ճիշտ է կազմված:" : "Սխալ ժամանակաձև:"}</h5>
                              <p className="font-semibold text-slate-650 font-sans">
                                Ամբողջական նախադասությունը՝
                              </p>
                              <p className="font-mono font-bold text-indigo-950 pt-0.5 leading-relaxed bg-white/60 p-2 rounded-lg border border-slate-100">
                                {challenge.translation}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => handleNext(GAME4_CHALLENGES.length)}
                            className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-2xl hover:bg-indigo-650 transition-colors cursor-pointer"
                          >
                            Առաջ անցնել
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* ------------------------------------------------------------------ */}
                {/* GAME 5: RETRO SPECULATIONS */}
                {/* ------------------------------------------------------------------ */}
                {selectedGameId === 5 && (() => {
                  const challenge = GAME5_CHALLENGES[currentIdx];
                  if (!challenge) return null;
                  return (
                    <div className="space-y-6 animate-fade-in">
                      {renderProgress(GAME5_CHALLENGES.length)}

                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-1.5 shadow-2xs">
                        <span className="text-[10px] bg-indigo-600 text-white px-2.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider font-sans">
                          Իրավիճակ (Situación)
                        </span>
                        <div className="text-base font-sans font-bold text-[#2a2c4e] leading-relaxed">
                          «{challenge.situation}»
                        </div>
                        <p className="text-xs text-slate-400 font-mono pt-0.5">
                          ({challenge.meaning})
                        </p>
                      </div>

                      {/* Options */}
                      <div className="space-y-2.5">
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block text-center font-sans">Ընտրիր անցյալի մասին ենթադրության լավագույն ձևը՝</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {challenge.options.map((opt, idx) => {
                            const isCorrectOpt = opt === challenge.correctSpeculation;
                            const isThisChosen = selectedOption === opt;
                            return (
                              <button
                                key={idx}
                                onClick={() => handleGame5Submit(opt, challenge.correctSpeculation)}
                                className={`p-4 rounded-xl border text-center font-mono text-xs font-bold transition-all ${
                                  isSelected
                                    ? isCorrectOpt
                                      ? 'bg-indigo-50/50 border-indigo-350 text-indigo-950 shadow-2xs'
                                      : isThisChosen
                                        ? 'bg-red-50/50 border-red-350 text-red-950'
                                        : 'bg-slate-50 text-slate-350 border-slate-150'
                                    : 'bg-white text-slate-700 border-slate-205 hover:border-indigo-400 hover:bg-slate-50/10'
                                }`}
                                disabled={isSelected}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Feedback Screen */}
                      {isSelected && (
                        <div className="space-y-4 animate-fade-in">
                          <div className={`p-4 rounded-2xl border flex items-start gap-4 ${
                            isCorrect ? 'bg-indigo-50/50 border-indigo-200 text-indigo-950' : 'bg-red-50/50 border-red-200 text-red-950'
                          }`}>
                            <span className="mt-1">
                              {isCorrect ? <CheckCircle2 className="w-5 h-5 text-indigo-600" /> : <XCircle className="w-5 h-5 text-red-500" />}
                            </span>
                            <div className="space-y-1">
                              <h5 className="font-display font-extrabold text-xs uppercase tracking-tight">{isCorrect ? "Անթերի ենթադրություն է:" : "Սխալ ընտրություն:"}</h5>
                              <p className="text-xs font-semibold">
                                Ճիշտ կանխատեսումն է՝
                              </p>
                              <p className="text-sm font-mono font-bold text-indigo-950 leading-relaxed pt-0.5">
                                {challenge.correctSpeculation}
                              </p>
                              <p className="text-[11px] text-slate-500 pt-1.5 font-sans border-t border-slate-200/50 mt-1">
                                <strong>Քերականական կանոն՝</strong> {challenge.explanation}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => handleNext(GAME5_CHALLENGES.length)}
                            className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-2xl hover:bg-indigo-650 transition-colors cursor-pointer"
                          >
                            Առաջ անցնել
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* ------------------------------------------------------------------ */}
                {/* GAME 6: SIMPLE VS COMPUESTO DUEL */}
                {/* ------------------------------------------------------------------ */}
                {selectedGameId === 6 && (() => {
                  const challenge = GAME6_CHALLENGES[currentIdx];
                  if (!challenge) return null;
                  return (
                    <div className="space-y-6 animate-fade-in">
                      {renderProgress(GAME6_CHALLENGES.length)}

                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-2.5 shadow-2xs">
                        <span className="text-[10px] bg-indigo-600 text-white px-2.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider font-sans">
                          Իրավիճակի վերլուծություն
                        </span>
                        <div className="text-lg md:text-xl font-mono font-extrabold text-slate-800">
                          {challenge.phrase}
                        </div>
                        <p className="text-xs text-slate-500 font-sans leading-relaxed">
                          (Իմաստը՝ <strong>«{challenge.situation}»</strong>)
                        </p>
                      </div>

                      {/* Buckets Dual Selection */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          onClick={() => handleGame6Submit('simple', challenge.type)}
                          className={`p-6 rounded-2xl border text-center transition-all ${
                            isSelected
                              ? challenge.type === 'simple'
                                ? 'bg-indigo-50/50 border-indigo-305 text-indigo-950 shadow-2xs'
                                : selectedOption === 'simple'
                                  ? 'bg-red-50/50 border-red-300 text-red-950 shadow-inner'
                                  : 'bg-slate-50 text-slate-300 border-slate-100'
                              : 'bg-white border-slate-200 hover:border-indigo-400 hover:bg-slate-50/20 cursor-pointer'
                          }`}
                          disabled={isSelected}
                        >
                          <span className="font-display font-extrabold text-sm block">Condicional Simple</span>
                          <span className="text-[10px] text-slate-400 block mt-1">(Պարզ պայմանական - Ներկա/Ապագա)</span>
                        </button>

                        <button
                          onClick={() => handleGame6Submit('compuesto', challenge.type)}
                          className={`p-6 rounded-2xl border text-center transition-all ${
                            isSelected
                              ? challenge.type === 'compuesto'
                                ? 'bg-indigo-50/50 border-indigo-350 text-indigo-950 shadow-2xs'
                                : selectedOption === 'compuesto'
                                  ? 'bg-red-50/50 border-red-300 text-red-950'
                                  : 'bg-slate-50 text-slate-350 border-slate-100'
                              : 'bg-white border-slate-205 hover:border-indigo-405 hover:bg-slate-50/20 cursor-pointer'
                          }`}
                          disabled={isSelected}
                        >
                          <span className="font-display font-extrabold text-sm block">Condicional Compuesto</span>
                          <span className="text-[10px] text-slate-400 block mt-1">(Բարդ պայմանական - Անցյալ)</span>
                        </button>
                      </div>

                      {/* Explanation Feedback screen */}
                      {isSelected && (
                        <div className="space-y-4 animate-fade-in">
                          <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                            isCorrect ? 'bg-indigo-50/50 border-indigo-200 text-indigo-950' : 'bg-red-50/50 border-red-200 text-red-950'
                          }`}>
                            <span className="mt-0.5">
                              {isCorrect ? <CheckCircle2 className="w-5 h-5 text-indigo-600" /> : <XCircle className="w-5 h-5 text-red-550" />}
                            </span>
                            <div className="space-y-1">
                              <h5 className="font-display font-extrabold text-xs uppercase tracking-tight">{game6BucketFeedback}</h5>
                              <p className="text-xs">
                                Տեսակը՝ <strong className="font-mono text-xs inline-block px-2.5 py-0.5 rounded bg-white text-indigo-950 border border-slate-200">{challenge.type === 'simple' ? 'Condicional Simple' : 'Condicional Compuesto'}</strong>
                              </p>
                              <p className="text-xs text-slate-500 font-sans pt-1">
                                <strong>Բացատրություն՝</strong> {challenge.explanation}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => handleNext(GAME6_CHALLENGES.length)}
                            className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-2xl hover:bg-slate-800 transition-colors cursor-pointer"
                          >
                            Առաջ անցնել
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()}

              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
