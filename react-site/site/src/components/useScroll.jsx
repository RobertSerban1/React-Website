import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export const useScroll = () => {
  const control = useAnimation();
  const [element, view] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (view) {
      control.start("show");
    } else {
      control.start("hidden");
    }
  }, [view, control]);

  return [element, control];
};
