import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHidden(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-center h-16 sm:h-20">
        <a href="#" className="font-display font-bold text-xl tracking-wider">
          <span className="text-primary">GRUPPO</span>{" "}
          <span className="text-foreground">GRIGOLIN</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
