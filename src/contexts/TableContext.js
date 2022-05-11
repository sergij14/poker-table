import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import useSound from "../hooks/useSound";
import addChipSound from "../assets/sound/add-chip.mp3";
import removeChipSound from "../assets/sound/remove-chip.mp3";

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
  const add = useSound(addChipSound);
  const remove = useSound(removeChipSound);

  const getSeatArr = (num) => seats[num].chips;
  const _seats = [1, 2, 3, 4];

  const playChipSound = (ref) => {
    if (ref?.current) {
      ref.current.play();
    }
  };


  const handleAddChip = () => {
    if (activeSeat === null) {
      return toast.warn("Please select a seat");
    }
    if (getSeatArr(activeSeat).length > 30) {
      return toast.warn("Chip limit exceeded");
    }
    setSeats((prev) => {
      return {
        ...prev,
        [activeSeat]: {
          ...prev[activeSeat],
          chips: [...prev[activeSeat].chips, `${Math.random()}`],
        },
      }
    });
    playChipSound(add.soundRef);
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
    playChipSound(remove.soundRef);
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
