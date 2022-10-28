import {
  Button,
  Flex,
  ListItem,
  OrderedList,
  useToast,
} from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";
import React, { Fragment } from "react";
import { WinnersArrayAtom } from "../atoms/WheelAtom";

export default function Results() {
  const [winnersArray, setWinnersArray] = useAtom(WinnersArrayAtom);
  const toast = useToast();

  function handleClearWinnersArray() {
    setWinnersArray([]);

    toast({
      title: "Successfully cleaned list",
      description: "Your list of winners has been successfully cleared!",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  }

  return (
    <Fragment>
      <Button onClick={handleClearWinnersArray}>Clear the list</Button>
      <OrderedList>
        {winnersArray.map((winner) => (
          <ListItem>{winner}</ListItem>
        ))}
      </OrderedList>
    </Fragment>
  );
}
