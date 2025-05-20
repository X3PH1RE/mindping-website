
import React, { useEffect, useRef } from 'react';

interface AnimatedArrowProps {
  className?: string;
}

const AnimatedArrow: React.FC<AnimatedArrowProps> = ({ className }) => {
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-arrow-point');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (arrowRef.current) {
      observer.observe(arrowRef.current);
    }

    return () => {
      if (arrowRef.current) {
        observer.unobserve(arrowRef.current);
      }
    };
  }, []);

  return (
    <svg
      ref={arrowRef}
      width="64"
      height="30"
      viewBox="0 0 64 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300`}
    >
      <path
        d="M2 15C2 14.5 2.5 14 3 14C3.5 14 4 14.5 4 15C4 15.5 3.5 16 3 16C2.5 16 2 15.5 2 15Z"
        fill="#9b87f5"
      />
      <path
        d="M6 15C6 14.5 6.5 14 7 14C7.5 14 8 14.5 8 15C8 15.5 7.5 16 7 16C6.5 16 6 15.5 6 15Z"
        fill="#9b87f5"
      />
      <path
        d="M10 15C10 14.5 10.5 14 11 14C11.5 14 12 14.5 12 15C12 15.5 11.5 16 11 16C10.5 16 10 15.5 10 15Z"
        fill="#9b87f5"
      />
      <path
        d="M14 15C14 14.5 14.5 14 15 14C15.5 14 16 14.5 16 15C16 15.5 15.5 16 15 16C14.5 16 14 15.5 14 15Z"
        fill="#9b87f5"
      />
      <path
        d="M18 15C18 14.5 18.5 14 19 14C19.5 14 20 14.5 20 15C20 15.5 19.5 16 19 16C18.5 16 18 15.5 18 15Z"
        fill="#9b87f5"
      />
      <path
        d="M22 15C22 14.5 22.5 14 23 14C23.5 14 24 14.5 24 15C24 15.5 23.5 16 23 16C22.5 16 22 15.5 22 15Z"
        fill="#9b87f5"
      />
      <path
        d="M26 15C26 14.5 26.5 14 27 14C27.5 14 28 14.5 28 15C28 15.5 27.5 16 27 16C26.5 16 26 15.5 26 15Z"
        fill="#9b87f5"
      />
      <path
        d="M30 15C30 14.5 30.5 14 31 14C31.5 14 32 14.5 32 15C32 15.5 31.5 16 31 16C30.5 16 30 15.5 30 15Z"
        fill="#9b87f5"
      />
      <path
        d="M34 15C34 14.5 34.5 14 35 14C35.5 14 36 14.5 36 15C36 15.5 35.5 16 35 16C34.5 16 34 15.5 34 15Z"
        fill="#9b87f5"
      />
      <path
        d="M38 15C38 14.5 38.5 14 39 14C39.5 14 40 14.5 40 15C40 15.5 39.5 16 39 16C38.5 16 38 15.5 38 15Z"
        fill="#9b87f5"
      />
      <path
        d="M42 15C42 14.5 42.5 14 43 14C43.5 14 44 14.5 44 15C44 15.5 43.5 16 43 16C42.5 16 42 15.5 42 15Z"
        fill="#9b87f5"
      />
      <path
        d="M46 15C46 14.5 46.5 14 47 14C47.5 14 48 14.5 48 15C48 15.5 47.5 16 47 16C46.5 16 46 15.5 46 15Z"
        fill="#9b87f5"
      />
      <path
        d="M63 15L53 8.17372V21.8263L63 15Z"
        fill="#9b87f5"
      />
    </svg>
  );
};

export default AnimatedArrow;
