import React, { useState } from 'react';
import { alphabet } from '../data/alphabet';
import { Letter } from '../types';

const TextAnalyzer: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [analyzedLetters, setAnalyzedLetters] = useState<Letter[]>([]);

  const handleAnalyze = (text: string) => {
    setInputText(text);
    
    // Filter text to find matching letters from our alphabet
    const lettersFound: Letter[] = [];
    const textChars = text.split('');
    
    textChars.forEach(char => {
      // Find the letter in our dataset (comparing with the isolated form or just strict match?)
      // Our alphabet.arabic contains the isolated form.
      // Note: Arabic input might be simple characters.
      const found = alphabet.find(l => l.arabic === char);
      if (found) {
        lettersFound.push(found);
      }
    });

    setAnalyzedLetters(lettersFound);
  };

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 my-12">
      <h2 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center gap-3">
        <span className="text-3xl">🔍</span>
        Analizzatore di Testo
      </h2>
      <p className="text-gray-600 mb-6">
        Scrivi o incolla un testo in arabo per visualizzare le forme (Iniziale, Mediana, Finale) di ogni lettera presente.
      </p>

      <div className="mb-8">
        <textarea
          value={inputText}
          onChange={(e) => handleAnalyze(e.target.value)}
          placeholder="Scrivi qui in arabo (es. مرحبا)..."
          className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-secondary focus:ring-0 text-right font-arabic text-2xl min-h-[120px] resize-y"
          dir="rtl"
        />
      </div>

      {analyzedLetters.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Risultati Analisi ({analyzedLetters.length} lettere trovate)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analyzedLetters.map((letter, index) => (
              <div key={`${letter.id}-${index}`} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                {/* Main Letter */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-3xl font-arabic text-primary font-bold shrink-0">
                  {letter.arabic}
                </div>
                
                {/* Forms Breakdown */}
                <div className="flex-1 grid grid-cols-3 gap-2 text-center">
                  <div className="flex flex-col">
                    <span className="text-xl font-arabic text-green-600">{letter.forms.initial}</span>
                    <span className="text-[10px] uppercase text-gray-400 font-bold">Iniziale</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-arabic text-orange-500">{letter.forms.medial}</span>
                    <span className="text-[10px] uppercase text-gray-400 font-bold">Mediana</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-arabic text-red-600">{letter.forms.final}</span>
                    <span className="text-[10px] uppercase text-gray-400 font-bold">Finale</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {inputText && analyzedLetters.length === 0 && (
         <p className="text-center text-gray-500 italic py-4">Nessuna lettera dell'alfabeto riconosciuta nel testo.</p>
      )}
    </section>
  );
};

export default TextAnalyzer;
