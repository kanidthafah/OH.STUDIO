export function slideInFromBottom(delay: number): unknown {
  return {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.7,
      },
    },
  };
}
