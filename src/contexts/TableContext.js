import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import useSound from "../hooks/useSound";
import addChip from "../assets/sound/add-chip.mp3";
import removeChip from "../assets/sound/remove-chip.mp3";
import warning from "../assets/sound/warning.mp3";

const initialSeats = {
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

const defaultContext = {
  getSeatArr: undefined,
  activeSeat: undefined,
  setActiveSeat: undefined,
  isSeatSelected: undefined,
  handleRemoveChip: undefined,
  handleAddChip: undefined,
  seats: undefined,
  _seats: undefined,
};

const TableContext = createContext(defaultContext);

export const useTable = () => {
  return useContext(TableContext);
};

function TableContextProvider({ children }) {
  const [activeSeat, setActiveSeat] = useState(null);
  const [seats, setSeats] = useState(initialSeats);
  const addChipSound = useSound(addChip);
  const removeChipSound = useSound(removeChip);
  const warningSound = useSound(warning);

  const getSeatArr = (num) => seats[num].chips;
  const _seats = [1, 2, 3, 4];

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
    addChipSound.play();
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
    removeChipSound.play();
  };

  const contextProps = {
    getSeatArr,
    activeSeat,
    setActiveSeat,
    handleRemoveChip,
    handleAddChip,
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
