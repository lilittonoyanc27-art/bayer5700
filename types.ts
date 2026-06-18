export interface Conjugation {
  pronoun: string;
  armenianPronoun: string;
  form: string;
}

export interface VerbData {
  infinitivo: string;
  meaning: string;
  stem?: string; // For irregular verbs, e.g. "dir-"
  conjugations: Conjugation[];
  examples: {
    spanish: string;
    armenian: string;
  }[];
}

export interface UseCaseData {
  title: string;
  description: string;
  formula?: string;
  examples: {
    spanish: string;
    armenian: string;
    context?: string;
  }[];
}

export interface IrregularVerbData {
  infinitivo: string;
  stem: string;
  example: string;
  meaning: string;
  conjugations: Conjugation[];
}

export interface DialogueExample {
  title: string;
  phrases: {
    spanish: string;
    armenian: string;
    role?: string;
  }[];
}

// Game types
export interface QuizQuestion {
  id: number;
  prompt: string;
  context?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface ConjugationChallenge {
  id: number;
  verb: string;
  meaning: string;
  pronoun: string;
  armenianPronoun: string;
  baseStem: string;
  correctEnding: string;
}

export interface PoliteTransformationChallenge {
  id: number;
  directPhrase: string;
  directMeaning: string;
  politePhrase: string;
  politeExplanation: string;
  parts: string[]; // for building the sentence
}

export interface AdviceChallenge {
  id: number;
  problem: string;
  meaning: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface ConditionalClauseChallenge {
  id: number;
  siClause: string;
  siMeaning: string;
  thenClauseOptions: string[];
  correctThenClause: string;
  translation: string;
}

export interface SpeculationChallenge {
  id: number;
  situation: string;
  meaning: string;
  correctSpeculation: string;
  options: string[];
  explanation: string;
}

export interface SimpleCompuestoChallenge {
  id: number;
  phrase: string;
  situation: string;
  type: 'simple' | 'compuesto';
  explanation: string;
}
