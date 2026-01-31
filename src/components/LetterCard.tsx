import React, { useState, useRef } from 'react';
import { Play, Volume2, AlertCircle } from 'lucide-react';
import { Letter } from '../types';

interface LetterCardProps {
  letter: Letter;
}

const LetterCard: React.FC<LetterCardProps> = ({ letter }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    // Ripristiniamo l'uso dei file audio reali, visto che la sintesi vocale ha problemi
    if (audioRef.current) {
      // Reset errore e stato
      setError(null);
      setIsPlaying(true);

      // Gestione promise play() per evitare errori se l'utente clicca velocemente
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio iniziato correttamente
          })
          .catch((err) => {
            console.error("Errore riproduzione audio:", err);
            setIsPlaying(false);
            setError("Audio non disponibile");
          });
      }

      audioRef.current.onended = () => setIsPlaying(false);
      audioRef.current.onerror = () => {
        setIsPlaying(false);
        setError("Audio non disponibile");
      };
    }
  };

  return (
    <div className="group relative bg-accent border-2 border-secondary/20 rounded-2xl p-8 hover:border-secondary hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-between min-h-[380px]">
      <div className="absolute top-5 right-5 text-gray-400 text-lg font-mono font-bold opacity-50">{letter.id}</div>
      
      <div className="flex-1 flex items-center justify-center w-full py-4">
        <h2 className="text-9xl font-arabic text-primary group-hover:text-primary-dark transition-colors duration-300 mb-6 drop-shadow-sm">
          {letter.arabic}
        </h2>
      </div>

      {/* Forms Visualization */}
      <div className="w-full grid grid-cols-3 gap-4 mb-8 border-t-2 border-b-2 border-gray-100 py-4 bg-white/50 rounded-lg">
        {/* RIGHT - Initial Position (Because Arabic is RTL) */}
        <div className="flex flex-col items-center group/form order-last" title="Posizione Iniziale">
          <span className="text-4xl font-arabic text-green-600 mb-2 transition-transform group-hover/form:scale-125">{letter.forms.initial}</span>
          <span className="text-xs uppercase text-gray-400 font-bold tracking-widest">Iniziale</span>
        </div>
        
        {/* CENTER - Medial Position */}
        <div className="flex flex-col items-center group/form" title="Posizione Mediana">
          <span className="text-4xl font-arabic text-orange-500 mb-2 transition-transform group-hover/form:scale-125">{letter.forms.medial}</span>
          <span className="text-xs uppercase text-gray-400 font-bold tracking-widest">Mediana</span>
        </div>

        {/* LEFT - Final Position */}
        <div className="flex flex-col items-center group/form order-first" title="Posizione Finale">
          <span className="text-4xl font-arabic text-red-600 mb-2 transition-transform group-hover/form:scale-125">{letter.forms.final}</span>
          <span className="text-xs uppercase text-gray-400 font-bold tracking-widest">Finale</span>
        </div>
      </div>
      
      <div className="text-center w-full space-y-3">
        <h3 className="text-4xl font-heading font-bold text-gray-800">{letter.name}</h3>
        <p className="text-gray-500 font-mono text-2xl tracking-wide">{letter.transcription}</p>
        
        <button 
          onClick={playAudio}
          className="mt-6 w-full bg-white hover:bg-secondary text-primary hover:text-white border-2 border-secondary/10 hover:border-secondary py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
          aria-label={`Ascolta la pronuncia di ${letter.name}`}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 animate-pulse" />
          ) : error ? (
            <AlertCircle className="w-6 h-6 text-red-500" />
          ) : (
            <Play className="w-6 h-6 fill-current" />
          )}
          <span className="font-bold text-lg">{error ? "Non disponibile" : "Ascolta"}</span>
        </button>
      </div>

      {/* Elemento Audio HTML5 nascosto che punta ai file remoti configurati in alphabet.ts */}
      <audio ref={audioRef} src={letter.audio} preload="none" />
    </div>
  );
};

export default LetterCard;
