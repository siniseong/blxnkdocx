'use client';

import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypingText({ text, speed = 50, className = '' }: TypingTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className={`inline-block ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        <text
          x="0"
          y="15"
          className="fill-current"
          style={{
            fontFamily: 'TheJamsil5Bold, sans-serif',
            fontSize: '16px',
          }}
        >
          {displayText}
          <animate
            attributeName="opacity"
            values="1;0;1"
            dur="0.75s"
            repeatCount="indefinite"
            begin="0s"
          />
        </text>
      </svg>
    </div>
  );
}   