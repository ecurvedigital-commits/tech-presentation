import React, { useState, useEffect, useRef, useMemo } from 'react';

/**
 * Custom hook to track section visibility with IntersectionObserver.
 * Triggers when threshold percentage of the section enters the viewport.
 * Resets state when leaving the viewport so animations replay seamlessly upon re-entering.
 */
export function useSectionInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [viewKey, setViewKey] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setViewKey((k) => k + 1);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView, viewKey };
}

/**
 * TypewriterText Component
 * Renders text character-by-character with zero layout shift by reserving space
 * for the hidden text using invisible characters in standard document flow.
 */
export function TypewriterText({
  text = '',
  segments = null, // Array of { text: string, className?: string }
  speed = 28,
  delay = 0,
  active = true,
  viewKey = 0,
  showCursor = false,
  cursorClassName = '',
  className = '',
  as: Component = 'span',
  onComplete,
  children,
}) {
  const { parsedSegments, totalLength } = useMemo(() => {
    const rawSegments = segments || (text ? [{ text }] : []);
    let running = 0;
    const mapped = rawSegments.map((seg) => {
      const segText = seg.text || '';
      const start = running;
      const end = start + segText.length;
      running = end;
      return {
        text: segText,
        className: seg.className || '',
        start,
        end,
      };
    });
    return { parsedSegments: mapped, totalLength: running };
  }, [segments, text]);

  const [charCount, setCharCount] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const timerRef = useRef(null);
  const delayTimerRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (delayTimerRef.current) clearTimeout(delayTimerRef.current);

    if (!active) {
      setCharCount(0);
      setIsTypingComplete(false);
      return;
    }

    setCharCount(0);
    setIsTypingComplete(false);

    delayTimerRef.current = setTimeout(() => {
      if (totalLength === 0) {
        setIsTypingComplete(true);
        if (onCompleteRef.current) onCompleteRef.current();
        return;
      }

      let current = 0;
      timerRef.current = setInterval(() => {
        current += 1;
        setCharCount(current);

        if (current >= totalLength) {
          clearInterval(timerRef.current);
          setIsTypingComplete(true);
          if (onCompleteRef.current) onCompleteRef.current();
        }
      }, speed);
    }, delay);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
    };
  }, [active, viewKey, delay, speed, totalLength]);

  return (
    <Component className={className}>
      {parsedSegments.map((segment, segIdx) => {
        const { text: segText, className: segClassName, start: segStart, end: segEnd } = segment;

        if (charCount <= segStart) {
          // Entire segment is hidden
          return (
            <span key={segIdx} className={segClassName}>
              <span className="invisible select-none" aria-hidden="true">
                {segText}
              </span>
            </span>
          );
        } else if (charCount >= segEnd) {
          // Entire segment is visible
          return (
            <span key={segIdx} className={segClassName}>
              {segText}
            </span>
          );
        } else {
          // Segment is partially typed
          const visiblePart = segText.slice(0, charCount - segStart);
          const hiddenPart = segText.slice(charCount - segStart);

          return (
            <span key={segIdx} className={segClassName}>
              <span>{visiblePart}</span>
              <span className="invisible select-none" aria-hidden="true">
                {hiddenPart}
              </span>
            </span>
          );
        }
      })}

      {children}
    </Component>
  );
}

/**
 * FadeReveal Component
 * Smooth fade & subtle slide for supporting text, descriptions, and taglines.
 */
export function FadeReveal({
  active = true,
  delay = 150,
  duration = 500,
  className = '',
  children,
  as: Component = 'div',
}) {
  const [show, setShow] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!active) {
      setShow(false);
      return;
    }

    timerRef.current = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, delay]);

  return (
    <Component
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Component>
  );
}

/**
 * RevealContainer Component
 * Reveals visual components, interactive playgrounds, and complex containers.
 */
export function RevealContainer({
  active = true,
  delay = 250,
  duration = 600,
  className = '',
  children,
  as: Component = 'div',
}) {
  const [show, setShow] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!active) {
      setShow(false);
      return;
    }

    timerRef.current = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, delay]);

  return (
    <Component
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Component>
  );
}

/**
 * StaggerItem Component
 * Used inside cards grids to stagger cards one after another without layout shift.
 */
export function StaggerItem({
  active = true,
  index = 0,
  baseDelay = 200,
  staggerDelay = 70,
  duration = 500,
  className = '',
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) {
  const [show, setShow] = useState(false);
  const timerRef = useRef(null);

  const delay = baseDelay + index * staggerDelay;

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!active) {
      setShow(false);
      return;
    }

    timerRef.current = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, delay]);

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
