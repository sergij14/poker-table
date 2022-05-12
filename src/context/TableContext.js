import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import useSound from "../hooks/useSound";
import addChip from "../assets/sound/add-chip.mp3";
import removeChip from "../assets/sound/remove-chip.mp3";
import warning from "../assets/sound/warning.mp3";
import click from "../assets/sound/click.mp3";
import { defaultContext, initialSeats } from "./defaults";

const TableContext = createContext(defaultContext);

export const useTable = () => {
  return useContext(TableContext);
};

function TableContextProvider({ children }) {
  // Seat State
  const [activeSeat, setActiveSeat] = useState(null);
  const [seats, setSeats] = useState(initialSeats);

  // Sound refs
  const addChipSound = useSound(addChip);
  const removeChipSound = useSound(removeChip);
  const warningSound = useSound(warning);
  const selectSeatSound = useSound(click);

  // Getting seats
  const getSeatArr = (num) => seats[num].chips;
  const _seats = [1, 2, 3, 4];

  // Click allowed
  const [clickAllowed, setClickAllowed] = useState(true);

  // Selecting a seat
  const handleSeatSelect = (seatNum) => {
    if (seatNum === activeSeat) {
      setActiveSeat(null);
    } else {
      selectSeatSound.play();
      setActiveSeat(seatNum);
    }
  };

  // Chip methods
  const handleAddChip = () => {
    if (activeSeat === null) {
      warningSound.play();
      return toast.warn("Please select a seat");
    }
    if (getSeatArr(activeSeat).length > 30) {
      warningSound.play();
      return toast.warn("Chip limit exceeded");
    }
    setSeats((prev) => {
      return {
        ...prev,
        [activeSeat]: {
          ...prev[activeSeat],
          chips: [...prev[activeSeat].chips, `${Math.random()}`],
        },
      };
    });
    setClickAllowed(false);
    addChipSound.play(() => setClickAllowed(true));
  };

  const handleRemoveChip = () => {
    setSeats((prev) => {
      if (getSeatArr(activeSeat).length === 1) {
        setActiveSeat(null);
      }
      return {
        ...prev,
        [activeSeat]: {
          ...prev[activeSeat],
          chips: [...prev[activeSeat].chips.slice(0, -1)],
        },
      };
    });
    setClickAllowed(false);
    removeChipSound.play(() => setClickAllowed(true));
  };

  // Context obj
  const contextProps = {
    getSeatArr,
    activeSeat,
    setActiveSeat,
    handleRemoveChip,
    handleAddChip,
    handleSeatSelect,
    clickAllowed,
    seats,
    _seats,
  };

  return (
    <TableContext.Provider value={contextProps}>
      {children}
    </TableContext.Provider>
  );
}

export default TableContextProvider;
