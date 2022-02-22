import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { Chip, ChipAmount, Chips, SeatArea } from "./styles";

export default function PlayerSeat({
  buttonsBounds,
  getSeatArr,
  setSeatArr,
  setButtonsWidth,
  setActiveSeat,
  activeSeat,
  seatNum,
}) {
  const [seatAreaRef, seatAreaBounds] = useMeasure();

  useEffect(() => {
    setButtonsWidth((seatAreaBounds.width + 40) * 5);
  }, [seatAreaBounds.width]); //eslint-disable-line

  const chipVariant = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: 0 - (seatAreaBounds.top - buttonsBounds.top * 2),
        x: ((seatAreaBounds.width + 40) * 5) / 2 - buttonsBounds.width,
      },
      visible: {
        y: 95,
        x: seatNum === 0 ? 25 : (seatAreaBounds.width + 40) * seatNum + 25,
        // y: seatAreaBounds.y + seatAreaBounds.height,
        // x: seatAreaBounds.x + seatAreaBounds.width / 6,
        opacity: 1,
      },
    }),
    [
      buttonsBounds.top,
      seatAreaBounds.width,
      seatNum,
      seatAreaBounds.top,
      buttonsBounds.width,
    ]
  );

  const chipsArr = getSeatArr(seatNum);

  const selected = useMemo(() => activeSeat === seatNum, [activeSeat, seatNum]);

  return (
    <>
      <SeatArea
        onClick={() => selected ? setActiveSeat(null) : setActiveSeat(seatNum)}
        selected={selected}
        ref={seatAreaRef}
      ></SeatArea>
      <Chips>
        {chipsArr.map((_, i) => (
          <Chip
            key={i}
            num={i}
            variants={chipVariant}
            initial="hidden"
            animate="visible"
            transition={{ type: "spring", damping: 20, duration: 0.7 }}
          >
            <ChipAmount>{i}</ChipAmount>
            <img src="/img/black-3d.svg" alt="" />
          </Chip>
        ))}
      </Chips>
    </>
  );
}