"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom";
  showBackground?: boolean;
  backgroundColor?: string;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = "up",
  showBackground = false,
  backgroundColor = "from-slate-900 via-purple-900 to-slate-900"
}: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  // Different animation directions
  const variants: Record<string, any> = {
    up: { 
      hidden: { opacity: 0, y: 60 }, 
      visible: { opacity: 1, y: 0 } 
    },
    down: { 
      hidden: { opacity: 0, y: -60 }, 
      visible: { opacity: 1, y: 0 } 
    },
    left: { 
      hidden: { opacity: 0, x: -80 }, 
      visible: { opacity: 1, x: 0 } 
    },
    right: { 
      hidden: { opacity: 0, x: 80 }, 
      visible: { opacity: 1, x: 0 } 
    },
    zoom: { 
      hidden: { opacity: 0, scale: 0.8 }, 
      visible: { opacity: 1, scale: 1 } 
    },
  };

  // Background variants for smooth color transition - Updated to purple-pink theme
  const backgroundVariants = {
    hidden: {
      background: `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(88, 28, 135, 0.95), rgba(15, 23, 42, 0.95))`,
    },
    visible: {
      background: `linear-gradient(135deg, rgba(15, 23, 42, 0.1), rgba(88, 28, 135, 0.1), rgba(15, 23, 42, 0.1))`,
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={showBackground ? backgroundVariants : variants[direction]}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: inView ? delay : 0 
      }}
      className="relative"
      style={!showBackground ? {} : {
        minHeight: "100vh",
        background: inView 
          ? "transparent" 
          : `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(88, 28, 135, 0.95), rgba(15, 23, 42, 0.95))`
      }}
    >
      {showBackground && (
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ 
            background: `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(88, 28, 135, 0.95), rgba(15, 23, 42, 0.95))` 
          }}
          animate={{ 
            background: inView 
              ? "transparent" 
              : `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(88, 28, 135, 0.95), rgba(15, 23, 42, 0.95))`
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}
      
      <motion.div
        variants={variants[direction]}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: inView ? delay : 0 
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
