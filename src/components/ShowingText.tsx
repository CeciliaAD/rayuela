import React, { useState, useEffect } from 'react';

interface ShowingTextProps {
  text: string;
  speed?: number; // Opcional, velocidad en milisegundos entre cada carácter
  color?: string;
}

const ShowingText: React.FC<ShowingTextProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, displayedText, text, speed]);

  return <div>{displayedText}</div>;
};

export default ShowingText;
