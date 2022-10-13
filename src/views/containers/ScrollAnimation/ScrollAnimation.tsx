import { motion } from 'framer-motion';

import './scrollAnimation.scss';

const liAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const ScrollAnimation = () => {
  return (
    <div className="scroll-animation">
      <motion.ol initial="hidden" whileInView="visible">
        <motion.li variants={liAnimation} custom={1}>
          Intersection Observer API
        </motion.li>
        <motion.li variants={liAnimation} custom={2}>
          framer motion
        </motion.li>
      </motion.ol>
    </div>
  );
};
