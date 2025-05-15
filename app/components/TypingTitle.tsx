'use client';

import { useEffect, useState } from 'react';

export default function TypingTitle() {
  const [text, setText] = useState('');
  const fullText = "여백이 여러분의 '기술 면접'을 도와줄게요.";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  return (
    <h1 className="typing-title">
      {text}
      <span className="typing-cursor">|</span>
    </h1>
  );
} 