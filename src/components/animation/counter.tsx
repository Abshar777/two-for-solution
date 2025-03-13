import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

export default function Counter({ value }: { value: number }) {
  return (
    <div
      style={{ fontSize }}
      className="flex p-0 overflow-hidden rounded text-white leading-none"
    >
      <Digit place={100} value={value} />
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
    </div>
  );
}

function Digit({ place, value }: { place: number; value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const valueRoundedToPlace = Math.floor(value / place);

  const animatedValue = useSpring(0, {
    stiffness: 100,
    damping: 15,
  });

  useEffect(() => {
    if (inView) {
      animatedValue.set(valueRoundedToPlace);
    }
  }, [animatedValue, valueRoundedToPlace, inView]);

  return (
    <div ref={ref} style={{ height }} className="relative w-[1ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: any; number: number }) {
  const y = useTransform(mv, (latest:number) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center text-white font-bold justify-center"
    >
      {number}
    </motion.span>
  );
}