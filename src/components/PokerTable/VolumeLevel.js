import { MinusIcon, PlusIcon, VolumeUpIcon } from "@heroicons/react/outline";
import React, { useMemo } from "react";
import { useTable } from "../../context/TableContext";
import { Volume, VolumeBtn, VolumeLevelContainer } from "./styles";

const VolumeLevel = () => {
  const {
    sound: { volume, volumeUp, volumeDown },
  } = useTable();
  const volumeIsOff = useMemo(
    () => volume.toFixed(1).toString() === "0.0",
    [volume]
  );
  const volumeIsMax = useMemo(
    () => volume.toFixed(1).toString() === "1.0",
    [volume]
  );

  return (
    <VolumeLevelContainer>
      <VolumeBtn onClick={volumeDown} disabled={volumeIsOff}>
        <MinusIcon />
      </VolumeBtn>
      <Volume>
        <VolumeUpIcon />

        {volume.toFixed(1)}
      </Volume>

      <VolumeBtn onClick={volumeUp} disabled={volumeIsMax}>
        <PlusIcon />
      </VolumeBtn>
    </VolumeLevelContainer>
  );
};

export default VolumeLevel;
