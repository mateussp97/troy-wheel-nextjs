import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React, { useState } from "react";
import {
  IsSpinningAtom,
  IsWinnerModalOpenAtom,
  ListArrayAtom,
  WinnersArrayAtom,
} from "../../atoms/WheelAtom";
import * as SC from "./WheelStyled";

export default function Wheel() {
  const setIsOpen = useSetAtom(IsWinnerModalOpenAtom);
  const listArray = useAtomValue(ListArrayAtom);
  const [winnersArray, setWinnersArray] = useAtom(WinnersArrayAtom);
  const [isSpinning, setIsSpinning] = useAtom(IsSpinningAtom);
  const [randomWinnerIndex, setRandomWinnerIndex] = useState<number | null>(
    null
  );

  function handleSelectResultEventHandler(winnerIndex: number) {
    if (listArray.length > 0 && isSpinning !== true) {
      // set this state to disable tab and wheel click when spinning
      setIsSpinning(true);
      setTimeout(() => {
        setIsSpinning(false);
        setWinnersArray(winnersArray.concat(listArray[winnerIndex]));
        setIsOpen(true);
      }, 5000);
    }
  }

  const wheelWrapperVars = {
    "--nb-item": listArray.length,
    "--selected-item": randomWinnerIndex,
  };

  function handleOnClickSpin() {
    if (listArray.length === 0 || isSpinning === true) {
      console.log("Can't spin a empty wheel or spinning wheel");
      return;
    }
    if (randomWinnerIndex === null) {
      const winnerIndex = Math.floor(Math.random() * listArray.length);
      setRandomWinnerIndex(winnerIndex);
      handleSelectResultEventHandler(winnerIndex);
    } else {
      setRandomWinnerIndex(null);
    }
  }

  return (
    <div>
      <h1 className="text-center">Click to spin</h1>
      <SC.WheelContainer>
        <SC.WheelWrapper
          className={randomWinnerIndex !== null ? "spinning" : ""}
          onClick={handleOnClickSpin}
          style={wheelWrapperVars}
        >
          {listArray.map((item, index) => (
            <SC.WheelItem style={{ "--item-nb": index }} key={index}>
              {item}
            </SC.WheelItem>
          ))}
        </SC.WheelWrapper>
      </SC.WheelContainer>
    </div>
  );
}
