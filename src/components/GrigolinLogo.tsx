import { motion } from "framer-motion";

const GrigolinLogo = ({ className = "", size = 200, animated = false }: { className?: string; size?: number; animated?: boolean }) => {
  const scale = size / 200;

  const diamondVariants = animated ? {
    initial: { scale: 0, rotate: -90, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
  } : { initial: {}, animate: {} };

  const gVariants = animated ? {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
  } : { initial: {}, animate: {} };

  const textGruppoVariants = animated ? {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  } : { initial: {}, animate: {} };

  const textGrigolinVariants = animated ? {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
  } : { initial: {}, animate: {} };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 500"
      width={600 * scale}
      height={500 * scale}
      className={className}
    >
      <g transform="rotate(-28 300 250)">
        {/* Green diamond */}
        <motion.rect
          x="180" y="80" width="220" height="220"
          fill="#008f4c"
          variants={diamondVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "290px 190px" }}
        />

        {/* White G letter */}
        <motion.path
          d="M 290 95 
             C 210 95 160 160 190 240 
             C 210 280 250 290 290 290 
             L 380 290 L 380 180 L 260 180 L 260 220 L 330 220 L 330 250 L 240 250 
             C 210 230 210 160 260 135 
             C 280 125 330 130 350 160 
             L 385 140 
             C 360 100 320 95 290 95 Z"
          fill="#ffffff"
          variants={gVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />

        {/* GRUPPO text */}
        <motion.text
          x="185" y="345"
          fontFamily="'Arial', sans-serif"
          fontWeight="bold"
          fontSize="26"
          letterSpacing="12"
          fill="#008f4c"
          variants={textGruppoVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
        >
          GRUPPO
        </motion.text>

        {/* GRIGOLIN text */}
        <motion.text
          x="180" y="390"
          fontFamily="'Arial', sans-serif"
          fontWeight="900"
          fontSize="44"
          letterSpacing="2"
          fill="#008f4c"
          variants={textGrigolinVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
        >
          GRIGOLIN
        </motion.text>
      </g>
    </svg>
  );
};

export default GrigolinLogo;
