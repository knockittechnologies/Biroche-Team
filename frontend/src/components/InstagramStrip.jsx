import { motion } from "framer-motion";

export default function InstagramStrip({ images }) {
  return (
    <>
      <div className="insta-strip">
        {images.map((src, i) => (
          <motion.div
            className="cell"
            key={i}
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <img src={src} alt="" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </>
  );
}
