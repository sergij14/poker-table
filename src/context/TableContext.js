import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import useSound from "use-sound";
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

  // App error
  const [error, setError] = useState();

  // Volume level
  const [volume, setVolume] = useState(1);

  const volumeDown = () => {
    playClick();
    setVolume((prev) => prev - 0.1);
  };
  const volumeUp = () => {
    playClick();
    setVolume((prev) => prev + 0.1);
  };

  // Sounds
  const [playAddChip] = useSound(addChip, { volume });
  const [playRemoveChip] = useSound(removeChip, { volume });
  const [playWarning] = useSound(warning, { volume });
  const [playClick] = useSound(click, { volume });

  // Getting seats
  const getSeatArr = useCallback((num) => seats[num].chips, [seats]);
  const _seats = [1, 2, 3, 4];

  // Selecting a seat
  const handleSeatSelect = (seatNum) => {
    if (seatNum === activeSeat) {
      setActiveSeat(null);
    } else {
      playClick();
      setActiveSeat(seatNum);
    }
  };

  useEffect(() => {
    if (activeSeat != null) {
      setError(undefined);
    }
  }, [activeSeat]);

  // Chip methods
  const handleAddChip = () => {
    if (activeSeat === null) {
      return setError("Please select a seat");
    } else {
      setError(undefined);
    }
    if (getSeatArr(activeSeat).length >= 10) {
      return setError("Chip limit exceeded");
    } else {
      setError(undefined);
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

    playAddChip();
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
    playRemoveChip();
  };

  // Context obj
  const contextProps = {
    gameSeats: {
      getSeatArr,
      activeSeat,
      setActiveSeat,
      seats,
      _seats,
    },
    seatMethods: {
      handleRemoveChip,
      handleAddChip,
      handleSeatSelect,
    },
    errors: {
      error,
      setError,
      playWarning,
    },
    sound: {
      volume,
      volumeDown,
      volumeUp,
    },
  };

  return (
    <TableContext.Provider value={contextProps}>
      {children}
    </TableContext.Provider>
  );
}

export default TableContextProvider;
