import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

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

  const getSeatArr = (num) => seats[num].chips;
  const _seats = [1, 2, 3, 4];

  const handleAddChip = () => {
    if (activeSeat === null) {
      return toast.warn("Please select a seat");
    }
    if (getSeatArr(activeSeat).length > 30) {
      return toast.warn("Chip limit exceeded");
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
    setSeats((prev) => {
      if(getSeatArr(activeSeat).length === 1){
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
