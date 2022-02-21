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
  4: {
    chips: [],
  },
};

export default function PokerTable() {
  const [buttonsRef, buttonsBounds] = useMeasure();

  const [activeSeat, setActiveSeat] = useState(null);

  const [seats, setSeats] = useState(initialState);

  const [buttonsWidth, setButtonsWidth] = useState();

  const getSeatArr = (num) => seats[num].chips;

  const _seats = [1, 2, 3, 4, 5];

  const playerSeatProps = {
    buttonsBounds,
    getSeatArr,
    activeSeat,
    setActiveSeat,
    setButtonsWidth,
  };

  const handleAddChip = () => {
    if (getSeatArr(activeSeat).length > 10) {
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

  return (
    <Container>
      <Buttons width={buttonsWidth}>
        <button
          ref={buttonsRef}
          disabled={activeSeat === null}
          onClick={handleAddChip}
        >
          Add
        </button>
        <button
          disabled={activeSeat === null}
          onClick={() => {
            setSeats((prev) => ({
              ...prev,
              [activeSeat]: {
                ...prev[activeSeat],
                chips: [...prev[activeSeat].chips.slice(0, -1)],
              },
            }));
          }}
        >
          Remove
        </button>
      </Buttons>

      <PlayerSeats>
        {_seats.map((seat, i) => (
          <PlayerSeat seatNum={i} {...playerSeatProps} key={seat} />
        ))}
      </PlayerSeats>
    </Container>
  );
}
