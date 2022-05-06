import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import PlayerSeat from "./PlayerSeat";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";
import {
  Buttons,
  Container,
  PlayerSeats,
  ButtonsGroup,
  PrimaryButton,
  Background,
} from "./styles";
import { toast } from "react-toastify";

const initialState = {
  0: {
    chips: [],
  },
  1: {
    chips: [],
  },
  2: {
    chips: [],
  },
  3: {
    chips: [],
  },
};

export default function PokerTable() {

  const [activeSeat, setActiveSeat] = useState(null);
  const [seats, setSeats] = useState(initialState);

  const getSeatArr = (num) => seats[num].chips;
  const _seats = [1, 2, 3, 4];

  const playerSeatProps = {
    getSeatArr,
    activeSeat,
    setActiveSeat,
  };

  const handleAddChip = () => {
    if (getSeatArr(activeSeat).length > 30) {
      toast.warn("Chip limit exceeded");
      return;
    }
    setSeats((prev) => ({
      ...prev,
      [activeSeat]: {
        ...prev[activeSeat],
        chips: [...prev[activeSeat].chips, `${Math.random()}`],
      },
    }));
  };

  const handleRemoveChip = () => {
    setSeats((prev) => ({
      ...prev,
      [activeSeat]: {
        ...prev[activeSeat],
        chips: [...prev[activeSeat].chips.slice(0, -1)],
      },
    }));
  };

  const isSeatSelected = useMemo(() => activeSeat === null, [activeSeat]);

  useEffect(() => {
    isSeatSelected && toast.warn('Please select a seat')
  }, [isSeatSelected])

  return (
    <Container>
      <Background src="img/bg.jpg" />
      <Buttons>
        <ButtonsGroup>
          <PrimaryButton
            disabled={activeSeat === null}
            onClick={handleAddChip}
          >
            <PlusCircleIcon />
            add
          </PrimaryButton>
          <PrimaryButton
            disabled={activeSeat === null || !getSeatArr(activeSeat).length}
            onClick={handleRemoveChip}
          >
            <MinusCircleIcon />
            remove
          </PrimaryButton>
        </ButtonsGroup>
      </Buttons>

      <PlayerSeats>
        {_seats.map((seat, i) => (
          <PlayerSeat seatNum={i} {...playerSeatProps} key={seat} />
        ))}
      </PlayerSeats>
    </Container>
  );
}
