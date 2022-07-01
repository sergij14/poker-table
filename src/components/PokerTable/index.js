import React, { useMemo } from "react";
import PlayerSeat from "./PlayerSeat";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";
import {
  Buttons,
  Container,
  PlayerSeats,
  ButtonsGroup,
  PrimaryButton,
  Background,
  GameInfo,
  GameInfoInner,
} from "./styles";
import { useTable } from "../../context/TableContext";
import ErrorMessage from "./ErrorMessage";
import VolumeLevel from "./VolumeLevel";
import { useWindowSize } from "rooks";

export default function PokerTable() {
  const {
    seatMethods: { handleAddChip, handleRemoveChip },
    gameSeats: { activeSeat, getSeatArr, _seats },
    errors: { error },
  } = useTable();
  const { innerHeight } = useWindowSize();

  const removeDisabled = useMemo(
    () => activeSeat === null || !getSeatArr(activeSeat).length,
    [activeSeat, getSeatArr]
  );

  return (
    <Container innerHeight={innerHeight}>
      <Background src="img/bg.jpg" />
      <Buttons>
        <ButtonsGroup>
          <PrimaryButton onClick={handleAddChip}>
            <PlusCircleIcon />
            add
          </PrimaryButton>
          <PrimaryButton disabled={removeDisabled} onClick={handleRemoveChip}>
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

      <GameInfo>
        <GameInfoInner>
          {error && <ErrorMessage />}
          <VolumeLevel />
        </GameInfoInner>
      </GameInfo>
    </Container>
  );
}
