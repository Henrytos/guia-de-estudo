import { animate } from "framer-motion/dom/mini";
import "./App.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function App() {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  return (
    <main className="border min-h-svh">
      <h1 className="text-2xl font-semibold mb-10 mt-5">
        {" "}
        hello framer motion{" "}
      </h1>
      <motion.div
        className="bg-red-800 w-20 h-10"
        animate={{
          x: 0,
        }}
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 1.1,
        }}
        drag={"x"}
        dragConstraints={{
          left: -100,
          right: 100,
        }}
      ></motion.div>

      <hr />
      <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item}>henry</motion.li>
        <motion.li variants={item}>nathalia</motion.li>
        <motion.li variants={item}>mariana</motion.li>
      </motion.ul>

      <hr />
      <motion.div
        className="bg-red-800 w-20 h-10"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
      ></motion.div>
      <hr />
      <motion.div
        className="bg-red-800 w-20 h-10"
        initial={false}
        animate={{ x: 10 }}
      ></motion.div>
      <hr />

      <motion.div
        className="bg-red-800 w-20 h-10"
        drag="x"
        style={{ x, opacity }}
      ></motion.div>

      <div
        onClick={() => animate(".boxes", { opacity: 0 })}
        className="bg-blue-800 w-20 h-10"
      />
    </main>
  );
}
