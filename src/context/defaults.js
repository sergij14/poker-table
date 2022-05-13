export const initialSeats = {
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

export const defaultContext = {
  gameSeats: {
    getSeatArr: undefined,
    activeSeat: undefined,
    setActiveSeat: undefined,
    isSeatSelected: undefined,
    seats: undefined,
    _seats: undefined,
  },
  seatMethods: {
    handleRemoveChip: undefined,
    handleAddChip: undefined,
    handleSeatSelect: undefined,
  },
  errors: {
    error: undefined,
    setError: undefined,
    playWarning: undefined,
  },
  sound: {
    volume: undefined,
    volumeDown: undefined,
    volumeUp: undefined,
  },
};
