import React from "react";
import { useMemo } from "react";
import useMeasure from "react-use-measure";
import { useTable } from "../../context/TableContext";
import { useChipVariants } from "./hooks/useChipVariant";
import { Chip, ChipAmount, Chips, SeatArea } from "./styles";

export default function PlayerSeat({ seatNum }) {
  const [seatAreaRef, seatAreaBounds] = useMeasure();
  const { getSeatArr, activeSeat, handleSeatSelect } = useTable();
  const { chipVariant } = useChipVariants(seatAreaBounds, seatNum);

  const chipsArr = useMemo(() => getSeatArr(seatNum), [getSeatArr, seatNum]);
  const selected = useMemo(() => activeSeat === seatNum, [activeSeat, seatNum]);

  return (
    <SeatArea
      onClick={() => handleSeatSelect(seatNum)}
      selected={selected}
      num={seatNum}
      ref={seatAreaRef}
    >
      <Chips num={seatNum} onClick={() => handleSeatSelect(seatNum)}>
        {chipsArr.map((_, i) => (
          <Chip
            key={i}
            num={i}
            variants={chipVariant}
            initial="hidden"
            animate="visible"
            transition={{ type: "spring", damping: 20, duration: 0.7 }}
          >
            <ChipAmount>{i + 1}</ChipAmount>
            <img src="/img/black-3d.svg" alt="" />
          </Chip>
        ))}
      </Chips>
    </SeatArea>
  );
}
