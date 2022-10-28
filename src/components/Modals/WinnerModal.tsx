import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React, { useRef } from "react";
import {
  IsWinnerModalOpenAtom,
  ListArrayAtom,
  WinnersArrayAtom,
} from "../../atoms/WheelAtom";

export default function WinnerModal() {
  const cancelRef = useRef(null);
  const toast = useToast();

  const [isOpen, setIsOpen] = useAtom(IsWinnerModalOpenAtom);

  function onClose() {
    setIsOpen(false);
  }

  const winnersArray = useAtomValue(WinnersArrayAtom);
  const setList = useSetAtom(ListArrayAtom);

  const lastWinnerIndex = winnersArray.length - 1;
  const lastWinnerName = winnersArray[lastWinnerIndex];

  function handleRemoveCurrentWinner() {
    setList((currentArray) =>
      currentArray.filter((currentItem) => currentItem !== lastWinnerName)
    );

    toast({
      title: "Deleted successfully",
      description: `The winner ${lastWinnerName} has been deleted from the list.`,
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    onClose();
  }

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent textAlign="center">
        <AlertDialogCloseButton />
        <AlertDialogHeader>
          We have a winner: {lastWinnerName}
        </AlertDialogHeader>

        <AlertDialogBody>
          Click the buttons below to close the modal or remove {lastWinnerName}{" "}
          from the list:
        </AlertDialogBody>

        <AlertDialogFooter
          w="100%"
          display="flex"
          justifyContent="center"
          gridGap="1rem"
        >
          <Button w="8rem" ref={cancelRef} onClick={onClose}>
            Close
          </Button>
          <Button
            w="8rem"
            colorScheme="red"
            onClick={handleRemoveCurrentWinner}
          >
            Remove
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
