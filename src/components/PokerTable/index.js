import React from "react";
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
import { useTable } from "../../contexts/TableContext";

export default function PokerTable() {
  const {
    handleAddChip,
    handleRemoveChip,
    activeSeat,
    getSeatArr,
    _seats,
  } = useTable();

  return (
    <Container>
      <Background src="img/bg.jpg" />
      <Buttons>
        <ButtonsGroup>
          <PrimaryButton onClick={handleAddChip}>
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
          <PlayerSeat seatNum={i} key={seat} />
        ))}
      </PlayerSeats>
    </Container>
  );
}
