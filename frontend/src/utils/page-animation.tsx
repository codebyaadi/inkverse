import { AnimatePresence, motion, AnimationProps } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimationWrapperProps {
  children: ReactNode;
  initial?: AnimationProps["initial"];
  animate?: AnimationProps["animate"];
  transition?: AnimationProps["transition"];
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
}) => {
  return (
    <AnimatePresence>
      <motion.div initial={initial} animate={animate} transition={transition}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;
