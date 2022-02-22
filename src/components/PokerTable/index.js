import React, { useLayoutEffect } from "react";
import { useState } from "react";
import useMeasure from "react-use-measure";
import PlayerSeat from "./PlayerSeat";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";
import {
  Buttons,
  Container,
  PlayerSeats,
  ButtonsGroup,
  PrimaryButton,
  SeatMessage,
  Background,
} from "./styles";
import { toast } from "react-toastify";
import { useWindowSize } from "rooks";

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
  const [buttonsRef, buttonsBounds] = useMeasure();

  const { innerWidth, innerHeight } = useWindowSize();
  const [activeSeat, setActiveSeat] = useState(null);
  const [buttonsWidth, setButtonsWidth] = useState();
  const [seats, setSeats] = useState(initialState);
  const [playerWidth, setPlayerWidth] = useState(0);
  const [playerHeight, setPlayerHeight] = useState(0);

  const getSeatArr = (num) => seats[num].chips;
  const _seats = [1, 2, 3, 4];

  useLayoutEffect(() => {
    if (innerWidth && innerHeight) {
      if (innerHeight > innerWidth) {
        setPlayerHeight((9 / 16) * innerWidth);
        setPlayerWidth(innerWidth);
      } else {
        setPlayerHeight(innerHeight);
        setPlayerWidth((16 / 9) * innerHeight);
      }
    }
  }, [innerWidth, innerHeight, setPlayerHeight, setPlayerWidth]);

  const playerSeatProps = {
    buttonsBounds,
    getSeatArr,
    activeSeat,
    setActiveSeat,
    setButtonsWidth,
  };

  const containerProps = {
    playerHeight, playerWidth
  }

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

  return (
    <Container {...containerProps}>
      <Background src="img/bg_3.jpg" />
      <Buttons width={buttonsWidth}>
        <ButtonsGroup>
          <PrimaryButton
            ref={buttonsRef}
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

      {activeSeat === null && <SeatMessage>Please select a seat</SeatMessage>}

      <PlayerSeats>
        {_seats.map((seat, i) => (
          <PlayerSeat seatNum={i} {...playerSeatProps} key={seat} />
        ))}
      </PlayerSeats>
    </Container>
  );
}
