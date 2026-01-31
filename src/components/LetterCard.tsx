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
    <div className="group relative bg-accent border-2 border-secondary/20 rounded-xl p-6 hover:border-secondary hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-between min-h-[280px]">
      <div className="absolute top-4 right-4 text-gray-400 text-sm font-mono">{letter.id}</div>
      
      <div className="flex-1 flex items-center justify-center w-full">
        <h2 className="text-8xl font-arabic text-primary group-hover:text-primary-dark transition-colors duration-300 mb-4">
          {letter.arabic}
        </h2>
      </div>

      {/* Forms Visualization */}
      <div className="w-full grid grid-cols-3 gap-2 mb-6 border-t border-b border-gray-100 py-3">
        <div className="flex flex-col items-center group/form" title="Posizione Iniziale">
          <span className="text-3xl font-arabic text-green-600 mb-1 transition-transform group-hover/form:scale-110">{letter.forms.initial}</span>
          <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Iniziale</span>
        </div>
        <div className="flex flex-col items-center group/form" title="Posizione Mediana">
          <span className="text-3xl font-arabic text-orange-500 mb-1 transition-transform group-hover/form:scale-110">{letter.forms.medial}</span>
          <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Mediana</span>
        </div>
        <div className="flex flex-col items-center group/form" title="Posizione Finale">
          <span className="text-3xl font-arabic text-red-600 mb-1 transition-transform group-hover/form:scale-110">{letter.forms.final}</span>
          <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Finale</span>
        </div>
      </div>
      
      <div className="text-center w-full space-y-2">
        <h3 className="text-2xl font-heading text-gray-800">{letter.name}</h3>
        <p className="text-gray-500 font-mono text-lg">{letter.transcription}</p>
        
        <button 
          onClick={playAudio}
          className="mt-4 w-full bg-secondary/10 hover:bg-secondary text-primary hover:text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 focus:ring-2 focus:ring-secondary focus:outline-none"
          aria-label={`Ascolta la pronuncia di ${letter.name}`}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 animate-pulse" />
          ) : error ? (
            <AlertCircle className="w-5 h-5 text-red-500" />
          ) : (
            <Play className="w-5 h-5" />
          )}
          <span className="font-medium">{error ? "Non disponibile" : "Ascolta"}</span>
        </button>
      </div>

      {/* Elemento Audio HTML5 nascosto che punta ai file remoti configurati in alphabet.ts */}
      <audio ref={audioRef} src={letter.audio} preload="none" />
    </div>
  );
};

export default LetterCard;
