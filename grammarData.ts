import { VerbData, UseCaseData, IrregularVerbData, DialogueExample, SimpleCompuestoChallenge } from './types';

export const INTRO_TEXT = {
  title: "CONDICIONAL — պայմանական եղանակ իսպաներենում",
  description: "Condicional նշանակում է՝ կանեի, կգնայի, կուզենայի, կլիներ, կարող էի։ Իսպաներենում Condicional-ը շատ է օգտագործվում՝",
  bullets: [
    "քաղաքավարի խնդրանքի համար",
    "ցանկություն արտահայտելու համար",
    "խորհուրդ տալու համար",
    "պայմանով գործողություն ասելու համար",
    "ենթադրություն անելու համար"
  ],
  examples: [
    { spanish: "Me gustaría ir a España.", armenian: "Ես կցանկանայի գնալ Իսպանիա։" },
    { spanish: "¿Podrías ayudarme?", armenian: "Կկարողանայի՞ր ինձ օգնել։" },
    { spanish: "Yo compraría este vestido.", armenian: "Ես կգնեի այս զգեստը։" }
  ]
};

export const ENDINGS_TABLE = {
  title: "1. Condicional Simple — պարզ պայմանական",
  rule: "Կազմվում է շատ հեշտ։ Վերցնում ենք բայի ամբողջ infinitivo-ն և ավելացնում վերջավորությունները։ Վերջավորությունները նույնն են բոլոր բայերի համար՝ -AR, -ER, -IR։",
  examples: "hablar → hablaría | comer → comería | vivir → viviría",
  endings: [
    { pronoun: "yo", ending: "-ía", example: "hablaría" },
    { pronoun: "tú", ending: "-ías", example: "hablarías" },
    { pronoun: "él/ella/usted", ending: "-ía", example: "hablaría" },
    { pronoun: "nosotros/as", ending: "-íamos", example: "hablaríamos" },
    { pronoun: "vosotros/as", ending: "-íais", example: "hablaríais" },
    { pronoun: "ellos/ellas/ustedes", ending: "-ían", example: "hablarían" }
  ]
};

export const REGULAR_VERBS: VerbData[] = [
  {
    infinitivo: "Hablar",
    meaning: "խոսել",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "hablaría" },
      { pronoun: "tú", armenianPronoun: "դու", form: "hablarías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա/Դուք", form: "hablaría" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "hablaríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "hablaríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք/Դուք", form: "hablarían" }
    ],
    examples: [
      { spanish: "Yo hablaría con ella.", armenian: "Ես կխոսեի նրա հետ։" },
      { spanish: "¿Hablarías con el profesor?", armenian: "Կխոսեի՞ր ուսուցչի հետ։" },
      { spanish: "Ellos hablarían más, pero no tienen tiempo.", armenian: "Նրանք ավելի շատ կխոսեին, բայց ժամանակ չունեն։" }
    ]
  },
  {
    infinitivo: "Comer",
    meaning: "ուտել",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "comería" },
      { pronoun: "tú", armenianPronoun: "դու", form: "comerías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա/Դուք", form: "comería" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "comeríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "comeríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք/Դուք", form: "comerían" }
    ],
    examples: [
      { spanish: "Yo comería paella.", armenian: "Ես պաեյա կուտեի։" },
      { spanish: "¿Comerías pescado?", armenian: "Ձուկ կուտեի՞ր։" },
      { spanish: "Nosotros comeríamos en este restaurante.", armenian: "Մենք կուտեինք այս ռեստորանում։" }
    ]
  },
  {
    infinitivo: "Vivir",
    meaning: "ապրել",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "viviría" },
      { pronoun: "tú", armenianPronoun: "դու", form: "vivirías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա/Դուք", form: "viviría" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "viviríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "viviríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք/Դուք", form: "vivirían" }
    ],
    examples: [
      { spanish: "Yo viviría en Madrid.", armenian: "Ես կապրեի Մադրիդում։" },
      { spanish: "¿Vivirías en España?", armenian: "Կապրեի՞ր Իսպանիայում։" },
      { spanish: "Ellos vivirían cerca del mar.", armenian: "Նրանք կապրեին ծովի մոտ։" }
    ]
  }
];

export const USE_CASES: UseCaseData[] = [
  {
    title: "1. Քաղաքավարի խնդրանք (Polite Request)",
    description: "Condicional-ը շատ քաղաքավարի է հնչում։ Համեմատիր՝",
    examples: [
      { spanish: "Quiero agua.", armenian: "Ես ջուր եմ ուզում։", context: "ուղիղ" },
      { spanish: "Querría agua, por favor.", armenian: "Ես ջուր կցանկանայի, խնդրում եմ։", context: "քաղաքավարի" },
      { spanish: "¿Puedes ayudarme?", armenian: "Կարո՞ղ ես ինձ օգնել։", context: "ուղիղ" },
      { spanish: "¿Podrías ayudarme?", armenian: "Կկարողանայի՞ր ինձ օգնել։", context: "ավելի քաղաքավարի" },
      { spanish: "¿Podría repetir, por favor?", armenian: "Կկարողանայի՞ք կրկնել, խնդրում եմ։" },
      { spanish: "¿Me podría traer la cuenta?", armenian: "Կկարողանայի՞ք ինձ հաշիվը բերել։" },
      { spanish: "¿Podrías abrir la ventana?", armenian: "Կկարողանայի՞ր բացել պատուհանը։" }
    ]
  },
  {
    title: "2. Ցանկություն (Desire)",
    description: "Շատ հաճախ օգտագործվում է gustaría բառը։\nMe gusta — ինձ դուր է գալիս\nMe gustaría — ես կցանկանայի",
    examples: [
      { spanish: "Me gustaría aprender español.", armenian: "Ես կցանկանայի սովորել իսպաներեն։" },
      { spanish: "Me gustaría viajar a Barcelona.", armenian: "Ես կցանկանայի ճանապարհորդել Բարսելոնա։" },
      { spanish: "Nos gustaría comprar una casa.", armenian: "Մենք կցանկանայինք տուն գնել։" },
      { spanish: "¿Te gustaría tomar café?", armenian: "Կցանկանայի՞ր սուրճ խմել։" }
    ]
  },
  {
    title: "3. Խորհուրդ տալ (Giving Advice)",
    description: "Condicional-ը օգտագործվում է, երբ ուզում ենք խորհուրդ տալ։",
    examples: [
      { spanish: "Yo estudiaría más.", armenian: "Ես ավելի շատ կսովորեի։ (քո տեղը)" },
      { spanish: "Deberías descansar.", armenian: "Դու պետք է հանգստանայիր / լավ կլիներ հանգստանաս։" },
      { spanish: "Yo iría al médico.", armenian: "Ես բժշկի կգնայի։" },
      { spanish: "Deberías beber más agua.", armenian: "Դու պետք է ավելի շատ ջուր խմես։" },
      { spanish: "Deberías practicar todos los days.", armenian: "Դու պետք է ամեն օր պարապես։" },
      { spanish: "Yo no compraría eso.", armenian: "Ես դա չէի գնի։" }
    ]
  },
  {
    title: "4. Պայմանով գործողություն (Conditional Situations)",
    description: "Երբ ասում ենք՝ եթե լիներ..., կանեի...\nԱյս կառուցվածքում շատ հաճախ լինում է՝ Si + Imperfecto de Subjuntivo + Condicional",
    examples: [
      { spanish: "Si tuviera dinero, viajaría a España.", armenian: "Եթե փող ունենայի, կճանապարհորդեի Իսպանիա։" },
      { spanish: "Si tuviera tiempo, estudiaría más.", armenian: "Եթե ժամանակ ունենայի, ավելի շատ կսովորեի։" },
      { spanish: "Si viviera en Madrid, iría al museo.", armenian: "Եթե ապրեի Մադրիդում, կգնայի թանգարան։" },
      { spanish: "Si fuera rica, compraría una casa grande.", armenian: "Եթե հարուստ լինեի, մեծ տուն կգնեի։" },
      { spanish: "Si supiera la respuesta, te la diría.", armenian: "Եթե պատասխանը իմանայի, քեզ կասեի։" }
    ]
  },
  {
    title: "5. Ենթադրություն անցյալի մասին (Estimation/Speculation)",
    description: "Condicional-ը կարող է օգտագործվել նաև, երբ անցյալի մասին ենթադրություն ենք անում։",
    examples: [
      { spanish: "Serían las ocho.", armenian: "Երևի ժամը ութն էր։" },
      { spanish: "Tendría unos veinte años.", armenian: "Երևի մոտ քսան տարեկան էր։" },
      { spanish: "Habría mucha gente.", armenian: "Երևի շատ մարդ կար։" }
    ]
  }
];

export const IRREGULAR_VERBS_STEMS = [
  { infinitivo: "decir", stem: "dir-", example: "diría", meaning: "ասել" },
  { infinitivo: "hacer", stem: "har-", example: "haría", meaning: "անել" },
  { infinitivo: "poder", stem: "podr-", example: "podría", meaning: "կարողանալ" },
  { infinitivo: "poner", stem: "pondr-", example: "pondría", meaning: "դնել" },
  { infinitivo: "tener", stem: "tendr-", example: "tendría", meaning: "ունենալ" },
  { infinitivo: "venir", stem: "vendr-", example: "vendría", meaning: "գալ" },
  { infinitivo: "salir", stem: "saldr-", example: "saldría", meaning: "դուրս գալ" },
  { infinitivo: "saber", stem: "sabr-", example: "sabría", meaning: "իմանալ" },
  { infinitivo: "querer", stem: "querr-", example: "querría", meaning: "ուզել" },
  { infinitivo: "haber", stem: "habr-", example: "habría", meaning: "լինել / օժանդակ բայ" }
];

export const IRREGULAR_VERBS: IrregularVerbData[] = [
  {
    infinitivo: "Decir",
    stem: "dir-",
    meaning: "ասել",
    example: "Yo diría la verdad. (Ես ճշմարտությունը կասեի։)",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "diría" },
      { pronoun: "tú", armenianPronoun: "դու", form: "dirías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա", form: "diría" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "diríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "diríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք", form: "dirían" }
    ]
  },
  {
    infinitivo: "Hacer",
    stem: "har-",
    meaning: "անել",
    example: "Yo haría este trabajo. (Ես այս աշխատանքը կանեի։)",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "haría" },
      { pronoun: "tú", armenianPronoun: "դու", form: "harías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա", form: "haría" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "haríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "haríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք", form: "harían" }
    ]
  },
  {
    infinitivo: "Poder",
    stem: "podr-",
    meaning: "կարողանալ",
    example: "¿Podrías ayudarme? (Կկարողանայի՞ր ինձ օգնել։)",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "podría" },
      { pronoun: "tú", armenianPronoun: "դու", form: "podrías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա", form: "podría" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "podríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "podríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք", form: "podrían" }
    ]
  },
  {
    infinitivo: "Poner",
    stem: "pondr-",
    meaning: "դնել",
    example: "Yo pondría el libro aquí. (Ես գիրքը այստեղ կդնեի։)",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "pondría" },
      { pronoun: "tú", armenianPronoun: "դու", form: "pondrías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա", form: "pondría" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "pondríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "pondríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք", form: "pondrían" }
    ]
  },
  {
    infinitivo: "Tener",
    stem: "tendr-",
    meaning: "ունենալ",
    example: "Tendría más tiempo. (Ես ավելի շատ ժամանակ կունենայի։)",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "tendría" },
      { pronoun: "tú", armenianPronoun: "դու", form: "tendrías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա", form: "tendría" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "tendríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "tendríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք", form: "tendrían" }
    ]
  },
  {
    infinitivo: "Venir",
    stem: "vendr-",
    meaning: "գալ",
    example: "Yo vendría contigo. (Ես քեզ հետ կգայի։)",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "vendría" },
      { pronoun: "tú", armenianPronoun: "դու", form: "vendrías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա", form: "vendría" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "vendríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "vendríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք", form: "vendrían" }
    ]
  },
  {
    infinitivo: "Salir",
    stem: "saldr-",
    meaning: "դուրս գալ",
    example: "Yo saldría más temprano. (Ես ավելի շուտ դուրս կգայի։)",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "saldría" },
      { pronoun: "tú", armenianPronoun: "դու", form: "saldrías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա", form: "saldría" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "saldríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "saldríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք", form: "saldrían" }
    ]
  },
  {
    infinitivo: "Saber",
    stem: "sabr-",
    meaning: "իմանալ",
    example: "No sabría qué decir. (Չէի իմանա՝ ինչ ասել։)",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "sabría" },
      { pronoun: "tú", armenianPronoun: "դու", form: "sabrías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա", form: "sabría" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "sabríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "sabríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք", form: "sabrían" }
    ]
  },
  {
    infinitivo: "Querer",
    stem: "querr-",
    meaning: "ուզել",
    example: "Querría hablar con usted. (Կցանկանայի խոսել Ձեզ հետ։)",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "querría" },
      { pronoun: "tú", armenianPronoun: "դու", form: "querrías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա", form: "querría" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "querríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "querríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք", form: "querrían" }
    ]
  },
  {
    infinitivo: "Haber",
    stem: "habr-",
    meaning: "լինել / օժանդակ բայ",
    example: "Habría más personas. (Երևի ավելի շատ մարդիկ կլինեին։)",
    conjugations: [
      { pronoun: "yo", armenianPronoun: "ես", form: "habría" },
      { pronoun: "tú", armenianPronoun: "դու", form: "habrías" },
      { pronoun: "él/ella/usted", armenianPronoun: "նա", form: "habría" },
      { pronoun: "nosotros/as", armenianPronoun: "մենք", form: "habríamos" },
      { pronoun: "vosotros/as", armenianPronoun: "դուք", form: "habríais" },
      { pronoun: "ellos/ellas/ustedes", armenianPronoun: "նրանք", form: "habrían" }
    ]
  }
];

export const COMPUESTO_CONTENT = {
  title: "8. Condicional Compuesto — բարդ պայմանական",
  formation: "Կազմվում է՝ haber Condicional + participio",
  tableTitle: "Haber-ի խոնարհումը Condicional-ում՝",
  conjugations: [
    { pronoun: "yo", form: "habría" },
    { pronoun: "tú", form: "habrías" },
    { pronoun: "él/ella/usted", form: "habría" },
    { pronoun: "nosotros/as", form: "habríamos" },
    { pronoun: "vosotros/as", form: "habríais" },
    { pronoun: "ellos/ellas/ustedes", form: "habrían" }
  ],
  examplesTitle: "Օրինակներ՝",
  examplesList: [
    { span: "habría hablado", arm: "կխոսեի / խոսած կլինեի" },
    { span: "habría comido", arm: "կուտեի / կերած կլինեի" },
    { span: "habría vivido", arm: "կապրեի / ապրած կլինեի" }
  ],
  sentences: [
    { spanish: "Yo habría ido, pero no tenía tiempo.", armenian: "Ես կգնայի, բայց ժամանակ չունեի։" },
    { spanish: "Habríamos comprado la casa, pero era muy cara.", armenian: "Մենք տունը կգնեինք, բայց այն շատ թանկ էր։" },
    { spanish: "Ella habría venido, pero estaba enferma.", armenian: "Նա կգար, բայց հիվանդ էր։" }
  ]
};

export const COMPARISON_SIMPLE_COMPUESTO = {
  title: "9. Condicional Simple և Condicional Compuesto տարբերությունը",
  simple: {
    title: "Condicional Simple",
    desc: "Գործողությունը ընդհանուր կամ ապագայի/ներկայի պայմանական իմաստ ունի։",
    example: { spanish: "Yo compraría este coche.", armenian: "Ես այս մեքենան կգնեի։", extra: "Այսինքն՝ եթե հնարավորություն լիներ, կգնեի (ներկայում/ապագայում)։" }
  },
  compuesto: {
    title: "Condicional Compuesto",
    desc: "Գործողությունը անցյալում չկատարված բան է։",
    example: { spanish: "Yo habría comprado este coche.", armenian: "Ես այս մեքենան կգնեի / գնած կլինեի։", extra: "Այսինքն՝ անցյալում հնարավորություն կար, բայց չգնեցի (անցյալում կորսված հնարավորություն)։" }
  },
  sideBySide: [
    {
      spanish: "Si tuviera dinero, compraría una casa.",
      armenian: "Եթե փող ունենայի, տուն կգնեի։",
      explanation: "Si + Imperfecto Subjuntivo + Condicional Simple (Ներկայի հիպոթետիկ պայման)"
    },
    {
      spanish: "Si hubiera tenido dinero, habría comprado una casa.",
      armenian: "Եթե փող ունեցած լինեի, տուն կգնեի / գնած կլինեի։",
      explanation: "Si + Pluscuamperfecto Subjuntivo + Condicional Compuesto (Անցյալի անիրական պայման)"
    }
  ]
};

export const COMPARISON_FUTURO = {
  title: "10. Condicional և Futuro տարբերությունը",
  futuro: {
    title: "Futuro",
    example: "Iré a España. (Ես կգնամ Իսպանիա։)",
    desc: "Այստեղ խոսողը վստահ խոսում է ապագայի մասին։"
  },
  condicional: {
    title: "Condicional",
    example: "Iría a España. (Ես կգնայի Իսպանիա։)",
    desc: "Այստեղ կա պայման, ցանկություն կամ ենթադրություն։",
    extra: "Iría a España si tuviera dinero. (Ես կգնայի Իսպանիա, եթե փող ունենայի։)"
  }
};

export const USEFUL_PHRASES = [
  { spanish: "Me gustaría...", armenian: "Ես կցանկանայի...", example: "Me gustaría tomar café. (Ես կցանկանայի սուրճ խմել։)" },
  { spanish: "Podría...", armenian: "Կկարողանայի / կարող էր...", example: "¿Podría ayudarme? (Կկարողանայի՞ք ինձ օգնել։)" },
  { spanish: "Deberías...", armenian: "Դու պետք է / լավ կլիներ, որ...", example: "Deberías descansar. (Դու պետք է հանգստանաս։)" },
  { spanish: "Querría...", armenian: "Կցանկանայի...", example: "Querría reservar una mesa. (Կցանկանայի սեղան ամրագրել։)" },
  { spanish: "Sería mejor...", armenian: "Ավելի լավ կլիներ...", example: "Sería mejor salir temprano. (Ավելի լավ կլիներ շուտ դուրս գալ։)" },
  { spanish: "Yo en tu lugar...", armenian: "Ես քո տեղը...", example: "Yo en tu lugar iría al médico. (Ես քո տեղը բժշկի կգնայի։)" }
];

export const DIALOGUES: DialogueExample[] = [
  {
    title: "Ռեստորանում (En el restaurante)",
    phrases: [
      { spanish: "Me gustaría una mesa para dos.", armenian: "Ես կցանկանայի սեղան երկուսի համար։" },
      { spanish: "¿Podría traerme el menú?", armenian: "Կկարողանայի՞ք բերել ճաշացանկը։" },
      { spanish: "Querría agua sin gas.", armenian: "Կցանկանայի ջուր առանց գազի։" },
      { spanish: "¿Me podría traer la cuenta?", armenian: "Կբերեի՞ք հաշիվը։" }
    ]
  },
  {
    title: "Խանութում (En la tienda)",
    phrases: [
      { spanish: "Me gustaría probarme este vestido.", armenian: "Ես կցանկանայի փորձել այս զգեստը։" },
      { spanish: "¿Podría darme otra talla?", armenian: "Կկարողանայի՞ք տալ ուրիշ չափս։" },
      { spanish: "Yo compraría este bolso.", armenian: "Ես այս պայուսակը կգնեի։" }
    ]
  },
  {
    title: "Ճանապարհորդության ժամանակ (De viaje)",
    phrases: [
      { spanish: "Me gustaría visitar Madrid.", armenian: "Ես կցանկանայի այցելել Մադրիդ։" },
      { spanish: "¿Podría decirme dónde está la estación?", armenian: "Կկարողանայի՞ք ասել՝ որտեղ է կայարանը։" },
      { spanish: "Querríamos reservar una habitación.", armenian: "Մենք կցանկանայինք սենյակ ամրագրել։" }
    ]
  }
];

export const CONDITIONAL_STRUCTURES = [
  {
    title: "Եթե ունենայի..., կանեի... (Si tuviera..., haría...)",
    examples: [
      { spanish: "Si tuviera tiempo, estudiaría español.", armenian: "Եթե ժամանակ ունենայի, իսպաներեն կսովորեի։" },
      { spanish: "Si fuera posible, viajaríamos mañana.", armenian: "Եթե հնարավոր լիներ, մենք վաղը կճանապարհորդեինք։" },
      { spanish: "Si supiera cocinar, prepararía paella.", armenian: "Եթե պատրաստել իմանայի, պաեյա կպատրաստեի։" }
    ]
  },
  {
    title: "Եթե արած լինեի..., կանեի / արած կլինեի... (Si hubiera hecho..., habría hecho...)",
    examples: [
      { spanish: "Si hubiera estudiado más, habría aprobado el examen.", armenian: "Եթե ավելի շատ սովորած լինեի, քննությունը կհանձնեի։" },
      { spanish: "Si me hubieras llamado, habría venido.", armenian: "Եթե ինձ զանգած լինեիր, կգայի։" },
      { spanish: "Si hubiéramos salido antes, habríamos llegado a tiempo.", armenian: "Եթե ավելի շուտ դուրս եկած լինեինք, ժամանակին կհասնեինք։" }
    ]
  }
];

export const MINI_EXERCISES = [
  { q: "1. Ես կցանկանայի սուրճ։", a: "Me gustaría un café." },
  { q: "2. Կկարողանայի՞ք ինձ օգնել։", a: "¿Podría ayudarme?" },
  { q: "3. Ես կգնայի Իսպանիա։", a: "Yo iría a España." },
  { q: "4. Դու պետք է ավելի շատ սովորես։", a: "Deberías estudiar más." },
  { q: "5. Եթե ժամանակ ունենայի, կգայի։", a: "Si tuviera tiempo, vendría." },
  { q: "6. Եթե փող ունենայինք, տուն կգնեինք։", a: "Si tuviéramos dinero, compraríamos una casa." },
  { q: "7. Ես դա չէի անի։", a: "Yo no haría eso." },
  { q: "8. Նա ճշմարտությունը կասեր։", a: "Él diría la verdad. / Ella diría la verdad." },
  { q: "9. Մենք կցանկանայինք սենյակ ամրագրել։", a: "Querríamos reservar una habitación." },
  { q: "10. Եթե սովորած լինեի, քննությունը կհանձնեի։", a: "Si hubiera estudiado, habría aprobado el examen." }
];

// --- CHALLENGE DATA FOR THE 6 GAMES ---

// Game 1: Conjugation Builder - select pronoun/verb block, connect the parts!
export const GAME1_CHALLENGES = [
  { id: 1, verb: "hablar", meaning: "խոսել", pronoun: "nosotros/as", armenianPronoun: "մենք", stem: "hablar", ending: "íamos", correct: "hablaríamos" },
  { id: 2, verb: "comer", meaning: "ուտել", pronoun: "tú", armenianPronoun: "դու", stem: "comer", ending: "ías", correct: "comerías" },
  { id: 3, verb: "vivir", meaning: "ապրել", pronoun: "ellos/ellas", armenianPronoun: "նրանք", stem: "vivir", ending: "ían", correct: "vivirían" },
  { id: 4, verb: "tener", meaning: "ունենալ", pronoun: "yo", armenianPronoun: "ես", stem: "tendr", ending: "ía", correct: "tendría", isIrregular: true },
  { id: 5, verb: "hacer", meaning: "անել", pronoun: "él/ella", armenianPronoun: "նա", stem: "har", ending: "ía", correct: "haría", isIrregular: true },
  { id: 6, verb: "decir", meaning: "ասել", pronoun: "nosotros/as", armenianPronoun: "մենք", stem: "dir", ending: "íamos", correct: "diríamos", isIrregular: true },
  { id: 7, verb: "poder", meaning: "կարողանալ", pronoun: "tú", armenianPronoun: "դու", stem: "podr", ending: "ías", correct: "podrías", isIrregular: true },
  { id: 8, verb: "querer", meaning: "ուզել", pronoun: "yo", armenianPronoun: "ես", stem: "querr", ending: "ía", correct: "querría", isIrregular: true }
];

// Game 2: Polite requests - transforming direct phrases to conditional ones
export const GAME2_CHALLENGES = [
  {
    id: 1,
    directPhrase: "Quiero agua.",
    directMeaning: "ես ջուր եմ ուզում (ուղիղ / չոր)",
    politePhrase: "Querría agua, por favor.",
    politeExplanation: "Querría-ն (querer բայի պայմանականը) դարձնում է խնդրանքը չափազանց քաղաքավարի։",
    parts: ["Querría", "agua,", "por", "favor."],
    options: ["Querría", "Quiero", "agua,", "por", "favor.", "gustaría"]
  },
  {
    id: 2,
    directPhrase: "¿Puedes ayudarme?",
    directMeaning: "Կարո՞ղ ես ինձ օգնել",
    politePhrase: "¿Podrías ayudarme?",
    politeExplanation: "Podrías-ը (poder բայի պայմանականը) ավելի նուրբ և քաղաքավարի է, քան սովորական ներկան (Puedes)։",
    parts: ["¿Podrías", "ayudarme?"],
    options: ["¿Podrías", "¿Puedes", "¿Podría", "ayudarme?", "ayuda"]
  },
  {
    id: 3,
    directPhrase: "Tráeme la cuenta.",
    directMeaning: "Բե՛ր ինձ հաշիվը (հրամայական / կոպիտ)",
    politePhrase: "¿Me podría traer la cuenta?",
    politeExplanation: "Me podría traer-ը («կկարողանայի՞ք ինձ բերել») ամենանուրբ տարբերակն է հաշիվ խնդրելիս։",
    parts: ["¿Me", "podría", "traer", "la", "cuenta?"],
    options: ["¿Me", "podría", "traer", "la", "cuenta?", "tráeme", "puedes"]
  },
  {
    id: 4,
    directPhrase: "Quiero probarme este vestido.",
    directMeaning: "Ուզում եմ չափսափորձել այս զգեստը։",
    politePhrase: "Me gustaría probarme este vestido.",
    politeExplanation: "Me gustaría («ես կցանկանայի») արտահայտում է ցանկությունը շատ քաղաքավարի։",
    parts: ["Me", "gustaría", "probarme", "este", "vestido."],
    options: ["Me", "gustaría", "probarme", "este", "vestido.", "Quiero", "gusta"]
  }
];

// Game 3: Advice (Yo en tu lugar..., Deberías...)
export const GAME3_CHALLENGES = [
  {
    id: 1,
    problem: "Շատ հոգնած եմ, բայց չեմ կարողանում քնել։",
    meaning: "Estoy muy cansado pero no puedo dormir.",
    options: [
      { text: "Deberías descansar y tomar un té.", isCorrect: true, explanation: "Deberías descansar - դու պետք է հանգստանայիր (լավ կլիներ հանգստանաս) + ճիշտ խորհուրդ։" },
      { text: "Yo en tu lugar bebería más café.", isCorrect: false, explanation: "Bebería café («սուրճ կխմեի») վատ խորհուրդ է հոգնած կամ անքնությամբ տառապող մարդուն։" },
      { text: "Yo estudiaría más.", isCorrect: false, explanation: "Estudiaría más («ավելի շատ կսովորեի») կապ չունի անքնության հետ։" }
    ]
  },
  {
    id: 2,
    problem: "Ինձ դուր չի գալիս այս հին գիրքը, բայց այն շատ թանկ արժե։",
    meaning: "No me gusta este libro viejo, pero cuesta mucho.",
    options: [
      { text: "Yo compraría eso enseguida.", isCorrect: false, explanation: "Compraría means you would buy it, but you don't like it." },
      { text: "Yo no compraría eso.", isCorrect: true, explanation: "Yo no compraría eso - «Ես դա չէի գնի»: Perfect use of Condicional to discourage an unwanted expense." },
      { text: "Deberías hablar con el profesor.", isCorrect: false, explanation: "Not relevant to a book purchase choice." }
    ]
  },
  {
    id: 3,
    problem: "Գլուխս սարսափելի ցավում է երեկվանից։",
    meaning: "Me duele mucho la cabeza desde ayer.",
    options: [
      { text: "Yo iría al médico.", isCorrect: true, explanation: "Yo iría al médico - «Ես բժշկի կգնայի» (կատարյալ խորհուրդ առողջական խնդրի դեպքում)։" },
      { text: "Yo no iría al médico.", isCorrect: false, explanation: "Not a safe advice!" },
      { text: "Deberías viajar a Barcelona.", isCorrect: false, explanation: "Barcelona is nice, but medic is what is needed." }
    ]
  }
];

// Game 4: Conditional structures (Si + Subjuntivo + Condicional)
export const GAME4_CHALLENGES = [
  {
    id: 1,
    siClause: "Si tuviera dinero,",
    siMeaning: "Եթե փող ունենայի (բայց չունեմ)",
    thenClauseOptions: [
      "viajaría a España.",
      "habría viajado a España.",
      "viajo a España."
    ],
    correctThenClause: "viajaría a España.",
    translation: "Si tuviera dinero, viajaría a España. (Եթե փող ունենայի, կճանապարհորդեի Իսպանիա։ - Ներկա/ապագա հիպոթետիկ)"
  },
  {
    id: 2,
    siClause: "Si tuviera tiempo,",
    siMeaning: "Եթե ժամանակ ունենայի",
    thenClauseOptions: [
      "estudiaría más.",
      "estudió más.",
      "habría estudiado más."
    ],
    correctThenClause: "estudiaría más.",
    translation: "Si tuviera tiempo, estudiaría más. (Եթե ժամանակ ունենայի, ավելի շատ կսովորեի։)"
  },
  {
    id: 3,
    siClause: "Si supiera la respuesta,",
    siMeaning: "Եթե պատասխանը իմանայի",
    thenClauseOptions: [
      "te la diré.",
      "te la diría.",
      "te la habría dicho."
    ],
    correctThenClause: "te la diría.",
    translation: "Si supiera la response, te la diría. (Եթե պատասխանը իմանայի, քեզ կասեի։)"
  },
  {
    id: 4,
    siClause: "Si hubiera estudiado más,",
    siMeaning: "Եթե ավելի շատ սովորած լինեի (անցյալում)",
    thenClauseOptions: [
      "aprobaría el examen.",
      "habría aprobado el examen.",
      "aprobé el examen."
    ],
    correctThenClause: "habría aprobado el examen.",
    translation: "Si hubiera estudiado más, habría aprobado el examen. (Եթե ավելի շատ սովորած լինեի, քննությունը կհանձնեի / հանձնած կլինեի։)"
  }
];

// Game 5: Speculations (Serían las ocho, Tendría unos 20 años)
export const GAME5_CHALLENGES = [
  {
    id: 1,
    situation: "Անցյալում երեկոյան տեսար մեկին, ով երևում էր շատ երիտասարդ՝ մոտ 20 տարեկան։",
    meaning: "He/She looked about 20 years old in the past.",
    correctSpeculation: "Tendría unos veinte años.",
    options: [
      "Tendría unos veinte años.",
      "Tendrá unos veinte años.",
      "Tiene unos veinte años."
    ],
    explanation: "Tendría-ն (tener բայի condicional) օգտագործվում է անցյալի մասին տարիքային ենթադրություն անելիս («երևի մոտ 20 տարեկան էր»)։"
  },
  {
    id: 2,
    situation: "Հիշում ես, որ անցյալ շաբաթ հանդիպման ժամանակ սրահը լեփ-լեցուն էր մարդկանցով։",
    meaning: "Probably there were a lot of people in the room.",
    correctSpeculation: "Habría mucha gente.",
    options: [
      "Hay mucha gente.",
      "Habría mucha gente.",
      "Habrá mucha gente."
    ],
    explanation: "Habría mucha gente (haber condicional) նշանակում է՝ «Երևի շատ մարդ կար / հավանաբար շատ մարդիկ կլինեին»։"
  },
  {
    id: 3,
    situation: "Ժամացույց չունեիր, բայց կարծում էիր, որ անցյալ երեկոյան մոտավորապես ժամը 8-ն էր։",
    meaning: "It was probably around eight o'clock.",
    correctSpeculation: "Serían las ocho.",
    options: [
      "Eran las ocho.",
      "Serán las ocho.",
      "Serían las ocho."
    ],
    explanation: "Serían las ocho (ser condicional plural for las ocho) նշանակում է՝ «Երևի ժամը ութն էր» (ենթադրություն անցյալի ժամանակի մասին)։"
  }
];

// Game 6: Simple vs Compuesto scenarios
export const GAME6_CHALLENGES: SimpleCompuestoChallenge[] = [
  {
    id: 1,
    phrase: "Yo compraría este coche.",
    situation: "Ես այս մեքենան կգնեի (եթե հիմա փող ունենայի, բայց չունեմ)։",
    type: "simple",
    explanation: "Condicional Simple — ներկայի/ապագայի ընդհանուր հիպոթետիկ ցանկություն։"
  },
  {
    id: 2,
    phrase: "Yo habría comprado este coche.",
    situation: "Ես այս մեքենան կգնեի / գնած կլինեի (անցյալ տարի հնարավորություն կար, բայց այդպես էլ չգնեցի)։",
    type: "compuesto",
    explanation: "Condicional Compuesto — անցյալում չկատարված, կորսված հնարավորություն։"
  },
  {
    id: 3,
    phrase: "Si me hubieras llamado, habría venido.",
    situation: "Եթե ինձ զանգեիր (երեկվա խնջույքին), ես կգայի։",
    type: "compuesto",
    explanation: "Condicional Compuesto — պայմանը վերաբերում է անցյալին, որն արդեն անփոփոխ է։"
  },
  {
    id: 4,
    phrase: "Si tuviera tiempo, viajaría con vosotros.",
    situation: "Եթե հիմա/վաղը ժամանակ ունենայի, կճանապարհորդեի ձեզ հետ։",
    type: "simple",
    explanation: "Condicional Simple — ներկայի կամ ապագայի հնարավոր պայմանական գործողություն։"
  }
];
