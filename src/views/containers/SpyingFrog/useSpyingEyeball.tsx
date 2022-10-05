import { RefObject, useLayoutEffect } from 'react';

const calculateAngle = ({
  ax,
  ay,
  bx,
  by,
}: {
  ax: number;
  ay: number;
  bx: number;
  by: number;
}): number => {
  const dy = by - ax;
  const dx = bx - ay;

  const rad = Math.atan2(dy, dx);

  const deg = (rad * 180) / Math.PI;

  return deg;
};

export const useSpyingEyeball = (eyeRef: RefObject<HTMLDivElement>): null => {
  useLayoutEffect(() => {
    const eyePosition = eyeRef.current?.getBoundingClientRect();
    const eyePositionX =
      (eyePosition?.left || 0) + (eyePosition?.width || 0) / 2;
    const eyePositionY =
      (eyePosition?.top || 0) + (eyePosition?.height || 0) / 2;

    const rotateEyeball = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const angle = calculateAngle({
        ax: mouseX,
        ay: mouseY,
        bx: eyePositionX,
        by: eyePositionY,
      });

      if (eyeRef.current) {
        // eslint-disable-next-line no-param-reassign
        eyeRef.current.style.transform = `rotate(${angle - 50}deg)`;
      }
    };
    document.addEventListener('mousemove', rotateEyeball);
    return () => {
      document.removeEventListener('mousemove', rotateEyeball);
    };
  }, [eyeRef.current]);

  return null;
};
