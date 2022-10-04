import { useRef } from 'react';
import SpyFrogImage from './assets/spy_frog.jpg';
import './spyingFrog.scss';
import { useSpyingEyeball } from './useSpyingEyeball';

export const SpyingFrog = () => {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  useSpyingEyeball(leftEyeRef);
  useSpyingEyeball(rightEyeRef);

  return (
    <div className="spying-frog">
      <img src={SpyFrogImage} alt="frog" />
      <div className="eye-left" ref={leftEyeRef} />
      <div className="eye-right" ref={rightEyeRef} />
    </div>
  );
};
