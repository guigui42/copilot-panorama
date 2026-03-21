import React, { useState, useRef, useCallback, useEffect, useId } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [visible, setVisible] = useState(false);
  const [showBelow, setShowBelow] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useId();

  const show = useCallback(() => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setShowBelow(rect.top < 60);
    }
    setVisible(true);
  }, []);

  const hide = useCallback(() => {
    setVisible(false);
  }, []);

  // Close tooltip on outside touch
  useEffect(() => {
    if (!visible) return;
    const handleTouch = (e: TouchEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };
    document.addEventListener('touchstart', handleTouch, { passive: true });
    return () => document.removeEventListener('touchstart', handleTouch);
  }, [visible]);

  return (
    <span
      className="tooltip-wrapper"
      ref={wrapperRef}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setVisible(false);
        }
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
        setVisible((v) => !v);
        if (wrapperRef.current) {
          const rect = wrapperRef.current.getBoundingClientRect();
          setShowBelow(rect.top < 60);
        }
      }}
      aria-describedby={visible ? tooltipId : undefined}
    >
      {children}
      {visible && (
        <span
          id={tooltipId}
          role="tooltip"
          className={`tooltip ${showBelow ? 'tooltip-below' : ''}`}
        >
          {content}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
