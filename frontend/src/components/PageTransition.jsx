import { motion } from "framer-motion";

const content = {
  initial: { opacity: 0, y: 26 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: 0.45 } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.3, ease: "easeIn" } },
};

const curtain = {
  initial: { scaleY: 1 },
  enter: { scaleY: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  exit: { scaleY: 1, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
};

const word = {
  initial: { opacity: 1, y: 0 },
  enter: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  exit: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
};

// Signature page transition: an orange curtain wipe with the wordmark,
// followed by a soft upward content reveal.
export default function PageTransition({ children }) {
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <motion.div
        className="bt-curtain"
        variants={curtain}
        style={{ transformOrigin: "top" }}
        data-testid="page-curtain"
      >
        <motion.img
          src="/brioche/logo/tbt-outline.png"
          alt="The Brioche Team"
          className="curtain-logo"
          variants={word}
        />
      </motion.div>
      <motion.div variants={content}>{children}</motion.div>
    </motion.div>
  );
}
