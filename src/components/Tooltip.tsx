import React, { useState, useRef, useCallback } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [visible, setVisible] = useState(false);
  const [showBelow, setShowBelow] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setShowBelow(rect.top < 60);
    }
    setVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <span
      className="tooltip-wrapper"
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <span className={`tooltip ${showBelow ? 'tooltip-below' : ''}`}>
          {content}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
