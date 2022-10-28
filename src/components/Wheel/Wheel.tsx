import { Flex, Heading } from "@chakra-ui/react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
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
    <Flex
      w="100%"
      padding="1rem"
      flexDirection="column"
      alignItems="center"
      justify="start"
      gridGap="1rem"
    >
      <Heading>Click to spin</Heading>
      <SC.WheelContainer>
        <SC.WheelWrapper
          className={randomWinnerIndex !== null ? "spinning" : ""}
          onClick={handleOnClickSpin}
          // @ts-ignore
          style={wheelWrapperVars}
        >
          {listArray.map((item, index) => (
            // @ts-ignore
            <SC.WheelItem style={{ "--item-nb": index }} key={index}>
              {item}
            </SC.WheelItem>
          ))}
        </SC.WheelWrapper>
      </SC.WheelContainer>
    </Flex>
  );
}
