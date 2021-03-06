import { useMemo } from "react";

export function useChipVariants(bounds, seatNum) {
  const chipVariant = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: 50,
        x: 0,
      },
      visible: {
        y: seatNum === 0 || seatNum === 3 ? 135 : 95,
        x: bounds.width / 5,
        opacity: 1,
      },
    }),
    [bounds, seatNum]
  );
  return { chipVariant };
}
