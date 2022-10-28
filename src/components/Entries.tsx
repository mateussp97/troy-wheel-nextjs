import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import React, { ChangeEvent, Fragment, useState } from "react";
import { ListArrayAtom } from "../atoms/WheelAtom";

export default function Entries() {
  const toast = useToast();
  const [list, setList] = useAtom(ListArrayAtom);

  function shuffle(array: string[]) {
    const newArray = [...array];
    const length = newArray.length;

    for (let start = 0; start < length; start++) {
      const randomPosition = Math.floor(
        (newArray.length - start) * Math.random()
      );
      const randomItem = newArray.splice(randomPosition, 1);

      newArray.push(...randomItem);
    }

    return newArray;
  }

  function handleShuffle() {
    setList(shuffle(list));
    toast({
      title: "Successfully shuffled list",
      description: "Your list has been successfully shuffled",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  }

  function handleRemoveDuplicate() {
    const filteredList = Array.from(new Set(list));
    if (list.length === filteredList.length) {
      return;
    }
    setList(filteredList);
    toast({
      title: "Successfully removed items",
      description: "Your list does not contain any more duplicate items",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  }

  function onChangeTextarea(e: ChangeEvent<HTMLTextAreaElement>) {
    const newName = e.target.value.split("\n");
    setList(newName);
  }

  return (
    <Fragment>
      <Flex w="100%" gridGap="1rem">
        <Button onClick={handleShuffle} w="100%">
          Shuffle
        </Button>
        <Button onClick={handleRemoveDuplicate} w="100%">
          Remove duplicated
        </Button>
      </Flex>

      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="tel" placeholder="Phone number" />
      </InputGroup>

      <Textarea
        rows={16}
        value={list?.join("\n")}
        onChange={(e) => onChangeTextarea(e)}
      />
    </Fragment>
  );
}
