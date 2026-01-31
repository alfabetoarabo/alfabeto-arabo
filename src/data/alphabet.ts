import { Letter } from '../types';

export const alphabet: Letter[] = [
  { 
    id: 1, 
    arabic: 'ا', 
    name: 'Alif', 
    transcription: '/a:/', 
    audio: '/audio/alif.mp3',
    forms: { initial: 'ا', medial: 'ـا', final: 'ـا' }
  },
  { 
    id: 2, 
    arabic: 'ب', 
    name: 'Ba', 
    transcription: '/b/', 
    audio: '/audio/ba.mp3',
    forms: { initial: 'بـ', medial: 'ـبـ', final: 'ـب' }
  },
  { 
    id: 3, 
    arabic: 'ت', 
    name: 'Ta', 
    transcription: '/t/', 
    audio: '/audio/ta.mp3',
    forms: { initial: 'تـ', medial: 'ـتـ', final: 'ـت' }
  },
  { 
    id: 4, 
    arabic: 'ث', 
    name: 'Tha', 
    transcription: '/θ/', 
    audio: '/audio/tha.mp3',
    forms: { initial: 'ثـ', medial: 'ـثـ', final: 'ـث' }
  },
  { 
    id: 5, 
    arabic: 'ج', 
    name: 'Jim', 
    transcription: '/dʒ/', 
    audio: '/audio/jim.mp3',
    forms: { initial: 'جـ', medial: 'ـجـ', final: 'ـج' }
  },
  { 
    id: 6, 
    arabic: 'ح', 
    name: 'Ha', 
    transcription: '/ħ/', 
    audio: '/audio/ha.mp3',
    forms: { initial: 'حـ', medial: 'ـحـ', final: 'ـح' }
  },
  { 
    id: 7, 
    arabic: 'خ', 
    name: 'Kha', 
    transcription: '/x/', 
    audio: '/audio/kha.mp3',
    forms: { initial: 'خـ', medial: 'ـخـ', final: 'ـخ' }
  },
  { 
    id: 8, 
    arabic: 'د', 
    name: 'Dal', 
    transcription: '/d/', 
    audio: '/audio/dal.mp3',
    forms: { initial: 'د', medial: 'ـد', final: 'ـد' }
  },
  { 
    id: 9, 
    arabic: 'ذ', 
    name: 'Dhal', 
    transcription: '/ð/', 
    audio: '/audio/dhal.mp3',
    forms: { initial: 'ذ', medial: 'ـذ', final: 'ـذ' }
  },
  { 
    id: 10, 
    arabic: 'ر', 
    name: 'Ra', 
    transcription: '/r/', 
    audio: '/audio/ra.mp3',
    forms: { initial: 'ر', medial: 'ـر', final: 'ـر' }
  },
  { 
    id: 11, 
    arabic: 'ز', 
    name: 'Zay', 
    transcription: '/z/', 
    audio: '/audio/zay.mp3',
    forms: { initial: 'ز', medial: 'ـز', final: 'ـز' }
  },
  { 
    id: 12, 
    arabic: 'س', 
    name: 'Sin', 
    transcription: '/s/', 
    audio: '/audio/sin.mp3',
    forms: { initial: 'سـ', medial: 'ـسـ', final: 'ـس' }
  },
  { 
    id: 13, 
    arabic: 'ش', 
    name: 'Shin', 
    transcription: '/ʃ/', 
    audio: '/audio/shin.mp3',
    forms: { initial: 'شـ', medial: 'ـشـ', final: 'ـش' }
  },
  { 
    id: 14, 
    arabic: 'ص', 
    name: 'Sad', 
    transcription: '/sˤ/', 
    audio: '/audio/sad.mp3',
    forms: { initial: 'صـ', medial: 'ـصـ', final: 'ـص' }
  },
  { 
    id: 15, 
    arabic: 'ض', 
    name: 'Dad', 
    transcription: '/dˤ/', 
    audio: '/audio/dad.mp3',
    forms: { initial: 'ضـ', medial: 'ـضـ', final: 'ـض' }
  },
  { 
    id: 16, 
    arabic: 'ط', 
    name: 'Ta', 
    transcription: '/tˤ/', 
    audio: '/audio/ta2.mp3',
    forms: { initial: 'طـ', medial: 'ـطـ', final: 'ـط' }
  },
  { 
    id: 17, 
    arabic: 'ظ', 
    name: 'Za', 
    transcription: '/ðˤ/', 
    audio: '/audio/za.mp3',
    forms: { initial: 'ظـ', medial: 'ـظـ', final: 'ـظ' }
  },
  { 
    id: 18, 
    arabic: 'ع', 
    name: 'Ayn', 
    transcription: '/ʕ/', 
    audio: '/audio/ayn.mp3',
    forms: { initial: 'عـ', medial: 'ـعـ', final: 'ـع' }
  },
  { 
    id: 19, 
    arabic: 'غ', 
    name: 'Ghayn', 
    transcription: '/ɣ/', 
    audio: '/audio/ghayn.mp3',
    forms: { initial: 'غـ', medial: 'ـغـ', final: 'ـغ' }
  },
  { 
    id: 20, 
    arabic: 'ف', 
    name: 'Fa', 
    transcription: '/f/', 
    audio: '/audio/fa.mp3',
    forms: { initial: 'فـ', medial: 'ـفـ', final: 'ـف' }
  },
  { 
    id: 21, 
    arabic: 'ق', 
    name: 'Qaf', 
    transcription: '/q/', 
    audio: '/audio/qaf.mp3',
    forms: { initial: 'قـ', medial: 'ـقـ', final: 'ـق' }
  },
  { 
    id: 22, 
    arabic: 'ك', 
    name: 'Kaf', 
    transcription: '/k/', 
    audio: '/audio/kaf.mp3',
    forms: { initial: 'كـ', medial: 'ـكـ', final: 'ـك' }
  },
  { 
    id: 23, 
    arabic: 'ل', 
    name: 'Lam', 
    transcription: '/l/', 
    audio: '/audio/lam.mp3',
    forms: { initial: 'لـ', medial: 'ـلـ', final: 'ـل' }
  },
  { 
    id: 24, 
    arabic: 'م', 
    name: 'Mim', 
    transcription: '/m/', 
    audio: '/audio/mim.mp3',
    forms: { initial: 'مـ', medial: 'ـمـ', final: 'ـم' }
  },
  { 
    id: 25, 
    arabic: 'ن', 
    name: 'Nun', 
    transcription: '/n/', 
    audio: '/audio/nun.mp3',
    forms: { initial: 'نـ', medial: 'ـنـ', final: 'ـن' }
  },
  { 
    id: 26, 
    arabic: 'ه', 
    name: 'Ha', 
    transcription: '/h/', 
    audio: '/audio/ha2.mp3',
    forms: { initial: 'هـ', medial: 'ـهـ', final: 'ـه' }
  },
  { 
    id: 27, 
    arabic: 'و', 
    name: 'Waw', 
    transcription: '/w/', 
    audio: '/audio/waw.mp3',
    forms: { initial: 'و', medial: 'ـو', final: 'ـو' }
  },
  { 
    id: 28, 
    arabic: 'ي', 
    name: 'Ya', 
    transcription: '/j/', 
    audio: '/audio/ya.mp3',
    forms: { initial: 'يـ', medial: 'ـيـ', final: 'ـي' }
  },
];
