export interface Letter {
  id: number;
  arabic: string;
  name: string;
  transcription: string;
  audio: string;
  forms: {
    initial: string;
    medial: string;
    final: string;
  };
}
