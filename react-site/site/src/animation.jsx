export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.75 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "tween", ease: "easeOut", duration: 1, delay: 0.5 },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1,
      delay: 0.5,
    },
  },
};
