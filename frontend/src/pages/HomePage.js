import React from 'react'
import { Container, TabList, Tab, TabPanels, TabPanel, Tabs, Text, Box } from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {
 const history = useHistory();

 useEffect(() => {
   const user = JSON.parse(localStorage.getItem("userInfo"));

   if (user) history.push("/chats");
 }, [history]);



  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={2}
        bg="white"
        w="100%"
        m="30px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="5xl" fontFamily="Work sans" color={'orange.500'} borderColor={'red'} border={'7px solid'} textAlign={"center"} fontWeight={'bold'} >
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab _selected={{ color: "white", bg: "orange.500" }}>Login</Tab>
            <Tab _selected={{ color: "white", bg: "orange.500" }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage
