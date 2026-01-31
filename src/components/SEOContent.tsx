import React from 'react';

const SEOContent: React.FC = () => {
  return (
    <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary prose-p:text-gray-600 prose-a:text-secondary-dark hover:prose-a:text-secondary mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <header className="mb-8 border-b border-gray-100 pb-8">
        <h2 className="text-3xl font-bold mb-4">Guida Completa all'Alfabeto Arabo: Storia, Struttura e Pronuncia</h2>
        <p className="text-xl text-gray-500 leading-relaxed">
          Benvenuti nella risorsa definitiva per imparare l'<strong>alfabeto arabo</strong> (conosciuto internazionalmente come <em>Arabic alphabet</em>, <em>alphabet arabe</em> o <em>alfabeto árabe</em>). 
          Questa guida è progettata per accompagnarti passo dopo passo nella scoperta di uno dei sistemi di scrittura più affascinanti e diffusi al mondo.
        </p>
      </header>

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Introduzione all'Alfabeto Arabo</h3>
        <p>
          L'alfabeto arabo è il sistema di scrittura utilizzato per la lingua araba e per molte altre lingue dell'Asia e dell'Africa, come il persiano (farsi), l'urdu, il pashto e il curdo. 
          È il secondo sistema di scrittura più utilizzato al mondo dopo l'alfabeto latino.
        </p>
        <p>
          A differenza delle lingue latine, l'arabo si scrive e si legge <strong>da destra a sinistra</strong>. Questo sistema, chiamato <em>abjad</em>, si basa principalmente sulle consonanti, 
          mentre le vocali lunghe sono rappresentate da lettere specifiche e le vocali brevi da segni diacritici (spesso omessi nella scrittura quotidiana).
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Le Caratteristiche Uniche delle Lettere Arabe</h3>
        <p>
          L'alfabeto arabo è composto da <strong>28 lettere fondamentali</strong>. Una delle caratteristiche più distintive è che le lettere cambiano forma a seconda della loro posizione all'interno della parola. 
          Ogni lettera può avere fino a quattro forme diverse:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Isolata:</strong> Quando la lettera è scritta da sola o non è legata alla precedente/successiva.</li>
          <li><strong>Iniziale:</strong> Quando la lettera appare all'inizio di una parola (o dopo una lettera che non lega).</li>
          <li><strong>Mediana:</strong> Quando la lettera si trova nel mezzo di una parola, legata sia a destra che a sinistra.</li>
          <li><strong>Finale:</strong> Quando la lettera chiude la parola.</li>
        </ul>
        <p>
          Questa fluidità conferisce alla scrittura araba la sua famosa eleganza corsiva, rendendola una forma d'arte in sé, nota come <strong>calligrafia araba</strong>.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Pronuncia e Fonetica</h3>
        <p>
          Per gli studenti occidentali, alcune lettere arabe rappresentano una sfida interessante poiché corrispondono a suoni non presenti nelle lingue europee. 
          Questi includono i suoni "enfatici" (come <em>Sad</em>, <em>Dad</em>, <em>Ta</em>, <em>Za</em>) e i suoni gutturali (come <em>Hha</em>, <em>Ayn</em>, <em>Ghayn</em>).
        </p>
        <p>
          Nella nostra griglia interattiva in alto, abbiamo incluso la trascrizione fonetica IPA (International Phonetic Alphabet) per ogni lettera, 
          permettendoti di comprendere l'esatta articolazione del suono.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">L'Alfabeto Arabo nel Mondo</h3>
        <p>
          L'importanza dell'alfabeto arabo trascende i confini del mondo arabo. Storicamente, è stato utilizzato per scrivere lingue come lo spagnolo (durante il periodo di Al-Andalus) 
          e il turco (prima della riforma del 1928). Oggi, termini come "arabischer Buchstabe" in tedesco o "阿拉伯字母" in cinese testimoniano l'interesse globale per questo sistema di scrittura.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Consigli per l'Apprendimento</h3>
        <p>
          Imparare l'alfabeto arabo richiede pratica e costanza. Ecco alcuni suggerimenti per i principianti:
        </p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li><strong>Ascolta e Ripeti:</strong> Usa gli audio presenti in questa pagina per abituare il tuo orecchio ai nuovi suoni.</li>
          <li><strong>Scrivi Manualmente:</strong> La memoria muscolare è fondamentale. Esercitati a scrivere le lettere da destra a sinistra.</li>
          <li><strong>Identifica le Forme:</strong> Presta attenzione a come le lettere cambiano forma. Molte lettere condividono la stessa forma base e si distinguono solo per il numero e la posizione dei punti (come Ba, Ta e Tha).</li>
        </ol>
      </section>
      
      <footer className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-500">
        <p>
          Questa risorsa è ottimizzata per fornire la migliore esperienza di apprendimento online. 
          Continua a visitare la nostra pagina per aggiornamenti e nuovi strumenti interattivi.
        </p>
      </footer>
    </article>
  );
};

export default SEOContent;
