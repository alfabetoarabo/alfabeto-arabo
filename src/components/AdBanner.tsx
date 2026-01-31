import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  layoutKey?: string;
  className?: string;
  style?: React.CSSProperties;
  responsive?: boolean;
}

const AdBanner: React.FC<AdBannerProps> = ({ 
  slot, 
  format = 'auto', 
  layoutKey,
  className = '', 
  style = {},
  responsive = true
}) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    // Questa funzione verifica se lo script di AdSense è caricato e spinge l'annuncio
    try {
      // @ts-ignore
      if (window.adsbygoogle && adRef.current && adRef.current.innerHTML === '') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  // MODE: "production" per mostrare gli annunci veri, "development" per il placeholder
  const isProduction = false; // <--- IMPOSTA SU TRUE QUANDO SEI PRONTO

  if (!isProduction) {
    return (
      <div className={`bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 text-sm ${className}`} style={style}>
        <div className="text-center">
          <p>Spazio Pubblicitario</p>
          <p className="text-xs">Slot ID: {slot}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // <--- INSERISCI IL TUO CLIENT ID QUI
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
        data-ad-layout-key={layoutKey}
      />
    </div>
  );
};

export default AdBanner;
