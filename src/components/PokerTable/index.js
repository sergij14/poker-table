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
import { useTable } from "../../context/TableContext";
import ErrorMessage from "./ErrorMessage";

export default function PokerTable() {
  const {
    handleAddChip,
    handleRemoveChip,
    activeSeat,
    getSeatArr,
    _seats,
    clickAllowed,
  } = useTable();

  return (
    <Container>
      <Background src="img/bg.jpg" />
      <Buttons>
        <ButtonsGroup>
          <PrimaryButton clickAllowed={clickAllowed} onClick={handleAddChip}>
            <PlusCircleIcon />
            add
          </PrimaryButton>
          <PrimaryButton
            clickAllowed={clickAllowed}
            disabled={activeSeat === null || !getSeatArr(activeSeat).length}
            onClick={handleRemoveChip}
          >
            <MinusCircleIcon />
            remove
          </PrimaryButton>
          <ErrorMessage />
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
