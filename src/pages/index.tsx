import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import type { NextPage } from "next";
import { Fragment } from "react";
import {
  IsWinnerModalOpenAtom,
  NameArrayAtom,
  WinnersArrayAtom,
} from "../atoms/WheelAtom";
import Entries from "../components/Entries";
import WinnerModal from "../components/Modals/WinnerModal";
import Results from "../components/Results";
import Wheel from "../components/Wheel/Wheel";

const Home: NextPage = () => {
  const listArray = useAtomValue(NameArrayAtom);
  const setIsOpen = useSetAtom(IsWinnerModalOpenAtom);
  const [winnersArray, setWinnersArray] = useAtom(WinnersArrayAtom);

  const onFinished = (winner: string) => {
    setWinnersArray((prevArray) => [...prevArray, winner]);
    setIsOpen(true);
  };

  return (
    <Fragment>
      <Flex w="100%" h="100%" flexDirection="column">
        <Box
          w="100%"
          h="4rem"
          borderBottom="1px solid"
          borderColor="gray.200"
        />
        <Flex
          w="100%"
          h="calc(100vh - 4rem)"
          display="grid"
          gridTemplateColumns="0.5fr 1fr 0.5fr"
        >
          <Flex w="100%" />

          <Wheel />

          {/* <NewWheel
            onFinished={(winner: string) => onFinished(winner)}
            primaryColor="black"
            // primaryColoraround="#ffffffb4"
            contrastColor="white"
            buttonText="Spin"
            isOnlyOnce={false}
            size={300}
            upDuration={50}
            downDuration={1000}
          /> */}

          <Flex w="100%" h="100%" p="1rem">
            <Tabs w="100%" size="md" variant="enclosed">
              <TabList>
                <Tab>
                  Entries
                  <Tag ml="0.5rem" size="sm" borderRadius="full">
                    <TagLabel>{listArray.length}</TagLabel>
                  </Tag>
                </Tab>
                <Tab>
                  Results
                  <Tag ml="0.5rem" size="sm" borderRadius="full">
                    <TagLabel>{winnersArray.length}</TagLabel>
                  </Tag>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel
                  w="100%"
                  px="0"
                  display="flex"
                  flexDirection="column"
                  gridGap="1rem"
                >
                  <Entries />
                </TabPanel>
                <TabPanel
                  w="100%"
                  px="0"
                  display="flex"
                  flexDirection="column"
                  gridGap="1rem"
                >
                  <Results />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
      <WinnerModal />
    </Fragment>
  );
};

export default Home;
