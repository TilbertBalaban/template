import { RefObject, useLayoutEffect } from 'react';

const angleF = ({
  cx,
  cy,
  ex,
  ey,
}: {
  cx: number;
  cy: number;
  ex: number;
  ey: number;
}): number => {
  const dy = ey - cy;
  const dx = ex - cx;

  const rad = Math.atan2(dy, dx);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const deg = (rad * 180) / Math.PI;

  return deg;
};

export const useSpyingEyeball = (eyeRef: RefObject<HTMLDivElement>): null => {
  useLayoutEffect(() => {
    const eyePosition = eyeRef.current?.getBoundingClientRect();
    const x = (eyePosition?.left || 0) + (eyePosition?.width || 0) / 2;
    const y = (eyePosition?.top || 0) + (eyePosition?.height || 0) / 2;

    const change = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const angle = angleF({
        cx: mouseX,
        cy: mouseY,
        ex: x,
        ey: y,
      });

      if (eyeRef.current) {
        // eslint-disable-next-line no-param-reassign
        eyeRef.current.style.transform = `rotate(${angle - 50}deg)`;
      }
    };
    document.addEventListener('mousemove', change);
    return () => {
      document.removeEventListener('mousemove', change);
    };
  }, [eyeRef.current]);

  return null;
};
