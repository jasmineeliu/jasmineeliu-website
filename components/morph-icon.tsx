import { motion, useMotionValue, animate } from "framer-motion";
import { interpolate } from "flubber";
import { useEffect, useMemo } from "react";

type MorphIconProps = {
  active: boolean;
  from: string;
  to: string;
  size?: number;
  duration?: number;
  className?: string;
};

export default function MorphIcon({
  active,
  from,
  to,
  size = 18,
  duration = 0.6,
  className,
}: MorphIconProps) {
  const path = useMotionValue(from);
  const progress = useMotionValue(0);

  // Create interpolator once
  const interpolator = useMemo(
    () => interpolate(from, to, { maxSegmentLength: 0.1 }),
    [from, to]
  );

  useEffect(() => {
    const controls = animate(progress, active ? 1 : 0, {
      duration,
      ease: "easeInOut",
      onUpdate: (latest) => {
        path.set(interpolator(latest));
      },
    });

    return () => controls.stop();
  }, [active, duration, interpolator, path, progress]);

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 480 483"
      className={className}
    >
      <motion.path
        d={path}
        fill="#0D0B21"
        stroke="#0D0B21"
      />
    </motion.svg>
  );
}