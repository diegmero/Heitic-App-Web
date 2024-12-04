import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Reiniciar la animación después de una pausa
      const resetTimer = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 2000); // Pausa de 2 segundos antes de reiniciar

      return () => clearTimeout(resetTimer);
    }
  }, [text, speed, index]);

  return displayedText;
}